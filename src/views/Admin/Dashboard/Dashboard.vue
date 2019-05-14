<template>
	<main class="dashboard py-3">
		<div class="container">
			<div class="row mb-3 stat-cards">
				<div class="col">
					<div class="card">
						<div class="card-header text-center pb-1 px-0">
							<p class="card-header-title mb-0">Capital Commited</p>
						</div>
						<div class="card-body text-center pb-1">
							<h3 class="mb-0">
								<b>$2.0BN</b>
							</h3>
							<p>USD</p>
						</div>
					</div>
				</div>

				<div class="col">
					<div class="card">
						<div class="card-header text-center pb-1 px-0">
							<p class="card-header-title mb-0">Residual Value</p>
						</div>
						<div class="card-body text-center pb-1">
							<h3 class="mb-0">
								<b>$113M</b>
							</h3>
							<p>USD</p>
						</div>
					</div>
				</div>

				<div class="col">
					<div class="card">
						<div class="card-header text-center pb-1 px-0">
							<p class="card-header-title mb-0">Capital Called</p>
						</div>
						<div class="card-body text-center pb-1">
							<h3 class="mb-0">
								<b>$1.6BN</b>
							</h3>
							<p>USD</p>
						</div>
					</div>
				</div>

				<div class="col">
					<div class="card">
						<div class="card-header text-center pb-1 px-0">
							<p class="card-header-title mb-0">Capital Distributed</p>
						</div>
						<div class="card-body text-center pb-1">
							<h3 class="mb-0">
								<b>$2.2BN</b>
							</h3>
							<p>USD</p>
						</div>
					</div>
				</div>

				<div class="col">
					<div class="card">
						<div class="card-header text-center pb-1 px-0">
							<p class="card-header-title mb-0">Current IRR</p>
						</div>
						<div class="card-body text-center pb-1">
							<h3 class="mb-0">
								<b>17.2%</b>
							</h3>
							<p>IRR</p>
						</div>
					</div>
				</div>
			</div>

			<div class="row mb-3 stat-cards">
				<div class="col">
					<div class="card">
						<div class="card-header text-center pb-1 px-0">
							<p class="card-header-title mb-0">Net Cash Flow</p>
						</div>
						<div class="card-body text-center pb-1">
							<h3 class="mb-0">
								<b>$628M</b>
							</h3>
							<p>USD</p>
						</div>
					</div>
				</div>

				<div class="col">
					<div class="card">
						<div class="card-header text-center pb-1 px-0">
							<p class="card-header-title mb-0">Distributed to paid-in Capital</p>
						</div>
						<div class="card-body text-center pb-1">
							<h3 class="mb-0">
								<b>$1.4x</b>
							</h3>
							<p>DPI</p>
						</div>
					</div>
				</div>

				<div class="col">
					<div class="card">
						<div class="card-header text-center pb-1 px-0">
							<p class="card-header-title mb-0">Residual value to paid-in Capital</p>
						</div>
						<div class="card-body text-center pb-1">
							<h3 class="mb-0">
								<b>0.1x</b>
							</h3>
							<p>RVPI</p>
						</div>
					</div>
				</div>

				<div class="col">
					<div class="card">
						<div class="card-header text-center pb-1 px-0">
							<p class="card-header-title mb-0">Total value to paid-in Capital</p>
						</div>
						<div class="card-body text-center pb-1">
							<h3 class="mb-0">
								<b>1.5x</b>
							</h3>
							<p>TVPI</p>
						</div>
					</div>
				</div>

				<div class="col">
					<div class="card">
						<div class="card-header text-center pb-1 px-0">
							<p class="card-header-title mb-0">75th - 25th Percentile IRR</p>
						</div>
						<div class="card-body text-center pb-1">
							<h3 class="mb-0">
								<b>12.4%</b>
							</h3>
							<p>SPREAD</p>
						</div>
					</div>
				</div>
			</div>

			<div class="row mb-3">
				<div class="col">
					<div class="card border-0 rounded-0">
						<div class="card-body">
							<div class="container">
								<div class="d-flex">
									<div class="col-2 mx-3">
										<doughnut-chart />
										<p class="text-center mt-3 mb-0">By Geography</p>
									</div>

									<div class="col-2 mx-3">
										<doughnut-chart />
										<p class="text-center mt-3 mb-0">By Strategy</p>
									</div>

									<div class="col-2 mx-3">
										<doughnut-chart />
										<p class="text-center mt-3 mb-0">By Industry</p>
									</div>

									<div class="col-2 mx-3">
										<doughnut-chart />
										<p class="text-center mt-3 mb-0">By Currency</p>
									</div>

									<div class="col-2 mx-3">
										<doughnut-chart />
										<p class="text-center mt-3 mb-0">By Vintage Year</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="row mb-3">
				<div class="col">
					<div class="card border-0 rounded-0">
						<div class="card-body">
							<bar-chart />
						</div>
					</div>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
import DoughnutChart from '@/components/DoughnutChart'
import BarChart from '@/components/BarChart'

export default {
	name: "dashboard",
	components: { 
		DoughnutChart,
		BarChart 
	}
}
</script>

<style scoped>
@import "./Dashboard.css";
</style>

