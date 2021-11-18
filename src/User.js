import React  from "react"

/*function User() {
    return (
        <div><h1>Apple</h1></div>
        
    )
}*/
class User extends React.Component {
    render(){
        return(
            <div className="App">
                <h1>Student{this.props.name}</h1>
            </div>
        )
    }
    }

export default User