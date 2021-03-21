import React from "react";

class WelcomeMsg extends React.Component {
    render() {
        return (
            <div className="flex justify-center my-10 sm:my-0 flex-col text-4xl lg:text-5xl xl:text-6xl font-extrabold text-indigo-600 text-opacity-90">
                <h1>Hey there!</h1>
                <h1>I am Reinhold</h1>
                <hr id="divider" className="my-6 md:my-8"/>
                <div className="text-lg text-indigo-500 text-opacity-80 w-80">
                    I am student who enjoys coding and learning new technologies to make great projects in the future.
                    Right now I am developing a Flutter app and learning ReactJS.
                </div>
            </div>
       )
    }
}

export {
    WelcomeMsg
}