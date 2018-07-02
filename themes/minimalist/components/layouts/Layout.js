import Header from "../ui/Header";
import Theme from "../../components/Theme";
import Navigation from "../ui/Navigation";
import Container from "../ui/Container";

const Layout = ({ children }) => (
  <Theme>
    <Container>
      <Header>
        <h1>Header du site</h1>
      </Header>
      <Navigation />
      <div>{children}</div>
    </Container>
  </Theme>
);

export default Layout;
