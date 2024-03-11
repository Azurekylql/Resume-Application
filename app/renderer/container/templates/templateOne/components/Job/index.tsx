/**
 * @desc 求职意向
 * @author lql
 */
import React from 'react';
import '../../../styles/template-one.less';
import './index.less';

function Job() {
  return (
    <div styleName="container">
      <p styleName="title">求职意向 Work</p>
      <ul styleName="content">
        <li>职位：工程师</li>
        <li>城市：广州｜深圳</li>
      </ul>
    </div>
  );
}

export default Job;
