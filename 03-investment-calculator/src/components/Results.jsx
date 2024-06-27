import React from "react";
import { calculateInvestmentResults, formatter } from "../util/investment";

function Results({ inputs }) {
    const resultsData = calculateInvestmentResults(inputs);
    const initialInvestment =
        resultsData[0].valueEndOfYear -
        resultsData[0].interest -
        resultsData[0].annualInvestment;
    console.log(JSON.stringify(resultsData));
    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Investment (Year)</th>
                    <th>Total Intrest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {resultsData.map((yearData) => {
                    const totalIntrest =
                        yearData.valueEndOfYear -
                        yearData.annualInvestment * yearData.year -
                        initialInvestment;

                    const totalAmountInvested = yearData.valueEndOfYear - totalIntrest
                    return (
                        <tr key={yearData.year}>
                            <td>{yearData.year}</td>
                            <td>{formatter.format(yearData.valueEndOfYear)}</td>
                            <td>{formatter.format(yearData.interest)}</td>
                            <td>{formatter.format(totalIntrest)}</td>
                            <td>{formatter.format(totalAmountInvested)}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default Results;
