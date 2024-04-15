
export default interface BudgetInputProps {
  initialBudget?: number;
  onBudgetChange?: (budget: number) => void;
  disabled?: boolean;
  placeholder?: string;
  style?: React.CSSProperties;
}