export type InterestRateScheme = {
  id: string;
  company_id?: string;
  deposit_type: string;
  rate_percentage: number;
  effective_from: string;
  effective_to?: string | null;
  note?: string | null;
  is_active: boolean;
  created_at?: string;
};

export const DEFAULT_RATES: InterestRateScheme[] = [
  {
    id: "rate-fd-1",
    deposit_type: "Fixed Deposit",
    rate_percentage: 7.0,
    effective_from: "2026-08-06",
    effective_to: null,
    note: "Opening rate",
    is_active: true,
  },
  {
    id: "rate-sd-1",
    deposit_type: "Savings Deposit",
    rate_percentage: 5.0,
    effective_from: "2026-08-06",
    effective_to: null,
    note: "Opening rate",
    is_active: true,
  },
  {
    id: "rate-rd-1",
    deposit_type: "Recurring Deposit",
    rate_percentage: 6.5,
    effective_from: "2026-08-06",
    effective_to: null,
    note: "Opening rate",
    is_active: true,
  },
];

let mockRates = [...DEFAULT_RATES];

export const listInterestRates = async (): Promise<InterestRateScheme[]> => {
  return [...mockRates].sort((a, b) => {
    return new Date(b.effective_from).getTime() - new Date(a.effective_from).getTime();
  });
};

export const getActiveInterestRates = async (): Promise<Record<string, number>> => {
  const ratesMap: Record<string, number> = {};
  for (const r of mockRates) {
    if (r.is_active || r.effective_to === null) {
      if (!ratesMap[r.deposit_type]) {
        ratesMap[r.deposit_type] = r.rate_percentage;
      }
    }
  }
  return ratesMap;
};

export const createInterestRate = async (data: {
  deposit_type: string;
  rate_percentage: number;
  effective_from: string;
  note?: string;
}): Promise<{ ok: boolean; warning?: string }> => {
  // Close previous scheme
  mockRates = mockRates.map((r) => {
    if (r.deposit_type === data.deposit_type && r.effective_to === null) {
      return { ...r, effective_to: data.effective_from, is_active: false };
    }
    return r;
  });

  mockRates.push({
    id: `rate-${Date.now()}`,
    deposit_type: data.deposit_type,
    rate_percentage: data.rate_percentage,
    effective_from: data.effective_from,
    note: data.note || null,
    is_active: true,
    created_at: new Date().toISOString(),
  });

  return { ok: true };
};

export const updateInterestRate = async (data: {
  id: string;
  deposit_type?: string;
  rate_percentage?: number;
  effective_from?: string;
  effective_to?: string | null;
  note?: string | null;
  is_active?: boolean;
}): Promise<{ ok: boolean; warning?: string }> => {
  const idx = mockRates.findIndex((r) => r.id === data.id);
  if (idx > -1) {
    mockRates[idx] = { ...mockRates[idx], ...data };
    return { ok: true };
  }
  return { ok: false, warning: "Not found" };
};

export const deleteInterestRate = async (data: { id: string }): Promise<{ ok: boolean; warning?: string }> => {
  mockRates = mockRates.filter((r) => r.id !== data.id);
  return { ok: true };
};
