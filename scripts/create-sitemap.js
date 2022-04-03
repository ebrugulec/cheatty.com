const fs = require("fs");
const path = require("path");

const markdowns = require("../src/data/markdowns.json");
const tags = require("../src/data/tags.json");

// [TODO]: Use .evn file
const BASE_URL = "";

const urls = [];

markdowns.forEach((markdown) => {
  const url = `${BASE_URL}/cheatsheet/${markdown.slug}`;
  urls.push(url);
});

tags.forEach((tag) => {
  const url = `${BASE_URL}/tag/${tag.slug}`;
  urls.push(url);
});

console.log(__dirname);
const filePath = path.join(__dirname, "../public/sitemap.txt");

fs.writeFileSync(filePath, urls.join("\n"), {
  encoding: "utf-8",
});
