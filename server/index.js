const app = require("./app");
const PORT = process.env.PORT || 3000;
const db = require("./db/db");

const init = async () => {
  try {
    db.sync().then(
      app.listen(PORT, () => {
        console.log(`App running on port ${PORT}!`);
      })
    );
  } catch (err) {
    console.log(err);
  }
};
init();

//Nica's edit
