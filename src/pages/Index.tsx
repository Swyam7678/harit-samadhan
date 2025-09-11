import Header from "@/components/Header";
import EnhancedMandiPrices from "@/components/dashboard/EnhancedMandiPrices";
import EnhancedWeatherWidget from "@/components/dashboard/EnhancedWeatherWidget";
import IoTSensorDashboard from "@/components/dashboard/IoTSensorDashboard";
import EnhancedWasteMarketplace from "@/components/dashboard/EnhancedWasteMarketplace";
import GovernmentAlerts from "@/components/dashboard/GovernmentAlerts";
import QuickActions from "@/components/dashboard/QuickActions";
import ChatBot from "@/components/ChatBot";
import farmingHero from "@/assets/farming-hero.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <img 
          src={farmingHero} 
          alt="Modern Farming with Digital Technology"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl text-white">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                स्मार्ट खेती का भविष्य
              </h1>
              <p className="text-lg md:text-xl opacity-90 mb-6">
                Real-time market prices, weather updates, soil health monitoring, and government schemes - all in one platform
              </p>
              <div className="flex gap-3">
                <button className="bg-gradient-agricultural px-6 py-3 rounded-lg font-semibold text-white hover:shadow-elevated transition-all">
                  Get Started
                </button>
                <button className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg font-semibold text-white border border-white/30 hover:bg-white/30 transition-all">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Dashboard */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {/* Enhanced Weather Widget */}
          <div className="xl:col-span-1">
            <EnhancedWeatherWidget />
          </div>
          
          {/* Enhanced Mandi Prices */}
          <div className="xl:col-span-1">
            <EnhancedMandiPrices />
          </div>
          
          {/* IoT Sensor Dashboard */}
          <div className="xl:col-span-1">
            <IoTSensorDashboard />
          </div>
          
          {/* Enhanced Waste Marketplace */}
          <div className="xl:col-span-1">
            <EnhancedWasteMarketplace />
          </div>
          
          {/* Government Alerts */}
          <div className="xl:col-span-1">
            <GovernmentAlerts />
          </div>
          
          {/* Quick Actions */}
          <div className="xl:col-span-1">
            <QuickActions />
          </div>
        </div>
        
        {/* Footer Stats */}
        <section className="mt-12 bg-gradient-agricultural p-8 rounded-2xl text-white">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <h3 className="text-3xl font-bold mb-2">50,000+</h3>
              <p className="opacity-90">Registered Farmers</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-2">500+</h3>
              <p className="opacity-90">Connected Mandis</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-2">1,200+</h3>
              <p className="opacity-90">Active Listings</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-2">₹2.5Cr+</h3>
              <p className="opacity-90">Transactions Value</p>
            </div>
          </div>
        </section>
      </main>
      
      {/* ChatBot */}
      <ChatBot />
    </div>
  );
};

export default Index;
