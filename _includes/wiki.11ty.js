function wikiLinkify(content) {
    //console.log(content)
    return content;
}

exports.data = {
    title: "Notes @mentalconflux"
};

exports.render = function (data) {
  console.log(data)
    return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${data.title}</title>
    <link rel="stylesheet" href="/assets/style.css" />
  </head>
  <body>
    <h1>${data.page.filePathStem}</h1>
    
    ${wikiLinkify(data.content)}
  </body>
</html>`;
};
