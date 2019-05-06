<template>
    <main class="left-side">
        <div class="left-top">
            <div class="left-top-text">
                <div class="text-white">ABC Capital LLP</div>
                <label>@John.Smith</label>
            </div>
            <div class="left-top-icon mb-3">
                <i class="far fa-star ml-5"></i>
                <i class="far fa-bell pl-3"></i>
            </div>
        </div>
        <div class="left-body mt-3">
            <p>My coverage</p>
            <ul class="list-unstyled mt-2 list-menu">
                <li>
                    <i class="fas fa-chess-rook text-white"></i>
                    <router-link to="/admin/private-equity" class="pl-2 text-white" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                        Private Equity
                    </router-link>
                    <div class="collapse" id="collapseExample">
                    <div class="toggler pt-1" v-for="i in 5" :key="i">
                            <i class="far fa-user pl-4"></i> <span class="pl-2">Richard Brandon</span>
                    </div>
                    </div>    
                </li>
                <li>
                    <i class="far fa-user"></i> <router-link to="pantheon" class="space" href="">Pantheon</router-link>
                </li>
                <li>
                    <i class="fas fa-suitcase"></i> <a class="space" href="">JPEL Private Equity Limited</a>
                </li>
                <li class="last">
                    <i class="far fa-envelope"></i> <a class="space" href="">Fund Sleeve A</a>
                </li>
            </ul>
        </div>
        <div class="left-bottom mt-5">
            <p>My recent views</p>
            <ul class="list-unstyled mt-2 list-menu">
                <li v-for="i in 6" :key="i">
                    <i class="far fa-file"></i> <a class="space" href="">XYZ Capital LLP Quater....</a>
                </li>
            </ul>
        </div>
    </main>
</template>

<script>
export default {

}
</script>

<style scoped>
a { color: inherit;
text-decoration: none } 
.left-side{
    color:#ABC4C6;
}
.left-top{
    display: flex;
    align-items: center;
    justify-content: space-between
}
.left-top-text{
line-height: 1.3
}
.left-top-text div {
    font-size: 16px;
    font-weight: bold;
  
}
.left-top-text label{
    font-size: 14px;

}
.left-top-icon .far{
    font-size: 20px;
   
}
.left-top-icon .fa-bell{
    top: 5rem;
    right: 1rem;
}

.left-body .fas{
    font-size: 18px
}
.list-menu > li {
    padding-left: 1px;
    padding-bottom: 10px
}
.left-body .far{
    font-size: 20px
}
 .space{
    padding-left: 9px
}
.fa-chess-rook{
    padding-left: 1px
}
.last{
    display: flex;
    align-items: center
}
</style>