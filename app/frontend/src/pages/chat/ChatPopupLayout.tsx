import React, { ReactNode, useState } from "react";
// Import the background image
import backgroundImg from "../../assets/backgroundimg.png";
import sparkleImg from '../../assets/sparkle.png';

interface ChatPopupLayoutProps {
    children: ReactNode; 
}

const ChatPopupLayout: React.FC<ChatPopupLayoutProps> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div className="relative min-h-screen w-full">
        {/* Background Image */}
        <div 
          className="fixed inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${backgroundImg})` 
          }}
        />
  
        {/* Chat Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-lg transition-all duration-300 ease-in-out
            ${isOpen ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'}`}
        >
          <img 
            src={sparkleImg} 
            alt="Chat Button" 
            className="w-8 h-8"
          />
        </button>
  
        {/* Chat Panel */}
        <div
          className={`fixed right-0 top-0 h-full bg-white shadow-2xl transition-all duration-300 ease-in-out transform
            ${isOpen ? 'translate-x-0' : 'translate-x-full'}
            w-full sm:w-[400px] md:w-[450px] lg:w-[500px]`}
        >
          <div className="h-full overflow-hidden">
            {children}
          </div>
        </div>
      </div>
    );
  };
  
  export default ChatPopupLayout;