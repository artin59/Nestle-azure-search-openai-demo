import React, { ReactNode, useState } from "react";
// Import the background image
import backgroundImg from "../../assets/backgroundimg.png";
import sparkleImg from '../../assets/sparkle.png';

interface ChatPopupLayoutProps {
    children: ReactNode;
}

const ChatPopupLayout: React.FC<ChatPopupLayoutProps> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
        console.log('Chat panel open:', !isOpen);
    };

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
                onClick={handleClick}
                className={`fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-lg transition-all duration-300 ease-in-out
                ${isOpen ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'}`}
            >
                <img
                    src={sparkleImg}
                    alt="Chat Button"
                    className="w-6 h-6"
                />
            </button>

            {/* Chat Panel */}
            <div
                className={`fixed bottom-6 right-6 w-[350px] sm:w-[400px] md:w-[450px] lg:w-[500px] 
                ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'} 
                transform transition-all duration-300 ease-in-out bg-white shadow-2xl rounded-lg z-50`}
            >
                <div className="h-full overflow-hidden">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default ChatPopupLayout;
