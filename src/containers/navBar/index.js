import React, { useState, useContext } from "react";
import { SignInBtn } from "../../components";
import { UserContext } from "../../contexts/user";

import "./style.css";

export default function NavBar() {
  const [user, setUser] = useContext(UserContext).user;

  return (
    <div className="navbar">
      <p>ReactSocial</p>

      {user ? (
        <img className="navImg" src={user.photoURL} />
      ) : (
          <SignInBtn />
        )}
    </div>
  );
}
