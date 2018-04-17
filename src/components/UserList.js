import React from 'react';
import { connect } from 'react-redux';

import UserListElement from './UserListElement';

class UserList extends React.Component{

            // render
            render(){

            return (
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Username</th>
                            <th>Job</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.users.map((user,index) => {
                            return (
                                <UserListElement key={user.id} user={user}/>
                            );
                        })}
                    </tbody>
                </table>
            );
        }

}
//Export the connected class
function mapStateToProps(state){
    return (
        {
            users: state.users
        }
    )
}
export default connect(mapStateToProps)(UserList)
