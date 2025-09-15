import Header from "@/components/Header";
import FeatureCards from "@/components/dashboard/FeatureCards";
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
      
      {/* Top Feature Cards */}
      <main className="container mx-auto px-4 py-8">
        <FeatureCards />
        
        {/* Detailed Sections */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <EnhancedWeatherWidget />
          <EnhancedMandiPrices />
        </div>
        
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <IoTSensorDashboard />
          <EnhancedWasteMarketplace />
        </div>
        
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <GovernmentAlerts />
          <QuickActions />
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
