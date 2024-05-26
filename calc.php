<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Calculator</title>
	<link rel="stylesheet" type="text/css" href="../src/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="../src/calc.css3">
</head>
<body>
	<div class="container-fluid">
		<h1>Calculator</h1>
		<div class="row">
			<div class="col-md-4">
				<form method="post">
					<div class="mb-3">
						<label for="num1" class="form-label">Número 1</label>
						<input type="text" id="num1" name="" value="0" class="form-control input">
					</div>
					<div class="mb-3">
						<label for="num2" class="form-label">Número 2</label>
						<input type="text" id="num2" name="" value="0" class="form-control input">
					</div>
					<div id="btn_sumar" title="Sumar" class="btn btn-primary btnx" data-value="+"><i class="fa-solid fa-plus"></i></div>
					<div id="btn_restar" title="Restar" class="btn btn-primary btnx" data-value="-"><i class="fa-solid fa-minus"></i></div>
					<div id="btn_multiplicar" title="Multiplicar" class="btn btn-primary btnx" data-value="*"><i class="fa-solid fa-xmark"></i></div>
					<div id="btn_dividir" title="Dividir" class="btn btn-primary btnx" data-value="/"><i class="fa-solid fa-divide"></i></div>
					<div id="btn_potencia" title="Potencia" class="btn btn-primary btnx" data-value="^"><i class="fa-solid fa-chevron-up"></i></div>
					<div id="btn_borrar" title="Borrar" class="btn btn-danger"><i class="fa-solid fa-eraser"></i></div>
				</form>
			</div>
			<div class="col-md-8">
				<div id="caja_resultado">
					<h1>Resultado</h1>
					<div id="resultado">0</div>
				</div>
			</div>
		</div>
	</div>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
	<script src="https://kit.fontawesome.com/3ae0bec51a.js" crossorigin="anonymous"></script>
	<script type="text/javascript" src="../src/calculadora.js"></script>
</body>
</html>