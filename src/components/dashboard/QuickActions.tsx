import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  FileText, 
  CreditCard, 
  TestTube, 
  Phone, 
  Calculator 
} from "lucide-react";

const QuickActions = () => {
  const actions = [
    {
      icon: MapPin,
      title: "मंडी लोकेटर",
      subtitle: "Find Nearest Mandi",
      color: "bg-blue-500",
    },
    {
      icon: FileText,
      title: "बिल अपलोड",
      subtitle: "Upload Invoice",
      color: "bg-green-500",
    },
    {
      icon: CreditCard,
      title: "सब्सिडी चेक",
      subtitle: "Check Subsidy",
      color: "bg-purple-500",
    },
    {
      icon: TestTube,
      title: "मिट्टी जांच",
      subtitle: "Soil Test Booking",
      color: "bg-orange-500",
    },
    {
      icon: Phone,
      title: "हेल्पलाइन",
      subtitle: "Farmer Helpline",
      color: "bg-red-500",
    },
    {
      icon: Calculator,
      title: "फसल कैल्कुलेटर",
      subtitle: "Crop Calculator",
      color: "bg-indigo-500",
    },
  ];

  return (
    <Card className="shadow-agricultural">
      <CardHeader className="pb-3">
        <CardTitle className="text-agricultural-green text-lg">
          त्वरित सेवाएं (Quick Actions)
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {actions.map((action, index) => (
            <Button
              key={index}
              variant="outline"
              className="h-auto p-4 flex flex-col items-center gap-2 hover:shadow-agricultural transition-all duration-200"
            >
              <div className={`p-2 rounded-full ${action.color} text-white`}>
                <action.icon className="h-5 w-5" />
              </div>
              <div className="text-center">
                <p className="font-medium text-xs">{action.title}</p>
                <p className="text-xs text-muted-foreground">{action.subtitle}</p>
              </div>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickActions;