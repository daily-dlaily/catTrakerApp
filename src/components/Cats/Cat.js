import React from 'react';
import moment from 'moment';

function Cat({cat}) {
    return (
        <>
            <tr>
                <th >{cat.cat}</th>
                <td>{moment(cat.date.toDate()).calendar()}</td>
                <td>Vaccinated</td>
                <td>
                    <span className="material-icons " style={{cursor:"pointer"}}>
                    remove_circle_outline
                    </span>
                </td>
            </tr>
        </>
    )
}

export default Cat
