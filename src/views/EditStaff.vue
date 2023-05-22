

<template>
  <div class="AddStaffView">
    <div class="back">
      <router-link to="/">Перейти на главную</router-link>
    </div>
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

export default defineComponent({
  components:{
    FormStaff
  },
  methods: {
    editStaff(staff:StaffI) {
      this.$store.commit('editStaff', staff);
      this.$router.push('/');
    },
  }
});
</script>

<style scoped>

.AddStaffView {
  opacity: 1;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  background-color: rgb(25, 25, 25);
  border-radius: 0.8rem;
  overflow: hidden;
}

.btn {
  text-align: center;
  width: 100%;
  padding: 10px 15px;
  border-radius: 15px;
  transition: all .3s;
  cursor: pointer;
  color:rgb(221, 255, 0);
}
.btn:hover {
  background: rgb(221, 255, 0);
  color:black
}
.form {
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  gap:30px;
  margin:0 auto;
}
.back {
  margin-top: 20px;
  margin-left: 20px;
  transition: all .4s;
}
.back:hover {
  color:aquamarine
}
</style>