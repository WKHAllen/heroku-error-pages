import * as express from "express";

const port = parseInt(process.env.PORT);

const app = express();

app.use(express.static("static"));

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});

export = app;
