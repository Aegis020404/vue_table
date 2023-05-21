<template>
  <div class="AddStaffView">
    <router-link to="/">Home</router-link> |
    <h1>This is an about page</h1>
    <form @submit.prevent>
      <div>
        Фамилия и имя <span class="required">*</span
        ><input class="input" type="text" name="" v-model.trim="full_name" />
      </div>
      <div>
        Отчество
        <input class="input" type="text" name="" v-model.trim="middleName" />
      </div>
      <div>
        День рожденье <span class="required">*</span
        ><input type="date" name="" v-model.trim="birthDate" />
      </div>
      <div>
        Описание <span class="required">*</span>
        <div>
          <textarea
            v-model="description"
            class="input"
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
        </div>
      </div>
      <button
        @click="
          {
            let staff = addStaff();
            $store.commit('editStaff', staff);
            $router.push('/');

          }
        "
        class="btn"
      >
        Отправить
      </button>
    </form>
  </div>
</template>
<script lang="ts">
import { StaffI } from "@/models";
import { defineComponent } from "vue";
import { ComponentPublicInstance } from 'vue';

export default defineComponent({
  data() {
    return {
      full_name: "",
      middleName: "",
      birthDate: "",
      description: "",
      id: NaN,
    };
  },
  methods: {
    addStaff() {
      let staff: StaffI = {
        firstName: this.full_name.split(" ")[0],
        lastName: this.full_name.split(" ")[1],
        middleName: this.middleName,
        birthDate: this.birthDate,
        description: this.description,
        id: this.id,
      };
      return staff;
    },
  },
  mounted() {
    const staff: StaffI | null = this.$store.state.employess.list.find(
        (staff: StaffI) => staff.id === +this.$route.params.id
      ) || null;
    if (!staff) {
      console.log("Bl");
      this.$router.push("/");
    } else {
      this.full_name = staff.firstName + " " + staff.lastName;
      this.middleName = staff.middleName;
      this.birthDate = staff.birthDate;
      this.description = staff.description;
      this.id = staff.id;
    }
  },
});
</script>

<style>
.AddStaffView {
  width: 82vw;
  height: 90vh;
  background-color: #fff5;
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
  background: wheat;
  border-radius: 15px;
}
</style>