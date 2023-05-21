export default function Notification() {
  return (
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
          <td></td>
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
                Whenever you receive a new review on your prompts or profile.
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
          <td></td>
        </tr>

        <tr className="border-b border-solid border-gray-700">
          <td>
            <div className="text-xs py-2 font-semibold">Review Reminder</div>
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
                Whenever one of your prompts hits a number of views milestone.
              </i>
            </div>
          </td>
          <td className="w-200 px-2"></td>
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
          <td className="w-200 px-2"></td>
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
          <td className="w-200 px-2"></td>
          <td>
            <label>
              <input type="checkbox" className="w-5 h-5" />
              <span className="checkmark"></span>
            </label>
          </td>
        </tr>

        <tr className="border-b border-solid border-gray-700">
          <td>
            <div className="text-xs py-2 font-semibold">Account Milestones</div>
            <div className="text-xs pb-2 opacity-75">
              <i>
                Whenever you hit a metric milestone on your account, or unlock a
                new perk.
              </i>
            </div>
          </td>
          <td className="w-200 px-2"></td>
          <td>
            <label>
              <input type="checkbox" className="w-5 h-5" />
              <span className="checkmark"></span>
            </label>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
