import React from 'react'
import AddCat from '../Cats/AddCat'
import CatsList from '../Cats/CatsList'
import { connect } from "react-redux";
import {Redirect} from "react-router-dom"

const Dashboard = ({ uid }) => {
    if (!uid) return <Redirect to="/signin" />;
    return (
        <div>
            <AddCat/>
            <CatsList/>
        </div>
    )
}

const mapStateToProps = (state) => {
    const uid = state.firebase.auth.uid;
    return {
      uid: uid,
    };
  };
  
  export default connect(mapStateToProps)(Dashboard);
