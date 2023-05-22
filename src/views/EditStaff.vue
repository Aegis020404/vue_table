

<template>
  <div class="AddStaffView">
    <router-link to="/">Home</router-link> |
    <h1>This is an about page</h1>
    <form @submit.prevent class="form">
      <form-staff
      @setStaff="editStaff"
      :isGetData="true" 
      > 
      <button class="btn">
        Отправить
      </button>
      </form-staff>
      
    </form>
  </div>
</template>
<script lang="ts">
import { StaffI } from "@/models";
import FormStaff from "@/components/FormStaff.vue";
import { defineComponent } from "vue";
import { ComponentPublicInstance } from 'vue';

export default defineComponent({
  components:{
    FormStaff
  },
  data() {
    return {
 
    }
  },
  methods: {
    editStaff(staff:StaffI) {
      console.log(staff)
      this.$store.commit('editStaff', staff);
      this.$router.push('/');
    },
  }
});
</script>

<style>
.form {
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  width: 50%;
  gap:30px;
  margin:0 auto;
}
.AddStaffView {
  opacity: 1;
  width: 82vw;
  height: 90vh;
  /* background-color: rgba(141, 129, 129, 0.333); */
  box-shadow: 0 0.4rem 0.8rem #0005;
  border-radius: 0.8rem;
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
  border-radius: 15px;
  transition: all .3s;
  cursor: pointer;
}
.btn:hover {
  background: white;
  color:black
}
</style>