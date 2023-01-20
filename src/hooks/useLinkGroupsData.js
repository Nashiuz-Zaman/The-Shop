import twitterLogo from "../assets/twitter-logo.png";
import facebookLogo from "../assets/facebook-logo.png";
import instagramLogo from "../assets/instagram-logo.png";
import youtubeLogo from "../assets/youtube-logo.png";

export default function useLinkGroupsData() {
  const footerOptions = [
    {
      id: 0,
      heading: "",
      options: [
        { text: "GIFT CARDS", link: "gift-cards" },
        { text: "PROMOTIONS", link: "promo-codes" },
        { text: "FIND A STORE", link: "retail" },
        { text: "SIGN UP FOR EMAIL", link: "build fade up component" },
        { text: "BECOME A MEMBER", link: "register" },
        { text: "THE-SHOP JOURNAL", link: "stories" },
        { text: "SEND US FEEDBACK", link: "site-feedback" },
      ],
    },
    {
      id: 1,
      heading: { text: "Get Help", link: "help" },
      options: [
        { text: "Order Status", link: "order" },
        { text: "Shipping and Delivery", link: "#" },
        { text: "Returns", link: "returns-policy" },
        { text: "Payment Options", link: "payment-Options" },
        { text: "Gift Card Balance", link: "gift-card-lookup" },
        { text: "Contact Us", link: "contact-us" },
      ],
    },
    {
      id: 2,
      heading: { text: "ABOUT THE-SHOP", link: "about" },
      options: [
        { text: "News", link: "news" },
        { text: "Careers", link: "jobs" },
        { text: "Investors", link: "investors" },
        { text: "Purpose", link: "purpose" },
        { text: "Sustainability", link: "sustainability" },
      ],
    },
  ];

  const footerBottomOptions = [
    {
      id: 0,
      heading: "",
      options: [
        { text: "Guides", link: "guidance" },
        { text: "Terms of Sale", link: "terms-of-sale" },
        { text: "Terms of Use", link: "terms-of-use" },
        { text: "The-Shop Privacy Policy", link: "privacy" },
        { text: "CA Supply Chains Act", link: "supply-chain-policy" },
      ],
    },
  ];

  const logoButtonData = [
    {
      id: 0,
      source: twitterLogo,
      link: "https://twitter.com",
      title: "Link for twitter",
    },
    {
      id: 1,
      source: facebookLogo,
      link: "https://www.facebook.com",
      title: "Link for facebook",
    },
    {
      id: 2,
      source: youtubeLogo,
      link: "https://www.youtube.com",
      title: "Link for youtube",
    },
    {
      id: 3,
      source: instagramLogo,
      link: "https://www.instagram.com/",
      title: "Link for instagram",
    },
  ];

  return { footerOptions, logoButtonData, footerBottomOptions };
}
