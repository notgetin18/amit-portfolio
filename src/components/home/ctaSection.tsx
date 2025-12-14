import { m } from "framer-motion";
import PrimaryButtons from "../buttons/primaryButtons";
import SecondaryButton from "../buttons/secondaryButton";
import { handleDownloadResume } from "@/utility";
import Link from "next/link";

const ctaSection = () => {
  return (
    <div>
      <section
        aria-labelledby="contact-heading"
        className="py-4 sm:py-12 md:py-16 px-3 sm:px-6 lg:px-8 relative z-10"
      >
        <h2 id="contact-heading" className="sr-only">
          Contact and call to action
        </h2>

        <div className="max-w-7xl mx-auto">
          <m.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-3xl border-[1px] border-white/6 bg-gradient-to-br from-[#07162b]/60 via-[#061025]/30 to-[#071826]/50 p-3 sm:p-6 md:p-10 backdrop-blur-md shadow-2xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-7 px-2 sm:px-6">
                <div className="inline-flex items-center text-sm text-slate-400 uppercase tracking-widest rounded-full bg-gradient-to-r from-white/5 via-white/3 to-transparent px-3 py-1 mb-3 mt-2 sm:mt-0">
                  Let’s build together
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#8ef3c1] via-[#3ed6ac] to-[#06b6d4] leading-tight">
                  Ready to ship great product and delightful experiences?
                </h2>

                <p className="mt-4 text-lg text-slate-300 max-w-3xl">
                  I help product teams go from concept to production — fast
                  iteration, measured outcomes and resilient infrastructure.
                  Book a short discovery call and let's scope an approach that
                  fits your roadmap.
                </p>

                <div className="mt-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                  <Link href="/contact" className="w-full sm:w-auto">
                    <PrimaryButtons
                      title="Start a project"
                      containerStyles="px-6 py-2 sm:py-3 rounded-3xl text-base w-full sm:w-auto"
                    />
                  </Link>

                  <SecondaryButton
                    title="Download resume"
                    handleClick={() => handleDownloadResume("pdf")}
                    containerStyles="px-6 py-2 sm:py-3 rounded-3xl text-base w-full sm:w-auto"
                  />
                </div>

                <div className="mt-6 flex items-center gap-6 text-sm text-slate-300 flex-wrap">
                  <div className="inline-flex items-center gap-2">
                    <strong className="text-white text-lg">1M+</strong> users
                    reached (Bright Digi Gold)
                  </div>
                  <div className="inline-flex items-center gap-2">
                    <strong className="text-white text-lg">30%</strong> faster
                    page loads (selected clients)
                  </div>
                  <div className="inline-flex items-center gap-2">
                    <strong className="text-white text-lg">20%</strong> average
                    revenue uplift
                  </div>
                  <div className="inline-flex items-center gap-2">
                    <strong className="text-white text-lg">100%</strong> Client
                    satisfaction
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-center lg:justify-end px-2 sm:px-6">
                <div className="w-full max-w-[420px] rounded-2xl overflow-hidden border border-white/6 bg-gradient-to-br from-white/5 to-transparent p-4 backdrop-blur-sm shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className="h-6 w-6 sm:w-12 sm:h-12 rounded-full bg-gradient-to-tr from-[#06b6d4] to-[#3ed6ac] flex items-center justify-center text-white font-semibold sm:font-semibold text-xs sm:text-lg p-1 sm:p-0">
                      AK
                    </div>
                    <div>
                      <div className="text-sm text-white font-semibold">
                        Schedule a quick call
                      </div>
                      <div className="text-xs text-slate-300 mt-1">
                        15–30 minute discovery to scope your project & outcomes
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex gap-3">
                    <Link href="/contact" className="flex-1">
                      <PrimaryButtons
                        title="Book call"
                        containerStyles="px-4 py-2 rounded-2xl w-full text-sm"
                      />
                    </Link>
                    <a href="mailto:notgetin18@gmail.com" className="block">
                      <button className="px-3 py-2 rounded-xl border border-white/6 bg-white/3 text-sm text-slate-100">
                        Email me
                      </button>
                    </a>
                  </div>

                  <div className="mt-4 text-xs text-slate-400">
                    No-salesy calls — just a short conversation to understand
                    requirements and find the right next steps.
                  </div>
                </div>
              </div>
            </div>
          </m.div>
        </div>
      </section>
    </div>
  );
};

export default ctaSection;
