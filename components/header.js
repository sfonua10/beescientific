import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="flex">
      <div className="flex flex-1 ml-4 mt-8">
        <button onClick={() => setIsOpen(true)}>
          <img
            className="align-start md:hidden"
            src="/images/hamburger_menu.svg"
          />
        </button>

        <nav className="ml-4">
          <a>
            <picture>
              <source
                media="(max-width: 768px)"
                srcSet="/images/icon-small.svg"
              />
              <source
                media="(max-width: 1024px)"
                srcSet="/images/icon-medium.svg"
              />
              <source
                media="(min-width: 1024px)"
                srcSet="/images/icon-large.svg"
              />
              <img src="/images/logo.svg" className="stroke-1" />
            </picture>
          </a>
          <nav
            className={`fixed top-0 w-96 bg-gray-100 left-0 h-full overflow-x-hidden overflow-y-scroll p-4 ${
              !isOpen ? 'hidden' : ''
            }`}
          >
            <button className="float-right" onClick={() => setIsOpen(false)}>
              <img src="/images/close.png" alt="close menu" />
            </button>
            <div className="ml-4">
              <Link href="/">
                <a className="mb-4 leading-8 block text-sm">HOME</a>
              </Link>
              <Link href="/beeBarrel">
                <a className="mb-4 leading-8 block text-sm">BEE BARREL</a>
              </Link>
              <Link href="/about">
                <a className="mb-4 leading-8 block text-sm">ABOUT US</a>
              </Link>
              <Link href="/contribute">
                <a className="mb-4 leading-8 block text-sm">CONTRIBUTE</a>
              </Link>
            </div>
          </nav>
        </nav>
      </div>
      <nav className="self-end">
        <ul className="hidden md:flex flex-row space-x-8 md:space-x-14 mr-4 md: mr-6 text-darkish-blue">
          <li>
            <Link href="/">
              <a
                className={`${
                  useRouter().pathname === '/' ? 'font-black text-sm lg:text-lg' : 'text-sm lg:text-lg'
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
                  useRouter().pathname === '/beeBarrel' ? 'font-black text-sm lg:text-lg' : 'text-sm lg:text-lg'
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
                  useRouter().pathname === '/about' ? 'font-black text-sm lg:text-lg' : 'text-sm lg:text-lg'
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
