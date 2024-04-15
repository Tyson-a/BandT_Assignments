
export default interface EmailInputProps {
  initialEmail?: string;
  onEmailChange?: (email: string) => void;
  disabled?: boolean;
  placeholder?: string;
  style?: React.CSSProperties;
}