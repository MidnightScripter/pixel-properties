import { ButtonHTMLAttributes, ComponentType } from 'react';
import styles from './Button.module.css';
import classnames from 'classnames';

export interface ButtonType extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  icon?: ComponentType;
  iconPosition?: 'left' | 'right';
  buttonStyle?: 'primary' | 'secondary';
  buttonIconOnly?: boolean;
}

function Button({
  label,
  icon: Icon,
  buttonStyle = 'primary',
  buttonIconOnly,
  ...props
}: ButtonType) {
  const buttonClasses = classnames(styles.button, {
    [styles.primary]: buttonStyle === 'primary',
    [styles.secondary]: buttonStyle === 'secondary',
  });

  return (
    <button
      className={buttonClasses}
      type={props.type}
      aria-label={buttonIconOnly ? label : undefined}
      {...props}
    >
      {Icon && (
        <span className={styles.icon}>
          <Icon />
        </span>
      )}
      {!buttonIconOnly && label}
    </button>
  );
}
export default Button;
