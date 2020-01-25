var fs = require("fs");

var data = fs
  .readFileSync("./catalog.json")
  .toString()
  .split("\n");

data.splice(0, 0, "teste");
var text = data.join("\n");

fs.writeFile("./catalog.json", text, function(err) {
  if (err) return err;
});
