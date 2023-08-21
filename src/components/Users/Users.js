import User from "./User";

function Users({users, loggedUser, changeUser}) {
    return (
        <div className="users-wrapper">
            <h1>Who is watching?</h1>
            <div className="users">
                {users.map(u => <User name={u} loggedUser={loggedUser} changeUser={changeUser} key={u}/>)}
            </div>
        </div>
    );
}

export default Users;
