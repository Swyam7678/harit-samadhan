import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { TrendingUp, TrendingDown, BarChart3, Search, MapPin, Calendar, Bell } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const EnhancedMandiPrices = () => {
  const [selectedState, setSelectedState] = useState("haryana");
  const [selectedCrop, setSelectedCrop] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [priceAlerts, setPriceAlerts] = useState<string[]>([]);

  const states = [
    { value: "haryana", label: "हरियाणा" },
    { value: "punjab", label: "पंजाब" },
    { value: "up", label: "उत्तर प्रदेश" },
    { value: "madhya-pradesh", label: "मध्य प्रदेश" },
  ];

  const crops = [
    { value: "all", label: "सभी फसलें" },
    { value: "wheat", label: "गेहूं" },
    { value: "rice", label: "चावल" },
    { value: "maize", label: "मक्का" },
    { value: "bajra", label: "बाजरा" },
  ];

  const mandiData = [
    { 
      id: "1",
      name: "गेहूं (Wheat)", 
      variety: "PBW 725",
      price: "₹2,150", 
      minPrice: "₹2,100",
      maxPrice: "₹2,200",
      change: "+5.2%", 
      trend: "up", 
      mandi: "Kharkhoda",
      district: "Sonipat",
      arrivals: "150 टन",
      quality: "FAQ"
    },
    { 
      id: "2",
      name: "चावल (Rice)", 
      variety: "Basmati 1121",
      price: "₹3,200", 
      minPrice: "₹3,150",
      maxPrice: "₹3,250",
      change: "-2.1%", 
      trend: "down", 
      mandi: "Panipat",
      district: "Panipat",
      arrivals: "95 टन",
      quality: "Superior"
    },
    { 
      id: "3",
      name: "मक्का (Maize)", 
      variety: "Hybrid",
      price: "₹1,850", 
      minPrice: "₹1,800",
      maxPrice: "₹1,900",
      change: "+3.8%", 
      trend: "up", 
      mandi: "Sonipat",
      district: "Sonipat",
      arrivals: "200 टन",
      quality: "FAQ"
    },
    { 
      id: "4",
      name: "बाजरा (Pearl Millet)", 
      variety: "HHB 67",
      price: "₹2,450", 
      minPrice: "₹2,400",
      maxPrice: "₹2,500",
      change: "+1.5%", 
      trend: "up", 
      mandi: "Rohtak",
      district: "Rohtak",
      arrivals: "80 टन",
      quality: "Good"
    },
    { 
      id: "5",
      name: "सरसों (Mustard)", 
      variety: "RH 30",
      price: "₹5,200", 
      minPrice: "₹5,100",
      maxPrice: "₹5,300",
      change: "+7.2%", 
      trend: "up", 
      mandi: "Hisar",
      district: "Hisar",
      arrivals: "120 टन",
      quality: "Superior"
    },
  ];

  const filteredData = mandiData.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.mandi.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const togglePriceAlert = (cropId: string) => {
    setPriceAlerts(prev => 
      prev.includes(cropId) 
        ? prev.filter(id => id !== cropId)
        : [...prev, cropId]
    );
  };

  return (
    <div className="space-y-6">
      <Card className="shadow-agricultural">
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <CardTitle className="flex items-center gap-2 text-agricultural-green">
              <BarChart3 className="h-5 w-5" />
              लाइव मंडी भाव (Live Mandi Prices)
            </CardTitle>
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="bg-gradient-agricultural text-white animate-pulse">
                <div className="w-2 h-2 bg-white rounded-full mr-1"></div>
                Live
              </Badge>
              <Badge variant="outline" className="text-xs">
                हर 15 मिनट में अपडेट
              </Badge>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-4">
          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <Select value={selectedState} onValueChange={setSelectedState}>
              <SelectTrigger>
                <SelectValue placeholder="राज्य चुनें" />
              </SelectTrigger>
              <SelectContent>
                {states.map((state) => (
                  <SelectItem key={state.value} value={state.value}>
                    {state.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Select value={selectedCrop} onValueChange={setSelectedCrop}>
              <SelectTrigger>
                <SelectValue placeholder="फसल चुनें" />
              </SelectTrigger>
              <SelectContent>
                {crops.map((crop) => (
                  <SelectItem key={crop.value} value={crop.value}>
                    {crop.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="मंडी या फसल खोजें..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <Tabs defaultValue="prices" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="prices">आज की कीमतें</TabsTrigger>
              <TabsTrigger value="trends">ट्रेंड एनालिसिस</TabsTrigger>
            </TabsList>
            
            <TabsContent value="prices" className="space-y-3 mt-4">
              {filteredData.map((crop) => (
                <div key={crop.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="font-semibold text-lg">{crop.name}</h4>
                        <Badge variant="outline" className="text-xs">
                          {crop.variety}
                        </Badge>
                        <Badge 
                          variant={crop.quality === "Superior" ? "default" : "secondary"}
                          className="text-xs"
                        >
                          {crop.quality}
                        </Badge>
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {crop.mandi}, {crop.district}
                        </div>
                        <div>आवक: {crop.arrivals}</div>
                        <div>न्यूनतम: {crop.minPrice}</div>
                        <div>अधिकतम: {crop.maxPrice}</div>
                      </div>
                    </div>
                    
                    <div className="text-right space-y-2">
                      <div>
                        <p className="text-2xl font-bold">{crop.price}</p>
                        <p className="text-xs text-muted-foreground">प्रति क्विंटल</p>
                      </div>
                      
                      <div className="flex items-center justify-end gap-2">
                        <div className="flex items-center gap-1">
                          {crop.trend === "up" ? (
                            <TrendingUp className="h-3 w-3 text-agricultural-fresh" />
                          ) : (
                            <TrendingDown className="h-3 w-3 text-destructive" />
                          )}
                          <span className={`text-sm font-medium ${
                            crop.trend === "up" ? "text-agricultural-fresh" : "text-destructive"
                          }`}>
                            {crop.change}
                          </span>
                        </div>
                        
                        <Button
                          size="sm"
                          variant={priceAlerts.includes(crop.id) ? "default" : "outline"}
                          onClick={() => togglePriceAlert(crop.id)}
                          className="h-8"
                        >
                          <Bell className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </TabsContent>
            
            <TabsContent value="trends" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <h4 className="font-medium">सप्ताह का सर्वोत्तम प्रदर्शन</h4>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span>सरसों</span>
                        <span className="text-agricultural-fresh">+12.5%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>गेहूं</span>
                        <span className="text-agricultural-fresh">+8.3%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>मक्का</span>
                        <span className="text-agricultural-fresh">+5.7%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <h4 className="font-medium">मार्केट अलर्ट्स</h4>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div className="p-2 bg-agricultural-fresh/10 rounded text-agricultural-fresh">
                        ✓ सरसों की कीमतें तेजी से बढ़ रही हैं
                      </div>
                      <div className="p-2 bg-orange-100 rounded text-orange-700">
                        ⚠ चावल में मंदी का रुख
                      </div>
                      <div className="p-2 bg-blue-100 rounded text-blue-700">
                        📈 गेहूं में स्थिर वृद्धि
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="pt-3 border-t flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="h-3 w-3" />
              Last updated: 2 minutes ago
            </div>
            <div>
              Data source: Agmarknet, State Agricultural Marketing Boards
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EnhancedMandiPrices;