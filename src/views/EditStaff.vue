

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
        Изменить
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

<style>



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

</style>