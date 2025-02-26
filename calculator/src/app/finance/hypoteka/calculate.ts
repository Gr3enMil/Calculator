interface HypotekaInputs {
  loanAmount: number;
  interestRate: number;
  loanTerm: number;
  insurance: number;
}

interface HypotekaResults {
  Splátka: string;
}

export const calculateHypoteka = (data: HypotekaInputs): HypotekaResults => {
  const principal = data.loanAmount || 0;
  const rate = (data.interestRate || 0) / 100 / 12;
  const months = (data.loanTerm || 0) * 12;
  const insurance = data.insurance || 0;

  if (rate === 0 || months === 0 || principal === 0) {
    return { Splátka: "Vyplňte všechna pole správně." };
  }

  const Splátka =
    (principal * rate) / (1 - Math.pow(1 + rate, -months)) + insurance;

  return {
    Splátka: `${Splátka.toFixed(2)} Kč`,
  };
};
