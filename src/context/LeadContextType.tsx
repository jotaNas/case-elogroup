import { Lead } from "../models/Lead";

export interface LeadContextType {
  leads: Lead[];
  addLead(name: string, phone: string, email: string): void;
  /*toggle(lead: Lead): void;*/
}
