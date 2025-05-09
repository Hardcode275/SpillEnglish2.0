import { motion } from "framer-motion";

import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

export const Features1 = () => {
  return (
    <section
      className="w-full bg-bgDark2 pt-24 -mt-8 mb-8 sm:-mt-8 sm:mb-24 xl:-mt-8 2xl:mt-0 md:pt-[12vw] lg:pt-16"
      id="features"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">
              <span className="block-subtitle">Why Spill the English?</span>
              <h2 className="mt-6 mb-8 text-4xl lg:text-5xl block-big-title">
                Learn naturally through real conversations
              </h2>
              <p className="mb-10 text-secondaryText leading-loose">
                Our podcast brings English learning to life with real-world topics,
                native pronunciation, and practical vocabulary you can use every day.
              </p>
              <ul className="mb-6 text-primaryText">
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Engaging topics spoken by native speakers</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>New episodes every week to stay consistent</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Vocabulary and grammar in a natural context</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-3/4 mx-auto lg:w-1/2 flex flex-wrap lg:-mx-4 sm:pr-8 lg:pt-10 justify-center lg:pl-4 xl:px-8">
            <div className="mb-8 lg:mb-0 w-full sm:w-1/2 px-2 lg:px-0">
              <div className="mb-4 py-3 pl-3 pr-2 rounded">
                <img
              src={"./src/assets/images/imagen2.jpg"}
              alt="Podcast recording"
                  className="rounded-xl main-border-gray mx-auto sm:mx-unset"
                  aria-label="Podcast recording"
                />
              </div>
              <div className="py-3 pl-3 pr-2 rounded">
                <img
                  src={"./src/assets/images/imagen3.jpg"}
                  alt="Language practice"
                  className="rounded-xl main-border-gray mx-auto sm:mx-unset"
                  aria-label="Language practice"
                />
              </div>
            </div>
            <div className="w-1/2 lg:mt-20 pt-12 lg:pt-0 px-2 hidden sm:inline-block">
              <div className="mb-4 py-3 pl-3 pr-2 rounded-lg">
                <img
                  src={"./src/assets/images/image4.jpg"}

                  alt="English tips"
                  className="rounded-xl main-border-gray"
                  aria-label="English tips"
                />
              </div>
              <div className="py-3 pl-3 pr-2 rounded-lg">
                <img
                  src={"./src/assets/images/imagen4.jpg"}

                  alt="Podcast platform"
                  className="rounded-xl main-border-gray"
                  aria-label="Podcast platform"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

