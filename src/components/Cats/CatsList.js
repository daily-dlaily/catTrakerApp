import React from 'react'
import Cat from './Cat'

function CatsList() {
    return (
        <div>
            <table className="table table-dark container" style = {{marginTop : "100 px"}}>
                <thead>
                    <tr className= "text-info">
                        <th scope="col">Name</th>
                        <th scope="col">Adopted On</th>
                        <th scope="col">Status</th>
                        <th scope="col">Remove</th>
                    </tr>
                </thead>
                <tbody>
                    <Cat/>
                </tbody>
            </table>
        </div>
    )
}

export default CatsList
