"use client";
import { useRouter } from "next/router";
import Settings from "./settings/page";
import FavoritesPage from "./favorites/page";

export const metadata = {
  title: "Favorites",
};

export default function Favorites() {
  const router = useRouter();
  const { view } = router.query;
  let content;

  if (view === "settings") {
    content = <Settings />;
  } else if (view === "favorites") {
    content = <FavoritesPage />;
  }

  return <>{content}</>;
}
