import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { 
  Bell, 
  AlertTriangle, 
  Info, 
  CheckCircle, 
  Megaphone,
  Calendar,
  MapPin,
  Phone,
  ExternalLink,
  Search,
  Filter,
  Star,
  Share2,
  MessageSquare
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const GovernmentAlerts = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [notifications, setNotifications] = useState(true);
  const { toast } = useToast();

  const categories = [
    { value: "all", label: "सभी अलर्ट" },
    { value: "schemes", label: "सरकारी योजनाएं" },
    { value: "weather", label: "मौसम चेतावनी" },
    { value: "market", label: "मंडी सूचना" },
    { value: "subsidy", label: "सब्सिडी अपडेट" },
    { value: "training", label: "प्रशिक्षण कार्यक्रम" }
  ];

  const alerts = [
    {
      id: "1",
      type: "schemes",
      priority: "high",
      title: "PM-KISAN की 16वीं किश्त जारी",
      message: "प्रधानमंत्री किसान सम्मान निधि योजना की 16वीं किश्त के ₹2000 सभी पात्र किसानों के खाते में भेजे जा रहे हैं। अपना स्टेटस चेक करें।",
      department: "कृषि मंत्रालय, भारत सरकार",
      time: "2 घंटे पहले",
      location: "पूरे भारत में",
      contact: "1800-115-526",
      link: "https://pmkisan.gov.in",
      deadline: "30 सितंबर 2024",
      beneficiaries: "11 करोड़ किसान",
      amount: "₹2,000",
      isNew: true,
      starred: false
    },
    {
      id: "2", 
      type: "weather",
      priority: "critical",
      title: "तेज बारिश की चेतावनी - हरियाणा",
      message: "अगले 48 घंटों में हरियाणा के सभी जिलों में भारी बारिश और आंधी की संभावना। फसलों को सुरक्षित रखने के उपाय करें।",
      department: "मौसम विभाग, हरियाणा",
      time: "30 मिनट पहले",
      location: "हरियाणा के सभी जिले",
      contact: "1800-180-1551",
      link: "https://mausam.imd.gov.in",
      validUntil: "15 सितंबर 2024",
      rainfall: "100-150 मिमी",
      windSpeed: "40-60 किमी/घंटा",
      isNew: true,
      starred: true
    },
    {
      id: "3",
      type: "subsidy",
      priority: "medium",
      title: "ड्रिप इरिगेशन सब्सिडी योजना",
      message: "सूक्ष्म सिंचाई योजना के तहत ड्रिप और स्प्रिंकलर सिस्टम पर 90% तक सब्सिडी। आवेदन की अंतिम तारीख 25 सितंबर।",
      department: "बागवानी निदेशालय, हरियाणा", 
      time: "1 दिन पहले",
      location: "हरियाणा",
      contact: "0172-2584376",
      link: "https://hortharyana.gov.in",
      deadline: "25 सितंबर 2024",
      subsidy: "90% तक",
      documents: "आधार, खसरा, बैंक पासबुक",
      isNew: false,
      starred: false
    },
    {
      id: "4",
      type: "market",
      priority: "medium", 
      title: "गन्ना खरीद केंद्र खुले",
      message: "उत्तर प्रदेश में गन्ना खरीद केंद्र 15 अक्टूबर से खुल रहे हैं। न्यूनतम समर्थन मूल्य ₹340 प्रति क्विंटल निर्धारित।",
      department: "गन्ना विकास विभाग, UP",
      time: "2 दिन पहले",
      location: "उत्तर प्रदेश",
      contact: "1800-180-1551",
      link: "https://sugarcane.up.gov.in",
      startDate: "15 अक्टूबर 2024",
      msp: "₹340 प्रति क्विंटल",
      centers: "3,500+ केंद्र",
      isNew: false,
      starred: false
    },
    {
      id: "5",
      type: "training",
      priority: "low",
      title: "जैविक खेती प्रशिक्षण कार्यक्रम",
      message: "कृषि विज्ञान केंद्र द्वारा जैविक खेती पर 5-दिवसीय प्रशिक्षण कार्यक्रम। पूर्णतः निःशुल्क। भोजन और आवास की व्यवस्था।",
      department: "कृषि विज्ञान केंद्र, करनाल",
      time: "3 दिन पहले",
      location: "करनाल, हरियाणा", 
      contact: "01744-267325",
      link: "https://kvk.icar.gov.in",
      startDate: "20 सितंबर 2024",
      duration: "5 दिन",
      seats: "50 किसान",
      isNew: false,
      starred: true
    }
  ];

  const filteredAlerts = alerts.filter(alert => {
    const matchesCategory = selectedCategory === "all" || alert.type === selectedCategory;
    const matchesSearch = alert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         alert.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         alert.department.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getIcon = (type: string) => {
    switch (type) {
      case "schemes": return CheckCircle;
      case "weather": return AlertTriangle;
      case "market": return Info;
      case "subsidy": return Megaphone;
      case "training": return Calendar;
      default: return Info;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "critical": return "border-red-500 bg-red-50";
      case "high": return "border-orange-500 bg-orange-50";
      case "medium": return "border-blue-500 bg-blue-50";
      case "low": return "border-green-500 bg-green-50";
      default: return "border-gray-500 bg-gray-50";
    }
  };

  const toggleStarred = (id: string) => {
    // In real app, update this in backend
    toast({
      title: "बुकमार्क अपडेट",
      description: "अलर्ट को बुकमार्क में जोड़ा/हटाया गया",
    });
  };

  const enableNotifications = () => {
    if ('Notification' in window) {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          toast({
            title: "नोटिफिकेशन चालू",
            description: "अब आपको सभी महत्वपूर्ण अलर्ट मिलेंगे",
          });
          setNotifications(true);
        }
      });
    }
  };

  return (
    <div className="space-y-6">
      <Card className="shadow-agricultural">
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <CardTitle className="flex items-center gap-2 text-agricultural-green">
              <Bell className="h-5 w-5" />
              सरकारी सूचनाएं व अलर्ट (Government Alerts & Advisories)
            </CardTitle>
            
            <div className="flex items-center gap-2">
              <Button
                variant={notifications ? "default" : "outline"}
                size="sm"
                onClick={enableNotifications}
                className="bg-gradient-agricultural"
              >
                <Bell className="h-4 w-4 mr-1" />
                {notifications ? "चालू" : "नोटिफिकेशन चालू करें"}
              </Button>
              <Badge variant="secondary" className="animate-pulse">
                {alerts.filter(a => a.isNew).length} नए
              </Badge>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          <Tabs defaultValue="alerts" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="alerts">सभी अलर्ट</TabsTrigger>
              <TabsTrigger value="starred">बुकमार्क</TabsTrigger>
              <TabsTrigger value="categories">श्रेणी अनुसार</TabsTrigger>
            </TabsList>

            {/* Search and Filters */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="अलर्ट खोजें..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <div className="flex gap-2">
                <select 
                  className="flex-1 p-2 border rounded-md"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map((category) => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>
                
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <TabsContent value="alerts" className="space-y-4 mt-6">
              {filteredAlerts.map((alert) => {
                const IconComponent = getIcon(alert.type);
                
                return (
                  <Card 
                    key={alert.id}
                    className={`border-l-4 transition-all hover:shadow-md ${getPriorityColor(alert.priority)}`}
                  >
                    <CardContent className="p-4">
                      <div className="space-y-3">
                        {/* Header */}
                        <div className="flex items-start justify-between">
                          <div className="flex items-start gap-3 flex-1">
                            <div className="flex-shrink-0 mt-1">
                              <IconComponent className={`h-5 w-5 ${
                                alert.priority === 'critical' ? 'text-red-500' :
                                alert.priority === 'high' ? 'text-orange-500' :
                                alert.priority === 'medium' ? 'text-blue-500' :
                                'text-green-500'
                              }`} />
                            </div>
                            
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <h4 className="font-semibold text-lg">{alert.title}</h4>
                                {alert.isNew && (
                                  <Badge className="bg-red-500 text-white text-xs animate-pulse">
                                    नया
                                  </Badge>
                                )}
                                <Badge 
                                  variant="outline" 
                                  className={`text-xs ${
                                    alert.priority === 'critical' ? 'border-red-500 text-red-700' :
                                    alert.priority === 'high' ? 'border-orange-500 text-orange-700' :
                                    alert.priority === 'medium' ? 'border-blue-500 text-blue-700' :
                                    'border-green-500 text-green-700'
                                  }`}
                                >
                                  {alert.priority === 'critical' && 'अत्यावश्यक'}
                                  {alert.priority === 'high' && 'महत्वपूर्ण'}
                                  {alert.priority === 'medium' && 'सामान्य'}
                                  {alert.priority === 'low' && 'सूचना'}
                                </Badge>
                              </div>
                              
                              <p className="text-sm mb-2">{alert.message}</p>
                              
                              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                                <span className="flex items-center gap-1">
                                  <Calendar className="h-3 w-3" />
                                  {alert.time}
                                </span>
                                <span className="flex items-center gap-1">
                                  <MapPin className="h-3 w-3" />
                                  {alert.location}
                                </span>
                                <span>{alert.department}</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-2">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => toggleStarred(alert.id)}
                            >
                              <Star className={`h-4 w-4 ${
                                alert.starred ? 'fill-yellow-400 text-yellow-400' : 'text-gray-400'
                              }`} />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Share2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>

                        {/* Additional Details */}
                        {(alert.deadline || alert.amount || alert.subsidy || alert.msp) && (
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-3 bg-white/50 rounded-lg">
                            {alert.deadline && (
                              <div>
                                <p className="text-xs text-muted-foreground">अंतिम तारीख</p>
                                <p className="text-sm font-medium">{alert.deadline}</p>
                              </div>
                            )}
                            {alert.amount && (
                              <div>
                                <p className="text-xs text-muted-foreground">राशि</p>
                                <p className="text-sm font-medium text-green-600">{alert.amount}</p>
                              </div>
                            )}
                            {alert.subsidy && (
                              <div>
                                <p className="text-xs text-muted-foreground">सब्सिडी</p>
                                <p className="text-sm font-medium text-blue-600">{alert.subsidy}</p>
                              </div>
                            )}
                            {alert.msp && (
                              <div>
                                <p className="text-xs text-muted-foreground">MSP</p>
                                <p className="text-sm font-medium text-agricultural-green">{alert.msp}</p>
                              </div>
                            )}
                          </div>
                        )}

                        {/* Actions */}
                        <div className="flex items-center gap-2 pt-2">
                          {alert.link && (
                            <Button size="sm" variant="outline">
                              <ExternalLink className="h-3 w-3 mr-1" />
                              विवरण देखें
                            </Button>
                          )}
                          {alert.contact && (
                            <Button size="sm" variant="outline">
                              <Phone className="h-3 w-3 mr-1" />
                              {alert.contact}
                            </Button>
                          )}
                          <Button size="sm" variant="outline">
                            <MessageSquare className="h-3 w-3 mr-1" />
                            चर्चा
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </TabsContent>

            <TabsContent value="starred" className="mt-6">
              <div className="space-y-4">
                {filteredAlerts.filter(alert => alert.starred).map(alert => (
                  <div key={alert.id} className="p-4 border rounded-lg">
                    <h4 className="font-medium">{alert.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{alert.message}</p>
                  </div>
                ))}
                
                {filteredAlerts.filter(alert => alert.starred).length === 0 && (
                  <div className="text-center py-8">
                    <Star className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h4 className="text-lg font-medium mb-2">कोई बुकमार्क अलर्ट नहीं</h4>
                    <p className="text-muted-foreground">
                      महत्वपूर्ण अलर्ट को स्टार करके यहां सेव करें
                    </p>
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="categories" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {categories.slice(1).map(category => {
                  const categoryAlerts = alerts.filter(alert => alert.type === category.value);
                  return (
                    <Card key={category.value} className="p-4">
                      <h4 className="font-medium mb-2">{category.label}</h4>
                      <p className="text-2xl font-bold text-agricultural-green">
                        {categoryAlerts.length}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {categoryAlerts.filter(a => a.isNew).length} नए अलर्ट
                      </p>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>
          </Tabs>

          {/* Quick Stats */}
          <div className="mt-6 pt-4 border-t">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-red-500">
                  {alerts.filter(a => a.priority === 'critical').length}
                </p>
                <p className="text-xs text-muted-foreground">अत्यावश्यक</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-orange-500">
                  {alerts.filter(a => a.priority === 'high').length}
                </p>
                <p className="text-xs text-muted-foreground">महत्वपूर्ण</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-blue-500">
                  {alerts.filter(a => a.type === 'schemes').length}
                </p>
                <p className="text-xs text-muted-foreground">योजनाएं</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-agricultural-green">
                  {alerts.filter(a => a.isNew).length}
                </p>
                <p className="text-xs text-muted-foreground">नए अलर्ट</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GovernmentAlerts;