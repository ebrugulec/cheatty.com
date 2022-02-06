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

fs.writeFileSync(path.join(__dirname, '../data') + '/tags.json', JSON.stringify(tags, null, 2), {
    encoding: "utf-8",
});
