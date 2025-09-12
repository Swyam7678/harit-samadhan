import { useState } from "react";
import { Bell, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@/contexts/AuthContext";
import LoginModal from "@/components/auth/LoginModal";

const Header = () => {
  const { user, login } = useAuth();
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const handleLogin = (userProfile: any) => {
    login(userProfile);
    setIsLoginOpen(false);
  };

  const handleProfileClick = () => {
    if (!user) {
      setIsLoginOpen(true);
    }
  };

  return (
    <header className="bg-card border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-agricultural bg-clip-text text-transparent">
                किसान मित्र
              </h1>
              <p className="text-sm text-muted-foreground">Digital Farming Platform</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-3 w-3 bg-primary rounded-full text-xs flex items-center justify-center text-white">
                3
              </span>
            </Button>
            
            <div className="flex items-center space-x-2 cursor-pointer" onClick={handleProfileClick}>
              <Avatar className="h-8 w-8">
                <AvatarImage src="/api/placeholder/32/32" alt="Farmer" />
                <AvatarFallback className="bg-primary text-primary-foreground">
                  {user ? user.name?.slice(0, 2) : <User className="h-4 w-4" />}
                </AvatarFallback>
              </Avatar>
              <div className="hidden md:block">
                <p className="text-sm font-medium">{user ? user.name : "Guest User"}</p>
                <p className="text-xs text-muted-foreground">
                  {user ? user.village : "Click to login"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <LoginModal 
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onLogin={handleLogin}
      />
    </header>
  );
};

export default Header;