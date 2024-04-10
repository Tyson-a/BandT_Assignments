
export default interface TextInputProps {
  initialText?: string;
  onTextChange?: (text: string) => void;
  disabled?: boolean;
  placeholder?: string;
}
