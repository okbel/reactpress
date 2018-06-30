import Link from "next/link";

const LinkButton = ({ children, ...rest }) => {
  return (
    <div>
      <Link {...rest} prefetch>
        <a> {children}</a>
      </Link>
    </div>
  );
};

export default LinkButton;
