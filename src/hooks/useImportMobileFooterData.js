export default function useImportMobileFooterData() {
  const mobileFooterFirstList = [
    {
      id: 0,
      heading: "",
      options: [
        { text: "GIFT CARDS", link: "/gift-cards" },
        { text: "PROMOTIONS", link: "/promo-codes" },
        { text: "FIND A STORE", link: "/retail" },
        { text: "SIGN UP FOR EMAIL", link: "build fade up component" },
        { text: "BECOME A MEMBER", link: "/register" },
        { text: "THE-SHOP JOURNAL", link: "/stories" },
        { text: "SEND US FEEDBACK", link: "/site-feedback" },
      ],
    },
  ];

  const mobileFooterRestList = [
    {
      id: 0,
      heading: { text: "Get Help" },
      options: [
        { text: "Order Status", link: "/order" },
        { text: "Shipping and Delivery", link: "#" },
        { text: "Returns", link: "/returns-policy" },
        { text: "Payment Options", link: "/payment-Options" },
        { text: "Gift Card Balance", link: "/gift-card-lookup" },
        { text: "Contact Us", link: "/contact-us" },
      ],
    },
    {
      id: 1,
      heading: { text: "ABOUT THE-SHOP" },
      options: [
        { text: "News", link: "/news" },
        { text: "Careers", link: "/jobs" },
        { text: "Investors", link: "/investors" },
        { text: "Purpose", link: "/purpose" },
        { text: "Sustainability", link: "/sustainability" },
      ],
    },
  ];

  return { mobileFooterFirstList, mobileFooterRestList };
}
