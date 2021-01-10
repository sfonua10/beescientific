import Link from 'next/link';

const Button = ({ text, href = "" }) => {
  return (
    <button className="btn-blue">
      <Link href={href}>
        <a target="_blank">{text}</a>
      </Link>
    </button>
  );
};

export default Button;
