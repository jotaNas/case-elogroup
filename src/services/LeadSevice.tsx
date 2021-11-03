import { Lead } from "../models/Lead"

const LEAD_STORE = "leads";

export const get = (): Lead[] => {
  const data = localStorage.getItem(LEAD_STORE) || "";
  try {
    const result = JSON.parse(data) as Lead[];
    return result;
  } catch {
    return [];
  }
};

export const save = (data: Lead[]) => {
  if (data?.length >= 1) localStorage.setItem(LEAD_STORE, JSON.stringify(data));
};
