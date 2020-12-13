import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaYoutube,
  FaInstagram,
} from 'react-icons/fa';

const SocialIcons = () => {
  const socialIcons = [
    <FaFacebookF />,
    <FaTwitter />,
    <FaPinterestP />,
    <FaYoutube />,
    <FaInstagram />,
  ];

  return (
    <>
      <h3 className="mb-1 text-lg">CONNECT WITH US</h3>
      <div className="flex">
        {socialIcons.map((icon, index) => (
          <a className="mr-6" key={index + 1}>
            {icon}
          </a>
        ))}
      </div>
    </>
  );
};

export default SocialIcons;
