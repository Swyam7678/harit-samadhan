import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Info, Megaphone, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Advisories = () => {
  const alerts = [
    {
      type: "warning",
      title: "Heavy Rain Alert",
      message: "भारी बारिश की संभावना - फसल की सुरक्षा करें",
      time: "2 hours ago",
      department: "IMD",
      priority: "High"
    },
    {
      type: "info", 
      title: "PM-KISAN Payment",
      message: "अगली किस्त 15 दिसंबर को जारी होगी",
      time: "1 day ago",
      department: "Agriculture Ministry",
      priority: "Medium"
    },
    {
      type: "success",
      title: "Subsidy Approved",
      message: "आपकी ट्रैक्टर सब्सिडी स्वीकृत हो गई है",
      time: "3 days ago", 
      department: "State Govt",
      priority: "Medium"
    },
    {
      type: "announcement",
      title: "New Scheme Launch",
      message: "फसल बीमा के लिए नई योजना शुरू",
      time: "1 week ago",
      department: "PMFBY",
      priority: "Low"
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case "warning":
        return <AlertTriangle className="h-4 w-4 text-amber-600" />;
      case "info":
        return <Info className="h-4 w-4 text-blue-600" />;
      case "success":
        return <CheckCircle className="h-4 w-4 text-agricultural-fresh" />;
      case "announcement":
        return <Megaphone className="h-4 w-4 text-purple-600" />;
      default:
        return <Info className="h-4 w-4" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High":
        return "bg-red-100 text-red-700";
      case "Medium":
        return "bg-yellow-100 text-yellow-700";
      case "Low":
        return "bg-green-100 text-green-700";
      default:
        return "bg-muted";
    }
  };

  return (
    <Card className="shadow-agricultural">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-agricultural-green">
            <Megaphone className="h-5 w-5" />
            सरकारी सलाह व अलर्ट
          </CardTitle>
          <Badge variant="outline" className="text-xs">
            {alerts.length} New
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {alerts.map((alert, index) => (
          <div key={index} className="border-l-4 border-l-agricultural-green bg-muted/30 p-3 rounded-r-lg">
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2">
                {getIcon(alert.type)}
                <h4 className="font-medium text-sm">{alert.title}</h4>
              </div>
              <Badge className={`text-xs ${getPriorityColor(alert.priority)}`}>
                {alert.priority}
              </Badge>
            </div>
            
            <p className="text-xs text-muted-foreground mb-2 leading-relaxed">
              {alert.message}
            </p>
            
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground">From:</span>
                <span className="font-medium text-agricultural-green">{alert.department}</span>
              </div>
              <span className="text-muted-foreground">{alert.time}</span>
            </div>
          </div>
        ))}
        
        <div className="text-center pt-2 border-t">
          <Button variant="ghost" size="sm" className="text-xs text-muted-foreground">
            View All Alerts & Advisories
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Advisories;