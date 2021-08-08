let appTitle = 'Paperon'

const quesioner_index = (req, res) => {
  let navMenus = [
    { link: '/admin', icon: 'fas fa-chevron-circle-left', label: 'Kembali' },
    { link: '/admin/quesioner/add', icon: 'fas fa-plus-circle', label: 'Tambah' },
  ];
  res.render("quesioner/quesioner", {
    appTitle,
    navTitle: "Bank Kuesioner",
    navMenus,
  });
}
const quesioner_detail = (req, res) => {
  let navMenus = [
    { link: '/admin/quesioner', icon: 'fas fa-chevron-circle-left', label: 'Kembali' },
  ];
  res.render('quesioner/quesioner-detail', {
    appTitle,
    navTitle: "Detail Kuesioner",
    navMenus,
  });
}
const quesioner_add_get = (req, res) => {
  let navMenus = [
    { link: '/admin/quesioner', icon: 'fas fa-chevron-circle-left', label: 'Kembali' },
  ];
  res.render('quesioner/quesioner-add', {
    appTitle,
    navTitle: "Buat Kuesioner",
    navMenus,
  });
}
const quesioner_add_post = (req, res) => {}
const quesioner_delete = (req, res) => {}

module.exports = {
  quesioner_index,
  quesioner_detail,
  quesioner_add_get,
  quesioner_add_post,
  quesioner_delete
}