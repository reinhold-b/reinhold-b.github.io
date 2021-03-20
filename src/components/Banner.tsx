import React from 'react';

export const Banner: React.FC = ({children}) => {
    return (
        <div className="flex px-4 sm:px-6 md:px-10 lg:px-20 py:10 rounded bg-gray-900">
            {children}
        </div>
    )
}