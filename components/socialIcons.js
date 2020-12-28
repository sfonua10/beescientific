import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaYoutube,
  FaInstagram,
} from 'react-icons/fa';

const SocialIcons = () => {
  const socialIcons = [
    {
      id: 0,
      icon: <FaFacebookF />,
      href: 'https://www.facebook.com/beescientific'
    },
    {
      id: 1,
      icon: <FaTwitter />,
      href: 'https://twitter.com/beescientific'
    },
    {
      id: 2,
      icon: <FaPinterestP />,
      href: 'https://www.pinterest.com/beescientific/bee-barrel/'
    },
    {
      id: 3,
      icon: <FaYoutube />,
      href: 'https://www.youtube.com/beescientific'
    },
    {
      id: 4,
      icon: <FaInstagram />,
      href: 'https://www.instagram.com/bee.scientific/'
    },
  ];

  return (
    <>
      <h3 className="mb-1 text-lg">CONNECT WITH US</h3>
      <div className="flex">
        {socialIcons.map((social) => (
          <a className="mr-6" href={social.href} key={social.id} target="_blank">
            {social.icon}
          </a>
        ))}
      </div>
    </>
  );
};

export default SocialIcons;
