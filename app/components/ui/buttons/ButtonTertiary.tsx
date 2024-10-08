import { MouseEventHandler, ReactNode } from "react";
import clsx from "clsx";
import LinkOrAhref from "./LinkOrAhref";

interface Props {
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
  to?: string;
  target?: undefined | "_blank";
  disabled?: boolean;
  destructive?: boolean;
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  reloadDocument?: boolean;
}

export default function ButtonTertiary({ className = "", type = "button", onClick, disabled, destructive, to, target, children, reloadDocument }: Props) {
  return (
    <span>
      {(() => {
        if (!to || disabled) {
          return (
            <button
              onClick={onClick}
              type={type}
              disabled={disabled}
              className={clsx(
                className,
                "mx-1 my-2 inline-flex items-center space-x-2 border-b border-transparent text-sm font-medium focus:rounded-md focus:outline-none focus:ring-2 focus:ring-accent-300 focus:ring-offset-2",
                disabled ? "cursor-not-allowed opacity-75" : "hover:border-dotted",
                !destructive && "border-b text-theme-700 ",
                destructive && "text-red-600",
                !disabled && !destructive && !className && "hover:text-theme-800 focus:text-theme-900 ",
                !disabled && destructive && "hover:border-red-300 hover:text-red-800 focus:text-red-900"
              )}
            >
              {children}
            </button>
          );
        } else {
          return (
            <LinkOrAhref
              reloadDocument={reloadDocument}
              to={to}
              target={target}
              className={clsx(
                className,
                "mx-1 my-2 inline-flex items-center space-x-2 border-b border-transparent text-sm font-medium focus:rounded-md focus:outline-none focus:ring-2 focus:ring-accent-300 focus:ring-offset-2",
                disabled ? "cursor-not-allowed opacity-75" : " hover:border-dotted",
                !destructive && "border-b text-theme-700 ",
                destructive && "text-red-600",
                !disabled && !destructive && !className && "hover:text-theme-800 focus:text-theme-900 ",
                !disabled && destructive && "hover:border-red-300 hover:text-red-800 focus:text-red-900"
              )}
            >
              {children}
            </LinkOrAhref>
          );
        }
      })()}
    </span>
  );
}
