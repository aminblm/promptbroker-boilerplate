export const metadata = {
  title: "Privacy"
}

const  Privacy = () => {
  return (
    <div className="privacy w-[900px] m-auto ml-[300px]">
      <h1 className="text-5xl font-medium mt-10 mb-10">Privacy Policy</h1>
      <p className="font-light mb-5">Effective Date: April 16th 2023</p>
      <p>At Promptbroker, we value the privacy of our users and are dedicated to 
        safeguarding their information. This Privacy Policy provides an overview 
        of how we collect, utilize, disclose, and protect your data when you access
        our website, Promptbroker.com. Your use of our Website indicates your acceptance 
        of the terms and practices outlined in this policy regarding the handling of your information.
      </p>

      <h1 className="text-3xl font-bold mt-10 mb-5">Information We Collect</h1>
      <p>At our Website, we gather the information you provide, such as your email address, 
        when you subscribe to our newsletter or create an account. Additionally, when you visit 
        our Website, we automatically collect data such as your IP address and usage information 
        using cookies and tracking technologies like Google Analytics.
      </p>
      <h1 className="text-3xl font-bold mt-10 mb-5">Use of your Information</h1>
      <p>We obtain information that you willingly provide to us, such as your email address, when 
        you register an account or subscribe to our newsletter on our website. Additionally, we 
        automatically collect data about your website usage, including your IP address, through 
        cookies and other tracking technologies like Google Analytics.
      </p>
      <h1 className="text-3xl font-bold mt-10 mb-5">Third-Party Sevice Providers</h1>
      <p>We collaborate with Stripe, an external payment processor, to handle payments made 
        through our website. If you make a purchase, you may be directed to Stripe's website to 
        complete the transaction. Stripe may collect your payment information, such as your credit 
        card number, according to their privacy policy. We do not retain your payment information on our systems.
      </p>
      <h1 className="text-3xl font-bold mt-10 mb-5">Sharing of your Information</h1>
      <p>We do not engage in selling, trading, or transferring your personally identifiable 
        information to third parties for marketing purposes. However, we may share your information 
        with third-party service providers such as Google Analytics and Stripe to provide services on 
        our behalf and enhance our website's functionality. In certain situations, we may be required by 
        law to disclose your information, such as to comply with a subpoena or to respond to a government request. 
        We may also disclose your information if we believe that it is necessary to protect our rights, y
        our safety, or the safety of others, or to investigate fraud.
      </p>
      <h1 className="text-3xl font-bold mt-10 mb-5">Changes to This Privacy Policy</h1>
      <p>We reserve the right to make changes to our Privacy Policy, and we will inform you of 
        any updates by posting the new version on this page. It is recommended that you check 
        this page regularly for any modifications. Any changes made to this Privacy Policy will 
        be effective once they are posted here.
      </p>
      <h1 className="text-3xl font-bold mt-10 mb-5">Contact us</h1>
      <p>Please feel free to reach out to us at <a href="/email" className="underline">
        hello@Promptbroker.com </a> if you have any inquiries regarding our Privacy Policy.
      </p>
    </div>
  )
}
export default Privacy;