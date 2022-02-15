import React from "react";
import './BaseButton.scss';

type ButtonType = JSX.IntrinsicElements['button']['type']

interface IButtonProps  {
    type?: ButtonType,
    children?: React.ReactNode,
    className?: string,
    onClick?: () => any,
}

const defaultProps:IButtonProps = {
    type: "button",
    children: null,
    className: '',
    onClick: () => {}
};


export const BaseButton = ({ type, children, className, onClick }: IButtonProps) => {
    return (
        <button type={type} className={`base-button ${className}`} onClick={onClick}>
            {children}
        </button>
    );
};

BaseButton.defaultProps = defaultProps;

export default BaseButton;
