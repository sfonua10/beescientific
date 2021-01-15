import Link from 'next/link';

const Button = ({ text, href = "", target = "_self" }) => {
  return (
    <button className="btn-blue">
      <Link href={href}>
        <a target={target}>{text}</a>
      </Link>
    </button>
  );
};

export default Button;
