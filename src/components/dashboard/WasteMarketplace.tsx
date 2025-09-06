import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingBag, Plus, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const WasteMarketplace = () => {
  const listings = [
    {
      title: "गेहूं की भूसी (Wheat Straw)",
      price: "₹3/kg",
      quantity: "500 kg",
      location: "Kharkhoda",
      seller: "मोहन सिंह",
      type: "sell"
    },
    {
      title: "धान की भूसी (Rice Straw)", 
      price: "₹2.5/kg",
      quantity: "300 kg",
      location: "Panipat",
      seller: "राज कुमार",
      type: "sell"
    },
    {
      title: "गोबर खाद (Cow Dung)",
      price: "₹5/kg",
      quantity: "200 kg",
      location: "Sonipat", 
      seller: "सुरेश यादव",
      type: "buy"
    }
  ];

  return (
    <Card className="shadow-agricultural">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-agricultural-green">
            <ShoppingBag className="h-5 w-5" />
            कृषि अपशिष्ट बाज़ार
          </CardTitle>
          <Button size="sm" className="bg-gradient-agricultural text-white border-0">
            <Plus className="h-4 w-4 mr-1" />
            Add Listing
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {listings.map((listing, index) => (
          <div key={index} className="border rounded-lg p-3 hover:bg-muted/50 transition-colors">
            <div className="flex items-start justify-between mb-2">
              <div className="flex-1">
                <h4 className="font-medium text-sm">{listing.title}</h4>
                <p className="text-xs text-muted-foreground">by {listing.seller}</p>
              </div>
              <Badge 
                variant={listing.type === "sell" ? "default" : "secondary"}
                className="text-xs"
              >
                {listing.type === "sell" ? "Selling" : "Buying"}
              </Badge>
            </div>
            
            <div className="grid grid-cols-3 gap-2 text-xs">
              <div>
                <p className="text-muted-foreground">Price</p>
                <p className="font-bold text-agricultural-green">{listing.price}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Quantity</p>
                <p className="font-medium">{listing.quantity}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Location</p>
                <p className="font-medium">{listing.location}</p>
              </div>
            </div>
            
            <div className="flex gap-2 mt-3">
              <Button size="sm" variant="outline" className="flex-1 text-xs">
                Contact
              </Button>
              <Button size="sm" className="flex-1 text-xs bg-agricultural-green">
                {listing.type === "sell" ? "Buy Now" : "Sell Now"}
              </Button>
            </div>
          </div>
        ))}
        
        <div className="text-center pt-2 border-t">
          <Button variant="ghost" size="sm" className="text-xs text-muted-foreground">
            <Package className="h-3 w-3 mr-1" />
            View All Listings (23)
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default WasteMarketplace;