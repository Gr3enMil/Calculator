import Tooltip from "./Tooltip";
import styles from "./CalculatorForm.module.css";

interface FormField {
  name: string;
  label: string;
  type: "number";
  min: number;
  max: number;
  step?: number;
  tooltip?: string;
  optional?: boolean;
}

interface CalculatorFormProps {
  fields: FormField[];
  formData: Record<string, number>;
  setFormData: (data: Record<string, number>) => void;
}

const CalculatorForm = ({ fields, formData, setFormData }: CalculatorFormProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: parseFloat(value) });
  };

  return (
    <form className={styles.form}>
      {fields.map((field) => (
        <div key={field.name} className={styles.formGroup}>
          <label className={styles.label}>
            {field.label}
            {field.tooltip && <Tooltip text={field.tooltip} />}
          </label>

          <input
            type="number"
            name={field.name}
            min={field.min}
            max={field.max}
            step={field.step || 1}
            value={formData[field.name]}
            onChange={handleChange}
            className={styles.input}
          />

          <input
            type="range"
            name={field.name}
            min={field.min}
            max={field.max}
            step={field.step || 1}
            value={formData[field.name]}
            onChange={handleChange}
            className={styles.range}
          />
        </div>
      ))}
    </form>
  );
};

export default CalculatorForm;
