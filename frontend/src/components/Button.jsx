import { Link } from "react-router-dom";
import "./Button.css";

/**
 * Reusable button/link component.
 * variant: "primary" | "secondary" | "ghost"
 * Renders a <Link> for internal `to`, an <a> for external `href`, or a <button>.
 */
export default function Button({
  children,
  variant = "primary",
  to,
  href,
  onClick,
  type = "button",
  disabled = false,
  className = "",
  ariaLabel,
}) {
  const classes = `btn btn--${variant} ${className}`.trim();

  if (to) {
    return (
      <Link to={to} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
