import Header from "../ui/Header";
import Page from "../Page";
const Layout = ({ children }) => (
  <Page>
    <div>
      <Header />
      <div>{children}</div>
    </div>
  </Page>
);

export default Layout;
