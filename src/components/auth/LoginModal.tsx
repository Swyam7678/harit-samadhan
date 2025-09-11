import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Shield, User, MapPin, Sprout } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (userProfile: any) => void;
}

const LoginModal = ({ isOpen, onClose, onLogin }: LoginModalProps) => {
  const [step, setStep] = useState<'phone' | 'otp' | 'profile'>('phone');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [profile, setProfile] = useState({
    name: '',
    village: '',
    farmSize: '',
    primaryCrops: '',
    language: 'hi'
  });
  const { toast } = useToast();

  const sendOTP = () => {
    if (phoneNumber.length === 10) {
      // Simulate OTP sending
      toast({
        title: "OTP भेजा गया",
        description: `आपके मोबाइल नंबर ${phoneNumber} पर OTP भेजा गया है`,
      });
      setStep('otp');
    } else {
      toast({
        title: "गलत नंबर",
        description: "कृपया 10 अंकों का मोबाइल नंबर डालें",
        variant: "destructive"
      });
    }
  };

  const verifyOTP = () => {
    if (otp === '1234') { // Mock verification
      setStep('profile');
    } else {
      toast({
        title: "गलत OTP",
        description: "कृपया सही OTP डालें",
        variant: "destructive"
      });
    }
  };

  const completeProfile = () => {
    if (profile.name && profile.village) {
      const userProfile = {
        phone: phoneNumber,
        ...profile,
        isAuthenticated: true
      };
      onLogin(userProfile);
      onClose();
      toast({
        title: "स्वागत है!",
        description: `${profile.name} जी, कृषि मित्र में आपका स्वागत है`,
      });
    } else {
      toast({
        title: "अधूरी जानकारी",
        description: "कृपया सभी आवश्यक जानकारी भरें",
        variant: "destructive"
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold text-agricultural-green">
            कृषि मित्र में लॉगिन करें
          </DialogTitle>
        </DialogHeader>

        {step === 'phone' && (
          <Card>
            <CardContent className="pt-6 space-y-4">
              <div className="text-center">
                <Phone className="h-12 w-12 text-agricultural-green mx-auto mb-4" />
                <h3 className="text-lg font-semibold">मोबाइल नंबर दर्ज करें</h3>
                <p className="text-sm text-muted-foreground">OTP भेजने के लिए</p>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">मोबाइल नंबर</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="10 अंकों का मोबाइल नंबर"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, '').slice(0, 10))}
                  className="text-center text-lg"
                />
              </div>
              
              <Button 
                onClick={sendOTP} 
                className="w-full bg-gradient-agricultural"
                disabled={phoneNumber.length !== 10}
              >
                OTP भेजें
              </Button>
            </CardContent>
          </Card>
        )}

        {step === 'otp' && (
          <Card>
            <CardContent className="pt-6 space-y-4">
              <div className="text-center">
                <Shield className="h-12 w-12 text-agricultural-green mx-auto mb-4" />
                <h3 className="text-lg font-semibold">OTP वेरिफाई करें</h3>
                <p className="text-sm text-muted-foreground">
                  {phoneNumber} पर भेजा गया 4 अंकों का OTP डालें
                </p>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="otp">OTP</Label>
                <Input
                  id="otp"
                  type="text"
                  placeholder="1234"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 4))}
                  className="text-center text-2xl tracking-widest"
                  maxLength={4}
                />
              </div>
              
              <div className="flex gap-2">
                <Button variant="outline" onClick={() => setStep('phone')} className="flex-1">
                  वापस
                </Button>
                <Button 
                  onClick={verifyOTP} 
                  className="flex-1 bg-gradient-agricultural"
                  disabled={otp.length !== 4}
                >
                  वेरिफाई करें
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {step === 'profile' && (
          <Card>
            <CardContent className="pt-6 space-y-4">
              <div className="text-center">
                <User className="h-12 w-12 text-agricultural-green mx-auto mb-4" />
                <h3 className="text-lg font-semibold">प्रोफाइल पूरी करें</h3>
              </div>
              
              <div className="space-y-3">
                <div>
                  <Label htmlFor="name">नाम *</Label>
                  <Input
                    id="name"
                    placeholder="आपका नाम"
                    value={profile.name}
                    onChange={(e) => setProfile({...profile, name: e.target.value})}
                  />
                </div>
                
                <div>
                  <Label htmlFor="village">गांव/शहर *</Label>
                  <Input
                    id="village"
                    placeholder="गांव या शहर का नाम"
                    value={profile.village}
                    onChange={(e) => setProfile({...profile, village: e.target.value})}
                  />
                </div>
                
                <div>
                  <Label htmlFor="farmSize">खेत का आकार (एकड़ में)</Label>
                  <Input
                    id="farmSize"
                    placeholder="जैसे: 2.5 एकड़"
                    value={profile.farmSize}
                    onChange={(e) => setProfile({...profile, farmSize: e.target.value})}
                  />
                </div>
                
                <div>
                  <Label htmlFor="crops">मुख्य फसलें</Label>
                  <Input
                    id="crops"
                    placeholder="जैसे: गेहूं, धान, मक्का"
                    value={profile.primaryCrops}
                    onChange={(e) => setProfile({...profile, primaryCrops: e.target.value})}
                  />
                </div>

                <div>
                  <Label htmlFor="language">भाषा</Label>
                  <select 
                    className="w-full p-2 border rounded-md"
                    value={profile.language}
                    onChange={(e) => setProfile({...profile, language: e.target.value})}
                  >
                    <option value="hi">हिंदी</option>
                    <option value="en">English</option>
                    <option value="mr">मराठी</option>
                    <option value="gu">ગુજરાતી</option>
                    <option value="pa">ਪੰਜਾਬੀ</option>
                  </select>
                </div>
              </div>
              
              <Button 
                onClick={completeProfile} 
                className="w-full bg-gradient-agricultural"
              >
                <Sprout className="h-4 w-4 mr-2" />
                शुरू करें
              </Button>
            </CardContent>
          </Card>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;