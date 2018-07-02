import Header from "../ui/Header";
import Page from "../Page";
import Navigation from "../ui/Navigation";
const Layout = ({ children }) => (
  <Page>
    <div>
      <Header>
        <h1>Header du site</h1>
      </Header>
      <Navigation />
      <div>{children}</div>
    </div>
  </Page>
);

export default Layout;
