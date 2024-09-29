import React from "react";
import Nav from "./components/nav/Nav";
import Part1 from "./components/part1/Part1";
import Part2 from "./components/part2/Part2";
import Part3 from "./components/part3/Part3";
import { Part4 } from "./components/part4/Part4";
function App() {
  return (<div style={{ width: "100%" }}>
    <Nav />
    <Part1 />
    <Part2 />
    <Part3 />
    <Part4/>
  </div>)
}
export default App;
