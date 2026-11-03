import {
  LuBookmark,
  LuHeart,
  LuFolder,
  LuTags,
  LuCode,
  LuPalette,
  LuGraduationCap,
  LuBriefcase,
  LuGlobe,
} from "react-icons/lu";

export const navigationItems = [
  {
    title: "All Bookmarks",
    url: "/",
    icon: LuBookmark,
  },
  {
    title: "Favorites",
    url: "/favorites",
    icon: LuHeart,
    items: [
      { title: "Recently Added", url: "/favorites/recent" },
      { title: "Most Viewed", url: "/favorites/popular" },
      { title: "Recently Updated", url: "/favorites/updated" },
    ],
  },
];

export const organizationItems = [
  {
    title: "Categories",
    url: "/categories",
    icon: LuFolder,
    items: [
      {
        title: "Development",
        url: "/categories/development",
        icon: LuCode,
      },
      {
        title: "Design",
        url: "/categories/design",
        icon: LuPalette,
      },
      {
        title: "Education",
        url: "/categories/education",
        icon: LuGraduationCap,
      },
      {
        title: "Work",
        url: "/categories/work",
        icon: LuBriefcase,
      },
    ],
  },
  {
    title: "Tags",
    url: "/tags",
    icon: LuTags,
    items: [
      {
        title: "Frontend",
        url: "/tags/frontend",
      },
      {
        title: "Backend",
        url: "/tags/backend",
      },
      {
        title: "Tools",
        url: "/tags/tools",
      },
    ],
  },
  {
    title: "Websites",
    url: "/websites",
    icon: LuGlobe,
  },
];
