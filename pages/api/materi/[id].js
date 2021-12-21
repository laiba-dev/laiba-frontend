const detailMateri = {
  id: 1,
  nama: "Hello World",
  deskripsi:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident itaque ex veniam! Obcaecati nulla voluptates voluptate quaerat quas accusantium, esse, quisquam commodi dolorem mollitia molestiae nisi, iure quam sint! Accusantium!",
  frameworkId: 1,
  pendahuluan: "Awali dengan basmalah",
  urlMateri: "",
  praktikum: [
    {
      id: 1,
      nama_praktikum: "Hello world menggunakan text",
      penjelasan: "Silahkan buat aplikasi bertuliskan Hello world",
      materiid: 1,
      type: "exercise",
      success: false,
    },
    {
      id: 2,
      nama_praktikum: "Hello world menggunakan text",
      penjelasan: "Silahkan buat aplikasi bertuliskan Hello world",
      materiid: 1,
      type: "exercise",
      success: false,
    },
    {
      id: 3,
      nama_praktikum: "Hello world menggunakan text",
      penjelasan: "Silahkan buat aplikasi bertuliskan Hello world",
      materiid: 1,
      type: "quiz",
      success: false,
    },
  ],
};

export default function handler(req, res) {
  res.status(200).json(detailMateri);
}
