

import React from 'react';
import moment from 'moment';
import { connect } from "react-redux";
import {removeCat} from "../../actions/AppActions"
import Check from './Check';
import { toggleChecked } from '../../actions/AppActions';



const Cat = ({cat, removeCat,toggleChecked}) => {

    
    const handleRemove = (cat) => {
        removeCat(cat);
        console.log(cat)
    };

    const handleCheck = (cat) => {
        toggleChecked(cat);
      };
    

    return (
        <>
            <tr>
                <th >{cat.cat}</th>
                <td>{moment(cat.date.toDate()).calendar()}</td>
                <td>
                    <Check onClick={() => handleCheck(cat)} checked={cat.checked}/>
                </td>
                <td>
                    <span className="material-icons"
                        style={{ cursor: "pointer" }}
                        onClick={() => handleRemove(cat)}>
                        remove_circle_outline
                    </span>
                </td>
            </tr>
        </>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        removeCat: ( cat) => dispatch(removeCat(cat)),
        toggleChecked: (cat) => dispatch(toggleChecked(cat)),
    };
  };
  
  export default connect(null, mapDispatchToProps)(Cat);
