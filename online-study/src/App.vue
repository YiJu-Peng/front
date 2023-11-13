<template>
<div id="app">
    <router-view></router-view> 
  </div>

</template>

<script>

import login from './pages/login/login.vue';
import home from './pages/home/home.vue';
export default{
  
   data(){
      return{

      }
   },
   components:{
       login,home
   }
}



</script>