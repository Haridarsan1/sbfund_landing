export type DepositApplication = {
  id?: string;
  share_token?: string;
  created_at?: string;
  form_date: string;
  deposit_type: string;
  amount_figures: string;
  amount_words: string;
  term_months: string;
  remit_mode: string;
  remit_number: string;
  remit_bank: string;
  remit_dated: string;
  remit_place: string;
  renewal_fd_rd_no: string;
  renewal_maturity_date: string;
  renewal_amount: string;
  first_depositor_title: string;
  first_depositor_name: string;
  first_depositor_age: string;
  first_guardian_name: string;
  second_depositor_title: string;
  second_depositor_name: string;
  second_depositor_age: string;
  second_guardian_name: string;
  father_guardian_title: string;
  father_guardian_name: string;
  father_guardian_relationship: string;
  father_guardian_age: string;
  nominee_title: string;
  nominee_name: string;
  nominee_relationship: string;
  nominee_age: string;
  nominee_address?: string;
  share_no: string;
  folio_no: string;
  account_type: string;
  address: string;
  pincode: string;
  phone_no: string;
  email: string;
  occupation: string;
  interest_option: string;
  tax_deducted: string;
  interest_payment: string;
  credit_sb_account: string;
  introduced_by_name: string;
  introduced_by_signature: string;
  office_amount: string;
  office_deposit_date: string;
  office_maturity_date: string;
  office_fd_rd_sb_no: string;
  app_no?: string;
  interest_rate?: string;
  payment_proof_url?: string;
  certificate_number?: string;
  pan_no?: string;
  aadhaar_no?: string;
  ack_no?: string;
};

export const DEPOSIT_TYPES = ["Fixed Deposit", "Savings Deposit", "Recurring Deposit"];
export const REMIT_MODES = ["Bank Transfer / UPI", "NEFT / RTGS", "Cheque"];
export const INTEREST_OPTIONS = ["Monthly", "Quarterly", "Half Yearly", "Yearly"];
export const TAX_OPTIONS = ["Yes", "No", "Not Applicable"];
export const INTEREST_PAYMENTS = ["To Collect Cash", "To Collect Post dated cheque"];
export const ACCOUNT_TYPES = [
  "Sole/First Depositor/Jointly",
  "Either or Survivor",
  "Any one or Survivor",
];

export const POPULAR_BANKS = [
  "State Bank of India (SBI)",
  "HDFC Bank",
  "ICICI Bank",
  "Axis Bank",
  "Punjab National Bank (PNB)",
  "Canara Bank",
  "Bank of Baroda (BOB)",
  "Union Bank of India",
  "Indian Bank",
  "Indian Overseas Bank (IOB)",
  "Kotak Mahindra Bank",
  "IndusInd Bank",
  "Federal Bank",
  "IDBI Bank",
  "Central Bank of India",
  "UCO Bank",
  "Bank of India (BOI)",
  "Karur Vysya Bank (KVB)",
  "City Union Bank (CUB)",
  "Tamilnad Mercantile Bank (TMB)",
  "Bandhan Bank",
  "YES Bank",
  "IDFC FIRST Bank",
  "RBL Bank",
  "South Indian Bank",
  "Dhanlaxmi Bank",
  "Equitas Small Finance Bank",
  "AU Small Finance Bank",
];

export const NUMERIC_FIELDS = [
  "amount_figures",
  "renewal_amount",
  "office_amount",
] as const;
export const INT_FIELDS = ["term_months"] as const;
export const DATE_FIELDS = [
  "form_date",
  "remit_dated",
  "renewal_maturity_date",
  "office_deposit_date",
  "office_maturity_date",
] as const;

export const emptyApplication = (): DepositApplication => ({
  form_date: "",
  deposit_type: "",
  amount_figures: "",
  amount_words: "",
  term_months: "",
  remit_mode: "",
  remit_number: "",
  remit_bank: "",
  remit_dated: "",
  remit_place: "",
  renewal_fd_rd_no: "",
  renewal_maturity_date: "",
  renewal_amount: "",
  first_depositor_title: "",
  first_depositor_name: "",
  first_depositor_age: "",
  first_guardian_name: "",
  second_depositor_title: "",
  second_depositor_name: "",
  second_depositor_age: "",
  second_guardian_name: "",
  father_guardian_title: "",
  father_guardian_name: "",
  father_guardian_relationship: "",
  father_guardian_age: "",
  nominee_title: "",
  nominee_name: "",
  nominee_relationship: "",
  nominee_age: "",
  share_no: "",
  folio_no: "",
  account_type: "",
  address: "",
  pincode: "",
  phone_no: "",
  email: "",
  occupation: "",
  interest_option: "",
  tax_deducted: "",
  interest_payment: "",
  credit_sb_account: "",
  introduced_by_name: "",
  introduced_by_signature: "",
  office_amount: "",
  office_deposit_date: "",
  office_maturity_date: "",
  office_fd_rd_sb_no: "",
});

/** Convert a DB row (nulls, numbers) into the string-based form model. */
export function rowToForm(row: Record<string, unknown>): DepositApplication {
  const base = emptyApplication();
  const out: Record<string, string> = { ...base };
  for (const key of Object.keys(base)) {
    const value = row[key];
    out[key] = value === null || value === undefined ? "" : String(value);
  }

  // Preserve any extra columns present on row (such as interest_rate, certificate_number, pan_no, aadhaar_no)
  for (const key of Object.keys(row)) {
    if (row[key] !== null && row[key] !== undefined) {
      out[key] = String(row[key]);
    }
  }

  if (!out["account_type"]) out["account_type"] = "Sole/First Depositor/Jointly";
  if (!out["deposit_type"]) out["deposit_type"] = "Fixed Deposit";
  if (!out["interest_option"]) out["interest_option"] = "Monthly";

  return {
    ...(out as unknown as DepositApplication),
    id: row["id"] as string,
    share_token: row["share_token"] as string,
    created_at: row["created_at"] as string,
    interest_rate: row["interest_rate"] !== undefined && row["interest_rate"] !== null ? String(row["interest_rate"]) : (out["interest_rate"] ?? ""),
    certificate_number: row["certificate_number"] !== undefined && row["certificate_number"] !== null ? String(row["certificate_number"]) : (out["certificate_number"] ?? ""),
    pan_no: row["pan_no"] !== undefined && row["pan_no"] !== null ? String(row["pan_no"]) : (row["pan"] ? String(row["pan"]) : (out["pan_no"] ?? "")),
    aadhaar_no: row["aadhaar_no"] !== undefined && row["aadhaar_no"] !== null ? String(row["aadhaar_no"]) : (row["aadhaar"] ? String(row["aadhaar"]) : (out["aadhaar_no"] ?? "")),
  };
}

/** Convert the string-based form model into a DB payload. */
export function formToRow(form: DepositApplication): Record<string, string | number | null> {
  const base = emptyApplication();
  const out: Record<string, string | number | null> = {};
  for (const key of Object.keys(base)) {
    const raw = (form as unknown as Record<string, string>)[key] ?? "";
    const trimmed = raw.trim();
    if (trimmed === "") {
      out[key] = null;
    } else if (key === "phone_no") {
      const phoneDigits = trimmed.replace(/\D/g, "").slice(0, 10);
      out[key] = phoneDigits || null;
    } else if ((NUMERIC_FIELDS as readonly string[]).includes(key)) {
      const n = Number(trimmed.replace(/,/g, ""));
      out[key] = Number.isFinite(n) ? n : null;
    } else if ((INT_FIELDS as readonly string[]).includes(key)) {
      const n = parseInt(trimmed, 10);
      out[key] = Number.isFinite(n) ? n : null;
    } else {
      out[key] = trimmed;
    }
  }
  
  // Map additional fields that are not in emptyApplication base
  out["certificate_number"] = form.certificate_number || null;
  out["pan_no"] = form.pan_no || null;
  out["aadhaar_no"] = form.aadhaar_no || null;
  out["interest_rate"] = form.interest_rate || null;
  
  return out;
}

export function getOfficeFdRdSbNo(depositType: string, amount: string | number): string {
  const dt = (depositType || "").toUpperCase();
  let typeCode = "FD";
  if (dt.includes("RECURRING") || dt.includes("RD")) {
    typeCode = "RD";
  } else if (dt.includes("SAVINGS") || dt.includes("SB")) {
    typeCode = "SB";
  }
  const amt = String(amount || "0").trim() || "0";
  return `${typeCode}-${amt}`;
}

export function normalizeRemitMode(mode: string): string {
  const m = (mode || "").trim().toLowerCase();
  if (m.includes("upi") || m.includes("gpay") || m.includes("phonepe") || m.includes("paytm") || m.includes("transfer") || m.includes("bank transfer")) {
    return "Bank Transfer / UPI";
  }
  if (m.includes("neft") || m.includes("rtgs") || m.includes("net banking") || m.includes("netbanking") || m.includes("imps")) {
    return "NEFT / RTGS";
  }
  if (m.includes("cheque") || m.includes("chq")) {
    return "Cheque";
  }
  return mode;
}

export type InterestCalculationResult = {
  principal: number;
  rate: number;
  tenureMonths: number;
  payoutFrequency: string;
  periodicPayout: number;
  totalInterest: number;
  maturityValue: number;
  maturityDate: Date;
  maturityDateStr: string;
};

export function calculateInterestDetails(
  principal: number,
  rate: number,
  termMonths: number,
  depositType: string,
  interestOption: string,
  formDate?: string | Date
): InterestCalculationResult {
  const p = Math.max(0, principal);
  const r = Math.max(0, rate);
  const t = Math.max(1, termMonths);
  const type = (depositType || "FD").toUpperCase();
  const option = (interestOption || "Cumulative / On Maturity").trim();

  let periodicPayout = 0;
  let totalInterest = 0;
  let maturityValue = p;

  const startDate = formDate ? new Date(formDate) : new Date();
  const maturityDate = new Date(startDate);
  maturityDate.setMonth(maturityDate.getMonth() + t);

  if (type.includes("SAV") || type === "SB") {
    // Savings Deposit: simple interest
    totalInterest = Math.round((p * r * (t / 12)) / 100);
    maturityValue = p + totalInterest;
    periodicPayout = 0;
  } else if (type.includes("REC") || type === "RD") {
    // Recurring Deposit: monthly instalment compounding quarterly
    const monthlyInstalment = p;
    const totalContribution = monthlyInstalment * t;
    let computedMaturity = 0;
    for (let i = 1; i <= t; i++) {
      const monthsLeft = t - i + 1;
      computedMaturity += monthlyInstalment * Math.pow(1 + r / 400, (4 * monthsLeft) / 12);
    }
    maturityValue = Math.round(computedMaturity);
    totalInterest = Math.max(0, maturityValue - totalContribution);
    periodicPayout = 0;
  } else {
    // Fixed Deposit
    if (option.includes("Monthly") || option === "Monthly") {
      periodicPayout = Math.round((p * r) / 1200);
      totalInterest = Math.round(periodicPayout * t);
      maturityValue = p;
    } else if (option.includes("Quarterly") || option === "Quarterly") {
      periodicPayout = Math.round((p * r) / 400);
      const quarterlyTerms = t / 3;
      totalInterest = Math.round(periodicPayout * quarterlyTerms);
      maturityValue = p;
    } else if (option.includes("Half") || option === "Half-Yearly" || option === "Half Yearly") {
      periodicPayout = Math.round((p * r) / 200);
      const halfYearlyTerms = t / 6;
      totalInterest = Math.round(periodicPayout * halfYearlyTerms);
      maturityValue = p;
    } else if (option.includes("Yearly") || option === "Yearly") {
      periodicPayout = Math.round((p * r) / 100);
      const yearlyTerms = t / 12;
      totalInterest = Math.round(periodicPayout * yearlyTerms);
      maturityValue = p;
    } else {
      // Cumulative: compounded quarterly
      const compoundAmount = p * Math.pow(1 + r / 400, (4 * t) / 12);
      maturityValue = Math.round(compoundAmount);
      totalInterest = Math.max(0, maturityValue - p);
      periodicPayout = 0;
    }
  }

  const maturityDateStr = maturityDate.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return {
    principal: p,
    rate: r,
    tenureMonths: t,
    payoutFrequency: option,
    periodicPayout,
    totalInterest,
    maturityValue,
    maturityDate,
    maturityDateStr,
  };
}

