<?php
// Gunakan path absolut agar tidak pernah salah jalur
$filePath = __DIR__ . '/data/pizza.json';

if (!file_exists($filePath)) {
    die("GAGAL: File JSON tidak ditemukan di " . $filePath);
}

$data = file_get_contents($filePath);
$decoded = json_decode($data, true);

// Pastikan json_decode berhasil menerjemahkan data
if (json_last_error() !== JSON_ERROR_NONE) {
    die("GAGAL: Format JSON rusak - " . json_last_error_msg());
}

// Ambil array di dalam key 'menu'
$menu = $decoded["menu"];

//  Uji cetak nama indeks ke-0
// Seharusnya tercetak: Meat Lover
?>
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

    <title>WPU Hut</title>
  </head>
  <body>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">


      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="img/logo.png" width="120">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span>All Menu</span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-item nav-link active" href="#">All Menu</a>
          </div>
        </div>
      </div>
    </div>
  </nav>

  <div class="container">
    <div class="row mt-3">
      <div class="col">
        <h1>All Menu</h1>
      </div>
    </div>



    <div class="row">
      <?php foreach ($menu as $row) : ?>
        <div class="col-md-4">
          <div class="card mb-3">
            <img src="img/menu/<?= $row["gambar"]; ?>" class="card-img-top">
            <div class="card-body">
              <h5 class="card-title"><?= $row["nama"]; ?></h5>
              <p class="card-text"><?= $row["deskripsi"]; ?></p>
              <h5 class="card-title">Rp. <?= $row["harga"]; ?></h5>
              <a href="#" class="btn btn-primary">Pesan Sekarang</a>
            </div>
          </div>
        </div>
      <?php endforeach; ?>
    </div>
  </div>

    <!-- Optional JavaScript; choose one of the two! -->
    <script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

    <!-- Option 2: Separate Popper and Bootstrap JS -->
    <!--
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
    -->
  </body>
</html>
