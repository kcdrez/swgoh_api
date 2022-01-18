const app = require("./index");

const port = 3000;

app.listen(port, () => {
  console.info(`app listening at http://localhost:${port}`);
});
