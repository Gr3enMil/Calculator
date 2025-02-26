export interface InvestmentInputs {
    initialInvestment: number; // Počáteční investice
    monthlyInvestment?: number; // Měsíční investice (volitelné)
    annualInterestRate: number; // Roční úroková sazba v %
    inflationRate?: number; // Roční inflace v %
    investmentDuration: number; // Délka investice v měsících
    fees?: { fixed?: number; percentage?: number }; // Poplatky (fixní roční nebo % z objemu)
  }
  
  export interface InvestmentResults {
    totalValue: number; // Celková hodnota investice
    netProfit: number; // Čistý zisk po odečtení vstupních investic
    totalReturnPercentage: number; // Celkové procentuální zhodnocení
    realNetProfit?: number; // Očištěný zisk po inflaci
    realTotalReturnPercentage?: number; // Očištěné procentuální zhodnocení
  }
  
  export function calculateInvestment({
    initialInvestment,
    monthlyInvestment = 0,
    annualInterestRate,
    inflationRate = 0,
    investmentDuration,
    fees = {},
  }: InvestmentInputs): InvestmentResults {
    let totalValue = initialInvestment;
    const monthlyInterestRate = annualInterestRate / 12 / 100;
    const inflationMonthlyRate = inflationRate / 12 / 100;
  
    for (let i = 0; i < investmentDuration; i++) {
      // Přičítání úroků
      totalValue *= 1 + monthlyInterestRate;
  
      // Přidání měsíční investice
      totalValue += monthlyInvestment;
    }
  
    // Odečtení poplatků (pokud jsou zadané)
    if (fees.fixed) {
      totalValue -= (fees.fixed / 12) * investmentDuration;
    }
    if (fees.percentage) {
      totalValue -= totalValue * (fees.percentage / 100);
    }
  
    // Výpočet čistého zisku
    const totalInvested = initialInvestment + monthlyInvestment * investmentDuration;
    const netProfit = totalValue - totalInvested;
    const totalReturnPercentage = (netProfit / totalInvested) * 100;
  
    // Výpočet reálného zisku po inflaci (pokud byla inflace zadána)
    let realNetProfit, realTotalReturnPercentage;
    if (inflationRate > 0) {
      const adjustedValue = totalValue / Math.pow(1 + inflationMonthlyRate, investmentDuration);
      realNetProfit = adjustedValue - totalInvested;
      realTotalReturnPercentage = (realNetProfit / totalInvested) * 100;
    }
  
    return {
      totalValue,
      netProfit,
      totalReturnPercentage,
      realNetProfit,
      realTotalReturnPercentage,
    };
  }
  