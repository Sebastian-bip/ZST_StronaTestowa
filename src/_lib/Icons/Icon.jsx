import { ICONS } from "./icons";

export function Icon({
  name,
  size = 16,
  svgClassName,
  ...props
}) {

  const DEFAULT_VIEWBOX = "0 0 16 16";

  const icon = ICONS[name];

  if (!icon) {
    if (process.env.NODE_ENV !== "production") {
      console.warn(`Icon "${name}" does not exist`);
    }
    return null;
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox={icon.viewBox ?? DEFAULT_VIEWBOX}
      fill="inherit"
      className={svgClassName}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {icon.content}
    </svg>
  );
}