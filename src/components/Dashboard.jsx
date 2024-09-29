import React from 'react';
import FileViewer from './FileViewer';

function Dashboard() {
    return (
        <div className="flex h-screen">
            <div className='Center'>
                LOGO
            </div>

            <div className="flex-1 flex items-center justify-center border-r border-gray-300">

                <h1 className="text-xl">Dashboard</h1>
            </div>
            <div className="border-l border-gray-300" style={{ width: '1px' }}></div>
            <div className="flex-1 flex items-center justify-center">
                <div>
                    <FileViewer />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
