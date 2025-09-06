import { useState } from "react";
import { MessageCircle, X, Send, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'नमस्ते! मैं कृषिसाथी हूं। मैं आपकी खेती संबंधी समस्याओं में मदद कर सकता हूं। आप मुझसे मंडी भाव, मौसम, फसल की देखभाल या सरकारी योजनाओं के बारे में पूछ सकते हैं।',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const sendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputMessage),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const getBotResponse = (message: string): string => {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('मंडी') || lowerMessage.includes('भाव') || lowerMessage.includes('price')) {
      return 'आप हमारे मंडी भाव सेक्शन में real-time कीमतें देख सकते हैं। किस फसल की कीमत जानना चाहते हैं?';
    } else if (lowerMessage.includes('मौसम') || lowerMessage.includes('weather')) {
      return 'मौसम की जानकारी के लिए हमारा Weather Widget देखें। आज का तापमान और 5 दिन का पूर्वानुमान उपलब्ध है।';
    } else if (lowerMessage.includes('मिट्टी') || lowerMessage.includes('npk') || lowerMessage.includes('soil')) {
      return 'आपकी मिट्टी की NPK स्थिति dashboard पर उपलब्ध है। नाइट्रोजन, फास्फोरस और पोटैशियम के लेवल चेक करें।';
    } else if (lowerMessage.includes('योजना') || lowerMessage.includes('scheme')) {
      return 'सरकारी योजनाओं की जानकारी Advisories section में मिलेगी। PM-KISAN, फसल बीमा जैसी योजनाओं की updates वहां हैं।';
    } else {
      return 'मैं आपकी मदद करने के लिए यहां हूं। आप मुझसे खेती, मंडी भाव, मौसम, या सरकारी योजनाओं के बारे में पूछ सकते हैं।';
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={toggleChat}
          size="lg"
          className="rounded-full h-14 w-14 bg-gradient-agricultural shadow-elevated hover:shadow-lg transition-all duration-300 hover:scale-105"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <MessageCircle className="h-6 w-6" />
          )}
        </Button>
      </div>

      {/* Chat Interface */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 w-80 md:w-96">
          <Card className="shadow-elevated border-border/50 backdrop-blur-sm bg-card/95">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Bot className="h-5 w-5 text-primary" />
                कृषिसाथी
                <span className="text-xs bg-gradient-agricultural text-white px-2 py-1 rounded-full ml-auto">
                  AI Assistant
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <ScrollArea className="h-64 px-4">
                <div className="space-y-3 py-2">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] p-3 rounded-lg text-sm ${
                          message.sender === 'user'
                            ? 'bg-gradient-agricultural text-white'
                            : 'bg-muted text-foreground'
                        }`}
                      >
                        {message.text}
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
              
              <div className="p-4 border-t border-border/50">
                <div className="flex gap-2">
                  <Input
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="अपना सवाल पूछें..."
                    className="flex-1"
                  />
                  <Button
                    onClick={sendMessage}
                    size="sm"
                    className="bg-gradient-agricultural hover:opacity-90"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default ChatBot;