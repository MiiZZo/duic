import React from "react";
import { cn } from "@bem-react/classname";

type ButtonVariant = 'outlined' | 'dashed';
type ButtonSize = 'small' | 'default' | 'large';

interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    danger?: boolean;
    warning?: boolean;
    success?: boolean;
    primary?: boolean;
    block?: boolean;
    size: ButtonSize;
    variant: ButtonVariant;
    icon?: React.ReactNode;
}

const cnButton = cn('dcuiButton');

export const Button: React.FC<ButtonProps> = ({ danger, warning, success, icon, size, variant, ...props }) => {
    
    return (
        <button>
            
        </button>
    )
}
