"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
// const navItems = [
//   { name: 'Home', href: '/', icon: Home },
//   { name: 'Search', href: '/search', icon: Search },
//   { name: 'Notifications', href: '/notifications', icon: Bell },
//   { name: 'Profile', href: '/profile', icon: User },
// ]

const navItems = [
  {
    title: "Home",
    url: "/students/dashboard",
    icon: "/images/menu/home.png",
  },
  {
    title: "Read",
    url: "/students/dashboard/notes",
    icon: "/images/menu/read.png",
  },
  // {
  //   title: "Live",
  //   url: "/students/dashboard/live",
  //   icon: "/images/menu/watch 1.png",
  // },
  {
    title: "Watch",
    url: "/students/dashboard/videos",
    icon: "/images/menu/watch 1.png",
  },

  {
    title: "Test",
    url: "#",
    icon: "/images/menu/test.png",
  },
 
  {
    title: "Notice",
    url: "#",
    icon: "/images/menu/notification.png",
  },


];

export default function MobileNavigation() {
  const pathname = usePathname();

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 ">
      <ul className="flex justify-around items-center h-16">
        {navItems.map((item) => {
          const isActive = pathname === item.url;
          return (
            <li key={item.title}>
              <Link
                href={item.url}
                className={`flex flex-col items-center p-1 ${
                  isActive ? "text-blue-600" : "text-gray-600"
                }`}
              >
                <Image
                  src={item.icon}
                  width={20}
                  height={20}
                  alt={item.title}
                  className="h-6 w-6 object-contain"
                />
                <span className="text-xs mt-1">{item.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
