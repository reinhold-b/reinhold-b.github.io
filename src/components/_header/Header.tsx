import React from 'react';
import gitIcon from '../../assets/github-icon.svg';

class Header extends React.Component {
    render() {
        return (
    <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
                    {/* <a className="mr-20 hover:text-gray-900">Blog</a>
                    <a className="hover:text-gray-900">Projects</a> */}
                </nav>
            <div className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                    <path d="M24 10.935v2.131l-8 3.947v-2.23l5.64-2.783-5.64-2.79v-2.223l8 3.948zm-16 3.848l-5.64-2.783 5.64-2.79v-2.223l-8 3.948v2.131l8 3.947v-2.23zm7.047-10.783h-2.078l-4.011 16h2.073l4.016-16z"></path>
                </svg>
                <span className="ml-3 text-xl text-black text-opacity-50">Reinhold Brant</span>
            </div>
            <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
                <a href="https://github.com/reinhold-b">
                    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                        GitHub
                        <img src={gitIcon} alt="" className="ml-2"/> 
                    </button>
                </a>
            </div>
        </div>
    </header>
        )
    }
}

export {
    Header
}