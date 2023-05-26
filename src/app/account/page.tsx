"use client";
export const metadata = {
  title: "Favorites",
};


import { usePathname } from "next/navigation";
import Settings from "./settings/page";
import FavoritesPage from "./favorites/page";


export default function Favorites() {

  const pathName = usePathname();

  let content;

  if (pathName === "settings") {
    content = <Settings />;
  } else if (pathName === "favorites") {
    content = <FavoritesPage />;
  }

  return (
    <>
      <div className="">Favorite</div>
      {/* {pathName} */}
    </>
  );
}
