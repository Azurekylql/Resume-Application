import React from 'react';
import './index.less';
import { useHistory } from 'react-router';

// 编写Header组件
function Header() {
    const history = useHistory();
    const goBack = () => history.push('/');
    return (
        <div styleName="header">
            <div styleName="back" onClick={goBack}>
                返回
            </div>
            <p styleName="title">软件介绍</p>
        </div>
    );
}
export default Header;