<template>
	<main class="py-4" id="new-watchlist">
		<div class="container">
			<div class="card rounded-0">
				<div class="card-header bg-white">
					<h6 class="card-header-title text-center mb-0 text-primary">
						<b>NEW WATCHLIST</b>
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
@import "./NewWatchlist.css";
</style>


