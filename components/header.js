import Link from 'next/link';

export default function Header() {
  const linkData = [
    {
      id: 0,
      href: '/',
      text: 'HOME',
    },
    {
      id: 1,
      href: '/beeBarrel',
      text: 'BEE BARREL',
    },
    {
      id: 2,
      href: '/about',
      text: 'ABOUT',
    },
  ];

  return (
    <header className="flex">
      <div className="flex flex-1 ml-4 mt-8">
        <img className="md:hidden" src="/images/hamburger_menu.svg" />
        <a className="ml-4">
          <img src="/images/logo.svg" style={{ width: `100%` }} />
        </a>
      </div>
      <nav className="self-end">
        <ul className="hidden md:flex flex-row space-x-8 mr-4 text-darkish-blue lg:text-lg">
          {linkData.map((link) => (
            <li key={link.id} className="lg:mr-5">
              <Link href={link.href}>
                <a>{link.text}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
