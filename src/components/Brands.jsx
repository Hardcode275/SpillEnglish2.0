import { motion } from "framer-motion";

export const Brands = () => (
  <section className="py-12 sm:py-24 bg-bgDark1 w-full lg:mt-16 mb-8 lg:mb-16">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="container px-4 mx-auto 2xl:w-[1200px] xl:w-[1100px] lg:w-[1000px] md:w-4/5">
        <div className="flex lg:flex-row flex-col items-center -mx-4 justify-center lg:text-left text-center">
          <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
            <div className="flex flex-col">
              <h2 className="mb-2 text-4xl sm:text-5xl 2xl:text-6xl font-bold tracking-normal text-primaryText">
                Listen to Spill the English
              </h2>
              <h2 className="text-4xl sm:text-5xl 2xl:text-6xl font-bold tracking-normal text-secondaryColor">
                on your favorite platform
              </h2>
            </div>
          </div>
          <div className="w-full lg:w-1/2 mx-auto mt-6 lg:mt-0">
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-primaryText font-semibold text-lg">
              <li>Spotify</li>
              <li>Apple Podcasts</li>
              <li>Google Podcasts</li>
              <li>Amazon Music</li>
              <li>Deezer</li>
              <li>Youtube</li>
              
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);
