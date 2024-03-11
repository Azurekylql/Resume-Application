/**
 * @desc 简单介绍
 * @author lql
 */
import React from 'react';
import './index.less';

function Synopsis() {
  return (
    <div styleName="content">
      <p styleName="name">姓名</p>
      <p styleName="job">工程师</p>
      <p styleName="summary">
        {[
          '具备良好语言表达能力和沟通能力，能快速融入团队，适应新环境',
          '自我学习能力强，对新技术具有钻研精神',
        ].join('。')}
      </p>
    </div>
  );
}

export default Synopsis;
