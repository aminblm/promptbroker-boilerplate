"use client";

import Link from "next/link";
import FavouriteCard from "@/components/favorite/favoritecards";
import { mockPrompts } from "@/mock/data";
import { iPrompt } from "@/types";
import { useEffect, useState } from "react";

export default function Favorites() {
  const [prompts, setPrompts] = useState<iPrompt[]>([]);

  useEffect(() => {
    setPrompts(mockPrompts);

    return () => {};
  }, []);

  return (
    <div className="container mx-auto px-4">
      <div className="py-6">
        <h2 className="text-3xl font-bold">Favorites</h2>
        <hr className="my-4" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {prompts.map((prompt, idx) => (
            <Link key={idx} href="">
              <FavouriteCard prompt={prompt} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
