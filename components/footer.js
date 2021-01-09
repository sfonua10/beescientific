import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaYoutube,
  FaInstagram,
} from 'react-icons/fa';

export default function Footer() {
  const socialIcons = [
    {
      id: 0,
      icon: <FaFacebookF size="24" />,
      href: 'https://www.facebook.com/beescientific',
    },
    {
      id: 1,
      icon: <FaTwitter size="24" />,
      href: 'https://twitter.com/beescientific',
    },
    {
      id: 2,
      icon: <FaPinterestP size="24" />,
      href: 'https://www.pinterest.com/beescientific/bee-barrel/',
    },
    {
      id: 3,
      icon: <FaYoutube size="24" />,
      href: 'https://www.youtube.com/beescientific',
    },
    {
      id: 4,
      icon: <FaInstagram size="24" />,
      href: 'https://www.instagram.com/bee.scientific/',
    },
  ];
  return (
    <footer className="py-4 text-white flex blue-gray justify-center bg-blue-gray text-sm md:grid grid-cols-3">
      <div className="ml-4 hidden md:block ">
        <p>OUR MISSION</p>
        <p>BECOME A CONTRIBUTOR</p>
        <p>CONTACT US</p>
        <br />
        <p>CONNECT WITH US</p>
        <ul className="flex mt-3">
          {socialIcons.map((social) => {
            return (
              <li key={social.id} className="mr-6">
                <a href={social.href}>{social.icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="justify-self-end hidden md:block">
        <p>INFO@BEESCIENTIFIC.NET</p>
        <p>P.O. BOX 379</p>
        <p>MONA, UT 84645</p>
      </div>

      <div className="flex flex-col justify-self-auto md:text-xs md:mr-4 md:justify-self-end md:self-end">
        <img
          src="/images/logo_white.svg"
          className="self-end mb-3 hidden md:block"
        />
        <p>&#169; 2020 BEESCIENTIFIC, LLC.</p>
        <p className="text-center">ALL RIGHTS RESERVED</p>
      </div>
    </footer>
  );
}
