import React, { useContext } from "react";
import { LeadContext } from "../context/LeadContext";
import { LeadContextType } from "../context/LeadContextType";
import LeadListItem from "./LeadListItem";

import { Link } from "react-router-dom";

const LeadList = () => {
  const { leads } = useContext<LeadContextType>(LeadContext);
  return (
    <>
      <Link
        to="/createlead"
        className="uk-button-secondary uk-button-large uk-padding-small"
      >
        Nova Lead +
      </Link>

      <table className="uk-table uk-table-divider uk-table-hover ">
        <thead className="uk-grid ">
          <tr>
            <th>Cliente em Potencial</th>
            <th>Dados Confirmados</th>
            <th>Reunião Agendada</th>
          </tr>
        </thead>
        <tbody>
          {leads?.map((lead) => (
            <LeadListItem key={lead.id} lead={lead}></LeadListItem>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default LeadList;
