const glob = require("glob");
const fs = require("fs");
const slugify = require("slugify");
const path = require("path")

glob(path.join(__dirname, '../markdown/*.md'), function (err, files) {
  const markdowns = [];

  if (err) throw (err);

  files.forEach((file) => {
    const fileContent = fs.readFileSync(file, { encoding: "utf-8" });

    const [titleLine, description] = fileContent.split("\n").filter((i) => i);
    const [, title] = titleLine.match(/#\s([A-Za-z0-9- ]+)/);
    const slug = slugify(title, { lower: true });
    const tagsResult = fileContent.match(/<!--- Tags: \[([a-z0-9, ]+)\] --->/)

    let tags = [];

    if (tagsResult) {
      tags = tagsResult[1].split(',').map(i => i.trim()).filter(i => i);
    }

    markdowns.push({
      slug,
      title,
      description,
      tags
    });
  });

  const filePath = path.join(__dirname, '../data/markdowns.json')

  fs.writeFileSync(filePath, JSON.stringify(tags, null, 2), {
    encoding: "utf-8",
  });
});
