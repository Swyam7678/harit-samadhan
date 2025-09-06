import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Beaker, Droplets } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const NPKSensor = () => {
  const sensorData = [
    { name: "Nitrogen (N)", value: 75, unit: "ppm", status: "Good", color: "bg-agricultural-fresh" },
    { name: "Phosphorus (P)", value: 45, unit: "ppm", status: "Low", color: "bg-yellow-500" },
    { name: "Potassium (K)", value: 85, unit: "ppm", status: "High", color: "bg-agricultural-green" },
    { name: "Soil Moisture", value: 62, unit: "%", status: "Optimal", color: "bg-blue-500" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Good": 
      case "Optimal":
      case "High":
        return "bg-agricultural-fresh text-white";
      case "Low":
        return "bg-yellow-500 text-white";
      case "Critical":
        return "bg-destructive text-white";
      default:
        return "bg-muted";
    }
  };

  return (
    <Card className="shadow-agricultural">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-agricultural-green">
            <Beaker className="h-5 w-5" />
            मिट्टी स्वास्थ्य (Soil Health)
          </CardTitle>
          <div className="flex items-center gap-1">
            <Activity className="h-3 w-3 text-agricultural-fresh" />
            <Badge variant="secondary" className="text-xs">
              Live
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          {sensorData.map((sensor, index) => (
            <div key={index} className="bg-muted/50 p-3 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-sm font-medium">{sensor.name}</h4>
                <Badge className={`text-xs ${getStatusColor(sensor.status)}`}>
                  {sensor.status}
                </Badge>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold">{sensor.value}</span>
                  <span className="text-xs text-muted-foreground">{sensor.unit}</span>
                </div>
                <Progress 
                  value={sensor.value} 
                  className="h-2" 
                />
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-earth p-4 rounded-lg text-white">
          <div className="flex items-center gap-2 mb-2">
            <Droplets className="h-4 w-4" />
            <span className="font-medium text-sm">Soil Recommendation</span>
          </div>
          <p className="text-xs opacity-90">
            फास्फोरस कम है। DAP खाद का प्रयोग करें। 
          </p>
          <p className="text-xs opacity-90 mt-1">
            Phosphorus is low. Apply DAP fertilizer.
          </p>
        </div>

        <div className="flex justify-between items-center pt-2 border-t text-xs text-muted-foreground">
          <span>Sensor ID: NPK-001</span>
          <span>Updated: 5 min ago</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default NPKSensor;