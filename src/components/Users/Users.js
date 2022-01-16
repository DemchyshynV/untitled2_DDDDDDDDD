import User from "../User/User";

const Users = ({filtered:users}) => {

    return (
        <div>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export default Users;
