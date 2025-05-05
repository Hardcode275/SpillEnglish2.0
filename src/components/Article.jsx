
export const Article = ({ articleData }) => {
  const { title, subtitle, date, image, content, footer } = articleData;

  return (
    <div className="flex justify-center bg-bgDark2 relative pt-2">
      <div className="px-2 sm:px-4">
        <article className="p-8 text-center rounded-3xl w-full lg:w-[1200px] 2xl:w-[1400px] mb-24 mt-16 sm:mt-24">
          {/* Header */}
          <header className="mb-12">
            <time className="text-sm text-secondaryText my-4 block" dateTime={new Date(date).toISOString()}>
              {date}
            </time>
            <h1 className="text-[2rem] xs:text-[2.8rem] lg:text-[3.5rem] font-bold text-primaryText mb-4">
              {title}
            </h1>
            <p className="text-lg text-secondaryText mb-4">{subtitle}</p>
          </header>

          {/* Image */}
          <img
            src={image}
            alt={`Featured for ${title}`}
            className="rounded-3xl mb-8 w-10/12 md:w-3/4 mx-auto mt-8"
            aria-hidden="true"
          />

          {/* Content */}
          <section
            className="prose prose-invert max-w-none text-secondaryText leading-8 sm:leading-10 sm:text-xl text-left sm:text-justify mx-auto w-full md:w-10/12 lg:w-2/3 mt-16"
            dangerouslySetInnerHTML={{ __html: content }}
          />

          {/* Footer */}
          <footer className="w-4/5 lg:w-2/3 text-right mx-auto mt-8 text-primaryText text-xl">
            {footer}
          </footer>
        </article>
      </div>
    </div>
  );
};

