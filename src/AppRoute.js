import { Link, Route, Routes } from "react-router-dom";
import { Container } from "./Container";
import { Counter } from "./Counter";
import { GithubUserList } from "./GithubUserList";
import { Login } from "./Login";
import { ShowGithubUser } from "./ShowGithubUser";
import { Welcome } from "./Welcome";

export function AppRoute() {
  return (
    <Container title="My Awesome App">
      <Routes>
        <Route path="/" element={<Welcome name="Ivan" age={24} />}></Route>
        <Route path="/counter" element={<Counter />}></Route>
        {/* <Route path="/:username" element={<ShowGithubUser />}></Route> */}
        <Route path="*" element={"Content not found"}></Route>
        <Route path="/users" element={<GithubUserList />}>
          <Route index element={<p>Add a user and select it</p>}></Route>
          <Route path=":username" element={<ShowGithubUser />} />
        </Route>
      </Routes>
      <div>
        <Link to="/">Welcome</Link> |<Link to="/counter">Counter</Link> |
        <Link to="/users">GitHubUser</Link> |
      </div>
    </Container>
  );
}
