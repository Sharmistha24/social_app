import React from "react";

import { NavBar, CreatePost } from "../../containers";
import Feed from "../../containers/feed";

import "./style.css";

export default function Home() {
  return (
    <div className="home">
      <NavBar />
      <CreatePost />
      <Feed />
    </div>
  );
}
