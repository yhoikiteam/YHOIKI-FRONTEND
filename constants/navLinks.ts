type Items = {
  label: string;
  description: string;
  href: string;
};

type Links = {
  label: string;
  href?: string;
  items?: Items[];
};

type NavLink = Links[];

export const navLinks: NavLink = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Explore",
    items: [
      {
        label: "Course",
        description: "Learn new skills with online courses",
        href: "/course",
      },
      {
        label: "Products",
        description: "Find and purchase digital products",
        href: "/products",
      },
      {
        label: "Events",
        description: "Join the latest events and webinars",
        href: "/events",
      },
      {
        label: "Blog",
        description: "Read articles and insights",
        href: "/blog",
      },
    ],
  },
  // {
  //   label: "Comunitas",
  //   items: [
  //     {
  //       label: "Course",
  //       description: "Learn new skills with online courses",
  //       href: "/course",
  //     },
  //     {
  //       label: "Products",
  //       description: "Find and purchase digital products",
  //       href: "/products",
  //     },
  //   ],
  // },
];
