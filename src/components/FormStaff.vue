<template>
  <div>
    Фамилия и имя <span class="required">*</span
    ><input class="input" type="text" :required="true" name="" v-model.trim="full_name" />
    <div>Обязательно для заполнения</div>
  </div>
  <div>
    Отчество
    <input class="input" type="text" name="" v-model.trim="middleName" />
  </div>
  <div>
    Дата рождения <span class="required">*</span
    ><input type="date" name="" :required="true" v-model.trim="birthDate" />
  </div>
  <div>
    Описание  <span class="required">*</span>
    <div>
      <textarea
      :required="true"
        v-model="description"
        class="input"
        name=""
        id=""
        cols="30"
        rows="10"
      ></textarea>
    </div>
    <div @click="setStaff">
        <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { StaffI } from "@/models";
import InitialState from "@/InitialState";
export default defineComponent({
    emits: ["setStaff"],
  props: {
    isGetData: {
      type: Boolean,
    },
  },
  data() {
    return {
      full_name: "",
      middleName: "",
      birthDate: "",
      description: "",
      id: NaN,
      flag:15,
    };
  },
  methods: {
    setStaff() {
      let staff: StaffI = {
        firstName: this.full_name.split(" ")[0],
        lastName: this.full_name.split(" ")[1],
        middleName: this.middleName,
        birthDate: this.birthDate,
        description: this.description,
        id: this.id,
      };
      this.flag = 0;
      if(staff.firstName) this.flag |= 1
      if(staff.lastName) this.flag |= 2
      if(staff.birthDate) this.flag |= 4
      if(staff.description) this.flag |= 8

    //   console.log((flag & 1) + "____________" + (flag & 2)  + "____________" + (flag & 4)    + "____________" + (flag & 8)              )



      if (this.flag === 15) {
        this.$emit("setStaff", staff);
        console.log(this.flag)
      } else {
        console.log(this.flag)
      }
    },
  },
  mounted() {
    if (this.isGetData) {
      const staff: StaffI | null =
        this.$store.state.employess.list.find(
          (staff: StaffI) => staff.id === +this.$route.params.id
        ) || null;
      if (!staff) {
        this.$router.push("/");
      } else {
        this.full_name = staff.firstName + " " + staff.lastName;
        this.middleName = staff.middleName;
        this.birthDate = staff.birthDate;
        this.description = staff.description;
        this.id = staff.id;
      } 
    } else {
        this.id = Date.now();
    }
  },
});
</script>

<style>
.input:invalid {
    border:1px solide red;

}
.input::before {
    background: red;
    display: block;
    width: 1000px;
    height: 1000px;
    content: "HUI";
}
.input::before:invalid {

    color:red;
}
</style>