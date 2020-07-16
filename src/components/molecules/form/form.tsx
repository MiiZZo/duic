import React from "react";
import { cn } from "@bem-react/classname";

type FormLayout = "horizontal" | "vertical";

export interface FormProps extends React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {
    disabled?: boolean;
    layout: FormLayout;
}

const cnForm = cn("duicForm");

export const Form: React.FC<FormProps> = ({ disabled, layout, ...props }) => {
    
    return (
        <form {...props}>
            
        </form>
    )
}
