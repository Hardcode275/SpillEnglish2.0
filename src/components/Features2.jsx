import { motion } from "framer-motion";

import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

export const Features2 = () => (
  <section className="w-full bg-bgDark2 mt-12 sm:mt-24 mb-12 lg:my-20 lg:mb-24 pt-4">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">
        <div className="w-11/12 sm:w-3/4 mx-auto lg:w-1/2 flex flex-wrap lg:-mx-4 sm:pr-8 justify-center order-last lg:order-first">
          <div className="mb-8 lg:mb-0 w-full px-2 lg:pl-16 flex flex-col justify-center md:pl-8">
            <div className="mb-4 py-3 md:pl-3 md:pr-20 lg:pr-12 rounded">
              <img
                src={"./src/assets/images/ejercicio.jpg"}

                alt="Podcast learning"
                className="rounded-xl main-border-gray"
              />
            </div>
            <div className="py-3 md:pl-20 lg:pl-12 md:pr-2 rounded">
              <img
                src={"./src/assets/images/workeando.jpg"}

                alt="Mobile listening"
                className="rounded-xl main-border-gray"
              />
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 mb-12 lg:mb-0 xl:pl-8">
          <div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">
            <span className="block-subtitle">Flexible English Learning</span>
            <h2 className="mt-6 mb-8 text-4xl lg:text-5xl block-big-title">
              A podcast made for your lifestyle
            </h2>
            <p className="mb-12 text-secondaryText leading-loose">
              Whether you’re commuting, exercising, or relaxing, Spill the English fits into your routine. Learn at your pace with flexible episodes tailored for all levels.
            </p>
            <ul className="mb-6 text-primaryText">
              <li className="mb-4 flex">
                <CheckArrowIcon />
                <span>Listen anytime, anywhere</span>
              </li>
              <li className="mb-4 flex">
                <CheckArrowIcon />
                <span>Topics that fit real-world situations</span>
              </li>
              <li className="mb-4 flex">
                <CheckArrowIcon />
                <span>Perfect for beginners and intermediates</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

