const fs = require("fs");
const path = require("path");
const markdowns = require("../src/data/markdowns.json");

const tags = [];

markdowns?.forEach((markdown) => {
  markdown.tags.forEach((markdownTag) => {
    const tagIndex = tags.findIndex((tag) => tag.name === markdownTag);

    if (tagIndex >= 0) {
      tags[tagIndex].count = tags[tagIndex].count + 1;
    } else {
      tags.push({ name: markdownTag, count: 1 });
    }
  });
});

const filePath = path.join(__dirname, "../src/data/tags.json");

fs.writeFileSync(filePath, JSON.stringify(tags, null, 2), {
  encoding: "utf-8",
});
