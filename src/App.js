import { Switch, Route, Redirect } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const Home = () => {
  return <h1>Home</h1>;
};
const UserProfile = () => {
  return <h1>UserProfile</h1>;
};
const UserEdit = () => {
  return <h1>UserEdit</h1>;
};
const UsersLayout = () => {
  const { userId, page } = useParams();

  if (userId && page !== "profile" && page !== "edit") {
    <Redirect to="/profile" />;
  }
  return (
    <>
      {userId && page === "profile" && <UserProfile />}
      {userId && page === "edit" && <UserEdit />}
    </>
  );
};
function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/users/:userId/page?" component={UsersLayout} />
      <Redirect from="*" to="/" />
    </Switch>
  );
}

export default App;
