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
							<div class="btn-group" style="width: 100%;">
								<button type="button" 
												@click.prevent="selectType('manager')"
												:class="{'btn  rounded-0': true, 'btn-primary': type == 'manager', 'btn-white': type != 'manager'}">
									MANAGER
								</button>
								<button type="button" 
												@click.prevent="selectType('fund')"
												:class="{'btn rounded-0': true, 'btn-primary': type == 'fund', 'btn-white': type != 'fund'}">
									FUND
								</button>
							</div>

							<ul class="list-group select-list pt-1 mb-3">
								<li :class="{'list-group-item rounded-0 mb-1': true, 'active': selected.includes(i)}" 
										v-for="(item, i) in 5" :key="i" 
										@click="selectItem(i)">
									<div class="row">
										<div class="col">Cras justo odio</div>

										<div class="col-auto">
											<i class="fa fa-check" v-if="selected.includes(i)"></i>
											<i class="fa fa-plus-circle" v-else></i>
										</div>
									</div>
								</li>
							</ul>

							<div class="text-center">
								<button class="btn btn-primary">
									<b>Save watchlist</b>
								</button>
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
	name: "new-watchlist",
	data() {
		return {
			selected: [],
			type: "manager"
		}
	},
	methods: {
		selectType(type) {
			this.type = type
		},

		selectItem(item) {
      if (this.selected.includes(item)) {
        let index = this.selected.indexOf(item)
        if (index !== -1) {
          this.selected.splice(index, 1)
        }
      } else {
        this.selected.push(item)
      } 
		}
	}
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

#new-watchlist .btn-white {
	border-color: #eeeeee;
	color: #578a8d;
}

#new-watchlist .btn-primary:hover {
	background-color: rgba(87, 138, 141, 0.8);
	border-color: rgba(87, 138, 141, 0.8);
}

#new-watchlist .select-list {
	max-height: 20rem;
	overflow-y: auto;
}

#new-watchlist 
.select-list::-webkit-scrollbar {
  width: 0.4rem;
}
 
#new-watchlist 
.select-list::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
}
 
#new-watchlist 
.select-list::-webkit-scrollbar-thumb {
  background-color: #bbbbbb;
  outline: 1px solid slategrey;
	border-radius: 50px;
}

#new-watchlist .select-list li {
	background-color: rgba(87, 138, 141, 0.1);
	border-color: #eeeeee;
	color: #578a8d;
	cursor: pointer;
}

#new-watchlist .select-list li.active {
	background-color: #578a8d;
	color: #ffffff;
}
</style>


