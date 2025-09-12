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

      {/* Main Dashboard - 5 Feature Cards */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {/* Weather Card */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl p-6 border border-blue-200 dark:border-blue-700 hover:shadow-lg transition-all cursor-pointer">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.003 4.003 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">मौसम अपडेट</h3>
              <p className="text-sm text-blue-700 dark:text-blue-300 mb-4">रियल-टाइम मौसम की जानकारी</p>
              <div className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-1">28°C</div>
              <div className="text-xs text-blue-600 dark:text-blue-400">धूप, हल्की हवा</div>
            </div>
          </div>

          {/* Mandi Prices Card */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl p-6 border border-green-200 dark:border-green-700 hover:shadow-lg transition-all cursor-pointer">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-2">मंडी भाव</h3>
              <p className="text-sm text-green-700 dark:text-green-300 mb-4">आज के बाजार रेट</p>
              <div className="text-2xl font-bold text-green-900 dark:text-green-100 mb-1">₹2,850</div>
              <div className="text-xs text-green-600 dark:text-green-400">गेहूं (प्रति क्विंटल)</div>
            </div>
          </div>

          {/* Soil Monitoring Card */}
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/20 rounded-xl p-6 border border-amber-200 dark:border-amber-700 hover:shadow-lg transition-all cursor-pointer">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-amber-900 dark:text-amber-100 mb-2">मिट्टी की जांच</h3>
              <p className="text-sm text-amber-700 dark:text-amber-300 mb-4">NPK सेंसर डेटा</p>
              <div className="text-2xl font-bold text-amber-900 dark:text-amber-100 mb-1">85%</div>
              <div className="text-xs text-amber-600 dark:text-amber-400">मिट्टी की गुणवत्ता</div>
            </div>
          </div>

          {/* Waste Marketplace Card */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-xl p-6 border border-purple-200 dark:border-purple-700 hover:shadow-lg transition-all cursor-pointer">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l-1 12H6L5 9z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-2">कृषि बाजार</h3>
              <p className="text-sm text-purple-700 dark:text-purple-300 mb-4">अपशिष्ट खरीदें-बेचें</p>
              <div className="text-2xl font-bold text-purple-900 dark:text-purple-100 mb-1">450+</div>
              <div className="text-xs text-purple-600 dark:text-purple-400">सक्रिय लिस्टिंग</div>
            </div>
          </div>

          {/* Government Schemes Card */}
          <div className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 rounded-xl p-6 border border-red-200 dark:border-red-700 hover:shadow-lg transition-all cursor-pointer">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM9 12l2 2 4-4M21 12c0 4.418-4.03 8-9 8s-9-3.582-9-8 4.03-8 9-8 9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-red-900 dark:text-red-100 mb-2">सरकारी योजनाएं</h3>
              <p className="text-sm text-red-700 dark:text-red-300 mb-4">अलर्ट और सब्सिडी</p>
              <div className="text-2xl font-bold text-red-900 dark:text-red-100 mb-1">12</div>
              <div className="text-xs text-red-600 dark:text-red-400">नई अधिसूचनाएं</div>
            </div>
          </div>
        </div>
        
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
