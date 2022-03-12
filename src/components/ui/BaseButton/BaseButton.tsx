import React from "react";
import './BaseButton.scss';

type ButtonType = JSX.IntrinsicElements['button']['type']

interface IButtonProps  {
    type?: ButtonType,
    children?: React.ReactNode,
    className?: string,
    onClick?: () => any,
    disabled?: boolean,
}

const defaultProps:IButtonProps = {
    type: "button",
    children: null,
    className: '',
    onClick: () => {},
    disabled: false
};


export const BaseButton = ({ type, children, className, onClick, disabled }: IButtonProps) => {
    return (
        <button disabled={disabled} type={type} className={`base-button ${className}`} onClick={onClick}>
            {children}
        </button>
    );
};

BaseButton.defaultProps = defaultProps;

export default BaseButton;
