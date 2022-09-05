import { Route, Routes } from "react-router-dom";
import { Container } from "./Container";
import { Counter } from "./Counter";
import { Login } from "./Login";
import { ShowGithubUser } from "./ShowGithubUser";
import { Welcome } from "./Welcome";

export function AppRoute() {
  return (
    <Container title="My Awesome App">
      <Routes>
        <Route path="/" element={<Welcome name="Ivan" age={24} />}></Route>
        <Route path="/counter" element={<Counter />}></Route>
        <Route path="/:username" element={<ShowGithubUser />}></Route>
      </Routes>
    </Container>
  );
}
