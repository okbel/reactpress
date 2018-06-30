import Link from "next/link";
const Navigation = ({ links }) => (
  <nav>
    <ul>
      <li>
        <Link href="/">
          <a>Accueil</a>
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
