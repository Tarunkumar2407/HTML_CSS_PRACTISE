import React, {Component} from "react"

class User extends Component{
    constructor(){
        super();
        this.state = {
            data : "Tarun"
        }
    }
    update(){
        this.setState({data: "kumar"})
    }
    render() {
        return(
            <>
               <h1>Hello i am class component</h1>
               <h2>{this.state.data}</h2>
               <button onClick={() => this.update()}>Update Data</button>
            </>
            
        )
    }
}
export default User