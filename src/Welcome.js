import React from "react";
import { Age } from "./Age";

export function Welcome({name, age}){
  console.log(age)
  return <div>
    <p>Welcome, {name}</p>
    {<Age age ={age}/>}
  </div>
}
