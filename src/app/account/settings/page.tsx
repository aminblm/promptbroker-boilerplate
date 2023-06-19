// "use client";

export const metadata = {
  title: "Settings",
};
import Notification from "@/components/settings/notification";
import Accountheader from "../tabs/Accountheader";

// When the user logs in, we have the accounts page

export default function Settings() {
  return (
    <div className="sm:mx-12 mx-2">
      {/* <Accountheader currentTab="settings" /> */}
      <div>
        <h3 className="text-4xl py-3">Settings</h3>
        <hr className="bg-white" />
        <h4 className="text-2xl font-medium mt-8">Account</h4>
        <div className="field text-left mb-2.5">
          <p className="text-xs py-[.5rem] px-0 font-medium">Username</p>
          <p className="text-xs pb-2 opacity-75 italic">
            Your unique username displayed across PromptBase
          </p>
          <div className="flex">
            <div className="flex items-center mr-2">
              <span className="text-3xl font-bold mr-3">@</span>
              <input
                type="text"
                maxLength={20}
                pattern="[a-zA-Z0-9-]+"
                className="inline-flex items-center justify-center h-10 px-4 py-2 text-base font-medium
                 text-white border border-transparent rounded-md shadow-sm bg-gray-700
                 focus:outline-none"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="notification">
        <h4 className="text-2xl font-medium my-8">Notification Settings</h4>
      </div>
      <Notification />
      <div>
        <button className="border border-white text-white font-medium text-2xl mt-[5%] inline-flex items-center rounded-md px-8 py-2 cursor-pointer transition-opacity duration-300 ease">
          Logout
        </button>
      </div>

      <div className="danger">
        <div className="bg-transparent border border-red-500 rounded-md p-4 mt-[10%]">
          <h3>Danger Zone</h3>
          <p className="text-xs py-[.5rem] px-0 font-medium">Delete Account</p>
          <p className="text-xs pb-2 opacity-75 italic">
            Once you delete your account there is no going back, please be
            certain.
          </p>
          <button className="border border-white rounded-md px-2 h-6 text-sm inline-flex items-center justify-center opacity-95 transition duration-300">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
}
