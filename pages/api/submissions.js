const hasilPembelajaran = [
  {
    id: 1,
    nama_praktikum: "Hello Flutter",
    success: true,
    tanggal_mulai: "11 Januari 2021",
    tanggal_selesai: "12 Januari 2021",
    praktikum_id: 1,
    log_test: [
      {
        id: 1,
        nama_test_case: "Membuat Text Bertuliskan Hello, World",
        success: true,
      },
      {
        id: 2,
        nama_test_case: "Membuat Text Bertuliskan Hello, World",
        success: true,
      },
      {
        id: 3,
        nama_test_case: "Membuat Text Bertuliskan Hello, World",
        success: true,
      },
      {
        id: 4,
        nama_test_case: "Membuat Text Bertuliskan Hello, World",
        success: true,
      },
    ],
  },
  {
    id: 2,
    nama_praktikum: "Hello Flutter",
    success: true,
    tanggal_mulai: "11 Januari 2021",
    tanggal_selesai: "12 Januari 2021",
    praktikum_id: 1,
    log_test: [
      {
        id: 5,
        nama_test_case: "Membuat Text Bertuliskan Hello, World",
        success: true,
      },
      {
        id: 6,
        nama_test_case: "Membuat Text Bertuliskan Hello, World",
        success: true,
      },
      {
        id: 7,
        nama_test_case: "Membuat Text Bertuliskan Hello, World",
        success: true,
      },
      {
        id: 8,
        nama_test_case: "Membuat Text Bertuliskan Hello, World",
        success: true,
      },
    ],
  },
  {
    id: 3,
    nama_praktikum: "Hello Flutter",
    success: false,
    tanggal_mulai: "11 Januari 2021",
    tanggal_selesai: "12 Januari 2021",
    praktikum_id: 1,
    log_test: [
      {
        id: 9,
        nama_test_case: "Membuat Text Bertuliskan Hello, World",
        success: true,
      },
      {
        id: 10,
        nama_test_case: "Membuat Text Bertuliskan Hello, World",
        success: true,
      },
      {
        id: 11,
        nama_test_case: "Membuat Text Bertuliskan Hello, World",
        success: true,
      },
      {
        id: 12,
        nama_test_case: "Membuat Text Bertuliskan Hello, World",
        success: true,
      },
    ],
  },
];

export default function handler(req, res) {
  res.status(200).json(JSON.stringify(hasilPembelajaran));
}
