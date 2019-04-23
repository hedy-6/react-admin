//  懒加载,显示loading
import React from 'react'
import Loadable from 'react-loadable';
import { SyncLoader } from 'react-spinners';

const Loading = ({ isLoading, error }) => {
    if (isLoading) {
        return <div
         style={{position: 'fixed',left: 0,top: 0,width: '100%',height: '100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <SyncLoader
                sizeUnit={"px"}
                size={15}
                color={'#4A90E2'}
                loading={isLoading}
            />
        </div>
    }
    else if (error) { // Handle the error state
        return <div className="loading">页面加载失败,请刷新重试</div>;
    }
    else {
        return null;
    }
}

export default function MyLoadable(opts) {
    return Loadable(Object.assign({
        loading: Loading,
        delay: 300
    }, opts));
}
