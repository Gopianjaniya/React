import Navbar from "./../../components/Navbar";

function Hero() {
  return (
    <div className=" flex min-h-screen w-screen flex-col bg-gradient-to-l from-slate-800 to-violet-900">
      <Navbar />
      <div className="sm:my-auto mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <div className="mb-10 lg:mb-0 lg:max-w-lg lg:pr-5">
            <div className="mb-6 max-w-xl">
              <div>
                <p className="bg-teal-accent-400 mb-2 inline-block rounded-full px-3 text-xs font-semibold uppercase tracking-wider text-gray-50">
                  New and improved
                </p>
              </div>
              <h2 className="mb-6 max-w-lg font-sans text-3xl font-bold leading-snug tracking-tight text-white sm:text-5xl sm:leading-snug">
                Streaming plathtmlForm htmlFor
                <span className="my-1 inline-block rounded bg-white px-2 text-violet-600">
                  fitness
                </span>
                instructors
              </h2>
              <p className="text-base text-gray-200">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque it.
              </p>
            </div>
            <div className="flex flex-col items-center md:flex-row">
              <a
                href="/"
                className="mb-3 inline-flex h-12 w-full items-center justify-center rounded bg-violet-700 px-6 font-medium tracking-wide text-white shadow-md transition duration-200 hover:bg-violet-800 focus:outline-none md:mr-4 md:mb-0 md:w-auto"
              >
                Stream Now{" "}
              </a>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold text-gray-50 underline-offset-2 transition-colors duration-200 hover:underline"
              >
                Watch how it works
              </a>
            </div>
          </div>
          <div className="relative shadow-xl shadow-violet-700 lg:w-1/2">
            <img
              className="h-56 w-full rounded object-cover shadow-lg sm:h-96"
              src="/images/kIaysJ28maHz8lbmq_KsQ.png"
              alt=""
            />
            <a
              href="/"
              aria-label="Play Video"
              className="group absolute inset-0 flex h-full w-full items-center justify-center bg-gray-900 bg-opacity-30 transition-colors duration-300 hover:bg-opacity-10"
            >
              <div className="flex h-16 w-16 transhtmlForm items-center justify-center rounded-full bg-gray-100 shadow-2xl transition duration-300 group-hover:scale-110">
                <svg
                  className="w-10 text-gray-900"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M16.53,11.152l-8-5C8.221,5.958,7.833,5.949,7.515,6.125C7.197,6.302,7,6.636,7,7v10 c0,0.364,0.197,0.698,0.515,0.875C7.667,17.958,7.833,18,8,18c0.184,0,0.368-0.051,0.53-0.152l8-5C16.822,12.665,17,12.345,17,12 S16.822,11.335,16.53,11.152z"></path>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
