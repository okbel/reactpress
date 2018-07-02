import Link from "next/link";
import PropTypes from "prop-types";
import config from "../../services/publicConfig";
import "./Navigation.css";

let Navigation = class extends React.Component {
  state = {
    mobileMenuOpened: false
  };
  static propTypes = {
    links: PropTypes.arrayOf(
      PropTypes.shape({
        href: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
      }).isRequired
    )
  };
  render() {
    const { classes, links } = this.props;
    return (
      <div className="main-menu">
        <div className="nav-Region">
          <Link href="/">
            <a>{config.siteInformations.name}</a>
          </Link>
        </div>
        <div className="navRegion" />
        <div className="navRegion">{<MenuRight links={links} />}</div>
      </div>
    );
  }
};

/**
 * MenuRight
 */

let MenuRight = ({ links }) => (
  <div>
    <ul className="linksUl">
      {links.map(link => (
        <li key={link.href} className="linksLi">
          <Link href={link.href}>
            <a>{link.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Navigation;
