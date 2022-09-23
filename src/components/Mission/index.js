const stats = [
  { label: "Founded", value: "2016" },
  { label: "Employees", value: "59" },
  { label: "Happy Customers", value: "13521" },
  { label: "Revenue", value: "$25M" },
];

export default function Mission() {
  return (
    <div className="bg-white">
      <main>
        {/* Testimonial/stats section */}
        <div className="relative mt-20">
          <div className="bg-white mb-10">
            <div className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8">
              <div className="text-left">
                <p className="mt-1 text-4xl font-extrabold text-gray-700 sm:text-5xl ">
                  Our Goal
                </p>
                <div className="h-1 w-32 bg-indigo-600 rounded-full mt-1 "></div>
                <p className="max-w-xl mt-5 text-xl text-gray-500">
                  Start building for free, then add a site plan to go live.
                  Account plans unlock additional features.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
            <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
              {/* Content area */}
              <div className="">
                <div className="mt-6 text-gray-500 space-y-6">
                  <p className="text-lg">
                    Sagittis scelerisque nulla cursus in enim consectetur quam.
                    Dictum urna sed consectetur neque tristique pellentesque.
                    Blandit amet, sed aenean erat arcu morbi. Cursus faucibus
                    nunc nisl netus morbi vel porttitor vitae ut. Amet vitae
                    fames senectus vitae.
                  </p>
                  <p className="text-base leading-7">
                    Sollicitudin tristique eros erat odio sed vitae, consequat
                    turpis elementum. Lorem nibh vel, eget pretium arcu vitae.
                    Eros eu viverra donec ut volutpat donec laoreet quam urna.
                    Sollicitudin tristique eros erat odio sed vitae, consequat
                    turpis elementum. Lorem nibh vel, eget pretium arcu vitae.
                    Eros eu viverra donec ut volutpat donec laoreet quam urna.
                  </p>
                  <p className="text-base leading-7">
                    Rhoncus nisl, libero egestas diam fermentum dui. At quis
                    tincidunt vel ultricies. Vulputate aliquet velit faucibus
                    semper. Pellentesque in venenatis vestibulum consectetur
                    nibh id. In id ut tempus egestas. Enim sit aliquam nec, a.
                    Morbi enim fermentum lacus in. Viverra.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative  sm:py-16 lg:py-0">
              <div
                aria-hidden="true"
                className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
              >
                <svg
                  className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
                  width={404}
                  height={392}
                  fill="none"
                  viewBox="0 0 404 392"
                >
                  <defs>
                    <pattern
                      id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits="userSpaceOnUse"
                    >
                      <rect
                        x={0}
                        y={0}
                        width={4}
                        height={4}
                        className="text-gray-200"
                        fill="currentColor"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width={404}
                    height={392}
                    fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"
                  />
                </svg>
              </div>
              <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none ">
                <div className="relative  pb-10 rounded-2xl shadow-xl overflow-hidden h-[500px]">
                  <img
                    className="absolute inset-0 h-full w-full"
                    src="https://cdn.pixabay.com/photo/2017/01/14/10/56/people-1979261__340.jpg"
                    alt=""
                  />
                  <div className="absolute inset-0 bg-indigo-500 mix-blend-multiply" />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-600 via-indigo-600 opacity-50" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
