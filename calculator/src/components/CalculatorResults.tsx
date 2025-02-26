import styles from "./CalculatorResults.module.css";

interface CalculatorResultsProps {
  results: Record<string, string>;
}

const CalculatorResults = ({ results }: CalculatorResultsProps) => {
  return (
    <div className={styles.results}>
      <h3>Výsledky</h3>
      <ul>
        {Object.entries(results).map(([key, value]) => (
          <li key={key} className={styles.resultItem}>
            <strong>{key}:</strong> {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CalculatorResults;
