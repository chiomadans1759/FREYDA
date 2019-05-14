<template>
	<main class="py-4" id="new-coverage">
		<div class="container">
			<div class="card rounded-0">
				<div class="card-header bg-white">
					<h6 class="card-header-title text-center mb-0 text-primary">
						<b>NEW COVERAGE</b>
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
@import "./NewCoverage.css";
</style>


