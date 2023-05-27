export const metadata = {
  title: "Changelog"
}

const Changelog = () => {

  return (
    <div className="changelog flex flex-col justify-center ml-[300px] mt-[40px]">

      <h1 className="text-5xl font-medium mb-10">Changelog</h1>

      <div className="changelog-info">
        <h4 className="mb-3">May 12th, 2023</h4>
        <ul className="list-disc ml-10 mt-5">
          <li>Fixed marketplace prompt loading glitch on narrow screens.</li>
          <li>Added account limits to number of follow actions within a certain time period.</li>
        </ul>
      </div>

      <div className="changelog-info mt-5">
        <h4 className="mb-3">May 11th, 2023</h4>
        <ul className="list-disc ml-10">
          <li>Fixed price decimal point display glitch occurring on some bundles.</li>
          <li>Fixed price & purchase button not displaying on some bundles.</li>
          <li>Fixed display of bundles when navigating between prompts.</li>
          <li>Added Prompt Bundles. Read our <a href="/blog" className="underline">blog post</a> for more information.</li>
        </ul>
      </div>

      <div className="changelog-info mt-5">
        <h4 className="mb-3">May 5th, 2023</h4>
        <ul className="list-disc ml-10">
          <li>"Updated" time shown below prompt after edits have been made (applies to prompts going forwards).</li>
          <li>Midjourney account verification link will be saved once a Midjourney prompt gets approved (applies to prompts going forwards).</li>
         </ul>
      </div>

      <div className="changelog-info mt-5">
        <h4 className="mb-3">May 4th, 2023</h4>
        <ul className="list-disc ml-10">
          <li>Increased all prompts priced $2.99 or less to $3.99.</li>
          <li>Removed $2.99 price tier option.</li>
          </ul>
      </div>

      <div className="changelog-info mt-5">
        <h4 className="mb-3">May 1st, 2023</h4>
        <ul className="list-disc ml-10">
          <li>Fixed price decimal point display glitch occurring on some bundles.</li>
          <li>Fixed price & purchase button not displaying on some bundles.</li>
          <li>Fixed display of bundles when navigating between prompts.</li>
          <li></li>
        </ul>
      </div>

      <div className="changelog-info mt-5">
        <h4 className="mb-3">April 29th, 2023</h4>
        <ul className="list-disc ml-10">
          <li>Fixed display glitch for fraudulent refunds on account sales pages.</li>
          <li>Profile statistics now update instantly.</li>
          <li>Redesigned notification settings in account settings.</li>
          <li>Added notifications bell.</li>
        </ul>
      </div>

      <div className="changelog-info mt-5">
        <h4 className="mb-3">April 25th, 2023</h4>
        <ul className="list-disc ml-10">
          <li>Added <span className="underline">bug bounty hall of fame</span> page.</li>
          <li>Removed need for verification links on custom image prompts.</li>
          <li>Removed need to upload at least 4 images on custom image prompts.</li>
          <li>Added pagination in lightboxes for groups of images sent through chat.</li>
          <li>Fixed scaling of images opened in lightboxes through chat.</li>
          <li>Fixed GPT prompts with no example input displaying a skeleton loader.</li>
        </ul>

      </div>
      <div className="changelog-info mt-5">
        <h4 className="mb-3">April 24th, 2023</h4>
        <ul className="list-disc ml-10">
          <li>Fixed duplicate sales stat glitch + removed analytics page banner.</li>
          <li>Added warning banner for account dashboard pages whilst resolving duplicate sales data glitch.</li>
          <li>Sales list times are now displayed in UTC.</li>
        </ul>
      </div>

      <div className="changelog-info mt-5">
        <h4 className="mb-3">April 23rd, 2023</h4>
        <ul className="list-disc ml-10">
          <li>Clearer indicators of required fields in prompt sell flow.</li>
        </ul>
      </div>

      <div className="changelog-info mt-5">
        <h4 className="mb-3">April 21st, 2023</h4>
        <ul className="list-disc ml-10">
          <li>Prompts automatically enter a "Connect Bank" state if a user can't receive payments.</li>
          <li>New users now have 2 max pending prompts after their first prompt has been approved.</li>
          <li>Smoothed out and increased perk max pending prompt limits.</li>
        </ul>
      </div>

      <div className="changelog-info mt-5">
        <h4 className="mb-3">April 20th, 2023</h4>
        <ul className="list-disc ml-10">
          <li>All prompts now require prompt instructions.</li>
          <li>All image prompts now require 9 images.</li>
          <li>One time email verification required for email/password accounts before performing any site actions.</li>
          <li>New login/signup page UI.</li>
        </ul>
      </div>

      <div className="changelog-info mt-5">
        <h4 className="mb-3">April 19th, 2023</h4>
        <ul className="list-disc ml-10">
          <li>Fixed display of Top Seller badges on mobile.</li>
          </ul>
      </div>

      <div className="changelog-info mt-5">
        <h4 className="mb-3">April 18th, 2023</h4>
        <ul className="list-disc ml-10">
          <li>Added fraudulent payment section to FAQ.</li>
          <li>Added "Refunded" and "Fraudulent" statuses to sales on account pages.</li>
          <li>Added top seller badges.</li>
          <li>Added fee reduction system based on number of sales.</li>
          <li>({`Added manual publish prompt feature for users with > 2k sales (beta)`}).</li>
          <li>Added number of prompts pending review limits based on number of sales.</li>
          <li>Added price selection limits based on number of sales.</li>
          <li>Custom prompt sales requirement increased from 5 to 25.</li>
          <li>Added Perks tab to account pages.</li>
          <li>Updated refund policy wording.</li>
        </ul>
      </div>

      <div className="changelog-info mt-5">
        <h4 className="mb-3">April 16th, 2023</h4>
        <ul className="list-disc ml-10">
          <li>Added terms of use page.</li>
          <li>Updated privacy policy.</li>
          </ul>
      </div>

      <div className="changelog-info mt-5">
        <h4 className="mb-3">April 14, 2023</h4>
        <ul className="list-disc ml-10">
          <li>Added ability to self-delete Stripe account.</li>
          <li>Added ability to self-delete account.</li>
          </ul>
      </div>

      <div className="changelog-info mt-5">
        <h4 className="mb-3">April 13th, 2023</h4>
        <ul className="list-disc ml-10">
          <li>Added settings toggle for receiving emails about replies to reviews.</li>
          <li>Added ability for creators to reply publicly to reviews.</li>
          <li>Fixed issue where editing a prompt reduced trending ranking.</li>
        </ul>
      </div>

      <div className="changelog-info mt-5">
        <h4 className="mb-3">April 12th, 2023</h4>
        <ul className="list-disc ml-10">
          <li>Added watermark editor to image prompts. Read our blog post for more information.</li>
          <li>Prompt purchases now include HQ images.</li>
          <li>Removed 3D image gallerys.</li>
        </ul>
      </div>

      <div className="changelog-info mt-5">
        <h4 className="mb-3">April 9th, 2023</h4>
        <ul className="list-disc ml-10">
          <li>Added an easy way to download a purchase invoice for buyers.</li>
          </ul>
      </div>

      <div className="changelog-info mt-5">
        <h4 className="mb-3">April 8th, 2023</h4>
        <ul className="list-disc ml-10">
          <li>Fixed lazy loading prompts in vertical scrolling collections on mobile profile pages.</li>
          </ul>
      </div>

      <div className="changelog-info mt-5">
        <h4 className="mb-3">April 7th, 2023</h4>
        <ul className="list-disc ml-10">
          <li>Fixes to word wrapping in certain text boxes.</li>
          <li>Reduced speed & angle rotation of image slideshow.</li>
        </ul>
      </div>

      <div className="changelog-info mt-5">
        <h4 className="mb-3">April 4th, 2023</h4>
        <ul className="list-disc ml-10">
          <li>Added 3D image display + watermarking to preview images.</li>
        </ul>
      </div>

      <div className="changelog-info mt-5">
        <h4 className="mb-3">April 3rd, 2023</h4>
        <ul className="list-disc ml-10">
          <li>Fixed bug asking for 5 images when editing GPT prompts.</li>
          <li>Enforced requirement for 5 example images and version tags for Midjourney prompts when editing a prompt.</li>
          <li>Fixed issue with some favorited prompts not appearing on account pages.</li>
        </ul>
      </div>

      <div className="changelog-info mt-5">
        <h4 className="mb-3">March 31st, 2023</h4>
        <ul className="list-disc ml-10">
          <li>Added analytics dashboard to account page & prompt pages.</li>
        </ul>
      </div>

      <div className="changelog-info mt-5">
        <h4 className="mb-3">March 26th, 2023</h4>
        <ul className="list-disc ml-10">
          <li>Added sales tab to account & prompt pages.</li>
        </ul>
      </div>

      <div className="changelog-info mt-5">
        <h4 className="mb-3">March 22nd, 2023</h4>
        <ul className="list-disc ml-10">
          <li>Added thumbnail editor for image prompts.</li>
        </ul>
      </div>

      <div className="changelog-info mt-5">
        <h4 className="mb-3">March 21th, 2023</h4>
        <ul className="list-disc ml-10">
          <li>Skeleton loading on marketplace page.</li>
          <li>Skeleton loading on prompt store pages.</li>
          <li>Faster loading of prompt store pages.</li>
        </ul>
      </div>

      <div className="changelog-info mt-5">
        <h4 className="mb-3">March 20th, 2023</h4>
        <ul className="list-disc ml-10">
          <li>Fixed filtering by prompts in a "Draft" state on Account pages.</li>
          <li>Fixed showing "Delete Prompt" button for prompts in a "Connect Bank" state.</li>
        </ul>
      </div>

      <div className="changelog-info mt-5">
        <h4 className="mb-3">March 19th, 2023</h4>
        <ul className="list-disc ml-10">
          <li>Faster loading of prompt collections.</li>
          <li>Lazy load scrollable preview images on prompt store pages.</li>
          <li>Fixed profile name browser tab flicker issue.</li>
        </ul>
      </div>

      <div className="changelog-info mt-5">
        <h4 className="mb-3">March 17th, 2023</h4>
        <ul className="list-disc ml-10">
          <li>Fixed GPT prompt engineer scroller on hire page.</li>
          <li>Improved image loading speed on hire page.</li>
          <li>Switched sections around on the hire page.</li>
          <li>Fixed orange loading page freeze glitch (maybe!).</li>
          <li>Fixed loading animation on mobile for vertical scrolling prompt collections.</li>
          <li>Fixed intial display of filters on the marketplace for mobile devices.</li>
          <li>Order prompts by time uploaded, favourites, views or sales on Account pages.</li>
          <li>Sort prompts by status (e.g. Approved, Scheduled, Pending) on Account pages.</li>
          <li>Bumped up preview image quality on store pages.</li>
          <li>Fixed issue causing bad prompt store page URLs.</li>
        </ul>
      </div>

      <div className="changelog-info mt-5">
        <h4 className="mb-3">March 16th, 2023</h4>
        <ul className="list-disc ml-10">
          <li>Midjourney V5. Read our <a href="/blog" className="underline">blog post</a>for all updates.</li>
          <li>Added new prompt pricing tiers up to $29.99.</li>
          <li>Made GPT prompt details scrollable on store pages for extra long outputs.</li>
          <li>Clearer wording on what family of GPT models a model belongs to in prompt details (e.g. text-davinci-003 = GPT-3.5)</li>
          <li>Combined tokens & API cost/call fields on GPT prompt details.</li>
          <li>Combined model & GPT type fields on GPT prompt details.</li>
          <li>Fixed issue with Archived prompt tags not appearing.</li>
        </ul>
      </div>

      <div className="changelog-info mt-5">
        <h4 className="mb-3">March 15th, 2023</h4>
        <ul className="list-disc ml-10">
          <li>Added GPT-4 and unified GPT prompts. Read our blog post for all updates.</li>
          <li>Added blog</li>
          <li>Search prompts on Account pages.</li>
          <li>Separate tabs for prompts, favorites & purchases on Account pages.</li>
        </ul>
      </div>

      <div className="changelog-info mt-5">
        <h4 className="mb-3">March 14th, 2023</h4>
        <ul className="list-disc ml-10">
          <li>Fixed similar prompt results showing the same prompt.</li>
          <li>Added vertical scrolling to show more search results.</li>
        </ul>
      </div>

      <div className="changelog-info mt-5">
        <h4 className="mb-3">March 13th, 2023</h4>
        <ul className="list-disc ml-10">
          <li>Updated messaging for deleting an approved prompt.</li>
          <li>Improved speed of loading follower / following lists from profiles.</li>
          <li>Fixed issue with updating profile stats on some new user accounts.</li>
          <li>Fixed issue where sometimes 9 image collages were not being generated.</li>
          <li>Fixed another issue with saving prompt edits causing infinite loading spinner.</li>
        </ul>
      </div>

      <div className="changelog-info mt-5">
        <h4 className="mb-3">March 11th, 2023</h4>
        <ul className="list-disc ml-10">
          <li>Fixed issue with saving prompt edits causing an infinite loading spinner.</li>
        </ul>
      </div>

      <div className="changelog-info mt-5">
        <h4 className="mb-3">March 10th, 2023</h4>
        <ul className="list-disc ml-10">
          <li>Fixed issue where prompt hotness resets when a scheduled prompt with pending edits goes live and then the edits are approved..</li>
          <li>Fixed issue with some users unable to open conversations.</li>
          <li>Fixed similar prompt suggestions only showing 2/3 suggestions on mobile.</li>
          <li>Improved search results for when a search query matches keywords in a prompt title.</li>
          <li>Improved search results on competitive keywords.</li>
          <li>Fixed issue where users who unfollowed another user were still receiving email notifications.</li>
        </ul>
      </div>

      <div className="changelog-info mt-5">
        <h4 className="mb-3">March 9th, 2023</h4>
        <ul className="list-disc ml-10">
          <li>Image fade in effect across the site.</li>
          <li>AI powered search to find more relevant prompts.</li>
          <li>AI powered similar prompt suggestions on all prompt store pages.</li>
          <li>Order by newest prompts on the marketplace.</li>
          <li>Order by top prompts of the day/week/month across all models & categories on the marketplace.</li>
          <li>Order by relevance to search query on the marketplace.</li>
          <li>Filter by GPT prompt categories on the marketplace.</li>
          <li>Trending Prompts sections renamed as Hottest Prompts.</li>
        </ul>
      </div>

      <div className="changelog-info mt-5">
        <h4 className="mb-3">March 4th, 2023</h4>
        <ul className="list-disc ml-10">
          <li>Reduced image sizes across site by ~10x for faster loading.</li>
        </ul>
      </div>

      <div className="changelog-info mt-5">
        <h4 className="mb-3">March 3rd, 2023</h4>
        <ul className="list-disc ml-10">
          <li>Fix to allow new Midjourney verification link format in sell flow.</li>
        </ul>
      </div>

      <div className="changelog-info mt-5">
        <h4 className="mb-3">March 2nd, 2023</h4>
        <ul className="list-disc ml-10">
          <li>Nav bar dropdown menu for best prompts.</li>
          <li>Added public change log!</li>
          <li>Custom prompt instructions box now multi-line and resizable.</li>
        </ul>
      </div>

      <div className="changelog-info mt-5">
        <h4 className="mb-3">March 1st, 2023</h4>
        <ul className="list-disc ml-10">
          <li>New trending algorithm: Prompts trend faster and stay trending for longer.</li>
          <li>Added New Prompts carousel to all store pages.</li>
          <li>Added message on ChatGPT store pages to indicate you need access to ChatGPT.</li>
          <li>Character limits on edited prompt titles (40) + descriptions (500).</li>
          <li>Character limit on dispute messages (300).</li>
        </ul>
      </div>

      <div className="changelog-info mt-5">
        <h4 className="mb-3">February 28th, 2023</h4>
        <ul className="list-disc ml-10">
          <li>Marketplace homepage switched to trending prompt feed.</li>
          <li>Fixed Stripe store pages + page meta tags for ChatGPT prompts displaying GPT-3.</li>
        </ul>
      </div>
    </div>
  )
}
export default Changelog;