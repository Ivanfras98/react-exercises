import { Route, Routes } from "react-router-dom";
import { Container } from "./Container";
import { Counter } from "./Counter";
import { Login } from "./Login";
import { Welcome } from "./Welcome";

export function AppRoute() {
  return (
    <Container title="My Awesome App">
      <Routes>
        <Route path="/" element={<Welcome name="Ivan" age={24} />}></Route>
        <Route path="/counter" element={<Counter />}></Route>
      </Routes>
    </Container>
  );
}
