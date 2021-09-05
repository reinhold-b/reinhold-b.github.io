import React from 'react';
import { Skeleton } from './components/AppSkeleton';
import { PSkeleton } from './components/ProjectSkeleton';
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
            <PSkeleton>
            </PSkeleton>
            </div>
        )
    }
}

export default App;