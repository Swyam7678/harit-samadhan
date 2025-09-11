import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Globe } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const languages = [
  { value: 'hi', label: 'हिंदी', flag: '🇮🇳' },
  { value: 'en', label: 'English', flag: '🇬🇧' },
  { value: 'mr', label: 'मराठी', flag: '🇮🇳' },
  { value: 'gu', label: 'ગુજરાતી', flag: '🇮🇳' },
  { value: 'pa', label: 'ਪੰਜਾਬੀ', flag: '🇮🇳' },
  { value: 'ta', label: 'தமிழ்', flag: '🇮🇳' },
  { value: 'te', label: 'తెలుగు', flag: '🇮🇳' },
  { value: 'kn', label: 'ಕನ್ನಡ', flag: '🇮🇳' },
];

const LanguageSwitcher = () => {
  const { user, updateProfile } = useAuth();
  const currentLanguage = user?.language || 'hi';

  const handleLanguageChange = (languageCode: string) => {
    updateProfile({ language: languageCode });
    
    // In a real app, this would trigger translation updates
    // For now, we'll show a simple notification
    const selectedLang = languages.find(lang => lang.value === languageCode);
    console.log(`Language changed to: ${selectedLang?.label}`);
  };

  return (
    <div className="flex items-center gap-2">
      <Globe className="h-4 w-4 text-muted-foreground" />
      <Select value={currentLanguage} onValueChange={handleLanguageChange}>
        <SelectTrigger className="w-auto min-w-[120px] border-none shadow-none">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {languages.map((lang) => (
            <SelectItem key={lang.value} value={lang.value}>
              <div className="flex items-center gap-2">
                <span>{lang.flag}</span>
                <span>{lang.label}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default LanguageSwitcher;