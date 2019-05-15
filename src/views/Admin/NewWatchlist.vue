<template>
	<main class="py-4" id="new-watchlist">
		<div class="container">
			<div class="card rounded-0">
				<div class="card-header bg-white">
					<h6 class="card-header-title mb-0 text-primary">
						<b>
							<a href="#" @click.prevent="$router.go(-1)">
								<i class="fa fa-chevron-left mr-3"></i>
							</a>
							NEW WATCHLIST
						</b>
					</h6>
				</div>

				<div class="card-body">
					<div class="row justify-content-center py-4">
						<div class="col-md-5">
							<div class="form-group mb-5">
								<b class="text-primary">STRATEGY</b>

								<div class="dropdown mt-2">
									<button class="btn btn-block" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
										<div class="container">
											<span class="float-left">Private Equity</span>

											<span class="float-right">
												<i class="fa fa-plus-circle"></i>
											</span>
										</div>
									</button>

									<div class="dropdown-menu pb-0">
										<a class="dropdown-item bg-white" href="#" id="dropdown-heading">
											<b><i class="fa fa-plus"></i> Create new strategy</b>
										</a>

										<div class="dropdown-divider mb-0"></div>

										<a class="dropdown-item" href="#">
											<div class="row">
												<span class="col">Private Investment</span>

												<span class="col-auto">
													<i class="fa fa-plus-circle"></i>
												</span>
											</div>
										</a>
										<a class="dropdown-item" href="#">
											<div class="row">
												<span class="col">Another Investment</span>

												<span class="col-auto">
													<i class="fa fa-plus-circle"></i>
												</span>
											</div>
										</a>
									</div>
								</div>
							</div>

							<div class="form-group mb-5">
								<b class="text-primary">MANAGER</b>

								<div class="dropdown mt-2">
									<button class="btn btn-block" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
										<div class="container">
											<span class="float-left">Abedeen Fund Manager</span>

											<span class="float-right">
												<i class="fa fa-plus-circle"></i>
											</span>
										</div>
									</button>
									
									<div class="dropdown-menu pb-0">
										<a class="dropdown-item bg-white" href="#" id="dropdown-heading">
											<b><i class="fa fa-plus"></i> Create new manager</b>
										</a>

										<div class="dropdown-divider mb-0"></div>

										<a class="dropdown-item" href="#">
											<div class="row">
												<span class="col">Clive Douglas</span>

												<span class="col-auto">
													<i class="fa fa-plus-circle"></i>
												</span>
											</div>
										</a>
										<a class="dropdown-item" href="#">
											<div class="row">
												<span class="col">Grasham House</span>

												<span class="col-auto">
													<i class="fa fa-plus-circle"></i>
												</span>
											</div>
										</a>
										<a class="dropdown-item" href="#">
											<div class="row">
												<span class="col">Hamilton Lane</span>

												<span class="col-auto">
													<i class="fa fa-plus-circle"></i>
												</span>
											</div>
										</a>
										<a class="dropdown-item" href="#">
											<div class="row">
												<span class="col">Patheon Group</span>

												<span class="col-auto">
													<i class="fa fa-plus-circle"></i>
												</span>
											</div>
										</a>
									</div>
								</div>
							</div>

							<div class="form-group mb-5">
								<b class="text-primary">FUND</b>

								<div class="dropdown mt-2">
									<button class="btn btn-block" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
										<div class="container">
											<span class="float-left">Abedeen Fund II</span>

											<span class="float-right">
												<i class="fa fa-plus-circle"></i>
											</span>
										</div>
									</button>

									<div class="dropdown-menu py-0">
										<a class="dropdown-item" href="#">
											<div class="row">
												<span class="col">Fund One</span>

												<span class="col-auto">
													<i class="fa fa-plus-circle"></i>
												</span>
											</div>
										</a>
										<a class="dropdown-item" href="#">
											<div class="row">
												<span class="col">Fund Two</span>

												<span class="col-auto">
													<i class="fa fa-plus-circle"></i>
												</span>
											</div>
										</a>
									</div>
								</div>
							</div>

							<div class="text-center">
								<button class="btn btn-primary">Save watchlist</button>
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
	name: "new-watchlist"
}
</script>

<style scoped>
#new-watchlist .text-primary {
	color: #578a8d !important;
}

#new-watchlist .card-header-title a {
  color: rgba(87, 138, 141, 0.7) !important;
}

#new-watchlist .card-header-title 
a:hover {
  color: #578a8d !important;
}

#new-watchlist .btn:focus, .btn:active {
	outline: none !important;
	box-shadow: none !important;
	-webkit-box-shadow: none !important;
}

#new-watchlist .btn-primary {
	background-color: #578a8d;
	border-color: #578a8d;
}

#new-watchlist .btn-primary:hover {
	background-color: rgba(87, 138, 141, 0.8);
	border-color: rgba(87, 138, 141, 0.8);
}

#new-watchlist .dropdown-menu {
	width: 100%;
	border: 0px;
	-webkit-box-shadow: 0px 0px 5px 0px rgba(179,177,179,1);
	-moz-box-shadow: 0px 0px 5px 0px rgba(179,177,179,1);
	box-shadow: 0px 0px 5px 0px rgba(179,177,179,1);
}

#new-watchlist #dropdown-heading:hover {
	color: rgba(87, 138, 141, 0.7);
}

#new-watchlist .dropdown-menu a {
	background-color: rgba(87, 138, 141, 0.1);
	color: #578a8d;
	height: 3rem;
	margin-bottom: 3px;
	padding-top: 1rem;
}

#new-watchlist .dropdown-menu a:hover {
	background-color: #578a8d;
	color: #ffffff;
}

#new-watchlist .dropdown .btn {
	background-color: rgba(87, 138, 141, 0.2);
	border: 0px;
	height: 2.8rem;
	color: #578a8d;
}
</style>


