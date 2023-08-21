
function User({name, loggedUser, changeUser}) {
    return (
      <div className={name == loggedUser ? "user logged" : "user"} onClick={() => {changeUser(name)}} key={name}>
        {name}
      </div>
    );
  }
  
  export default User;
  