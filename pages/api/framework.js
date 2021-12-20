const framework = [
  {
    id: 1,
    judul: "Belajar Layout Antarmuka Flutter",
    deskripsi:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna",
    urlGambar: "/images/flutter-logo.png",
  },
  {
    id: 2,
    judul: "Belajar Layout Antarmuka Laravel",
    deskripsi:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna",
    urlGambar: "/images/laravel-logo.png",
  },
];

export default function handler(req, res) {
  res.status(200).json(framework);
}
