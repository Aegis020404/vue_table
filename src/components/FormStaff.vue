<template >
  <div class="FormStaff">
    <div class="label">
      <div class="title">Фамилия и Имя <span class="required">*</span></div>
      <div class="inputValid">
        <input class="input" type="text" name="" v-model.trim="full_name" />
        <div
          class="err"
          v-if="err && !(full_name.split(' ')[0] && full_name.split(' ')[1])"
        >
          Обязательно для заполнения
        </div>
      </div>
    </div>
    <div class="label">
      <div class="title">Отчество</div>
      <div>
        <input class="input" type="text" name="" v-model.trim="middleName" />
      </div>
    </div>
    <div class="label">
      <div class="title">Дата рождения <span class="required">*</span></div>
      <div>
        <input class="input" type="date" name="" v-model.trim="birthDate" />
        <div
          class="err"
          v-if="err && !birthDate"
        >
          Обязательно для заполнения
        </div>
      </div>
    </div>
    <div class="label">
      <div class="title title_textarea">
        Описание <span class="required">*</span>
      </div>
      <div>
        <textarea
          v-model="description"
          class="input"
          cols="10"
          rows="7"
          size="30"
          maxlength="100"
        ></textarea>
      </div>
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
      err: false,
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
      if (
        staff.firstName &&
        staff.lastName &&
        staff.middleName &&
        staff.birthDate
      ) {
        if (!this.isGetData) staff.id = Date.now();
        this.$emit("setStaff", staff);
      } else {
        this.err = true;
        console.error("ERROR")
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
    }
  },
});
</script>

<style scoped>
.FormStaff {
  font-size: 20px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 40px;
}
.label {
  gap: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.title {
}
.input {
  border: 1px solid black;
  padding: 5px 10px;
  border-radius: 10px;
  margin-top: 5px;
  width: 250px;
  overflow: hidden;
  overflow-wrap: break-word;
  word-wrap: break-word;
}
.required {
  color: red;
}
.title_textarea {
  align-self: flex-start;
}
.err {
  font-size: 12px;
  color: red;
}
@media (max-width: 450px) {
  .FormStaff {
    font-size: 12px;
  }
}
</style>