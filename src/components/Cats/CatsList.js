import React from 'react'
import Cat from './Cat'
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect} from "react-redux-firebase";



function CatsList({ cats}) {
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
                    
                {cats && cats.map((cat) => <Cat cat={cat} key={cat.id} />)}
                    
                </tbody>
            </table>
        </div>
    )
}
const mapStateToProps = (state) => {
    console.log("the state",state);
    const cats = state.firestore.ordered.cats;
    return {
      cats: cats,
    };
    
  };
  export default compose(
    connect(mapStateToProps),
    firestoreConnect(() => [
      {
        collection: "cats",
        orderBy: ["date", "desc"],
        
      },
    ])
  )(CatsList);

  