<template>
	<main class="admin-header">
		<div class="card">
			<div class="card-body pt-2">
					<div class="row mt-1">
						<div class="col-4">
							<div class="input-group mb-3">
								<div class="input-group-prepend">
									<div class="input-group-text">
										<i class="fa fa-search"></i>
									</div>
								</div>
								<input type="text" class="form-control" placeholder="Search">
							</div>
						</div>
					</div>
			</div>
		</div>
	</main>
</template>

<script>
export default {
	name: "admin-header"
}
</script>

<style scoped>
.admin-header .card {
	border-radius: 0px;
	height: 4rem;
	position: fixed;
  width: 100%;
	z-index: 1000;
}

.input-group, .input-group-prepend {
	border: 0px;
}

.admin-header .input-group-text {
	border-top-left-radius: 50px;
	border-bottom-left-radius: 50px;
	background-color: rgba(87, 138, 141, 0.2);
	border: 0px;
	color: rgba(87, 138, 141, 0.8);
	padding-right: 0px;
}

.admin-header .form-control {
	border-top-right-radius: 50px;
	border-bottom-right-radius: 50px;
	background-color: rgba(87, 138, 141, 0.2);
	border: 0px;
	border-left: 1px solid rgba(87, 138, 141, 0);
}

.admin-header .form-control::placeholder {
	color: rgba(87, 138, 141, 0.8);
}
</style>
