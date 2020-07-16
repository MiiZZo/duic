import React from "react";
import { withKnobs, select, text, boolean } from "@storybook/addon-knobs";
import { Input, InputProps } from "../components/atoms/input/input";

export const input = () => {
    const placeholder = text("placeholder", "Placeholder...");
    let label: string | undefined = text("label", "");
    const variant = select<InputProps["variant"]>("variant", ["default", "outlined"], "default");
    const layout = select<InputProps["layout"]>("layout", ["horizontal", "vertical"], "horizontal");
    const disabled = boolean("disabled", false);

    if (label === "") {
        label = undefined;
    }

    return (
        <Input
            layout={layout}
            disabled={disabled}
            variant={variant}
            placeholder={placeholder}
            label={label}
        />
    )
}

export default {
    title: "atoms",
    component: Input,
    decorators: [withKnobs],
}
