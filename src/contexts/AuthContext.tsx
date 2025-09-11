import React, { createContext, useContext, useState, useEffect } from 'react';

interface UserProfile {
  phone: string;
  name: string;
  village: string;
  farmSize: string;
  primaryCrops: string;
  language: string;
  isAuthenticated: boolean;
}

interface AuthContextType {
  user: UserProfile | null;
  login: (userProfile: UserProfile) => void;
  logout: () => void;
  updateProfile: (updates: Partial<UserProfile>) => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is stored in localStorage
    const savedUser = localStorage.getItem('krishimitra_user');
    if (savedUser) {
      try {
        const userData = JSON.parse(savedUser);
        setUser(userData);
      } catch (error) {
        console.error('Error parsing saved user data:', error);
        localStorage.removeItem('krishimitra_user');
      }
    }
    setIsLoading(false);
  }, []);

  const login = (userProfile: UserProfile) => {
    setUser(userProfile);
    localStorage.setItem('krishimitra_user', JSON.stringify(userProfile));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('krishimitra_user');
  };

  const updateProfile = (updates: Partial<UserProfile>) => {
    if (user) {
      const updatedUser = { ...user, ...updates };
      setUser(updatedUser);
      localStorage.setItem('krishimitra_user', JSON.stringify(updatedUser));
    }
  };

  const value = {
    user,
    login,
    logout,
    updateProfile,
    isLoading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};