export default function Buttons() {
  return (
    <div className="flex justify-between mx-12">
      <div>
        <button className="rounded-full bg-[#393954] text-xs font-bold text-white py-2 px-4">
          Favourites
        </button>
        <button className="rounded-full bg-white text-xs font-bold text-gray-700 py-2 px-4  ml-3">
          Settings
        </button>
      </div>
      <div>
        <button className="bg-white text-black py-1 px-2">
          Public Profile
        </button>
      </div>
    </div>
  );
}
