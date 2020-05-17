slugify = require("slugify");

function wikiLinkify(content) {
    // [[like this]]
    const linkPattern = /\[\[.*?\]\]/g;
    const notLinks = content.split(linkPattern);
    const links = content.match(linkPattern);
    
    function toLink(markup) {
      const text = markup.slice(2, -2);
      const slug = slugify(text, { lower: true, strict: true });
      return `<a href="/mcwiki/${slug}">${text}</a>`;
    }
    
    if (links && links.length > 0) {
      let output = [];
      
      notLinks.forEach((text, index) => {
        output.push(text);
        console.log('links: ', links);
        links[index] && output.push(toLink(links[index]));
      })
      return output.join("");
    } else {
      return content;
    }
}

exports.data = {
    title: "Notes @mentalconflux"
};

exports.render = function (data) {
  console.log('#D', data)
    return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${data.title}</title>
    <link rel="stylesheet" href="/mcwiki/assets/style.css" />
  </head>
  <body>
    <h1>${data.page.filePathStem}</h1>
    ${wikiLinkify(data.content)}
  </body>
</html>`;
};
