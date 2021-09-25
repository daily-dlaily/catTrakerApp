import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCat } from '../../actions/AppActions';

class AddCat extends Component {
    state = {
        cat : "",
     
    };
    handleChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value,
        });
    }

    handleSubmit = (e)=>{
        e.preventDefault();
        this.props.addCat(this.state)
        console.log(this.state);
    }
    render() {
        return (
            <div>
                <form
                 className = "container" 
                 autoComplete="off" 
                 style = {{marginTop: "38px"}}
                 onSubmit = {this.handleSubmit}
                 >
                    <legend>
                        {" "}
                        <h4>New Cat</h4>
                    </legend>
                    <div className="form-group">
                        <label htmlFor="name">Enter your new cat's name</label>
                        <input type="name" className="form-control" id="name"  placeholder="Name" onChange={this.handleChange}/>
                    </div>
                    
                   
                    <button type="submit" className="btn btn-primary" style = {{marginTop: "20px"}}>Add</button>
                    
                </form>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return{
        addCat: cat => dispatch(addCat(cat))
    };
};

export default connect(null, mapDispatchToProps)(AddCat)