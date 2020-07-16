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
    icon?: React.ReactNode;
    /**
     * Default value "right"
     */
    iconPosition?: "right" | "left";
}

const cnButton = cn('duicButton');

export const Button: React.FC<ButtonProps> = 
({
    variant,
    icon,
    size,
    block, 
    iconPosition, 
    children, 
    ...props
}) => {
    if (size === undefined) {
        size = "default";
    }

    if (variant === undefined) {
        variant = "default";
    }

    if (iconPosition === undefined) {
        iconPosition = "right";
    }
    
    const className = cnButton({
        size,
        variant,
        block,
    });

    return (
        <button {...props} className={className}>
            { (iconPosition === "left" && icon !== undefined) ? <span className={cnButton("Icon", { position: iconPosition })}>{icon}</span> : null}
            { children !== undefined ? <span>{children}</span> : null }
            { (iconPosition === "right" && icon !== undefined) ? <span className={cnButton("Icon", { position: iconPosition })}>{icon}</span> : null}
        </button>
    )
}
