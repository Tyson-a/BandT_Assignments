
export default interface EmailInputProps {
  initialEmail?: string;
  onEmailChange?: (email: string) => void;
  disabled?: boolean;
}