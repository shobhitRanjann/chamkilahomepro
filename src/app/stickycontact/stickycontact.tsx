"use client"

import { useState, memo } from "react";
import { FaWhatsapp, FaPhone } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { MdContactSupport } from "react-icons/md";
interface StickyContactProps {
    phoneNumber?: string;
    whatsappNumber?: string;
    enableWhatsapp?: boolean;
    enableCall?: boolean;
    showDelay?: number;
}

const StickyContact = memo<StickyContactProps>(({ 
    phoneNumber = "+918802282721",
    enableWhatsapp = true,
    enableCall = true,
}) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isVisible] = useState(true);


    const handleWhatsAppClick = () => {
        try {
            window.open(`https://wa.me/8700667107?text=I'm%20interested%20in%20your%20service%20for%20homecleaning`, "_blank");
        } catch (error) {
            console.error("Error opening WhatsApp:", error);
        }
    };

    const handleCallClick = () => {
        try {
            window.location.href = `tel:${phoneNumber}`;
        } catch (error) {
            console.error("Error initiating call:", error);
        }
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-4 right-4 z-50">
            {isExpanded && (
                <div className="flex flex-col space-y-4 animate-fadeIn">
                    {enableWhatsapp && (
                        <button
                            onClick={handleWhatsAppClick}
                            aria-label="Contact via WhatsApp"
                            className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transform hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
                        >
                            <FaWhatsapp className="text-4xl" />
                        </button>
                    )}
                    {enableCall && (
                        <button
                            onClick={handleCallClick}
                            aria-label="Contact via Phone"
                            className="bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transform hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                        >
                            <FaPhone className="text-4xl" />
                        </button>
                    )}
                </div>
            )}
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                aria-label={isExpanded ? "Close contact options" : "Open contact options"}
                className="bg-green-600 text-white p-6 rounded-full shadow-lg hover:bg-green-800 transform hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 animate-bounce"
            >
                {isExpanded ? (
                    <IoMdClose className="text-2xl" />
                ) : (
                    <MdContactSupport className="text-2xl" />
                )}
            </button>
        </div>
    );
});

StickyContact.displayName = "StickyContact";



export default StickyContact;