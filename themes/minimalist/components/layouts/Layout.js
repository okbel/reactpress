import Header from "../ui/Header";
import Theme from "../../components/Theme";
import Navigation from "../ui/Navigation";

const Layout = ({ children }) => (
  <Theme>
    <Header>
      <h1>Header du site</h1>
    </Header>
    <Navigation />
    <div>{children}</div>
  </Theme>
);

export default Layout;
