const fs = require("fs");
const path = require('path');
const markdowns = require('../data/markdowns.json')

let tags = [];

markdowns?.forEach(markdown => {
  markdown.tags.forEach((tag) => {
    if (!tags.includes(tag)) {
        tags.push(tag)
    }
  })
});

const filePath = path.join(__dirname, '../data/tags.json')

fs.writeFileSync(filePath, JSON.stringify(tags, null, 2), {
    encoding: "utf-8",
});
