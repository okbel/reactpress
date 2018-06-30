import Link from "next/link";
import styled from "styled-components";

const LinkButton = ({ children, ...rest }) => {
  return (
    <Button>
      <Link {...rest} prefetch>
        <A> {children}</A>
      </Link>
    </Button>
  );
};

const Button = styled.div`
  display: inline-block;
  border: solid black 1px;
  padding: 1rem;
  cursor: pointer;
  &:hover {
    background: black;
    color: white;
  }
`;

const A = styled.a`
  &:hover {
    background: black;
    color: white;
  }
  color: black;
  text-decoration: none;
`;

export default LinkButton;
