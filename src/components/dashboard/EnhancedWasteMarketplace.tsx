import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  ShoppingCart, 
  Plus, 
  Search, 
  MapPin, 
  Phone, 
  Clock,
  Truck,
  Recycle,
  Leaf,
  Camera,
  Filter,
  Star,
  MessageCircle
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const EnhancedWasteMarketplace = () => {
  const [activeTab, setActiveTab] = useState("buy");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isAddListingOpen, setIsAddListingOpen] = useState(false);
  const [newListing, setNewListing] = useState({
    type: "sell",
    title: "",
    category: "",
    quantity: "",
    unit: "",
    price: "",
    description: "",
    location: "",
    contact: "",
    images: []
  });
  const { toast } = useToast();

  const categories = [
    { value: "all", label: "सभी श्रेणियां" },
    { value: "crop_residue", label: "फसल अवशेष" },
    { value: "animal_waste", label: "पशु अपशिष्ट" },
    { value: "organic_matter", label: "जैविक पदार्थ" },
    { value: "equipment", label: "पुराने उपकरण" },
    { value: "packaging", label: "पैकेजिंग सामग्री" }
  ];

  const listings = [
    {
      id: "1",
      type: "sell",
      title: "धान की पराली (Rice Straw)",
      seller: "राम सिंह",
      category: "crop_residue",
      price: "₹800",
      quantity: "10 टन",
      location: "कुरुक्षेत्र, हरियाणा",
      distance: "5 km",
      contact: "+91 98xxx-xxxxx",
      rating: 4.5,
      reviews: 12,
      description: "उच्च गुणवत्ता वाली धान की पराली। कंपोस्ट बनाने के लिए उत्तम।",
      images: ["straw1.jpg", "straw2.jpg"],
      postedTime: "2 घंटे पहले",
      urgent: false,
      verified: true
    },
    {
      id: "2", 
      type: "buy",
      title: "गाय का गोबर चाहिए (Cow Dung Required)",
      buyer: "श्याम लाल",
      category: "animal_waste",
      price: "₹200",
      quantity: "5 टन",
      location: "पानीपत, हरियाणा",
      distance: "12 km",
      contact: "+91 99xxx-xxxxx",
      rating: 4.2,
      reviews: 8,
      description: "जैविक खाद बनाने के लिए ताजा गाय का गोबर चाहिए।",
      images: [],
      postedTime: "4 घंटे पहले",
      urgent: true,
      verified: true
    },
    {
      id: "3",
      type: "sell",
      title: "गन्ने की खोई (Sugarcane Bagasse)",
      seller: "सुरेश कुमार",
      category: "crop_residue", 
      price: "₹600",
      quantity: "8 टन",
      location: "मुजफ्फरनगर, UP",
      distance: "25 km",
      contact: "+91 97xxx-xxxxx",
      rating: 4.8,
      reviews: 25,
      description: "चीनी मिल से ताजी खोई। बायो-फ्यूल और कंपोस्ट के लिए बेहतरीन।",
      images: ["bagasse1.jpg"],
      postedTime: "1 दिन पहले",
      urgent: false,
      verified: true
    },
    {
      id: "4",
      type: "sell",
      title: "पुराना ट्रैक्टर (Old Tractor Parts)",
      seller: "विकास यादव",
      category: "equipment",
      price: "₹15,000",
      quantity: "1 set",
      location: "सोनीपत, हरियाणा", 
      distance: "8 km",
      contact: "+91 96xxx-xxxxx",
      rating: 4.0,
      reviews: 5,
      description: "मसी फर्गुसन के पुराने पार्ट्स। स्कैप या रिपेयर के लिए।",
      images: ["tractor1.jpg", "tractor2.jpg"],
      postedTime: "3 दिन पहले",
      urgent: false,
      verified: false
    }
  ];

  const filteredListings = listings.filter(listing => {
    const matchesSearch = listing.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         listing.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || listing.category === selectedCategory;
    const matchesType = activeTab === "all" || listing.type === activeTab;
    
    return matchesSearch && matchesCategory && matchesType;
  });

  const handleAddListing = () => {
    if (!newListing.title || !newListing.category || !newListing.price) {
      toast({
        title: "अधूरी जानकारी",
        description: "कृपया सभी आवश्यक जानकारी भरें",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "लिस्टिंग जोड़ी गई",
      description: "आपकी लिस्टिंग सफलतापूर्वक जोड़ दी गई है",
    });

    setIsAddListingOpen(false);
    setNewListing({
      type: "sell",
      title: "",
      category: "",
      quantity: "",
      unit: "",
      price: "",
      description: "",
      location: "",
      contact: "",
      images: []
    });
  };

  return (
    <div className="space-y-6">
      <Card className="shadow-agricultural">
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <CardTitle className="flex items-center gap-2 text-agricultural-green">
              <Recycle className="h-5 w-5" />
              कृषि अपशिष्ट बाज़ार (Agricultural Waste Marketplace)
            </CardTitle>
            
            <Dialog open={isAddListingOpen} onOpenChange={setIsAddListingOpen}>
              <DialogTrigger asChild>
                <Button className="bg-gradient-agricultural">
                  <Plus className="h-4 w-4 mr-2" />
                  नई लिस्टिंग जोड़ें
                </Button>
              </DialogTrigger>
              
              <DialogContent className="sm:max-w-md max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>नई लिस्टिंग जोड़ें</DialogTitle>
                </DialogHeader>
                
                <div className="space-y-4">
                  <div className="flex gap-2">
                    <Button
                      variant={newListing.type === "sell" ? "default" : "outline"}
                      onClick={() => setNewListing({...newListing, type: "sell"})}
                      className="flex-1"
                    >
                      बेचना है
                    </Button>
                    <Button
                      variant={newListing.type === "buy" ? "default" : "outline"}
                      onClick={() => setNewListing({...newListing, type: "buy"})}
                      className="flex-1"
                    >
                      खरीदना है
                    </Button>
                  </div>

                  <div>
                    <Label htmlFor="title">शीर्षक *</Label>
                    <Input
                      id="title"
                      placeholder="जैसे: धान की पराली"
                      value={newListing.title}
                      onChange={(e) => setNewListing({...newListing, title: e.target.value})}
                    />
                  </div>

                  <div>
                    <Label htmlFor="category">श्रेणी *</Label>
                    <Select value={newListing.category} onValueChange={(value) => setNewListing({...newListing, category: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="श्रेणी चुनें" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.slice(1).map((category) => (
                          <SelectItem key={category.value} value={category.value}>
                            {category.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <Label htmlFor="quantity">मात्रा</Label>
                      <Input
                        id="quantity"
                        placeholder="10"
                        value={newListing.quantity}
                        onChange={(e) => setNewListing({...newListing, quantity: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="unit">इकाई</Label>
                      <Select value={newListing.unit} onValueChange={(value) => setNewListing({...newListing, unit: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="टन" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ton">टन</SelectItem>
                          <SelectItem value="quintal">क्विंटल</SelectItem>
                          <SelectItem value="kg">किलोग्राम</SelectItem>
                          <SelectItem value="piece">पीस</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="price">मूल्य *</Label>
                    <Input
                      id="price"
                      placeholder="₹800 प्रति टन"
                      value={newListing.price}
                      onChange={(e) => setNewListing({...newListing, price: e.target.value})}
                    />
                  </div>

                  <div>
                    <Label htmlFor="location">स्थान</Label>
                    <Input
                      id="location"
                      placeholder="गांव, जिला, राज्य"
                      value={newListing.location}
                      onChange={(e) => setNewListing({...newListing, location: e.target.value})}
                    />
                  </div>

                  <div>
                    <Label htmlFor="contact">संपर्क नंबर</Label>
                    <Input
                      id="contact"
                      placeholder="+91 98xxx-xxxxx"
                      value={newListing.contact}
                      onChange={(e) => setNewListing({...newListing, contact: e.target.value})}
                    />
                  </div>

                  <div>
                    <Label htmlFor="description">विवरण</Label>
                    <Textarea
                      id="description"
                      placeholder="अपशिष्ट की गुणवत्ता, उपयोग आदि के बारे में बताएं..."
                      value={newListing.description}
                      onChange={(e) => setNewListing({...newListing, description: e.target.value})}
                      rows={3}
                    />
                  </div>

                  <Button 
                    onClick={handleAddListing}
                    className="w-full bg-gradient-agricultural"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    लिस्टिंग जोड़ें
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>

        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="all">सभी लिस्टिंग</TabsTrigger>
              <TabsTrigger value="buy">खरीदना चाहते हैं</TabsTrigger>
              <TabsTrigger value="sell">बेचना चाहते हैं</TabsTrigger>
            </TabsList>

            {/* Filters */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="अपशिष्ट या स्थान खोजें..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="श्रेणी चुनें" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                फिल्टर
              </Button>
            </div>

            <TabsContent value={activeTab} className="space-y-4 mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredListings.map((listing) => (
                  <Card key={listing.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="space-y-3">
                        {/* Header */}
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="font-semibold text-lg">{listing.title}</h4>
                              {listing.urgent && (
                                <Badge className="bg-red-500 text-white text-xs animate-pulse">
                                  तुरंत
                                </Badge>
                              )}
                              {listing.verified && (
                                <Badge className="bg-green-500 text-white text-xs">
                                  ✓ सत्यापित
                                </Badge>
                              )}
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <span>{listing.type === "sell" ? listing.seller : listing.buyer}</span>
                              <div className="flex items-center gap-1">
                                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                <span>{listing.rating}</span>
                                <span>({listing.reviews})</span>
                              </div>
                            </div>
                          </div>
                          <Badge 
                            variant={listing.type === "sell" ? "default" : "secondary"}
                            className={listing.type === "sell" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"}
                          >
                            {listing.type === "sell" ? "बिक्री" : "खरीद"}
                          </Badge>
                        </div>

                        {/* Description */}
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {listing.description}
                        </p>

                        {/* Details */}
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div className="flex items-center gap-1">
                            <ShoppingCart className="h-3 w-3 text-agricultural-green" />
                            <span className="font-medium">{listing.price}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Truck className="h-3 w-3 text-blue-500" />
                            <span>{listing.quantity}</span>
                          </div>
                        </div>

                        {/* Location & Time */}
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            <span>{listing.location}</span>
                            <span>({listing.distance})</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            <span>{listing.postedTime}</span>
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="flex gap-2 pt-2">
                          <Button size="sm" className="flex-1 bg-gradient-agricultural">
                            <Phone className="h-3 w-3 mr-1" />
                            संपर्क करें
                          </Button>
                          <Button size="sm" variant="outline" className="flex-1">
                            <MessageCircle className="h-3 w-3 mr-1" />
                            चैट
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {filteredListings.length === 0 && (
                <div className="text-center py-8">
                  <Leaf className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h4 className="text-lg font-medium mb-2">कोई लिस्टिंग नहीं मिली</h4>
                  <p className="text-muted-foreground">
                    अपनी खोज में बदलाव करें या नई लिस्टिंग जोड़ें
                  </p>
                </div>
              )}
            </TabsContent>
          </Tabs>

          {/* Stats */}
          <div className="mt-6 pt-4 border-t">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-agricultural-green">1,250+</p>
                <p className="text-xs text-muted-foreground">कुल लिस्टिंग</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-agricultural-green">₹15L+</p>
                <p className="text-xs text-muted-foreground">महीने का कारोबार</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-agricultural-green">850+</p>
                <p className="text-xs text-muted-foreground">सक्रिय उपयोगकर्ता</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-agricultural-green">95%</p>
                <p className="text-xs text-muted-foreground">सफल लेन-देन</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EnhancedWasteMarketplace;