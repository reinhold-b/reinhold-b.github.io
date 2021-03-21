import React from 'react';
import { Skeleton } from './components/AppSkeleton';
import {Banner} from './components/top-banner/Banner';
import { Header } from './components/_header/Header';

class App extends React.Component {
    render() {
        return (
            <div>
            <Header/>
            <Skeleton>
                <Banner />
            </Skeleton>
            </div>
        )
    }
}

export default App;