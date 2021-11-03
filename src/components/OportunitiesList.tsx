import React, { useContext } from "react";
import { isPropertySignature } from "typescript";
/*import { OportunitiesContext } from "../context/OportunitiesContext";
import { OportunitiesContextType } from "../context/OportunitiesContextType";*/
import { Oportunities } from "../models/Oportunities";
import { useForm } from "react-hook-form";

let oportuities: Oportunities[] = [
  { title: "RPA", check: false },
  { title: "Product Digital", check: false },
  { title: "Analytics", check: false },
  { title: "RPM", check: false },
];

const OportunitiesList = () => {
  return (
    <div>
      <caption>Oportunities*</caption>
      <table className="uk-table uk-table-divider">
        <thead>
          <tr>
            <th className="uk-width-auto">
              <label>
                <input
                  className="uk-checkbox"
                  type="checkbox"
                  checked={false}
                  /*onChange={handleChange}*/
                />
              </label>
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr className="uk-animation-slide-bottom-medium">
            <td className="uk-width-auto">
              <label>
                <input
                  className="uk-checkbox"
                  type="checkbox"
                  checked={true}
                  /*onChange={handleChange}*/
                />
              </label>
            </td>
            <td> {oportuities[0].title}</td>
          </tr>
          <tr className="uk-animation-slide-bottom-medium">
            <td className="uk-width-auto">
              <label>
                <input
                  className="uk-checkbox"
                  type="checkbox"
                  checked={true}
                  /*onChange={handleChange}*/
                />
              </label>
            </td>
            <td> {oportuities[1].title}</td>
          </tr>
          <tr className="uk-animation-slide-bottom-medium">
            <td className="uk-width-auto">
              <label>
                <input
                  className="uk-checkbox"
                  type="checkbox"
                  checked={true}
                  /* onChange={handleChange}*/
                />
              </label>
            </td>
            <td> {oportuities[2].title}</td>
          </tr>
          <tr className="uk-animation-slide-bottom-medium">
            <td className="uk-width-auto">
              <label>
                <input
                  className="uk-checkbox"
                  type="checkbox"
                  checked={true}
                  /* onChange={handleChange}*/
                />
              </label>
            </td>
            <td> {oportuities[3].title}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OportunitiesList;
