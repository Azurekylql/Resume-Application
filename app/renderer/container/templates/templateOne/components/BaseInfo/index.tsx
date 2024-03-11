/**
 * @desc 基本信息
 * @author lql
 */
import React from 'react';
import '../../../styles/template-one.less';

function BaseInfo() {
  return (
    <div styleName="container">
      <p styleName="title">基本信息 Basic</p>
      <ul styleName="content">
        <li>院校：暨南大学</li>
        <li>专业：计算机科学与技术</li>
        <li>学历：本科</li>
        <li>学年：2021.09 - 2025.06</li>
        <li>籍贯：广东·广州</li>
      </ul>
    </div>
  );
}

export default BaseInfo;
