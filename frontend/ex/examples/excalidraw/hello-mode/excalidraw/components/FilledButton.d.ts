import React from "react";
import "./FilledButton.scss";
export type ButtonVariant = "filled" | "outlined" | "icon";
export type ButtonColor = "primary" | "danger" | "warning" | "muted";
export type ButtonSize = "medium" | "large";
export type FilledButtonProps = {
  label: string;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent) => void;
  variant?: ButtonVariant;
  color?: ButtonColor;
  size?: ButtonSize;
  className?: string;
  fullWidth?: boolean;
  icon?: React.ReactNode;
};
export declare const FilledButton: React.ForwardRefExoticComponent<
  FilledButtonProps & React.RefAttributes<HTMLButtonElement>
>;
