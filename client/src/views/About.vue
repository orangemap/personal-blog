<template>
  <div class="about">
      <button @click="handleClick">这是一个按钮</button>
  </div>
</template>

<script>
// @ is an alias to /src
import heleper from "../api/helper"
export default {
  name: 'Home',
  components: {
  },
  methods:{
     handleClick(){
       let params = {pageNumber: 1,pageSize: 20}
        heleper.getUser(params,{}).then((res)=>{
            console.log(res)
        })
     }
  }
}
</script>

