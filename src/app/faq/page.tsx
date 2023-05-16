"use client"
import React, { useState } from 'react';
import { BsFillCaretRightFill } from 'react-icons/Bs';

interface Section {
  title: string;
  items: Item[];
}

interface Item {
  id: number;
  title: string;
  content: string;
}

const sections: Section[] = [
  {
    title: 'General',
    items: [
      {
        id: 1,
        title: 'What is PromptBroker?',
        content: `<p> PromptBroker is a dynamic online platform that facilitates the purchase 
          and sale of specialized prompts that cater to the requirements of advanced AI models 
          such as DALL·E, GPT, Stable Diffusion, and Midjourney. These prompts consist of text-based 
          inputs that enable the models to generate customized outputs, such as images with specific objects or themes. </p>`,
      },
      {
        id: 2,
        title: 'What is a Prompt Engineer',
        content: `A Prompt Engineer is a cutting-edge professional who 
          possesses the expertise to curate high-quality textual prompts 
          that are vital in producing consistent and accurate outputs from an AI model. 
          These outputs could include images, text, or code, and a Prompt Engineer plays 
          a crucial role in the success of the AI model.`,
      },
    ],
  },
  {
    title: 'Payments',
    items: [
      {
        id: 1,
        title: 'What is the revenue split?',
        content: `Prompt sellers keep 80% of every sale of their prompt, and on custom prompt jobs. 
          PromptBroker takes a 20% fee which helps run our platform and offer services like support.`,
      },
      {
        id: 2,
        title: 'How do I get paid?',
        content: `PromptBroker uses Stripe to send out payments to you.`,
      },
      {
        id: 3,
        title: `How will I know how many sales I've made?`,
        content: `Within your account page, you'll have access to an internal Stripe 
          dashboard for viewing sales of your prompts.`,
      },
      {
        id: 4,
        title: 'My country is not appearing when trying to sell my prompt?',
        content: `<div>We use Stripe as our payments provider for sending payments to our Prompt Sellers. Unfortunately, 
          for certain countries this is not yet supported. We are working hard to find a solution -
          check out our Twitter page for the latest updates. You can also enter your country on this
          page to receive notifications when Stripe becomes available
            
            <p class="mt-3"> Known countries affected: </p>
            <ul class="ml-10 mt-7 list-disc font-medium"> 
              <li>Argentina</li>
              <li>Brazil</li>
              <li>Bangladesh</li>
              <li>India</li>
              <li>Mexico</li>
              <li>Sri Lanka</li>
              <li>Tunisia</li>
              <li>Ukraine</li>
            </ul>
          </div>`,
      },
      {
        id: 5,
        title: `How do I start accepting custom prompt payments?`,
        content: `To become eligible to accept custom prompt payments, you 
          must have made 25 sales from submitted prompts on the marketplace.`,
      },
      {
        id: 6,
        title: `My sale is flagged as Fraudulent. What does this mean?`,
        content: `<div>
          <p>If your sale was marked as "Fraudulent", this unfortunately means it was 
          refunded due to being a fraudulent payment. PromptBroker sometimes attracts customers 
          testing stolen credits to see if they work. When our systems detect this, we will 
          automatically refund the payment so that PromptBroker doesn't get hit with chargeback 
          fees/fines from credit card companies. </p> 
          <br>
          <p>It is super annoying for us and you as a creator. However, it had nothing to do with 
          your prompt, or a dissatisfied customer - and only happens to around 0.1% of transactions.</p>
        </div>`,
      },
    ],
  },
  {
    title: 'Prompts',
    items: [
      {
        id: 1,
        title: 'How long does it take for my prompt to be approved?',
        content: `We aim to review and approve a prompt within 1-3 working days.`,
      },
      {
        id: 2,
        title: 'Do I still own my prompt if I list it?',
        content: `Yes. You retain all rights to your prompt, and are welcome to remove it 
          from PromptBroker at any point.`,
      },
      {
        id: 3,
        title: `How does a prompt get featured?`,
        content: `The featured section is handpicked from some of the best submissions 
          to PromptBroker. Generally these prompts demonstrate a unique original idea, and work extremely consistently.
          To increase your chances of getting featured, make sure to upload 9 1:1 square images 
          alongside your prompt, as we post featured prompt collages on our Instagram and Twitter pages.`,
      },
      {
        id: 4,
        title: 'How are thumbnail images selected?',
        content: `When you upload your prompt, a random thumbnail will be generated for it. 
          However, our review team will alter this thumbnail to select three images that
          we think will make it the most marketable.`
      },
      {
        id: 5,
        title: `How are trending prompts determined?`,
        content: `Trending prompts are determined by considering sales, views and the time they were uploaded.`,
      },
      {
        id: 6,
        title: `How are most popular prompts determined?`,
        content: `Most popular prompts are determined purely on their sales and views.`,
      },
      {
        id: 7,
        title: `I can't find my Midjourney profile link?`,
        content: `You'll need an active Midjourney subscription in order to get a verification link to your profile.
          Watch our video during the sign up flow in order to locate your profile link.`,
      },
    ],
  },
  {
    title: 'Profiles',
    items: [
      {
        id: 1,
        title: 'Why are my prompt views/sales/favorites not appearing on my profile?',
        content: `Profile views, favorites and sales are calculated from across all your 
          prompts. We periodically update this every 12 hours, so there will be a delay in updating the numbers.`,
      },
      {
        id: 2,
        title: 'What is PromptBroker rank?',
        content: `PromptBase rank is your rank as a seller on the site.
         It is displayed on your profile if you are within the top 500 sellers. 
         We take into account views, sales and favorites to determine this. 
         Rank #1 is the top seller on the site.`,
      },
      {
        id: 3,
        title: `How do I get category skill badges on my profile?`,
        content: `<div>
          <p> To get emoji badges for a model (like Midjourney) on your profile, 
          you need to get 2 sales using that model.</p>
          <br>
          <p>To get category emoji badges (e.g. 3D, Fantasy, Graphic Design), 
            you need 5 sales in that category. If you have achieved 5 sales in more than 5 categories, 
            we'll only show the top 5 categories you have sales in. </p>`,
      },
    ],
  },
  {
    title: 'Profile',
    items: [
      {
        id: 1,
        title: 'Do you offer a bug bounty program?',
        content: `<p>At PromptBroker, we prioritize the security of our platform, and we have implemented measures 
          to ensure its integrity. As part of our commitment to maintaining a secure environment, we offer 
          incentives for individuals who responsibly disclose any vulnerabilities they discover through our marketplace.
          <br>
          <br>
          To report an exploit, please contact us via email and provide a detailed explanation of the exploit's 
          methodology and its potential impact. We encourage you to communicate the information clearly and concisely.
          <br>
          <br>
          Upon receiving your report, our team of experts will evaluate the severity of the exploit. If it is deemed 
          significant, we will reward you accordingly and recognize your contribution in our bug bounty hall of fame.
          <br>
          <br>
          We value the collaborative efforts in maintaining a secure platform, and we appreciate your assistance in 
          enhancing the overall security of our system.</p>`,
      },
    ],
  },
];

interface DropdownState {
  [key: string]: {
    activeIndex: number | null;
    isDropdownOpen: boolean;
  };
}

const FAQ = () => {
  const [dropdownState, setDropdownState] = useState<DropdownState>({});

  const handleDropdownClick = (sectionTitle: string, index: number) => {
    const newDropdownState = { ...dropdownState };
    const sectionState = newDropdownState[sectionTitle] || {
      activeIndex: null,
      isDropdownOpen: false,
    };

    sectionState.activeIndex = sectionState.activeIndex === index ? null : index;
    sectionState.isDropdownOpen = !sectionState.isDropdownOpen;

    newDropdownState[sectionTitle] = sectionState;
    setDropdownState(newDropdownState);
  };

   return (
    <div className=" faq w-[750px] ml-[400px]">
      <h1 className="mt-3 mb-12 text-6xl font-bold">FAQ</h1>
      <p className="font-medium text-xl mb-4"> If none of the frequently asked questions 
        highlighted below answers your query, reach out to us via <a href="mailto:promptbroker@example.com" 
        className="underline">email</a></p>
      <p className="font-medium text-xl mb-6"> If you need detailed instructions on the types of prompts 
        that can be sold on PromptBroker, please refer to our <span className="underline">
        guidelines for submitting prompts.</span></p>
      {sections.map((section) => (
        <div key={section.title}>
          <h2 className='my-10'>{section.title}</h2>
          {section.items.map((item, index) => (
            <div key={item.id}>
              <div className="dropdown-header cursor-pointer" onClick={() => handleDropdownClick(section.title, index)}>
                <div className="dropdown-header-content text-xl">
                  <p className={`caret ${dropdownState[section.title]?.activeIndex === index ? "caret-down" : ""}`}> <BsFillCaretRightFill /></p>
                  <p className='title'>{item.title}</p>
                </div>
              </div>
              {dropdownState[section.title] && dropdownState[section.title].isDropdownOpen && dropdownState[section.title]?.activeIndex === index && (
                <div dangerouslySetInnerHTML={{ __html: item.content}} className="dropdown-content mt-[-10px]"></div>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
export default FAQ;