/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
export default function Example() {
    return (
      <div id="Newsletter" className="bg-gray-50 py-16 sm:py-32">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gradient-to-br from-primary to-primary-700 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32">
            <h2 className="mx-auto max-w-3xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Get all future tips directly into your inbox.
            </h2>
            <p className="mx-auto mt-2 max-w-3xl text-center text-lg leading-8 text-gray-300">
              We send out tips every other week. No spam. Unsubscribe at any time.
            </p>
            <div  className="mx-auto mt-10 flex max-w-md gap-x-4">
            <iframe src="https://embeds.beehiiv.com/fed92e84-9aba-42e9-8fdb-e372a35302a8?slim=true" frameborder="0" scrolling="no" data-test-id="beehiiv-embed" height="52"  style={{margin: 0, borderRadius: '0px', backgroundColor: 'transparent', width:'100%'}}></iframe>
            </div>
            {/* <form className="mx-auto mt-10 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 flex-auto rounded-md border-0 bg-white/10 px-4 py-2 text-white shadow-sm sm:text-sm sm:leading-6 placeholder:text-primary-200 outline focus-visible:outline focus-visible:outline-white outline-1 outline-white/50
                 "
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-secondary px-4 py-3 text-sm font-semibold text-secondary-900 shadow-sm hover:bg-secondary-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary speed-normal"
              >
                Subscribe
              </button>
            </form> */}
            <svg
              viewBox="0 0 1024 1024"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
              aria-hidden="true"
            >
              <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
              <defs>
                <radialGradient
                  id="759c1415-0410-454c-8f7c-9a820de03641"
                  cx={0}
                  cy={0}
                  r={1}
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(512 512) rotate(90) scale(512)"
                >
                  <stop stopColor="#F9F255" />
                  <stop offset={1} stopColor="#217AFF" stopOpacity={0} />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    )
  }
  