<template>
	<main class="py-4" id="new-coverage">
		<div class="container">
			<div class="card rounded-0">
				<div class="card-header bg-white">
					<h6 class="card-header-title mb-0 text-primary">
						<b>
							<a href="#" @click.prevent="$router.go(-1)">
								<i class="fa fa-chevron-left mr-3"></i>
							</a>
							NEW COVERAGE
						</b>
					</h6>
				</div>

				<div class="card-body">
					<div class="row justify-content-center py-4">
						<div class="col-md-5">
							<div class="form-group mb-5">
								<b class="text-primary">STRATEGY</b>

								<input type="text" class="form-control" placeholder="Enter new strategy">
							</div>

							<div class="form-group mb-5">
								<b class="text-primary">MANAGER</b>

								<input type="text" class="form-control" placeholder="Enter new manager">
							</div>

							<div class="form-group mb-5">
								<b class="text-primary">FUND</b>

								<input type="text" class="form-control" placeholder="Enter new fund">
							</div>

							<div class="text-center">
								<button class="btn btn-primary">Save Coverage</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
export default {
	name: "new-coverage"
}
</script>

<style scoped>
#new-coverage .text-primary {
  color: #578a8d !important;
}

#new-coverage .card-header-title a {
  color: rgba(87, 138, 141, 0.7) !important;
}

#new-coverage .card-header-title 
a:hover {
  color: #578a8d !important;
}

#new-coverage .btn:focus, .btn:active {
	outline: none !important;
	box-shadow: none !important;
	-webkit-box-shadow: none !important;
}

#new-coverage .btn-primary {
	background-color: #578a8d;
	border-color: #578a8d;
}

#new-coverage .btn-primary:hover {
	background-color: rgba(87, 138, 141, 0.8);
	border-color: rgba(87, 138, 141, 0.8);
}

#new-coverage .form-control {
	background-color: rgba(87, 138, 141, 0.1);
	border: 0px;
	color: #578a8d;
	height: 2.7rem;
}

#new-coverage .form-control::placeholder {
	font-style: italic;
	padding-left: 2rem;
	color: rgba(87, 138, 141, 0.5);
}
</style>


