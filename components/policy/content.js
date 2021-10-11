export default function ContentPrivacy() {
  return (
    <>
      <section className="py-10 mx-20">
        <div className="container px-10 py-8 mx-auto shadow-xl dark:bg-rose-100 rounded-lg text-gray-500 dark:text-gray-600">
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

          <div className="items-center lg:flex">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-wgray-600 dark:text-wgray-500">
                Our Logo
              </h2>

              <p className="mt-4 lg:max-w-md">
                There are several illustrations here that we want to show:
              </p>
              <ul className="text-base list-disc ml-3">
                <li> Head: Represent Momo, my late rabbit </li>
                <li>
                  {" "}
                  Body Part: Triangular shape representing the three aspects of
                  mental, physical, and spiritual health{" "}
                </li>
                <li> Whole Image: A woman who is hugging herself </li>
              </ul>
            </div>

            <div className="mt-8 lg:mt-0 lg:w-1/2">
              <div className="flex items-center justify-center">
                <div className="max-w-lg">
                  <img
                    className="object-cover object-center w-full h-64 rounded-md shadow bg-wgray-400 dark:bg-wgray-50 p-5"
                    src="/assets/logo.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
