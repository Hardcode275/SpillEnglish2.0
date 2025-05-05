import { InstagramIcon } from "../assets/icons/InstagramIcon";
import { TiktokIcon } from "../assets/icons/TiktokIcon";
import { YoutubeIcon } from "../assets/icons/YoutubeIcon";

const footerData = [
  {
    title: "Podcast",
    items: ["Episodes", "Transcripts", "Vocabulary", "Platforms"],
  },
  {
    title: "Learning",
    items: ["Listening Tips", "Grammar Help", "Speaking Practice", "FAQ"],
  },
  {
    title: "Community",
    items: ["About Us", "Join Us", "Contact", "Support Us"],
  },
];

export const Footer = () => {
  return (
    <footer aria-label="Site footer">
      <div className="pt-10 lg:pt-20 lg:pb-16 bg-bgDark1 radius-for-skewed">
        <div className="container mx-auto px-4 w-4/5 md:w-11/12 lg:w-10/12 xl:w-4/5 2xl:w-2/3">
          <div className="flex flex-wrap">
            {/* Branding y redes */}
            <div className="w-full lg:w-1/3 mb-16 lg:mb-0">
              <div className="flex justify-center lg:justify-start items-center grow basis-0">
                <div className="text-white mr-2 text-6xl">
                  <img
                    src="./src/assets/images/SpillEnglish.jpeg"
                    alt="SpillEnglish Logo"
                    className="w-16 h-16"
                  />
                </div>
                <div className="text-white font-['Inter'] font-bold text-xl">
                  SpillEnglish
                </div>
              </div>
              <p className="mb-10 mt-4 sm:w-[22rem] lg:w-[20rem] xl:w-[24rem] text-gray-400 leading-loose text-center lg:text-left mx-auto lg:mx-0">
                Spill the English is a podcast designed to help you learn and enjoy English through real conversations, useful vocabulary, and listening practice.
              </p>
              <div className="w-36 mx-auto lg:mx-0">
                <a
                  className="inline-block w-10 h-10 mr-2 p-2 pt-[0.55rem] outlined-button"
                  href="https://www.youtube.com/@SpillEnglish"
                  aria-label="Youtube"
                >
                  <YoutubeIcon />
                </a>
                <a
                  className="inline-block w-10 h-10 mr-2 p-2 pt-[0.55rem] pl-[0.55rem] outlined-button"
                  href="https://www.tiktok.com/@spilltheenglish5?_t=ZM-8w5UeLOD0hZ&_r=1"
                  aria-label="Tiktok"
                >
                  <TiktokIcon />
                </a>
                <a
                  className="inline-block w-10 h-10 mr-2 p-2 pt-[0.55rem] pl-[0.55rem] outlined-button"
                  href="https://www.instagram.com/spillthenglish_5?igsh=MThtbTdueHVnbGJpNQ=="
                  aria-label="Instagram"
                >
                  <InstagramIcon />
                </a>
              </div>
            </div>

            {/* Enlaces */}
            <div className="w-full lg:w-2/3 lg:pl-16 hidden lg:flex flex-wrap justify-between">
              {footerData.map((section, sectionIndex) => (
                <div
                  key={`${section.title}-${sectionIndex}`}
                  className="w-full md:w-1/3 lg:w-auto mb-16 md:mb-0"
                >
                  <h3 className="mb-6 text-2xl font-bold text-primaryText">
                    {section.title}
                  </h3>
                  <ul>
                    {section.items.map((item, index) => (
                      <li key={`${item}-${index}`} className="mb-4">
                        <a
                          className="text-gray-400 hover:text-gray-300"
                          href="#"
                          aria-label={item}
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Footer credit */}
      <div className="bg-bgDark1 py-4 border-t border-gray-700">
        <div className="container mx-auto px-4 w-4/5 md:w-11/12 lg:w-10/12 xl:w-4/5 2xl:w-2/3">
          <p className="text-gray-400 text-sm flex items-center justify-center">
            By Codexfork
            <span className="ml-2 text-yellow-400">⚡</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

