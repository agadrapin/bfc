module.exports = function(eleventyConfig) {
  // Pass through static assets
  eleventyConfig.addPassthroughCopy("src/assets/css");
  eleventyConfig.addPassthroughCopy("src/assets/js");
  eleventyConfig.addPassthroughCopy("src/assets/images");

  // Watch for changes
  eleventyConfig.addWatchTarget("src/assets/");

  // Filters
  eleventyConfig.addFilter("pad", function(num, size, char = '0') {
    let s = String(num);
    while (s.length < size) s = char + s;
    return s;
  });

  eleventyConfig.addFilter("totalRating", function(ratings) {
    return (ratings.anticipation || 0) + (ratings.enjoyment || 0) + (ratings.retrospect || 0);
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["njk", "md", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
