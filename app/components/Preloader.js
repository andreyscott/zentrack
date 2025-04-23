import React from 'react';

const Preloader = () => {
    return (
        // Full screen overlay with gradient background and video
        <div className="fixed inset-0 z-50 flex flex-col justify-between bg-gradient-to-br from-black to-gray-800 text-white font-sans">
            {/* Full-screen video background */}
            <video
                autoPlay
                loop
                muted
                className="absolute inset-0 w-full h-full object-contain z-0"
                src="/clock.webm"
                type="video/mp4"
            />

            {/* Overlay content */}
            <div className="relative z-10 flex items-center justify-center flex-grow"></div>

            {/* Loading animation at the bottom */}
            <div className="relative z-10 flex items-center justify-center pb-10">
                {/* Bouncing dots animation */}
                <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-white rounded-full animate-bounce"></div>
                    <div className="w-3 h-3 bg-white rounded-full animate-bounce delay-200"></div>
                    <div className="w-3 h-3 bg-white rounded-full animate-bounce delay-400"></div>
                </div>
            </div>
        </div>
    );
};

export default Preloader;