export default function FAQ() {
  return (
    <>
      {/* FAQ Section: Simple */}
      <div className=" bg-[#FFF5F5] dark:text-gray-100">
        <div className="container mx-auto space-y-16 px-4 py-16 lg:px-8 lg:py-32 xl:max-w-7xl">
          {/* Heading */}
          <div className="text-center">
            <div className="mb-1 text-sm font-bold uppercase tracking-wider text-[#FF6B6B] dark:text-[#FF6B6B]">
              We Answer
            </div>
            <h2 className="text-4xl font-black text-[#FF6B6B]">
              Frequently Asked Questions
            </h2>
          </div>
          {/* END Heading */}

          {/* FAQ */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
            <div>
            <h4 className="mb-2 font-extrabold text-gray-500 ">
                What features are included?
              </h4>
              <p className="leading-relaxed text-[#FF6B6B]">
                Etiam egestas fringilla enim, id convallis lectus laoreet at.
                Fusce purus nisi, gravida sed consectetur ut, interdum quis
                nisi. Quisque egestas nisl id lectus facilisis scelerisque.
              </p>
            </div>
            <div>
              <h4 className="mb-2 font-extrabold text-gray-500 ">
                Can I use PayPal to pay you?
              </h4>
              <p className="leading-relaxed text-[#FF6B6B]">
                Etiam egestas fringilla enim, id convallis lectus laoreet at.
                Fusce purus nisi, gravida sed consectetur ut, interdum quis
                nisi. Quisque egestas nisl id lectus facilisis scelerisque.
              </p>
            </div>
            <div>
            <h4 className="mb-2 font-extrabold text-gray-500 ">
            Do I get access to the community?
              </h4>
              <p className="leading-relaxed text-[#FF6B6B]">
                Etiam egestas fringilla enim, id convallis lectus laoreet at.
                Fusce purus nisi, gravida sed consectetur ut, interdum quis
                nisi. Quisque egestas nisl id lectus facilisis scelerisque.
              </p>
            </div>
            <div>
            <h4 className="mb-2 font-extrabold text-gray-500 ">
            Can I get a refund just in case?
              </h4>
              <p className="leading-relaxed text-[#FF6B6B]">
                Etiam egestas fringilla enim, id convallis lectus laoreet at.
                Fusce purus nisi, gravida sed consectetur ut, interdum quis
                nisi. Quisque egestas nisl id lectus facilisis scelerisque.
              </p>
            </div>
            <div>
            <h4 className="mb-2 font-extrabold text-gray-500 ">
            Do you offer email support?
              </h4>
              <p className="leading-relaxed text-[#FF6B6B]">
                Etiam egestas fringilla enim, id convallis lectus laoreet at.
                Fusce purus nisi, gravida sed consectetur ut, interdum quis
                nisi. Quisque egestas nisl id lectus facilisis scelerisque.
              </p>
            </div>
            <div>
            <h4 className="mb-2 font-extrabold text-gray-500 ">
            Are the updates free for life?
              </h4>
              <p className="leading-relaxed text-[#FF6B6B]">
                Etiam egestas fringilla enim, id convallis lectus laoreet at.
                Fusce purus nisi, gravida sed consectetur ut, interdum quis
                nisi. Quisque egestas nisl id lectus facilisis scelerisque.
              </p>
            </div>
          </div>
    
          <div className="text-center">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200  px-4 py-2 font-semibold leading-6 text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300/25 active:border-gray-200 active:shadow-none dark:border-gray-700 bg-[#FF6B6B] dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600/40 dark:active:border-gray-700"
            >
              <svg
                className="hi-mini hi-arrow-top-right-on-square inline-block size-5 opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Contact us below</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
