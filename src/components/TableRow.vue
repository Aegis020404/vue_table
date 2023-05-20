<template>

  <transition-group name="list" tag="tbody">
    <tr class="tr" v-for="staff of $store.state.employess.list" :key="staff.id">
      <td class="td"><input type="checkbox"></td>
      <td class="td">{{ staff.firstName }}</td>
      <td class="td">{{ staff.lastName }}</td>
      
      <td class="td">{{ staff.middleName }}</td>
      <td class="td">{{ staff.birthDate }}</td>
      <td class="td">{{ staff.description }}</td>
      <td class="td"><img src="@/assets/img/edit.svg" alt="pen for edit"></td>
      <td class="td deleteBtn"  @click="$emit('turnOnModalDeleting',staff.id)">
        <img src="@/assets/img/delete.svg"  alt="basket for delete">
      </td>
    </tr>
  </transition-group>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import { mapMutations } from 'vuex';

export default defineComponent({
  methods: {
  ...mapMutations(['deleteStaff'])
}
})
</script>

<style scoped>
.list-move, 
.list-enter-active,
.list-leave-active {
  transition: all 1s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.list-leave-active {
  position: absolute;
}
.deleteBtn {
  cursor: pointer;
}

tr:nth-child(even) {
  transition: all 1s  ,background .3s ease;
  background: #333742;
}

@media (max-width: 1000px) {
  td:not(:first-of-type) {
    min-width: 12.1rem;
  }
}


</style>