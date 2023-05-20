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
      <td class="td" @click=" $store.commit('deleteStaff',staff.id)   ">
        <img src="@/assets/img/delete.svg" alt="basket for delete">
      </td>
    </tr>
  </transition-group>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
  props: {
    list: {
      type: Array,
      required: true
    }
  }
})
</script>

<style scoped>
.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}
</style>