<template>
  <div class="AddStaffView">
    <router-link to="/">Home</router-link> |
    <h1>This is an about page</h1>
    <form @submit.prevent class="form">
      <form-staff
      @setStaff="addStaff"
      :isGetData="false" 
      > 
      <button class="btn">
        Отправить
      </button>
      </form-staff>
      </form>
  </div>
</template>


<script lang="ts">
import {defineComponent} from 'vue'
import {mapMutations} from 'vuex'
import {StaffI} from '@/models'
import FormStaff from "@/components/FormStaff.vue";
import { ComponentPublicInstance } from 'vue';

export default defineComponent({
  components:{
    FormStaff
  },
    methods:{
      addStaff(staff:StaffI) {
        console.log(staff)
        this.$store.commit('addStaff', staff);
        // this.$router.push('/');

      }
    }
})
</script>

<style scoped>
.AddStaffView {
  width: 82vw;
  height: 90vh;
  background-color: #fff5;
  box-shadow: 0 .4rem .8rem #0005;
  border-radius: .8rem;
  overflow: hidden;
}
.input {
  border: 1px solid black;
  padding: 5px 10px;
  border-radius: 10px;
}
.required {
  color: red;
}
.btn {
  padding: 10px 15px;
  background: wheat;
  border-radius: 15px;
}
</style>