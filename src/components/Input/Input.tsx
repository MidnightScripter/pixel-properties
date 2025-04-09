import { Ref } from 'react';
import styles from './Input.module.css';

export interface InputProps {
  label: string;
  hideLabel?: boolean;
  inputType?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  inputName?: string;
  ref?: Ref<HTMLInputElement>;
}

function Input({
  label,
  hideLabel = false,
  inputType = 'text',
  placeholder,
  inputName,
  ref,
  ...props
}: InputProps) {
  const generateLabel = (labelText: string) => {
    return labelText.replace(/\s/gi, '').toLowerCase();
  };

  return (
    <div className={styles.container}>
      <label
        htmlFor={generateLabel(label)}
        className={hideLabel ? 'screen-reader-only' : undefined}
      >
        {label}
      </label>
      <input
        className={styles.input}
        name={inputName || generateLabel(label)}
        id={generateLabel(label)}
        type={inputType}
        placeholder={placeholder}
        {...props}
        ref={ref}
      />
    </div>
  );
}
export default Input;
