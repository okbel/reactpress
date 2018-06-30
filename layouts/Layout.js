import Header from "../ui/Header";
const Layout = ({ children }) => (
  <div>
    <Header />
    <div>{children}</div>
  </div>
);

export default Layout;
