import React from 'react';
import StatsGrid from './StatsGrid';
import ChartSection from './ChartSection';
import TableSection from './TableSection';
import Activityfeed from './Activityfeed';

const Dashboard =()=> {
    return (
        <div className='space-y-6'>
            {/*Stats Grid */}
            <StatsGrid />
            
            {/* Charts Sections*/}
            <ChartSection/>

            <div className='grid grid-cols-1 xl:grid-cols-3 gap-6'>
                <div className='xl:col-span-2'>
                    <TableSection />
                </div>
                <div>
                    <Activityfeed />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;