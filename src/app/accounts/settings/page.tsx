export const metadata = {
  title: "Settings",
};
import Link from "next/link";

// When the user logs in, we have the accounts page

export default function Settings() {
  return (
    <div className="mx-12">
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
              <span className="text-3xl font-bold mr-8">@</span>
              <input
                type="text"
                maxLength={20}
                pattern="[a-zA-Z0-9-]+"
                className="inline-flex items-center justify-center h-10 px-4 py-2 text-base font-medium
                 text-white border border-transparent rounded-md shadow-sm bg-gray-600
                  hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="notification">
        <h4 className="text-2xl font-medium my-8">Notification Settings</h4>
        <table className="border-collapse">
          <tbody>
            <tr className="align-middle">
              <th></th>
              <th className="pl-2 text-left">Email</th>
              <th className="text-left">Notification</th>
            </tr>

            <tr className="border-b border-solid border-gray-700">
              <td>
                <div className="text-xs py-2 font-semibold">New Sales</div>
                <div className="text-xs pb-2 opacity-75">
                  <i>Whenever you make a sale.</i>
                </div>
              </td>
              <td className="w-200 px-2">
                <label className="">
                  <input type="checkbox" className="w-5 h-5" />
                  <span className="checkmark"></span>
                </label>
              </td>
              <td>
                <label>
                  <input type="checkbox" className="w-5 h-5" />
                  <span className="checkmark"></span>
                </label>
              </td>
            </tr>

            <tr className="border-b border-solid border-gray-700">
              <td>
                <div className="text-xs py-2 font-semibold">New Favourites</div>
                <div className="text-xs pb-2 opacity-75">
                  <i>Whenever someone favorites your prompts.</i>
                </div>
              </td>
              <td className="w-200 px-2">
                <label className="">
                  <input type="checkbox" className="w-5 h-5" />
                  <span className="checkmark"></span>
                </label>
              </td>
              <td>
                <label>
                  <input type="checkbox" className="w-5 h-5" />
                  <span className="checkmark"></span>
                </label>
              </td>
            </tr>

            <tr className="border-b border-solid border-gray-700">
              <td>
                <div className="text-xs py-2 font-semibold">New Followers</div>
                <div className="text-xs pb-2 opacity-75">
                  <i>Whenever someone follows you.</i>
                </div>
              </td>
              <td className="w-200 px-2">
                <label className="">
                  <input type="checkbox" className="w-5 h-5" />
                  <span className="checkmark"></span>
                </label>
              </td>
              <td>
                <label>
                  <input type="checkbox" className="w-5 h-5" />
                  <span className="checkmark"></span>
                </label>
              </td>
            </tr>

            <tr className="border-b border-solid border-gray-700">
              <td>
                <div className="text-xs py-2 font-semibold">New Messages</div>
                <div className="text-xs pb-2 opacity-75">
                  <i>Whenever you receive a message from another user.</i>
                </div>
              </td>
              <td className="w-200 px-2">
                <label className="">
                  <input type="checkbox" className="w-5 h-5" />
                  <span className="checkmark"></span>
                </label>
              </td>
              <td>
                <label>
                  <input type="checkbox" className="w-5 h-5" />
                  <span className="checkmark"></span>
                </label>
              </td>
            </tr>

            <tr className="border-b border-solid border-gray-700">
              <td>
                <div className="text-xs py-2 font-semibold">New Job</div>
                <div className="text-xs pb-2 opacity-75">
                  <i>Whenever you get a new custom prompt job.</i>
                </div>
              </td>
              <td className="w-200 px-2">
                <label className="">
                  <input type="checkbox" className="w-5 h-5" />
                  <span className="checkmark"></span>
                </label>
              </td>
              <td>
                <label>
                  <input type="checkbox" className="w-5 h-5" />
                  <span className="checkmark"></span>
                </label>
              </td>
            </tr>

            <tr className="border-b border-solid border-gray-700">
              <td>
                <div className="text-xs py-2 font-semibold">New Review</div>
                <div className="text-xs pb-2 opacity-75">
                  <i>
                    Whenever you receive a new review on your prompts or
                    profile.
                  </i>
                </div>
              </td>
              <td className="w-200 px-2">
                <label className="">
                  <input type="checkbox" className="w-5 h-5" />
                  <span className="checkmark"></span>
                </label>
              </td>
              <td>
                <label>
                  <input type="checkbox" className="w-5 h-5" />
                  <span className="checkmark"></span>
                </label>
              </td>
            </tr>

            <tr className="border-b border-solid border-gray-700">
              <td>
                <div className="text-xs py-2 font-semibold">New Credits</div>
                <div className="text-xs pb-2 opacity-75">
                  <i>When we top up your PromptBase credits.</i>
                </div>
              </td>
              <td className="w-200 px-2">
                <label className="">
                  <input type="checkbox" className="w-5 h-5" />
                  <span className="checkmark"></span>
                </label>
              </td>
              <td>
                <label>
                  <input type="checkbox" className="w-5 h-5" />
                  <span className="checkmark"></span>
                </label>
              </td>
            </tr>

            <tr className="border-b border-solid border-gray-700">
              <td>
                <div className="text-xs py-2 font-semibold">
                  Review Reminder
                </div>
                <div className="text-xs pb-2 opacity-75">
                  <i>Receive a notification to remind you to leave a review.</i>
                </div>
              </td>
              <td className="w-200 px-2">
                <label className="">
                  <input type="checkbox" className="w-5 h-5" />
                  <span className="checkmark"></span>
                </label>
              </td>
              <td>
                <label>
                  <input type="checkbox" className="w-5 h-5" />
                  <span className="checkmark"></span>
                </label>
              </td>
            </tr>

            <tr className="border-b border-solid border-gray-700">
              <td>
                <div className="text-xs py-2 font-semibold">
                  New Reply to Review
                </div>
                <div className="text-xs pb-2 opacity-75">
                  <i>When someone replies to a review you leave.</i>
                </div>
              </td>
              <td className="w-200 px-2">
                <label className="">
                  <input type="checkbox" className="w-5 h-5" />
                  <span className="checkmark"></span>
                </label>
              </td>
              <td>
                <label>
                  <input type="checkbox" className="w-5 h-5" />
                  <span className="checkmark"></span>
                </label>
              </td>
            </tr>

            <tr className="border-b border-solid border-gray-700">
              <td>
                <div className="text-xs py-2 font-semibold">
                  Following Users New Prompts
                </div>
                <div className="text-xs pb-2 opacity-75">
                  <i>When a user you're following launches a new prompt.</i>
                </div>
              </td>
              <td className="w-200 px-2">
                <label className="">
                  <input type="checkbox" className="w-5 h-5" />
                  <span className="checkmark"></span>
                </label>
              </td>
              <td>
                <label>
                  <input type="checkbox" className="w-5 h-5" />
                  <span className="checkmark"></span>
                </label>
              </td>
            </tr>

            <tr className="border-b border-solid border-gray-700">
              <td>
                <div className="text-xs py-2 font-semibold">
                  Prompt View Milestones
                </div>
                <div className="text-xs pb-2 opacity-75">
                  <i>
                    Whenever one of your prompts hits a number of views
                    milestone.
                  </i>
                </div>
              </td>
              <td className="w-200 px-2">
                <label className="">
                  <input type="checkbox" className="w-5 h-5" />
                  <span className="checkmark"></span>
                </label>
              </td>
              <td>
                <label>
                  <input type="checkbox" className="w-5 h-5" />
                  <span className="checkmark"></span>
                </label>
              </td>
            </tr>

            <tr className="border-b border-solid border-gray-700">
              <td>
                <div className="text-xs py-2 font-semibold">
                  Prompt Favourite Milestones
                </div>
                <div className="text-xs pb-2 opacity-75">
                  <i>
                    Whenever one of your prompts hits a number of favorites
                    milestone.
                  </i>
                </div>
              </td>
              <td className="w-200 px-2">
                <label className="">
                  <input type="checkbox" className="w-5 h-5" />
                  <span className="checkmark"></span>
                </label>
              </td>
              <td>
                <label>
                  <input type="checkbox" className="w-5 h-5" />
                  <span className="checkmark"></span>
                </label>
              </td>
            </tr>

            <tr className="border-b border-solid border-gray-700">
              <td>
                <div className="text-xs py-2 font-semibold">
                  Prompt Sale Milestones
                </div>
                <div className="text-xs pb-2 opacity-75">
                  <i>
                    Whenever one of your your prompt hits a number of sales
                    milestone.
                  </i>
                </div>
              </td>
              <td className="w-200 px-2">
                <label className="">
                  <input type="checkbox" className="w-5 h-5" />
                  <span className="checkmark"></span>
                </label>
              </td>
              <td>
                <label>
                  <input type="checkbox" className="w-5 h-5" />
                  <span className="checkmark"></span>
                </label>
              </td>
            </tr>

            <tr className="border-b border-solid border-gray-700">
              <td>
                <div className="text-xs py-2 font-semibold">
                  Account Milestones
                </div>
                <div className="text-xs pb-2 opacity-75">
                  <i>
                    Whenever you hit a metric milestone on your account, or
                    unlock a new perk.
                  </i>
                </div>
              </td>
              <td className="w-200 px-2">
                <label className="">
                  <input type="checkbox" className="w-5 h-5" />
                  <span className="checkmark"></span>
                </label>
              </td>
              <td>
                <label>
                  <input type="checkbox" className="w-5 h-5" />
                  <span className="checkmark"></span>
                </label>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        <button className="border border-white text-white font-medium text-lg mt-[5%] inline-flex items-center rounded-md px-8 py-2 cursor-pointer transition-opacity duration-300 ease">
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
