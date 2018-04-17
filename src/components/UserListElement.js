import React from 'react';
import { Button, Glyphicon } from 'react-bootstrap';

export default class UserListElement extends React.Component {
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
                    <Button bsSize="xsmall" data-usernam={user.username} data-id={user.id}>
                        Delete<Glyphicon glyph="remove-circle" />
                    </Button>
                </td>
            </tr>
        );
    }
}
// make suer we have all the props
UserListElement.propTypes ={
    user: React.PropTypes.object.isRequired
}
