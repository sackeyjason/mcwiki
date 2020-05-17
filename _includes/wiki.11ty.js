slugify = require("slugify");

/**
 * Convert links [[like this]] into HTML
 * <a href="/mcwiki/like-this">like this</a>
 * @param {string} content 
 */
function wikiLinkify(content) {
    const linkPattern = /\[\[.*?\]\]/g;
    const notLinks = content.split(linkPattern);
    const links = content.match(linkPattern);
    
    function toLink(markup) {
      const text = markup.slice(2, -2);
      const slug = slugify(text, { lower: true, strict: true });
      return `<a href="/mcwiki/${slug}">${text}</a>`;
    }
    
    let output = [];
    if (links && links.length > 0) {
      notLinks.forEach((text, index) => {
        output.push(text);
        links[index] && output.push(toLink(links[index]));
      })
    } else {
      output = [content];
    }

    return output.join("");
}

/**
 * Convert links like [https://example.com example link]
 * into <a href="https://example.com">example link</a>
 * @param {string} content
*/
function wikiLinkify2(content) {
    const linkPattern = /\[http.*?\]/g;
    const notLinks = content.split(linkPattern);
    const links = content.match(linkPattern);
    
    function toLink(markup) {
      const text = markup.slice(markup.indexOf(' ') + 1, -1);
      const url = markup.slice(1).split(' ')[0];
      return `<a href="${url}">${text}</a>`;
    }
    
    let output = [];
    if (links && links.length > 0) {
      notLinks.forEach((text, index) => {
        output.push(text);
        links[index] && output.push(toLink(links[index]));
      })
    } else {
      output = [content];
    }

    return output.join("");
}

exports.data = {
    title: "Notes @mentalconflux"
};

exports.render = function (data) {
  //console.log('#D', data)
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
    ${wikiLinkify2(wikiLinkify(data.content))}
  </body>
</html>`;
};
