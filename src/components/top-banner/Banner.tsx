import React from "react";
import { BannerImage } from "./BannerImage";
import { WelcomeMsg } from "./BannerWelcome";

class Banner extends React.Component {
    render() {
        return (
            <div className="flex justify-center w-full bg-indigo-50 p-6 md:p-10 rounded-3xl shadow-inner">
                <div className="flex justify-evenly flex-col sm:flex-row w-full">  
                    <BannerImage/>
                    <WelcomeMsg/>
                </div>
            </div>
        )
    }
}

export {
    Banner
}