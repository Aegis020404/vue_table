<template>
  <div class="AddStaffView">
        <router-link to="/">Home</router-link> |
    <h1>This is an about page</h1>
   <div> Фамилия и имя <span class="required">*</span><input class="input" type="text" name=""  v-model.trim="full_name"></div>
   <div > Отчество  <input class="input" type="text" name=""  v-model.trim="middleName"></div>
   <div> День рожденье  <span class="required">*</span><input type="date" name=""  v-model.trim="birthDate"></div>
   <div> Описание <span class="required">*</span>
    <div>
      <textarea v-model="description" class="input" name="" id="" cols="30" rows="10"></textarea></div>
    </div>
    <button @click="{
      let staff = addStaff();
      $store.commit('addStaff', staff);
      $router.push('/');

      }" class="btn">Отправить</button>
  </div>
</template>


<script lang="ts">
import {defineComponent} from 'vue'
import {mapMutations} from 'vuex'
import {StaffI} from '@/models'

export default defineComponent({
    data() {
      return {
        full_name:"sad dsa",
        middleName: "",
        birthDate: "",
        description: ""
      }
    },
    methods:{
      addStaff() {
        let staff:StaffI = {
          firstName: this.full_name.split(" ")[0],
          lastName: this.full_name.split(" ")[1],
          middleName:this.middleName,
          birthDate:this.birthDate,
          description:this.description,
          id:Date.now(),
        }
        return staff



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