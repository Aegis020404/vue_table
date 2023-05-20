<template>
  <transition-group name="list" tag="tbody">
    <tr class="tr" v-for="staff of list" :key="staff.id">
      <td class="td"><input type="checkbox"></td>
      <td class="td">{{ staff.firstName }}</td>
      <td class="td">{{ staff.lastName }}</td>
      <td class="td">{{ staff.middleName }}</td>
      <td class="td">{{ staff.birthDate }}</td>
      <td class="td">{{ staff.description }}</td>
      <td class="td"><img src="@/assets/img/edit.svg" alt="pen for edit"></td>
      <td class="td" @click="$emit('deleteStaff',staff.id)">
        <img src="@/assets/img/delete.svg" alt="basket for delete">
      </td>
    </tr>
  </transition-group>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {StaffI} from '@/models'
// deleteStaff(staff.id)
export default defineComponent({
  props: {
    list: {
      type: StaffI,
      required: true
    }
  }
})
</script>

<style scoped>

</style>