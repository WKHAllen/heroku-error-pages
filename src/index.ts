import * as express from "express";
import * as hbs from "express-handlebars";

const port = parseInt(process.env.PORT);

const app = express();

app.engine(
  ".html",
  hbs({
    extname: ".html",
  })
);
app.set("view engine", ".html");

app.get("/:appName/:errorPage", (req, res) => {
  const appName = req.params.appName;
  const errorPage = req.params.errorPage;

  res.render(`${appName}-${errorPage}`, { layout: appName });
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});

export = app;
