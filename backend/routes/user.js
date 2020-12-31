const users = require("../controllers/user");

module.exports = (app) => {
  app.get("/getusers", users.getUsers);
  app.get("/getuser/:email", users.getUser);
  app.post("/reguser", users.regUser);
  app.post("/checkuser", users.checkUser);
  app.put("/upduser/:_id", users.updUser);
  app.delete("/deluser/:_id", users.delUser);
};
