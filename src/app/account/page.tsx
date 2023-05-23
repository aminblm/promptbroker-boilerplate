"use client";
export const metadata = {
  title: "Favorites",
};

// import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import Settings from "./settings/page";
import FavoritesPage from "./favorites/page";
// import { Router } from "next/router";

export default function Favorites() {
  // const router = useRouter();
  // const { route } = router
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
      {pathName}
    </>
  );
}
