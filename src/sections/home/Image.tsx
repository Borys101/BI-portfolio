import React from "react";

const Image = () => {
    return (
        <div className="flex justify-center items-center sm:order-1">
            <div className="relative w-[500px] h-[500px] rounded-full flex items-center justify-center p-3">
                <div className="absolute inset-0 border-2 border-accent rounded-full animate-pulse"></div>

                <img
                    src="public/assets/developer.png"
                    alt="developer"
                    className="w-full h-full object-cover rounded-full mix-blend-lighten"
                />
            </div>
        </div>
    );
};

export default Image;
