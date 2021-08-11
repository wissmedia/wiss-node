let appTitle = "Paperon";

const setting_index = (req, res) => {
  let menus = [
    
  ]
  let navMenus = [
    { link: '/admin', icon: 'fas fa-chevron-circle-left', label: 'Kembali' },
  ];
  res.render("setting/setting", {
    appTitle,
    navTitle: "Pengaturan",
    navMenus,
  });
};

module.exports = {
  setting_index
}