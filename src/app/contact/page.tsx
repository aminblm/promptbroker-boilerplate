export const metadata = {
  title: "Contact"
}

const Contact = () =>{

  return (
    <div className="contact ml-[100px]">
      <h1 className=" text-6xl font-semibold my-1">Contact</h1>
      <div className="leading-10">
        <p className="mt-10">We welcome any feedback or questions you may have.</p>
        <p className="mb-2">Email address: <span  className="underline">admin@promptbroker.com</span></p>
        <h4 className="font-bold">Having issue signing up as a seller due to region barrier? / you would like to inquire about other payment modes?</h4>
      </div>
      <p>We apologize for the inconvenience caused. Our payment provider, Stripe, currently does not support payouts for certain countries, which is why your country may not be listed.
        However, we are actively working on a solution that will be available in September 2023, enabling anyone in the world to sell on PromptBroker. 
        Follow our <a href="https://twitter.com/PromptBroker?s=20" target="_blank" className="underline">Twitter page</a> for the latest updates, or sign up on our <a className="underline">webpage</a> to receive notifications when Stripe becomes available in your country.</p>
    </div>
  )
}
export default Contact;