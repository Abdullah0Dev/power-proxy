import ButtonSvg from "./svg/ButtonSvg";
import ButtonGradient from "./svg/ButtonGradient";
import { ReactNode, MouseEventHandler } from "react";

interface CustomButtonProps {
  className?: string;
  href?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
  px?: string;
  white?: boolean;
  disabled?: boolean;
  color?: string; // Add color prop to pass to ButtonSvg
  gradientHover?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  className = "",
  href,
  onClick,
  children,
  px = "px-7",
  white = false,
  disabled = false,
  gradientHover = "text-COOL-700",
  color = "blue", // Default color is blue if not provided
}) => {
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-WHITE ${px} ${
    white
      ? "text-white hover:text-WHITE-200"
      : `text-BLUE-500 ${gradientHover}`
  } ${className}`;
  const spanClasses = "relative z-10";

  const renderButton = () => (
    <button
      className={classes}
      type="submit"
      disabled={disabled}
      onClick={onClick}
    >
      <span className={spanClasses}>{children}</span>
      <ButtonSvg white={white} color={color} />{" "}
      {/* Pass white and color props */}
      <ButtonGradient />
    </button>
  );

  const renderLink = () => (
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
      <ButtonSvg white={white} color={color} />{" "}
      {/* Pass white and color props */}
      <ButtonGradient />
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default CustomButton;
