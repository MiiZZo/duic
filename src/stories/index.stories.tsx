import React from "react";
import { withKnobs, select, boolean, text } from "@storybook/addon-knobs";
import "../components/index";
import { Button, ButtonProps } from "../components/atoms/button/button";
import { DownloadOutlined } from "@ant-design/icons";

export const button = () => {
    const textValue = text("text", "Button");
    const variant = select<ButtonProps["variant"]>(
        "variant", 
        ["warning", "primary", "danger", "default", "text", "success", "dashed"],
        "primary"
    );
    const size = select<ButtonProps["size"]>("size", ["large", "default", "small"], "default");
    const iconPosition = select<ButtonProps["iconPosition"]>("icon position", ["right", "left", (undefined as any)], "right");
    const block = boolean("block", false);
    const disabled = boolean("disabled", false);
    const icon = boolean("icon", false);

    return (
        <Button
            variant={variant}
            icon={icon ? <DownloadOutlined /> : undefined}
            size={size}
            iconPosition={iconPosition}
            block={block}
            disabled={disabled}
        >
            {textValue}
        </Button>
    )
}

export default {
    component: Button,
    title: "Atoms",
    decorators: [withKnobs]
}
