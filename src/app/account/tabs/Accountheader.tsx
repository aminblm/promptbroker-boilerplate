"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function Accountheader({
  children,
  currentTab = "favorites",
}: {
  children: React.ReactNode;
  // currentTab: React.ReactNode;
}) {
  const pathName = usePathname();
  return (
    <div>
      {/* <ul>
        <Link href="/account/favorites">
          <li className={`${currentTab === "favorites" && "text-[#000]"}`}>
            Favorites
          </li>
        </Link>
        <Link href="/account/settings">
          <li className={`${currentTab === "settings" && "text-[#000]"}`}>
            Settings
          </li>
        </Link>
      </ul> */}
      {children}
    </div>
  );
}

export default Accountheader;
