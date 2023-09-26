function calculateNetSalary(basicSalary, benefits) {
    //PAYE tax brackets and rates
    let payeRate;

    if (basicSalary + benefits <= 24000) {
        payeRate = 0.1;
    } else if (basicSalary + benefits <= 32333) {
        payeRate = 0.25;
    } else if (basicSalary + benefits <= 500000) {
        payeRate = 0.3;
    } else if (basicSalary + benefits <= 800000) {
        payeRate = 0.325;
    } else {
        payeRate = 0.35;
    }

    // (Income Tax)
    const annualIncome = (basicSalary + benefits) * 12;
    const paye = annualIncome * payeRate;

    // Calculate NHIF Deductions
    let nhifDeduction = 0;

    if (basicSalary + benefits <= 5999) {
        nhifDeduction = 150;
    } else if (basicSalary + benefits <= 7999) {
        nhifDeduction = 300;
    } else if (basicSalary + benefits <= 11999) {
        nhifDeduction = 400;
    } else if (basicSalary + benefits <= 14999) {
        nhifDeduction = 500;
    } else if (basicSalary + benefits <= 19999) {
        nhifDeduction = 600;
    } else if (basicSalary + benefits <= 24999) {
        nhifDeduction = 750;
    } else if (basicSalary + benefits <= 29999) {
        nhifDeduction = 850;
    } else if (basicSalary + benefits <= 34999) {
        nhifDeduction = 900;
    } else if (basicSalary + benefits <= 39999) {
        nhifDeduction = 950;
    }

    const nssfTierIRate = 0.06; 
    const nssfEmployeeDeduction = Math.min(basicSalary * nssfTierIRate, 18000);

    const grossSalary = basicSalary + benefits;

    const netSalary = grossSalary - paye - nhifDeduction - nssfEmployeeDeduction;

    return {
        grossSalary,
        paye,
        nhifDeduction,
        nssfEmployeeDeduction,
        netSalary,
    };
}
const result = calculateNetSalary(basicSalary, benefits);
console.log("Gross Salary:", result.grossSalary.toFixed(2));
console.log("PAYE (Income Tax):", result.paye.toFixed(2));
console.log("NHIF Deduction:", result.nhifDeduction.toFixed(2));
console.log("NSSF Deduction:", result.nssfEmployeeDeduction.toFixed(2));
console.log("Net Salary:", result.netSalary.toFixed(2));