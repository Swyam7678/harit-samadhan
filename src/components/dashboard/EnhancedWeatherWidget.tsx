import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Cloud, 
  CloudRain, 
  Sun, 
  Thermometer, 
  Droplets, 
  Wind, 
  Eye,
  MapPin,
  AlertTriangle,
  Sprout,
  Calendar
} from "lucide-react";

const EnhancedWeatherWidget = () => {
  const [selectedLocation, setSelectedLocation] = useState("Sonipat, Haryana");
  
  const currentWeather = {
    location: "Sonipat, Haryana",
    temperature: 28,
    condition: "Partly Cloudy",
    conditionHindi: "आंशिक बादल",
    icon: Cloud,
    humidity: 65,
    windSpeed: 12,
    windDirection: "NW",
    visibility: 8,
    uvIndex: 6,
    pressure: 1013,
    dewPoint: 18,
    feelsLike: 32
  };

  const forecast = [
    {
      day: "आज",
      date: "11 Sep",
      icon: Cloud,
      high: 32,
      low: 24,
      condition: "Cloudy",
      conditionHindi: "बादल",
      rainfall: 20,
      humidity: 65,
      windSpeed: 12
    },
    {
      day: "कल",
      date: "12 Sep", 
      icon: CloudRain,
      high: 29,
      low: 22,
      condition: "Light Rain",
      conditionHindi: "हल्की बारिश",
      rainfall: 80,
      humidity: 75,
      windSpeed: 15
    },
    {
      day: "परसों",
      date: "13 Sep",
      icon: CloudRain,
      high: 26,
      low: 20,
      condition: "Heavy Rain",
      conditionHindi: "तेज बारिश",
      rainfall: 95,
      humidity: 85,
      windSpeed: 18
    },
    {
      day: "शुक्र",
      date: "14 Sep",
      icon: Cloud,
      high: 30,
      low: 23,
      condition: "Cloudy",
      conditionHindi: "बादल",
      rainfall: 30,
      humidity: 70,
      windSpeed: 10
    },
    {
      day: "शनि",
      date: "15 Sep",
      icon: Sun,
      high: 33,
      low: 25,
      condition: "Sunny",
      conditionHindi: "धूप",
      rainfall: 10,
      humidity: 60,
      windSpeed: 8
    }
  ];

  const agriculturalAdvice = {
    current: "मौसम आंशिक बादल का है। खरीफ फसलों की सिंचाई के लिए उत्तम समय है।",
    upcoming: "कल हल्की बारिश का अनुमान है। धान की रोपाई के लिए अच्छा समय है।",
    alerts: [
      {
        type: "warning",
        message: "13 सितंबर को तेज बारिश की संभावना - फसल सुरक्षा के उपाय करें",
        action: "कवर फसलों को ढकें"
      },
      {
        type: "info", 
        message: "अगले 5 दिनों में 60% नमी - फंगल रोगों से बचाव करें",
        action: "कवकनाशी का छिड़काव करें"
      }
    ]
  };

  const airQuality = {
    aqi: 85,
    category: "Moderate",
    categoryHindi: "सामान्य",
    pm25: 32,
    pm10: 58,
    recommendation: "बाहरी गतिविधियां सामान्य हैं"
  };

  const getAQIColor = (aqi: number) => {
    if (aqi <= 50) return "text-green-600";
    if (aqi <= 100) return "text-yellow-600"; 
    if (aqi <= 150) return "text-orange-600";
    return "text-red-600";
  };

  return (
    <div className="space-y-6">
      <Card className="shadow-agricultural">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2 text-agricultural-green">
              <Cloud className="h-5 w-5" />
              मौसम पूर्वानुमान (Weather Forecast)
            </CardTitle>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">{currentWeather.location}</span>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          <Tabs defaultValue="current" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="current">अभी</TabsTrigger>
              <TabsTrigger value="forecast">5-दिन</TabsTrigger>
              <TabsTrigger value="agriculture">कृषि सलाह</TabsTrigger>
              <TabsTrigger value="air">वायु गुणवत्ता</TabsTrigger>
            </TabsList>

            <TabsContent value="current" className="space-y-4 mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Current Temperature */}
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-agricultural rounded-lg text-white">
                    <currentWeather.icon className="h-8 w-8" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold">{currentWeather.temperature}°C</p>
                    <p className="text-muted-foreground">{currentWeather.conditionHindi}</p>
                    <p className="text-sm text-muted-foreground">
                      महसूस होता है {currentWeather.feelsLike}°C
                    </p>
                  </div>
                </div>

                {/* Weather Details Grid */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
                    <Droplets className="h-4 w-4 text-blue-500" />
                    <div>
                      <p className="text-xs text-muted-foreground">नमी</p>
                      <p className="font-medium">{currentWeather.humidity}%</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
                    <Wind className="h-4 w-4 text-gray-500" />
                    <div>
                      <p className="text-xs text-muted-foreground">हवा</p>
                      <p className="font-medium">{currentWeather.windSpeed} km/h</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
                    <Eye className="h-4 w-4 text-purple-500" />
                    <div>
                      <p className="text-xs text-muted-foreground">दृश्यता</p>
                      <p className="font-medium">{currentWeather.visibility} km</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
                    <Sun className="h-4 w-4 text-orange-500" />
                    <div>
                      <p className="text-xs text-muted-foreground">UV इंडेक्स</p>
                      <p className="font-medium">{currentWeather.uvIndex}</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="forecast" className="space-y-4 mt-4">
              <div className="space-y-3">
                {forecast.map((day, index) => (
                  <div 
                    key={index} 
                    className="flex items-center justify-between p-4 bg-muted/50 rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-center min-w-[60px]">
                        <p className="font-medium">{day.day}</p>
                        <p className="text-xs text-muted-foreground">{day.date}</p>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-agricultural-green/10 rounded-lg">
                          <day.icon className="h-5 w-5 text-agricultural-green" />
                        </div>
                        <div>
                          <p className="font-medium">{day.conditionHindi}</p>
                          <p className="text-xs text-muted-foreground">{day.condition}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-6 text-right">
                      <div className="text-center">
                        <p className="text-xs text-muted-foreground">तापमान</p>
                        <p className="font-medium">{day.high}°/{day.low}°</p>
                      </div>
                      
                      <div className="text-center">
                        <p className="text-xs text-muted-foreground">बारिश</p>
                        <p className="font-medium text-blue-600">{day.rainfall}%</p>
                      </div>
                      
                      <div className="text-center">
                        <p className="text-xs text-muted-foreground">हवा</p>
                        <p className="font-medium">{day.windSpeed} km/h</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="agriculture" className="space-y-4 mt-4">
              <div className="space-y-4">
                <Card className="bg-gradient-fresh/10 border-agricultural-fresh">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base flex items-center gap-2">
                      <Sprout className="h-4 w-4 text-agricultural-fresh" />
                      आज की कृषि सलाह
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">{agriculturalAdvice.current}</p>
                  </CardContent>
                </Card>

                <Card className="bg-blue-50 border-blue-200">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-blue-600" />
                      आगामी सलाह
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">{agriculturalAdvice.upcoming}</p>
                  </CardContent>
                </Card>

                <div className="space-y-2">
                  <h4 className="font-medium flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-orange-500" />
                    मौसम चेतावनी
                  </h4>
                  {agriculturalAdvice.alerts.map((alert, index) => (
                    <div 
                      key={index}
                      className={`p-3 rounded-lg ${
                        alert.type === 'warning' 
                          ? 'bg-orange-100 border-l-4 border-orange-500' 
                          : 'bg-blue-100 border-l-4 border-blue-500'
                      }`}
                    >
                      <p className="text-sm font-medium">{alert.message}</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        सुझाव: {alert.action}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="air" className="space-y-4 mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">वायु गुणवत्ता सूचकांक</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center">
                      <p className={`text-3xl font-bold ${getAQIColor(airQuality.aqi)}`}>
                        {airQuality.aqi}
                      </p>
                      <p className="text-sm text-muted-foreground">{airQuality.categoryHindi}</p>
                      <Badge 
                        variant="outline" 
                        className={`mt-2 ${getAQIColor(airQuality.aqi)}`}
                      >
                        {airQuality.category}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">प्रदूषक स्तर</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">PM2.5</span>
                      <span className="text-sm font-medium">{airQuality.pm25} μg/m³</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">PM10</span>
                      <span className="text-sm font-medium">{airQuality.pm10} μg/m³</span>
                    </div>
                    <div className="pt-2 border-t">
                      <p className="text-xs text-muted-foreground">
                        {airQuality.recommendation}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default EnhancedWeatherWidget;