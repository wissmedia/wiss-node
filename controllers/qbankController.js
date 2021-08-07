let appTitle = "Paperon";

const qbank_index = (req, res) => {
  let navMenus = [
    { link: '/admin', icon: 'fas fa-chevron-circle-left', label: 'Kembali' },
    { link: '/admin/qbank/add', icon: 'fas fa-plus-circle', label: 'Tambah' },
  ];
  res.render("qbank/qbank", {
    appTitle,
    navTitle: "Bank Pertanyaan",
    navMenus,
  });
};
const qbank_detail = (req, res) => {
  let navMenus = [
    { link: '/admin/qbank', icon: 'fas fa-chevron-circle-left', label: 'Kembali' },
  ];
  res.render('qbank/qbank-detail', {
    appTitle,
    navTitle: "Detail Pertanyaan",
    navMenus,
  });
};
const qbank_add_get = (req, res) => {
  let navMenus = [
    { link: '/admin/qbank', icon: 'fas fa-chevron-circle-left', label: 'Kembali' },
  ];
  res.render('qbank/qbank-add', {
    appTitle,
    navTitle: "Tambah Pertanyaan",
    navMenus,
  });
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
