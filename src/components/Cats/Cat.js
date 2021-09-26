

import React from 'react';
import moment from 'moment';
import { connect } from "react-redux";
import {removeCat} from "../../actions/AppActions"



const Cat = ({cat, removeCat}) => {

    
    const handleRemove = (cat) => {
        removeCat(cat);
        console.log(cat)
    };

    return (
        <>
            <tr>
                <th >{cat.cat}</th>
                <td>{moment(cat.date.toDate()).calendar()}</td>
                <td>Vaccinated</td>
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
        removeCat: ( cat) => dispatch(removeCat(cat))
    };
  };
  
  export default connect(null, mapDispatchToProps)(Cat);
