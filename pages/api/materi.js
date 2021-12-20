const listMateri = [
  {
    id: 1,
    nama: "Hello World",
    deskripsi: "Deksripsi materi Hello World",
    frameworkId: 1,
    pendahuluan: "Awali dengan basmalah",
    urlMateri: "",
  },
  {
    id: 2,
    nama: "Hello World",
    deskripsi: "Deksripsi materi Hello World",
    frameworkId: 1,
    pendahuluan: "Awali dengan basmalah",
    urlMateri: "",
  },
  {
    id: 3,
    nama: "Hello World",
    deskripsi: "Deksripsi materi Hello World",
    frameworkId: 1,
    pendahuluan: "Awali dengan basmalah",
    urlMateri: "",
  },
];
export default function handler(req, res) {
  res.status(200).json(listMateri);
}
