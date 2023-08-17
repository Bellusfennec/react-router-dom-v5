import { Switch, Route, Redirect, useParams } from "react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <Link to="/users">UserList</Link>
    </>
  );
};
const UsersList = () => {
  return (
    <>
      <h1>UsersList</h1>
      <Link to="/1">User1</Link>
      <Link to="/2">User2</Link>
      <Link to="/3">User3</Link>
      <Link to="/4">User4</Link>
      <Link to="/5">User5</Link>
    </>
  );
};
const UserProfile = () => {
  return (
    <>
      <h1>UserProfile</h1>
      <Link to="/edit">UserEdit</Link>
    </>
  );
};
const UserEdit = () => {
  return (
    <>
      <h1>UserEdit</h1>
      <Link to="/edit">UserProfile</Link>
    </>
  );
};
const UsersLayout = () => {
  const { userId, page } = useParams();

  if (!userId) {
    <Redirect to="/users" />;
  }
  if (userId && page !== "profile" && page !== "edit") {
    <Redirect to="/users/profile" />;
  }
  return (
    <>
      {userId && page === "profile" && <UserProfile />}
      {userId && page === "edit" && <UserEdit />}
      {!userId && <UsersList />}
    </>
  );
};
function App() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/users/:userId/page?" component={UsersLayout} />
      <Redirect from="*" to="/" />
    </Switch>
  );
}

export default App;
