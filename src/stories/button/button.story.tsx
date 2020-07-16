import React from "react";
import { withKnobs, select, boolean, text } from "@storybook/addon-knobs";
import "../../components/index";
import { Button, ButtonProps } from "../../components/atoms/button/button";
import { DownloadOutlined, WarningOutlined } from "@ant-design/icons";

export const button = () => {
  const textValue = text("text", "Button");
  const variant = select<ButtonProps["variant"]>(
    "variant",
    ["warning", "primary", "danger", "default", "text", "success", "dashed"],
    "primary"
  );
  const size = select<ButtonProps["size"]>(
    "size",
    ["large", "default", "small"],
    "default"
  );
  const block = boolean("block", false);
  const disabled = boolean("disabled", false);
  const prefixIcon = boolean("prefix icon (for example)", false);
  const suffixIcon = boolean("suffix icon (for example)", false);

  return (
    <Button
      variant={variant}
      prefixIcon={prefixIcon ? <WarningOutlined /> : undefined}
      suffixIcon={suffixIcon ? <DownloadOutlined /> : undefined}
      size={size}
      block={block}
      disabled={disabled}
    >
      {textValue}
    </Button>
  );
};

export default {
  component: Button,
  title: "Atoms",
  decorators: [withKnobs]
};
