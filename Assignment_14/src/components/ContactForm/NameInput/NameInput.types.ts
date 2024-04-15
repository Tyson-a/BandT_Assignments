
export default interface NameInputProps {
  initialName?: string;
  onNameChange?: (name: string) => void;
  disabled?: boolean;
  placeholder?: string;
  style?: React.CSSProperties;
}
