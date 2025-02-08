import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const NavItem = ({ navItem = {} }) => {
  const { pathname } = useRouter();

  const { name, href, subNavItems } = navItem;

  // Collect hrefs from subNavItems and nested subItems
  const subHref =
    subNavItems?.reduce((acc, item) => {
      acc.push(item.href);
      if (item.subItems?.length > 0) {
        acc.push(...item.subItems.map((subItem) => subItem.href));
      }
      return acc;
    }, []) || [];

  const current = pathname === href || subHref.includes(pathname);

  return (
    <li className={`dropdown${current ? " current" : ""}`}>
      <Link href={href}>
        <a href={href}>{name}</a>
      </Link>
      {subNavItems?.length > 0 && (
        <ul>
          {subNavItems.map((subItem) => (
            <li key={subItem.id}>
              <Link href={subItem.href}>
                <a href={subItem.href}>{subItem.name}</a>
              </Link>
              {subItem.subItems?.length > 0 && (
                <ul>
                  {subItem.subItems.map((item) => (
                    <li key={item.id}>
                      <Link href={item.href}>
                        <a href={item.href}>{item.name}</a>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default NavItem;
