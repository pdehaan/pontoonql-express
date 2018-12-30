const express = require("express");
const exphbs = require("express-handlebars");
const pontoonql = require("pontoonql");

const PATH = "/:product/:pct?";

const app = express();
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "default",
    helpers: {
      toJSON(obj) {
        return JSON.stringify(obj, null, 2);
      },
      toStr(arr) {
        return arr.join(",");
      }
    }
  })
);
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  res.render("home", { path: PATH });
});
app.get(PATH, async (req, res) => {
  const { product, pct = 80 } = req.params;
  try {
    const languages = await pontoonql(product, pct);
    const readyLocales = languages.map(language => language.locale.code).sort();

    res.render("product", {
      product,
      pct,
      locales: readyLocales,
      languages
    });
  } catch (err) {
    res.send(err.message).status(500);
  }

  // res.send(`Checking ${product} locales with at least ${pct}% translation.`);
});

const server = app.listen(process.env.PORT || 8000, () => {
  console.log(`Listening at :${server.address().port}`);
});
