import React from "react";
import { cn } from "@bem-react/classname";
import "./input.scss";

type InputVariant = "default" | "outlined";
type InputType = "default" | "search";
type InputLayout = "vertical" | "horizontal";

export interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  variant?: InputVariant;
  label?: string;
  type?: InputType;
  layout?: InputLayout;
}

const cnInput = cn("duicInput");

export const Input: React.FC<InputProps> = ({
  variant,
  label: labelText,
  type,
  layout,
  ...props
}) => {
  if (variant === undefined) {
    variant = "default";
  }
  if (layout === undefined) {
    layout = "horizontal";
  }
  const className = cnInput({
    variant,
    type
  });

  if (labelText === undefined) {
    return <input className={className} {...props} />;
  } else {
    return (
      <label className={cnInput("Label", { layout })}>
        <span className={cnInput("LabelText")}>{labelText}</span>
        <input className={className} {...props} />
      </label>
    );
  }
};
