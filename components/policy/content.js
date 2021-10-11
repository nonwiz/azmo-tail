export default function ContentPrivacy() {
  return (
    <>
      <section className="py-10 mx-10 lg:mx-20">
        <div className="container px-5 sm:px-20 py-8 mx-auto shadow-xl dark:bg-rose-100 rounded-lg text-gray-500 dark:text-gray-600">
          <div className="my-8">
            <h2 className="text-3xl font-bold text-wgray-600 dark:text-wgray-500">
              Consent
            </h2>

            <p className="mt-4">
              By using our website, you hereby consent to our Privacy Policy and
              agree to its terms.
            </p>
          </div>
          <div className="my-8">
            <h2 className="text-3xl font-bold text-wgray-600 dark:text-wgray-500">
              Information we collect
            </h2>

            <p className="mt-4">
              The personal information that you are asked to provide, and the
              reasons why you are asked to provide it, will be made clear to you
              at the point we ask you to provide your personal information. If
              you contact us directly, we may receive additional information
              about you such as your name, email address, phone number, the
              contents of the message and/or attachments you may send us, and
              any other information you may choose to provide. When you register
              for an Account, we may ask for your contact information, including
              items such as name, company name, address, email address, and
              telephone number.
            </p>
          </div>

          <div className="my-8">
            <h2 className="text-3xl font-bold text-wgray-600 dark:text-wgray-500">
              How we use your information
            </h2>

            <p className="mt-4">
              We use the information we collect in various ways, including to:
            </p>
            <ul className="text-base list-disc ml-3 mt-3">
              <li>Provide, operate, and maintain our website</li>
              <li>Improve, personalize, and expand our website</li>
              <li>Understand and analyze how you use our website</li>
              <li>
                Develop new products, services, features, and functionality
              </li>
              <li>
                Communicate with you, either directly or through one of our
                partners, including for customer service, to provide you with
                updates and other information relating to the website, and for
                marketing and promotional purposes
              </li>
              <li>Send you emails</li>
              <li>Find and prevent fraud</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
