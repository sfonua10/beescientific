import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header() {
  console.log(useRouter().pathname);
  return (
    <header className="flex">
      <div className="flex flex-1 ml-4 mt-8">
        <img className="md:hidden" src="/images/hamburger_menu.svg" />
        <a className="ml-4">
          <img src="/images/logo.svg" className="stroke-1" />
        </a>
      </div>
      <nav className="self-end">
        <ul className="hidden md:flex flex-row space-x-8 md:space-x-14 mr-4 md: mr-6 text-darkish-blue">
          <li>
            <Link href="/">
              <a
                className={`${
                  useRouter().pathname === '/' ? 'font-black' : ''
                }`}
              >
                HOME
              </a>
            </Link>
          </li>
          <li>
            <Link href="/beeBarrel">
              <a
                className={`${
                  useRouter().pathname === '/beeBarrel' ? 'font-black' : ''
                }`}
              >
                BEE BARREL
              </a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a
                className={`${
                  useRouter().pathname === '/about' ? 'font-black' : ''
                }`}
              >
                ABOUT US
              </a>
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
