import styles from './Input.module.css';

export interface InputProps {
  label: string;
  hideLabel?: boolean;
  inputType?: React.HTMLInputTypeAttribute;
  placeholder?: string;
}

function Input({
  label,
  hideLabel = false,
  inputType = 'text',
  placeholder,
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
        name={generateLabel(label)}
        id={generateLabel(label)}
        type={inputType}
        placeholder={placeholder}
      />
    </div>
  );
}
export default Input;
