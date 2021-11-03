import React, { useContext } from "react";
import { LeadContext } from "../context/LeadContext";
import { LeadContextType } from "../context/LeadContextType";
import { Lead } from "../models/Lead";

interface LeadListItemProps {
  lead: Lead;
}

const LeadListItem = (props: LeadListItemProps) => {
  return (
    <tr className="uk-animation-slide-bottom-medium">
      <td className="uk-width-1-1">{props.lead.name}</td>
      <td className="uk-width-1-1"></td>
      <td className="uk-width-1-1"></td>
    </tr>
  );
};

export default LeadListItem;
