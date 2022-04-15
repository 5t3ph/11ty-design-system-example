module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/sass/");

  eleventyConfig.addPassthroughCopy("./src/assets/");

  if (process.env.ELEVENTY_ENV === "prod") {
    eleventyConfig.ignores.add("./src/__docs/");
  }

  eleventyConfig.addShortcode("card", function ({ cardType, cardImg, cardAlt, cardTitle, featureLinkUrl, featureLinkContent }) {
    let cardClasses = cardType === 'feature' ? 'card--feature-image' : '';

    let cardContent = '';
    
    if (cardType === "feature") {
      cardContent = `<a href="${featureLinkUrl}">${featureLinkContent}</a>`;
    }
      return `
      <div class="card ${cardClasses}">
        <img src="${cardImg}" alt="${cardAlt}" >

        <div class="card__content">
          <h3 class="card__title">${cardTitle}</h3>
          ${cardContent}
        </div>
      </div>
    `;
  });

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
