import React from "react";
import { cn } from "@bem-react/classname";
import "./button.scss";

type ButtonVariant = 'dashed' | 'text' | 'danger' | 'primary' | 'success' | 'warning' | 'default';
type ButtonSize = 'small' | 'default' | 'large'; 
 
export interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    disabled?: boolean;
    block?: boolean;
    size?: ButtonSize;
    variant?: ButtonVariant;
    suffixIcon?: React.ReactNode;
    prefixIcon?: React.ReactNode;
}

const cnButton = cn('duicButton');

export const Button: React.FC<ButtonProps> = 
({
    variant,
    suffixIcon,
    prefixIcon,
    size,
    block,
    children,
    ...props
}) => {
    if (size === undefined) {
        size = "default";
    }

    if (variant === undefined) {
        variant = "default";
    }
    
    const className = cnButton({
        size,
        variant,
        block,
    });

    return (
        <button {...props} className={className}>
            { prefixIcon !== undefined ? <span className={cnButton("Icon", { position: "left" })}>{prefixIcon}</span> : null }
            { children !== undefined ? <span>{children}</span> : null }
            { suffixIcon !== undefined ? <span className={cnButton("Icon", { position: "right" })}>{suffixIcon}</span> : null }
        </button>
    )
}
