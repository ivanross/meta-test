
console.log("load");

const meta = document.querySelectorAll(
  'meta[property="og:title"], meta[property="og:description"],meta[name="description"], meta[name="twitter:title"], meta[name="twitter:description"]'
);
console.log(meta);

for (const title of meta) {
  title.content += " (MODIFIED BY JS)";
}

document.querySelector("title").innerText += " (MODIFIED BY JS)";
