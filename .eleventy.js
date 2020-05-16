module.exports = function(eleventyConfig) {
  // Liquid Shortcode
  eleventyConfig.addShortcode("link", function(title) {
    const slug = title.toLowerCase()
      .split(" ")
      .join("-");
    return `<a href="/${slug}">${title}</a>`;
  });
};

