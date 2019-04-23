import React from 'react';
import './index.less'

const SiderLogo = (props) => {
    const { collapsed } = props;
    return (
        <div className="logo-wrap">
            {collapsed ? <h2>Admin</h2> : <h2>后台管理系统</h2>}
        </div>
    );
}

export default SiderLogo;