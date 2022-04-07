import React from "react";
import "./style.css";
  
const ToggleSwitch = ({ label, onChange }) => {
  return (
    <div className="container" >
      {label}{" "}
      <div className="toggle-switch" >
        <input type="checkbox" className="checkbox" onChange={e => onChange(e.target.checked)}
          name={label} id={label}
        />
        <label className="label" htmlFor={label}>
          <span className="inner" />
          <span className="switch" />
        </label>
      </div>
    </div>
  );
};
  
export default React.memo(ToggleSwitch, () => false);