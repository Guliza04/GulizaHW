import React from "react";
import UsersList from "../userList/UsersList";

class UsersPage extends React.Component {
    constructor() {
        super();
        this.state ={users: []}
    }

    componentDidMount() {
        fetch(`https://jsonplaceholder.typicode.com/users/`)
            .then(response =>response.json())
            .then( data => this.setState({users: data}))

    }

    render() {
        return (
            <div>
                <h1>User Page</h1>
                <UsersList users={this.state.users} getInfo = {this.getInfo} />
                
            </div>
        );
    }

}

export default UsersPage;