import {
  BrowserRouter,
  Link,
  Route,
  Switch,
  useParams,
  useRouteMatch,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/users/:userId?/:page?" component={UsersLayout}>
            <UsersLayout>
              <Switch>
                <Route
                  path="/users/:userId/profile"
                  component={UserProfilePage}
                />
                <Route path="/users/:userId/edit" component={UserEditPage} />
                <Route exact path="/users" component={UsersListPage} />
              </Switch>
            </UsersLayout>
          </Route>
          <Redirect from="*" to="/" />
        </Switch>
      </AppLayout>
    </BrowserRouter>
  );
}
function AppLayout({ children }) {
  return (
    <>
      <h1>App Layout</h1>
      <ul>
        <li>
          <Link to="/users">Users List</Link>
        </li>
      </ul>
      {children}
    </>
  );
}
function HomePage() {
  return (
    <>
      <h1>Home</h1>
    </>
  );
}
function UsersLayout({ children }) {
  const { url } = useRouteMatch();
  const { userId, page } = useParams();
  if (page && page !== "profile" && page !== "edit") {
    return <Redirect to="/users" />;
  }
  if (userId && !page) return <Redirect to={url + "/profile"} />;
  return (
    <>
      <h1>Users Layout</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
      {children}
    </>
  );
}
function UsersListPage() {
  return (
    <>
      <h1>Users List</h1>
      <ul>
        <li>
          <Link to="/users/1">Users 1</Link>
        </li>
        <li>
          <Link to="/users/2">Users 2</Link>
        </li>
        <li>
          <Link to="/users/3">Users 3</Link>
        </li>
        <li>
          <Link to="/users/4">Users 4</Link>
        </li>
        <li>
          <Link to="/users/5">Users 5</Link>
        </li>
      </ul>
    </>
  );
}
function UserProfilePage() {
  const { userId } = useParams();
  return (
    <>
      <h1>User Profile</h1>
      <h3>id: {userId}</h3>
      <ul>
        <li>
          <Link to={`/users/${userId}/edit`}>Edit</Link>
        </li>
        <li>
          <Link to="/users">Users List</Link>
        </li>
      </ul>
    </>
  );
}
function UserEditPage() {
  const { userId } = useParams();
  return (
    <>
      <h1>User Edit</h1>
      <ul>
        <li>
          <Link to={`/users/${userId}/profile`}>Profile</Link>
        </li>
        <li>
          <Link to="/users">Users List</Link>
        </li>
      </ul>
    </>
  );
}

export default App;
