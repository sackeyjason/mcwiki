slugify = require("slugify");

module.exports = function (eleventyConfig) {
  // Liquid Shortcode
  console.log('11tyC', eleventyConfig)
  eleventyConfig.addShortcode("link", function (title) {
    const slug = slugify(title, { lower: true, strict: true });
    return `<a href="/${slug}">${title}</a>`;
  });
  eleventyConfig.setTemplateFormats([
    'md',
    "css",
    "js",
    "11ty.js"
  ]);
  return {
    dir: {
      output: "docs"
    }
  }
};

exports.data = {
  layout: "wiki.11ty.js"
};
