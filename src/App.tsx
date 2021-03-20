import React from 'react';
import { Skeleton } from './components/AppSkeleton';
import {Banner} from './components/top-banner/Banner';

class App extends React.Component {
    render() {
        return (
            <Skeleton>
                <Banner />
            </Skeleton>
        )
    }
}

export default App;