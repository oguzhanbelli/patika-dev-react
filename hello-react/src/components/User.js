import React from "react";
import PropTypes from "prop-types";

function User({ name, surname, isLoggedIn, age, friends, address }) {
  return (
    <>
      <h1>{isLoggedIn ? `${name} ${surname} ${age}` : "Giriş Yapmadınız.."}</h1>
      {address.title}
      <br />
      {address.zip}

      {friends &&
        friends.map((friend) => <div key={friend.id}>{friend.name}</div>)}
    </>
  );
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  age: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  friends: PropTypes.array,
  address: PropTypes.shape({
    title: PropTypes.string,
    zip: PropTypes.number,
  }),
};
User.defaultProps = {
  isLoggedIn: false,
  name:"İsimsiz"
};
export default User;
