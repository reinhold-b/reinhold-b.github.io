import React from 'react';

export const PSkeleton: React.FC = ({children}) => {
    return (
        <div className="flex justify-center flex-col px-4 sm:px-6 md:px-10 lg:px-20 py:10 my-4 md:my-10 lg:my-16">
            {children}
        </div>
    )
}