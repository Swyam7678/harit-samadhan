import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cloud, CloudRain, Sun, Droplets, Wind, Thermometer } from "lucide-react";

const WeatherWidget = () => {
  const forecast = [
    { day: "आज", temp: "28°C", condition: "Sunny", icon: Sun, rain: "0%" },
    { day: "कल", temp: "26°C", condition: "Cloudy", icon: Cloud, rain: "20%" },
    { day: "परसों", temp: "24°C", condition: "Rainy", icon: CloudRain, rain: "80%" },
    { day: "Wed", temp: "25°C", condition: "Cloudy", icon: Cloud, rain: "45%" },
  ];

  return (
    <Card className="shadow-agricultural">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-agricultural-green">
          <Sun className="h-5 w-5" />
          मौसम (Weather)
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="bg-gradient-fresh p-4 rounded-lg text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold">28°C</p>
              <p className="text-sm opacity-90">Kharkhoda, Haryana</p>
            </div>
            <Sun className="h-12 w-12 opacity-80" />
          </div>
          
          <div className="grid grid-cols-3 gap-4 mt-4 pt-4 border-t border-white/20">
            <div className="text-center">
              <Droplets className="h-4 w-4 mx-auto mb-1" />
              <p className="text-xs">Humidity</p>
              <p className="font-semibold">65%</p>
            </div>
            <div className="text-center">
              <Wind className="h-4 w-4 mx-auto mb-1" />
              <p className="text-xs">Wind</p>
              <p className="font-semibold">12 km/h</p>
            </div>
            <div className="text-center">
              <CloudRain className="h-4 w-4 mx-auto mb-1" />
              <p className="text-xs">Rain</p>
              <p className="font-semibold">0%</p>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-medium mb-3 text-sm">5-Day Forecast</h4>
          <div className="grid grid-cols-4 gap-2">
            {forecast.map((day, index) => (
              <div key={index} className="text-center p-2 bg-muted/50 rounded">
                <p className="text-xs font-medium mb-1">{day.day}</p>
                <day.icon className="h-4 w-4 mx-auto mb-1 text-agricultural-green" />
                <p className="text-xs font-bold">{day.temp}</p>
                <p className="text-xs text-muted-foreground">{day.rain}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-blue-50 p-3 rounded-lg">
          <p className="text-xs text-blue-700 font-medium">
            🌾 Agricultural Advisory: Good weather for wheat sowing this week
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default WeatherWidget;