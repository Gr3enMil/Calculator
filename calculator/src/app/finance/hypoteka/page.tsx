"use client";

import { useState } from "react";
import CalculatorForm from "@/components/CalculatorForm";
import CalculatorResults from "@/components/CalculatorResults";
import { calculateHypoteka } from "./calculate";
import styles from "./page.module.css";

const HypotekaPage = () => {
  const [formData, setFormData] = useState({
    loanAmount: 2000000,
    interestRate: 5,
    loanTerm: 25,
    insurance: 0,
  });

  const [results, setResults] = useState(null);

  const handleCalculate = () => {
    setResults(calculateHypoteka(formData));
  };

  const fields = [
    {
      name: "loanAmount",
      label: "Výše hypotéky (Kč)",
      type: "number",
      min: 0,
      step: 50000,
      max: 50000000,
      tooltip: "Až 80% ceny nemovitosi. Až 90% při splnění zvláštních podmínek.",
    },
    {
      name: "interestRate",
      label: "Úroková sazba (%)",
      type: "number",
      min: 0,
      max: 20,
      step: 0.1,
      tooltip: "Úroková sazba je orientační, protože platí jen po dobu fixace.",
    },
    {
      name: "loanTerm",
      label: "Doba splácení (roky)",
      type: "number",
      min: 0,
      max: 35,
      tooltip: "Maximální doba splácení je standardně 30 let (nebo do 65 let).",
    },
    {
      name: "insurance",
      label: "Pojištění (Kč/měsíc)",
      type: "number",
      min: 0,
      max: 30000,
      step: 100,
      tooltip: "Standardní pojištění je cca 5-7% z měsíční splátky hypotéky.",
      optional: true,
    },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Kalkulačka hypotéky</h1>
      <CalculatorForm fields={fields} formData={formData} setFormData={setFormData} />
      <button className={styles.calculateButton} onClick={handleCalculate}>
        Spočítat
      </button>
      {results && <CalculatorResults results={results} />}
    </div>
  );
};

export default HypotekaPage;
