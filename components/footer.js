import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaYoutube,
  FaInstagram,
} from 'react-icons/fa';

export default function Footer() {
  const socialIcons = [
    <FaFacebookF size="24" />,
    <FaTwitter size="24" />,
    <FaPinterestP size="24" />,
    <FaYoutube size="24" />,
    <FaInstagram size="24" />,
  ];
  return (
    <footer className="py-4 text-white flex blue-gray justify-center bg-blue-gray text-sm md:grid grid-cols-3 lg:py-8">
      <div className="ml-4 hidden md:block lg:ml-28">
        <p>OUR MISSION</p>
        <p>BECOME A CONTRIBUTOR</p>
        <p>CONTACT US</p>
        <br />
        <p>CONNECT WITH US</p>
        <ul className="flex mt-3">
          {socialIcons.map((icon, index) => (
            <li key={index} className="mr-6">
              <a>{icon}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="justify-self-end hidden md:block lg:justify-self-start">
        <p>INFO@BEESCIENTIFIC.NET</p>
        <p>P.O. BOX 379</p>
        <p>MONA, UT 84645</p>
      </div>

      <div className="flex flex-col justify-self-auto md:text-xs mr-4 md:justify-self-end md:self-end lg:mr-28">
        <img
          src="/images/logo_white.svg"
          className="self-end mb-3 hidden md:block"
        />
        <p>&#169; 2020 BEESCIENTIFIC, LLC.</p>
        <p>ALL RIGHTS RESERVED</p>
      </div>
    </footer>
  );
}
