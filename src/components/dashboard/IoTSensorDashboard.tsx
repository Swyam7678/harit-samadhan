import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Activity, 
  Thermometer, 
  Droplets, 
  Zap,
  Wifi,
  WifiOff,
  Settings,
  AlertTriangle,
  CheckCircle,
  TrendingUp,
  MapPin,
  Calendar,
  Sprout
} from "lucide-react";

const IoTSensorDashboard = () => {
  const [selectedField, setSelectedField] = useState("field1");
  const [isLiveMode, setIsLiveMode] = useState(true);

  // Simulate real-time sensor data
  const [sensorData, setSensorData] = useState({
    field1: {
      id: "SENSOR_001",
      name: "मुख्य खेत - Field A",
      location: "Sonipat, Block 1",
      lastUpdate: new Date(),
      status: "online",
      batteryLevel: 85,
      signalStrength: 4,
      readings: {
        nitrogen: { value: 45, unit: "ppm", status: "good", trend: "+2%" },
        phosphorus: { value: 28, unit: "ppm", status: "low", trend: "-5%" },
        potassium: { value: 62, unit: "ppm", status: "excellent", trend: "+8%" },
        soilMoisture: { value: 68, unit: "%", status: "optimal", trend: "+3%" },
        soilTemp: { value: 24, unit: "°C", status: "good", trend: "+1°C" },
        pH: { value: 6.8, unit: "pH", status: "neutral", trend: "0%" },
        conductivity: { value: 1250, unit: "μS/cm", status: "good", trend: "+2%" },
        organicMatter: { value: 3.2, unit: "%", status: "good", trend: "+0.1%" }
      }
    },
    field2: {
      id: "SENSOR_002", 
      name: "दूसरा खेत - Field B",
      location: "Sonipat, Block 2",
      lastUpdate: new Date(Date.now() - 300000), // 5 minutes ago
      status: "offline",
      batteryLevel: 45,
      signalStrength: 2,
      readings: {
        nitrogen: { value: 38, unit: "ppm", status: "low", trend: "-3%" },
        phosphorus: { value: 35, unit: "ppm", status: "good", trend: "+2%" },
        potassium: { value: 58, unit: "ppm", status: "good", trend: "+5%" },
        soilMoisture: { value: 52, unit: "%", status: "low", trend: "-8%" },
        soilTemp: { value: 26, unit: "°C", status: "high", trend: "+2°C" },
        pH: { value: 7.2, unit: "pH", status: "alkaline", trend: "+0.2" },
        conductivity: { value: 980, unit: "μS/cm", status: "low", trend: "-5%" },
        organicMatter: { value: 2.8, unit: "%", status: "moderate", trend: "-0.1%" }
      }
    }
  });

  const currentField = sensorData[selectedField as keyof typeof sensorData];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "excellent": return "bg-green-500 text-white";
      case "good": return "bg-agricultural-fresh text-white";  
      case "optimal": return "bg-blue-500 text-white";
      case "moderate": return "bg-yellow-500 text-white";
      case "low": return "bg-orange-500 text-white";
      case "high": return "bg-red-500 text-white";
      case "neutral": return "bg-gray-500 text-white";
      case "alkaline": return "bg-purple-500 text-white";
      default: return "bg-gray-500 text-white";
    }
  };

  const getProgressValue = (value: number, parameter: string) => {
    // Convert parameter values to percentage for progress bars
    switch (parameter) {
      case "nitrogen": return (value / 100) * 100;
      case "phosphorus": return (value / 80) * 100;
      case "potassium": return (value / 120) * 100;
      case "soilMoisture": return value;
      case "soilTemp": return ((value - 10) / 25) * 100;
      case "pH": return ((value - 5) / 4) * 100;
      default: return value;
    }
  };

  const recommendations = {
    field1: [
      {
        type: "warning",
        title: "फास्फोरस की कमी",
        description: "DAP या TSP का उपयोग करें। 50 किग्रा प्रति एकड़ की दर से डालें।",
        priority: "high"
      },
      {
        type: "info", 
        title: "सिंचाई की स्थिति अच्छी",
        description: "मिट्टी की नमी का स्तर उत्तम है। अगली सिंचाई 3-4 दिन बाद करें।",
        priority: "medium"
      }
    ],
    field2: [
      {
        type: "critical",
        title: "सेंसर ऑफलाइन",
        description: "सेंसर की बैटरी कम है और कनेक्शन टूटा है। तुरंत जांच करें।",
        priority: "critical"
      },
      {
        type: "warning",
        title: "नाइट्रोजन और नमी की कमी", 
        description: "यूरिया डालें और तुरंत सिंचाई करें।",
        priority: "high"
      }
    ]
  };

  // Simulate live data updates
  useEffect(() => {
    if (!isLiveMode) return;
    
    const interval = setInterval(() => {
      setSensorData(prev => {
        const updated = { ...prev };
        // Simulate small variations in online sensor
        if (updated.field1.status === "online") {
          Object.keys(updated.field1.readings).forEach(key => {
            const reading = updated.field1.readings[key as keyof typeof updated.field1.readings];
            const variation = (Math.random() - 0.5) * 2; // ±1 variation
            reading.value = Math.max(0, reading.value + variation);
          });
          updated.field1.lastUpdate = new Date();
        }
        return updated;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [isLiveMode]);

  return (
    <div className="space-y-6">
      <Card className="shadow-agricultural">
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <CardTitle className="flex items-center gap-2 text-agricultural-green">
              <Activity className="h-5 w-5" />
              IoT सेंसर डैशबोर्ड (Smart Soil Monitoring)
            </CardTitle>
            <div className="flex items-center gap-2">
              <Button
                variant={isLiveMode ? "default" : "outline"}
                size="sm"
                onClick={() => setIsLiveMode(!isLiveMode)}
                className="bg-gradient-agricultural"
              >
                {isLiveMode ? (
                  <>
                    <Activity className="h-4 w-4 mr-1 animate-pulse" />
                    Live
                  </>
                ) : (
                  <>
                    <Settings className="h-4 w-4 mr-1" />
                    Manual
                  </>
                )}
              </Button>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          <Tabs defaultValue="sensors" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="sensors">सेंसर डेटा</TabsTrigger>
              <TabsTrigger value="analysis">विश्लेषण</TabsTrigger>
              <TabsTrigger value="recommendations">सुझाव</TabsTrigger>
            </TabsList>

            <TabsContent value="sensors" className="space-y-4 mt-4">
              {/* Field Selector */}
              <div className="flex gap-2 mb-4">
                {Object.entries(sensorData).map(([fieldId, field]) => (
                  <Button
                    key={fieldId}
                    variant={selectedField === fieldId ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedField(fieldId)}
                    className="relative"
                  >
                    <MapPin className="h-3 w-3 mr-1" />
                    {field.name}
                    {field.status === "offline" && (
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
                    )}
                  </Button>
                ))}
              </div>

              {/* Sensor Status */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <Card className="p-4">
                  <div className="flex items-center gap-2">
                    {currentField.status === "online" ? (
                      <Wifi className="h-4 w-4 text-green-500" />
                    ) : (
                      <WifiOff className="h-4 w-4 text-red-500" />
                    )}
                    <span className="text-sm font-medium">
                      {currentField.status === "online" ? "ऑनलाइन" : "ऑफलाइन"}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">{currentField.id}</p>
                </Card>

                <Card className="p-4">
                  <div className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm font-medium">{currentField.batteryLevel}%</span>
                  </div>
                  <Progress value={currentField.batteryLevel} className="h-2 mt-1" />
                </Card>

                <Card className="p-4">
                  <div className="flex items-center gap-2">
                    <Wifi className="h-4 w-4 text-blue-500" />
                    <span className="text-sm font-medium">
                      सिग्नल {currentField.signalStrength}/5
                    </span>
                  </div>
                  <div className="flex gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <div 
                        key={i}
                        className={`w-2 h-3 rounded-sm ${
                          i < currentField.signalStrength 
                            ? "bg-blue-500" 
                            : "bg-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </Card>

                <Card className="p-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-purple-500" />
                    <span className="text-sm font-medium">अपडेट</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {Math.floor((Date.now() - currentField.lastUpdate.getTime()) / 60000)} मिनट पहले
                  </p>
                </Card>
              </div>

              {/* Sensor Readings */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {Object.entries(currentField.readings).map(([key, reading]) => (
                  <Card key={key} className="p-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-medium">
                          {key === 'nitrogen' && 'नाइट्रोजन (N)'}
                          {key === 'phosphorus' && 'फास्फोरस (P)'}
                          {key === 'potassium' && 'पोटैशियम (K)'}
                          {key === 'soilMoisture' && 'मिट्टी की नमी'}
                          {key === 'soilTemp' && 'मिट्टी तापमान'}
                          {key === 'pH' && 'पीएच स्तर'}
                          {key === 'conductivity' && 'चालकता'}
                          {key === 'organicMatter' && 'जैविक पदार्थ'}
                        </h4>
                        <Badge 
                          className={`text-xs ${getStatusColor(reading.status)}`}
                        >
                          {reading.status}
                        </Badge>
                      </div>
                      
                      <div>
                        <p className="text-2xl font-bold">{reading.value.toFixed(1)}</p>
                        <p className="text-xs text-muted-foreground">{reading.unit}</p>
                      </div>
                      
                      <div className="space-y-1">
                        <Progress 
                          value={getProgressValue(reading.value, key)} 
                          className="h-2"
                        />
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-muted-foreground">ट्रेंड:</span>
                          <span className={`flex items-center gap-1 font-medium ${
                            reading.trend.includes('+') 
                              ? 'text-agricultural-fresh' 
                              : reading.trend.includes('-')
                              ? 'text-red-500'
                              : 'text-gray-500'
                          }`}>
                            {reading.trend.includes('+') && <TrendingUp className="h-3 w-3" />}
                            {reading.trend}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="analysis" className="space-y-4 mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">NPK विश्लेषण</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span>नाइट्रोजन स्तर</span>
                        <Badge className="bg-agricultural-fresh text-white">पर्याप्त</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>फास्फोरस स्तर</span>
                        <Badge className="bg-orange-500 text-white">कम</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>पोटैशियम स्तर</span>
                        <Badge className="bg-green-500 text-white">उत्कृष्ट</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">मिट्टी स्वास्थ्य स्कोर</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-agricultural-fresh mb-2">
                        7.2/10
                      </div>
                      <Badge className="bg-agricultural-fresh text-white">अच्छा</Badge>
                      <p className="text-xs text-muted-foreground mt-2">
                        फास्फोरस बढ़ाने पर 8.5/10 तक जा सकता है
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="recommendations" className="space-y-4 mt-4">
              <div className="space-y-3">
                {recommendations[selectedField as keyof typeof recommendations].map((rec, index) => (
                  <Card 
                    key={index}
                    className={`border-l-4 ${
                      rec.type === 'critical' 
                        ? 'border-red-500 bg-red-50' 
                        : rec.type === 'warning'
                        ? 'border-orange-500 bg-orange-50'
                        : 'border-blue-500 bg-blue-50'
                    }`}
                  >
                    <CardContent className="pt-4">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 mt-1">
                          {rec.type === 'critical' && <AlertTriangle className="h-5 w-5 text-red-500" />}
                          {rec.type === 'warning' && <AlertTriangle className="h-5 w-5 text-orange-500" />}
                          {rec.type === 'info' && <CheckCircle className="h-5 w-5 text-blue-500" />}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium mb-1">{rec.title}</h4>
                          <p className="text-sm text-muted-foreground">{rec.description}</p>
                          <Badge 
                            variant="outline" 
                            className={`mt-2 text-xs ${
                              rec.priority === 'critical' 
                                ? 'border-red-500 text-red-700'
                                : rec.priority === 'high'
                                ? 'border-orange-500 text-orange-700'
                                : 'border-blue-500 text-blue-700'
                            }`}
                          >
                            {rec.priority === 'critical' && 'तुरंत आवश्यक'}
                            {rec.priority === 'high' && 'उच्च प्राथमिकता'}
                            {rec.priority === 'medium' && 'मध्यम प्राथमिकता'}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default IoTSensorDashboard;