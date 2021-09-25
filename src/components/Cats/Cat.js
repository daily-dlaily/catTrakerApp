import React from 'react'

function Cat() {
    return (
        <>
            <tr>
                <th >TouTou </th>
                <td>12/12/2021</td>
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
