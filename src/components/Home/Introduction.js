import React from "react";

function Interduce() {
    return (
        <div
            className="flex items-center justify-center w-full"
            style={{
                backgroundColor: "white", // Set background color
                minHeight: "30vh", // Set a smaller minimum height
                paddingBottom: "2rem", // Adjust bottom padding to prevent overflow
                paddingTop: "2rem", // Add top padding for better spacing
            }}
        >
            <div className="flex flex-col items-start justify-start text-left w-full max-w-screen-lg px-5">
                <div className="flex w-full flex-col md:w-full">
                    <h2 className="pb-2 text-7xl font-light tracking-wide text-black"> {/* Increased font size */}
                        Who Are We
                    </h2>
                    <p className="font-light text-xl md:text-3xl text-black pt-5 leading-relaxed max-w-[800px]"> {/* Increased font size */}
                    Bentley Architects is a boutique architectural firm located in the Sutherland Shire, dedicated to creating innovative and functional designs tailored to each client’s unique vision. With a focus on residential and small commercial projects, the firm prides itself on its personalized approach, collaborating closely with clients throughout the design and construction process. Bentley Architects emphasizes sustainability and efficiency, integrating eco-friendly practices into their designs while ensuring that each project reflects the character and lifestyle of its surroundings. Committed to excellence, the firm combines creative flair with technical expertise, transforming ideas into beautiful, livable spaces that enhance the community.
                    </p>

                    <p className="font-light text-xl md:text-3xl text-black leading-relaxed max-w-[800px] mt-4"> {/* Increased font size */}
                        Contact us today to find out more about our services and how we can help you keep your space clean and tidy.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Interduce;
