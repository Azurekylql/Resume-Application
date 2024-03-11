/**
 * @description 按钮组件
 */

// 导入React库，用于创建React组件
import React from 'react';
// 导入classnames库，用于动态生成CSS类名。
import classnames from 'classnames';
// 导入样式文件（less文件），用于定义按钮组件的样式。
import './index.less';


// 定义一个接口（interface）Button，描述了按钮组件可以接受的各种属性
export interface Button {
    /**
     * @description 按钮大小
     */
    size?: 'middle' | 'big' | 'small';
    /**
     * @description 宽度
     */
    width?: number;
    /**
     * @description 自定义样式
     */
    style?: React.CSSProperties;
    /**
     * @description 子组件
     */
    children?: React.ReactNode | any;
    /**
     * @description 禁止
     */
    disabled?: boolean;
    /**
     * @description 样式名
     */
    className?: string;
    /**
     * @description 点击事件
     */
    onClick?: Function;
    /**
     * @description 是否显示边框
     */
    border?: boolean;
}

// 定义了名为MyButton的React函数组件，接受Button接口中定义的属性。
function MyButton({ size = 'small', style, width, children, disabled, className, onClick, border = true }: Button) {

    // 返回一个React元素，表示按钮组件的结构和样式。
    return (
        <div
            // 允许通过style属性传递自定义样式。
            style={{
                ...style,
                width: width,
            }}
            className={className}

            // 使用styleName属性（通常用于处理CSS模块化）应用动态类名，以定义按钮的大小、禁用状态和边框显示。
            styleName={classnames('es-button', {
                [`es-button-${size}`]: true,
                'es-button-disabled': disabled,
                'es-button-border': border,
            })}
            onClick={() => {
                onClick && onClick();
            }}
        >
            {/* 渲染组件的子元素，允许将其他元素嵌套在按钮内 */}
            {children}
        </div>
    );
}

// 导出MyButton组件，使其可在其他文件中导入和使用。
export default MyButton;