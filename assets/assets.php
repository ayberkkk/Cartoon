<!-- Style & Scripts -->
<!-- Favicon -->
<link rel="apple-touch-icon" sizes="180x180" href="assets/img/manset/banner.png">
<link rel="icon" type="image/png" sizes="32x32" href="assets/img/manset/banner.png">
<link rel="icon" type="image/png" sizes="16x16" href="assets/img/manset/banner.png">
<link rel="manifest" href="./assets/img/favicon/site.webmanifest">
<link rel="mask-icon" href="./assets/img/favicon/safari-pinned-tab.svg" color="#5bbad5">
<meta name="msapplication-TileColor" content="#d86910">
<meta name="theme-color" content="#ffffff">
<!-- Favicon End -->
<!-- Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;700&display=swap" rel="stylesheet">
<!-- Fonts End -->
<!-- Css -->
<link rel="stylesheet" type="text/css" href="assets/css/default-bootstrap.min.css">
<link rel="stylesheet" type="text/css" href="assets/css/bootstrap.min.css">
<link rel="stylesheet" type="text/css" href="assets/css/font.css">
<link rel="stylesheet" type="text/css" href="assets/css/owl.carousel.min.css">
<link rel="stylesheet" type="text/css" href="assets/css/simple-lightbox.css">
<link rel="stylesheet" type="text/css" href="assets/css/owl.theme.default.min.css">
<link rel="stylesheet" type="text/css" href="assets/css/main.css">
<!-- Css End -->
<!-- Js -->
<script src="assets/js/jquery.min.js"></script>
<script src="assets/js/bootstrap.min.js"></script>
<script src="assets/js/owl.carousel.min.js"></script>
<script src="assets/js/lazysizes.min.js"></script>
<script src="assets/js/simple-lightbox.js"></script>
<script src="assets/js/main.js"></script>
<!-- Js End -->

<!-- Style & Scripts End -->


<!-- Config -->
<style>
	:root {
		--primaryColor: <? echo primaryColor ?>;
		--primaryColorHover: <? echo primaryColorHover ?>;
		--secondaryColor: <? echo secondaryColor ?>;
		--textColor: <? echo textColor ?>;
		--radius: <? echo radius ?>;
		--darkModePrimaryColor: <? echo darkModePrimaryColor ?>;
		--success: <? echo success ?>;
		--successHover: <? echo successHover ?>;
		--gradientColor1: <? echo gradientColor1 ?>;
		--gradientColor2: <? echo gradientColor2 ?>;
		--gradientColor3: <? echo gradientColor3 ?>;
		--gradientColor4: <? echo gradientColor4 ?>;
		--nipperlandColor: <? echo nipperlandColor ?>;
		--nipperlandColorHover: <? echo nipperlandColorHover ?>;
		--nipperlandColorHover: <? echo nipperlandColorHover ?>;
		--darkModeTextInput: <? echo darkModeTextInput ?>;
	}

	.colored-bg {
		background-color: <? echo $primaryColor ?>;
	}

	.colored-hover:hover {
		background-color: <? echo $primaryColorHover ?>;
	}

	.colored {
		color: <? echo $primaryColor ?>;
	}

	.colored-hover-text:hover {
		color: <? echo $primaryColor ?> !important;
	}

	.colored-hover-text2:hover {
		color: <? echo $secondaryColor ?> !important;
	}

	.colored2-bg {
		background-color: <? echo $secondaryColor ?>;
	}

	.colored2-hover:hover {
		background-color: <? echo $secondaryColor ?>;
	}

	.colored2 {
		color: <? echo $secondaryColor ?>;
	}

	.title {
		color: <? echo $titleColor ?>;
	}

	.text {
		color: <? echo $textColor ?>;
	}

	.radius {
		border-radius: <? echo $radius ?>;
	}

	.drop .toggle {
		border-color: transparent !important;
	}

	.drop:hover .toggle {
		border-color: <? echo $primaryColorHover ?> !important;
	}

	@media screen and (max-width: 992px) {
		.col-sm-colored-bg {
			background-color: <? echo $primaryColor ?>;
		}

		.col-sm-colored-hover:hover {
			background-color: <? echo $primaryColor ?>;
		}

		.col-sm-colored {
			color: <? echo $primaryColor ?>;
		}

		.col-sm-colored2-bg {
			background-color: <? echo $secondaryColor ?>;
		}

		.col-sm-colored2-hover:hover {
			background-color: <? echo $secondaryColor ?>;
		}

		.col-sm-colored2 {
			color: <? echo $secondaryColor ?>;
		}

		.col-sm-text {
			color: <? echo $textColor ?> !important;
		}
	}
</style>
<!-- Config -->