import { Cloud, TrendingUp, TestTube, ShoppingCart, FileText } from "lucide-react";

const FeatureCards = () => {
  const features = [
    {
      id: "weather",
      title: "मौसम अपडेट", 
      subtitle: "रियल-टाइम मौसम की जानकारी",
      value: "28°C",
      description: "धूप, हल्की हवा",
      icon: Cloud,
      gradient: "from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20",
      border: "border-blue-200 dark:border-blue-700",
      iconBg: "bg-blue-500",
      textColors: {
        title: "text-blue-900 dark:text-blue-100",
        subtitle: "text-blue-700 dark:text-blue-300", 
        value: "text-blue-900 dark:text-blue-100",
        description: "text-blue-600 dark:text-blue-400"
      }
    },
    {
      id: "mandi",
      title: "मंडी भाव",
      subtitle: "आज के बाजार रेट", 
      value: "₹2,850",
      description: "गेहूं (प्रति क्विंटल)",
      icon: TrendingUp,
      gradient: "from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20",
      border: "border-green-200 dark:border-green-700",
      iconBg: "bg-green-500",
      textColors: {
        title: "text-green-900 dark:text-green-100",
        subtitle: "text-green-700 dark:text-green-300",
        value: "text-green-900 dark:text-green-100", 
        description: "text-green-600 dark:text-green-400"
      }
    },
    {
      id: "soil",
      title: "मिट्टी की जांच",
      subtitle: "NPK सेंसर डेटा",
      value: "85%", 
      description: "मिट्टी की गुणवत्ता",
      icon: TestTube,
      gradient: "from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/20",
      border: "border-amber-200 dark:border-amber-700",
      iconBg: "bg-amber-500",
      textColors: {
        title: "text-amber-900 dark:text-amber-100",
        subtitle: "text-amber-700 dark:text-amber-300",
        value: "text-amber-900 dark:text-amber-100",
        description: "text-amber-600 dark:text-amber-400"
      }
    },
    {
      id: "marketplace", 
      title: "कृषि बाजार",
      subtitle: "अपशिष्ट खरीदें-बेचें",
      value: "450+",
      description: "सक्रिय लिस्टिंग",
      icon: ShoppingCart,
      gradient: "from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20", 
      border: "border-purple-200 dark:border-purple-700",
      iconBg: "bg-purple-500",
      textColors: {
        title: "text-purple-900 dark:text-purple-100",
        subtitle: "text-purple-700 dark:text-purple-300",
        value: "text-purple-900 dark:text-purple-100",
        description: "text-purple-600 dark:text-purple-400"
      }
    },
    {
      id: "schemes",
      title: "सरकारी योजनाएं", 
      subtitle: "अलर्ट और सब्सिडी",
      value: "12",
      description: "नई अधिसूचनाएं",
      icon: FileText,
      gradient: "from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20",
      border: "border-red-200 dark:border-red-700", 
      iconBg: "bg-red-500",
      textColors: {
        title: "text-red-900 dark:text-red-100",
        subtitle: "text-red-700 dark:text-red-300",
        value: "text-red-900 dark:text-red-100",
        description: "text-red-600 dark:text-red-400"
      }
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-8">
      {features.map((feature) => {
        const IconComponent = feature.icon;
        return (
          <div
            key={feature.id}
            className={`bg-gradient-to-br ${feature.gradient} rounded-xl p-6 border ${feature.border} hover:shadow-lg transition-all cursor-pointer`}
          >
            <div className="text-center">
              <div className={`w-16 h-16 ${feature.iconBg} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <IconComponent className="w-8 h-8 text-white" />
              </div>
              <h3 className={`text-lg font-semibold ${feature.textColors.title} mb-2`}>
                {feature.title}
              </h3>
              <p className={`text-sm ${feature.textColors.subtitle} mb-4`}>
                {feature.subtitle}
              </p>
              <div className={`text-2xl font-bold ${feature.textColors.value} mb-1`}>
                {feature.value}
              </div>
              <div className={`text-xs ${feature.textColors.description}`}>
                {feature.description}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FeatureCards;