import { useEffect, useState } from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import { GithubUser } from "./GithubUser";
import { ShowGithubUser } from "./ShowGithubUser";

export function GithubUserList() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/users/Ivanfras98">Persona Github 1</Link>
        </li>
        <li>
          <Link to="/users/AlexSgherri">Persona Github 2</Link>
        </li>
      </ul>
      <Outlet />
    </div>
    //     <form>
    //     <input name="username" value={gituser.insert} onChange={HandleInputChanges}/>
    //     <button type="button" onClick={HandleButtonSubmit}>Search Github Username</button>
    //     <ul>
    //       {user.map((username, index) => (
    //        (<li key={index}>{<GithubUser username={username} />}</li>)
    //       ))}
    //     </ul>
    //   </form>
  );
}
