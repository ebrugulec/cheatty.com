const fs = require("fs");

const file = fs.readFileSync("../data/markdowns.json")
const markdowns = JSON.parse(file);

let tags = [];

markdowns && markdowns.forEach(markdown => {
    markdown.tags.forEach((tag) => {
        if (!tags.includes(tag)) {
            tags.push(tag)
        }
    })
});

fs.writeFileSync("../data/tags.json", JSON.stringify(tags, null, 2), {
    encoding: "utf-8",
});