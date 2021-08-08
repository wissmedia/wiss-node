let appTitle = 'Paperon'

const result_index = (req, res) => {
  let navMenus = [
    { link: '/admin', icon: 'fas fa-chevron-circle-left', label: 'Kembali' },
  ];
  res.render('result/result', {
    appTitle,
    navTitle: "Hasil Kuesioner",
    navMenus,
  })
}
const result_detail = (req, res) => {
  let navMenus = [
    { link: '/admin', icon: 'fas fa-chevron-circle-left', label: 'Kembali' },
  ];
  res.render('result/result-detail', {
    appTitle,
    navTitle: "Hasil Kuesioner",
    navMenus,
  })
}

module.exports = {
  result_index,
  result_detail
}