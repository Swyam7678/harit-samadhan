import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, BarChart3 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const MandiPrices = () => {
  const crops = [
    { name: "गेहूं (Wheat)", price: "₹2,150", change: "+5.2%", trend: "up", mandi: "Kharkhoda" },
    { name: "चावल (Rice)", price: "₹3,200", change: "-2.1%", trend: "down", mandi: "Panipat" },
    { name: "मक्का (Maize)", price: "₹1,850", change: "+3.8%", trend: "up", mandi: "Sonipat" },
    { name: "बाजरा (Pearl Millet)", price: "₹2,450", change: "+1.5%", trend: "up", mandi: "Rohtak" },
  ];

  return (
    <Card className="shadow-agricultural">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-agricultural-green">
            <BarChart3 className="h-5 w-5" />
            मंडी भाव (Mandi Prices)
          </CardTitle>
          <Badge variant="secondary" className="text-xs">
            Live
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {crops.map((crop, index) => (
          <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
            <div>
              <p className="font-medium text-sm">{crop.name}</p>
              <p className="text-xs text-muted-foreground">{crop.mandi} Mandi</p>
            </div>
            <div className="text-right">
              <p className="font-bold text-lg">{crop.price}</p>
              <div className="flex items-center gap-1">
                {crop.trend === "up" ? (
                  <TrendingUp className="h-3 w-3 text-agricultural-fresh" />
                ) : (
                  <TrendingDown className="h-3 w-3 text-destructive" />
                )}
                <span className={`text-xs font-medium ${
                  crop.trend === "up" ? "text-agricultural-fresh" : "text-destructive"
                }`}>
                  {crop.change}
                </span>
              </div>
            </div>
          </div>
        ))}
        
        <div className="pt-2 border-t">
          <p className="text-xs text-muted-foreground text-center">
            Last updated: 2 minutes ago
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default MandiPrices;