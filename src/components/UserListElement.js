import React from 'react';
import { Button, Glyphicon } from 'react-bootstrap';
import { connect } from 'react-redux';
class UserListElement extends React.Component {
    constructor(props){
        super(props);

        // bind <this> to the event methods
        this.modalDeleteShow = this.modalDeleteShow.bind(this);

    }
    render(){
        const user = this.props.user;
        return (
            <tr >
                <td>#{user.id}</td>
                <td>{user.username}</td>
                <td>{user.job}</td>
                <td>
                    <a href={'/user-edit/' + user.id}>
                        <Button bsSize="xsmall">
                            Eidt <Glyphicon glyph="edit" />
                        </Button>
                    </a>
                </td>
                <td>
                    <Button bsSize="xsmall" data-username={user.username} data-id={user.id}
                        onClick={this.modalDeleteShow} >
                         Delete <Glyphicon glyph="remove-circle"/>
                    </Button>
                </td>
            </tr>
        );
    }

    modalDeleteShow(event){
        const user_id = Number(event.target.dataset.id);
        const username = event.target.dataset.username;
        this.props.dispatch({
            type: 'users.modalDeleteShow',
            id: user_id,
            username: username,
        });
    }
}
// make suer we have all the props
UserListElement.propTypes ={
    user: React.PropTypes.object.isRequired
}

// exporte the connected class
export default connect()(UserListElement)
