import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex">
      <div className="flex flex-1 ml-4 mt-8">
        <img className="md:hidden" src="/images/hamburger_menu.svg" />
        <a className="ml-4">
          <img src="/images/logo.svg" style={{ width: `100%` }} />
        </a>
      </div>
      <nav className="self-end">
        <ul className="hidden md:flex flex-row space-x-8 mr-4 text-darkish-blue">
          <li>
            <Link href="/">
              <a>HOME</a>
            </Link>
          </li>
          <li>
            <Link href="/beeBarrel">
              <a>BEE BARREL</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>ABOUT US</a>
            </Link>
          </li>
          {/* <li>
            <Link href="/contribute">
              <a>CONTRIBUTE</a>
            </Link>
          </li> */}
        </ul>
      </nav>
    </header>
  );
}
