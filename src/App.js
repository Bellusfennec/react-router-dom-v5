import { Switch, Route, Redirect, useParams } from "react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const HomePage = () => {
  console.log("HomePage");

  return (
    <>
      <h1>Home</h1>
      <Link to="/users">UserList</Link>
    </>
  );
};

const UsersListPage = () => {
  console.log("UsersListPage");
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

const UserProfilePage = () => {
  const { userId } = useParams();
  return (
    <>
      <h1>UserProfile</h1>
      <Link to={`/user/${userId}/edit`}>UserEdit</Link>
    </>
  );
};

const UserEditPage = () => {
  const { userId } = useParams();
  return (
    <>
      <h1>UserEdit</h1>
      <Link to={`/user/${userId}/profile`}>UserProfile</Link>
    </>
  );
};

function UsersLayout() {
  const { userId, page } = useParams();
  console.log("UsersLayout");

  return (
    <Switch>
      <Route path="/users/:userId?/profile" component={UserProfilePage} />
      <Route path="/users/:userId?/edit" component={UserEditPage} />
      <Route exact path="/users" component={UsersListPage} />
    </Switch>
  );
}
function App() {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/users" component={UsersLayout} />
      {/* <Route path="/users/:userId?/page?" component={UsersLayout} /> */}
      {/* <Redirect from="*" to="/" /> */}
    </Switch>
  );
}

export default App;
