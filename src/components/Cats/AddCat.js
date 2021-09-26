import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCat } from '../../actions/AppActions';

class AddCat extends Component {
    state = {
        cat: "",
        checked: "false",

     
    };
    handleChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value,
        });
    }

    handleSubmit = (e)=>{
        e.preventDefault();
        this.props.addCat(this.state);
        document.getElementById("addCatForm").reset();
        
    }
    render() {
        return (
            <div>
                <form
                    id="addCatForm"
                    className="container"
                    autoComplete="off"
                    style={{ marginTop: "38px" }}
                    onSubmit={this.handleSubmit}
                >
                    <legend> </legend>
                    <div className="form-group">
                        <label htmlFor="cat">Add a cat</label>
                        <input
                            type="text"
                            className="form-control"
                            id="cat"
                            onChange={this.handleChange}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary my-3" style={{ marginTop: "20px" }}>Add</button>

                </form>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        addCat: (cat) => dispatch(addCat(cat))
    };
};

export default connect(null, mapDispatchToProps)(AddCat)