import React from "react";
import UsersPage from "../userPage/UsersPage";


class UsersList extends React.Component {
    constructor() {
        super()
        this.state ={users: []}
    }
    getInfo = (event) => {
        console.log(event.target.dataset.id)
        fetch(`https://jsonplaceholder.typicode.com/users/${event.target.dataset.id}`)
            .then(response =>response.json())
            .then(data => this.setState({ users: data }))
        
    }
    

    render() {
        return (
            <>
            
            <ul>
                {this.props.users.map(users => <li>{users.name},
                    <button data-id={users.id} onClick={this.getInfo} >Посмотреть</button></li>
                )
                  
                }
                </ul>
                
                <ul>
                    <li>{this.state.users.id }</li>
                    <li>{this.state.users.name }</li>
                    <li>{this.state.users.username }</li>
                    <li>{this.state.users.email}</li>
                    <li>{this.state.users.web}</li>

 
            </ul>
            </>
        );
    }

}


export default UsersList;