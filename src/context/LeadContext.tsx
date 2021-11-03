import React, { createContext, useEffect, useState } from "react";
import { Lead } from "../models/Lead";
import { get, save } from "../services/LeadSevice";
import { LeadContextType } from "./LeadContextType";

export const LeadContext = createContext<LeadContextType>({
  leads: [],
  addLead: () => {},
  /*toggle: () => {},*/
});

const LeadProvider = (props: any) => {
  const [leads, setLeads] = useState<Lead[]>(get);

  useEffect(() => {
    save(leads);
  }, [leads]);

  const addLead = (name: string, phone: string, email: string) => {
    const lead: Lead = {
      id: leads.length + 1,
      name,
      phone,
      email,
    };
    setLeads([...leads, lead]);
  };

  /*const toggle = (todo: Todo) => {
    const index = todos.indexOf(todo);
    todos[index].done = !todo.done;
    setTodos([...todos]);
  };*/

  return (
    <LeadContext.Provider value={{ leads, addLead }}>
      {props.children}
    </LeadContext.Provider>
  );
};

export default LeadProvider;
