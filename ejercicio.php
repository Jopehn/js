<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../src/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="../src/ejercicio.css">
</head>
<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <h1>Ejercicio</h1>
                <div id="contenedor">
                    <div id="pelota"></div>
                </div>
                <div id="botones">
                    <button id="izq" title="Izquierda" class="btn btn-light"><i class="fa-solid fa-arrow-left"></i></button>
                    <button id="der" title="Derecha" class="btn btn-light"><i class="fa-solid fa-arrow-right"></i></button>
                    <button id="arriba" title="Arriba" class="btn btn-light"><i class="fa-solid fa-arrow-up"></i></button>
                    <button id="abajo" title="Abajo" class="btn btn-light"><i class="fa-solid fa-arrow-down"></i></button>
                    <button id="centrar" title="Centrar" class="btn btn-primary">Centrar</button>
                </div>
                <p><a href="javascript:history.back()" title="Volver" class="btn btn-light"><i class="fa-solid fa-circle-left"></i></a></p>
            </div>
        </div>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootbox.js/6.0.0/bootbox.min.js" integrity="sha512-oVbWSv2O4y1UzvExJMHaHcaib4wsBMS5tEP3/YkMP6GmkwRJAa79Jwsv+Y/w7w2Vb/98/Xhvck10LyJweB8Jsw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="../src/ejercicio.js"></script>
</body>
</html>