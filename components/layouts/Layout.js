import Header from "../ui/Header";
import Navigation from "../ui/Navigation";
import Container from "../ui/Container";
import config from "../../services/publicConfig";

const Layout = ({ children }) => (
  <Container>
    <Header>
      <h1>REACTPRESS DEMO</h1>
    </Header>
    <Navigation links={config.mainMenuLinks} />
    <div>{children}</div>
  </Container>
);

export default Layout;
