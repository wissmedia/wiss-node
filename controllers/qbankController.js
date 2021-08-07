let appTitle = "Paperon";
const qbank_index = (req, res) => {
  let navTitle = [];
  let menus = [];
  let navMenus = [];
  res.render("qbank/qbank", {
    appTitle,
    navTitle: "Bank Pertanyaan",
    navMenus,
  });
};
const qbank_detail = (req, res) => {
  let navTitle = [];
  let menus = [];
  let navMenus = [];
  res.send("qbank - detail");
};
const qbank_add_get = (req, res) => {
  let navTitle = [];
  let menus = [];
  let navMenus = [];
  res.send("qbank - add_get");
};
const qbank_add_post = (req, res) => {
  let navTitle = [];
  let menus = [];
  let navMenus = [];
  res.send("qbank - add_post");
};
const qbank_delete = (req, res) => {
  let navTitle = [];
  let menus = [];
  let navMenus = [];
  res.send("qbank - delete");
};

module.exports = {
  qbank_index,
  qbank_detail,
  qbank_add_get,
  qbank_add_post,
  qbank_delete,
};
