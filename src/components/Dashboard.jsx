import React from 'react';
import FileViewer from './FileViewer';
import Groqs from './Groqs';
import Header from './Header';
function Dashboard() {
    return (
        <div className="flex h-screen">
            <Header/>

            <div className="flex-1 flex items-center justify-center">
                <div>
                    <FileViewer />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
