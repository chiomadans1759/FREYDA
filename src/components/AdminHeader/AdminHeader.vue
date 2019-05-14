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
@import "./AdminHeader.css";
</style>
