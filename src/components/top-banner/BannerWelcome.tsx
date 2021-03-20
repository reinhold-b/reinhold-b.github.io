import React from "react";

class WelcomeMsg extends React.Component {
    render() {
        return (
            <div className="flex justify-center my-10 sm:my-0 flex-col text-4xl lg:text-5xl xl:text-6xl font-extrabold text-black text-opacity-90">
                <h1>Hey there!</h1>
                <h1>I am Reinhold</h1>
            </div>
       )
    }
}

export {
    WelcomeMsg
}