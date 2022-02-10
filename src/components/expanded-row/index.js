import React, {useState} from "react";

const ExpandedRow = (props) => {

    const [showDetails, setShowDetails] = useState(false);
  
    function toggle() {
        setShowDetails(!showDetails);
    }

  return (
    <div className="rs-exp">
      <div className="d-flex justify-content-between align-items-center rs-exp__header" onClick={toggle}>
        <h4>{props.data.title}</h4>
        <span className="material-icons rs-exp__icon">{showDetails ? 'remove_circle_outline' : 'add_circle_outline' }</span>
      </div>
      {showDetails && (
        <p className="rs-exp__details">
            {props.data.desc}
        </p>
      )}
    </div>
  );
};
export default ExpandedRow;
