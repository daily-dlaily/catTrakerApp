import React, { Component } from 'react'

export default class SignIn extends Component {
    state = {
        email : "",
        password :"",
    };
    handleChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value,
        });
    }

    handleSubmit = (e)=>{
        e.preventDefault();
        console.log(this.state);
    }
    render() {
        return (
            <div>
                <form
                 className = "container" autoComplete="off" style = {{marginTop: "70px"}} onSubmit = {this.handleSubmit}
                 >
                    <legend>
                        {" "}
                        <h4>Sign In</h4>
                    </legend>
                    <div className="form-group">
                        <label htmlFor="email">Enter Email</label>
                        <input type="email" className="form-control" id="email"  placeholder="Email" onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Password">Enter Password</label>
                        <input type="password" className="form-control" id="Password" placeholder=" Enter Password" onChange={this.handleChange}/>
                    </div>
                   
                    <button type="submit" className="btn btn-primary" style = {{marginTop: "100px"}}>Sign In</button>
                    
                </form>
            </div>
        )
    }
}
