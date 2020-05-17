slugify = require("slugify");

module.exports = function (eleventyConfig) {
  // Liquid Shortcode
  // console.log('11tyC', eleventyConfig)
  eleventyConfig.addShortcode("link", function (title) {
    const slug = slugify(title, { lower: true, strict: true });
    return `<a href="/mcwiki/${slug}">${title}</a>`;
  });
  eleventyConfig.setTemplateFormats([
    'md',
    "css",
    "js",
    "11ty.js",
    'html'
  ]);
  //eleventyConfig.addPassthroughCopy("404.md"); //TODO: fix
  return {
    dir: {
      output: "docs"
    },
    pathPrefix: "/mcwiki/"
  }
};

exports.data = {
  layout: "wiki.11ty.js"
};
