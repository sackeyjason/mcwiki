slugify = require("slugify");

module.exports = function(eleventyConfig) {
  // Liquid Shortcode
  eleventyConfig.addShortcode("link", function(title) {
    const slug = slugify(title, { lower: true, strict: true });
    return `<a href="/${slug}">${title}</a>`;
  });
};

