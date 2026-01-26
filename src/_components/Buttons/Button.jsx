'use client';

import styles from "./Button.module.css";
import { BUTTON_CONTENT_PRESETS } from "./buttonPresets";

// wszyskie style w pliku Button.module.css

// skala przycisku: '2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'
// warianty przycisku: 'primary', 'secondary', 'tertiary', 'danger', 'success', 'warning'

// znaczy to samo co type, mozna uzywac do dowolnego layoutu w srodu
// content: 'text', 'textIcon', 'IconText', 'icon'

// iconName: nazwa ikony z biblioteki ikon
// outlineOnly: true/false
// transparent: true/false
// disabled: true/false
// className: dodatkowe klasy CSS

const Button = ({
  children,
  variant = "primary",
  outlineOnly = false,
  outlineDisabled = false,
  transparent = false,
  size = "sm",
  textSize = "md",
  content = "text",
  iconName = null,
  iconSize = 16,
  disabled = false,
  className = "",
  iconClassName = "",
  ...props
}) => {
  const Content = BUTTON_CONTENT_PRESETS[content];

  const classes = [
    className,
    styles.button,
    styles[variant],
    outlineOnly && styles.outline,
    outlineDisabled && styles.outlineDisabled,
    transparent && styles.transparent,
    styles[size],
    styles[`textSize-${textSize}`],
    disabled && styles.disabled,
    content === "icon" && styles.iconButton,
    content === "textIcon" && styles.textIconButton,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      disabled={disabled}
      className={classes}
      {...props}
    >
      {Content({ children, iconName, iconSize, iconClassName})}
    </button>
  );
};


export default Button;