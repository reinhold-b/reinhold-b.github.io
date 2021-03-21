import React from "react";

class WelcomeMsg extends React.Component {
    render() {
        return (
            <div className="flex justify-center my-10 sm:my-0 flex-col text-4xl lg:text-5xl xl:text-6xl font-extrabold text-indigo-600 text-opacity-90">
                <h1>Hey there!</h1>
                <h1>I am Reinhold</h1>
                <hr id="divider" className="my-6 md:my-8"/>
                <a href="https://github.com/reinhold-b">
                    <button className="bg-indigo-800 hover:bg-indigo-500 w-60 h-12 lg:h-20 shadow-2xl rounded-2xl lg:rounded-3xl">
                        <p className="text-white font-bold text-2xl lg:text-4xl">
                           GitHub
                        </p>
                    </button>
                </a>
            </div>
       )
    }
}

export {
    WelcomeMsg
}