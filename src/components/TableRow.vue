<template>
  <transition-group name="list" tag="tbody">
    <tr class="tr" v-for="staff of $store.getters.sortAndFilterList(pag,search)" :key="staff.id">
    <!-- <tr class="tr" v-for="staff of $store.state.employess.list" :key="staff.id"> -->
      <td class="td"><input type="checkbox" /></td>
      <td class="td">{{ staff.firstName }}</td>
      <td class="td">{{ staff.lastName }}</td>
      <td class="td">{{ staff.middleName }}</td>
      <td class="td">{{ staff.birthDate }}</td>
      <td class="td">{{ staff.description.split("").length > 20 ? 
      staff.description.split("").slice(0,20).join("")+"..." : 
      staff.description
    }}</td>
      <td class="td">
        <img
          @click="$router.push('/edit_staff/' + staff.id)" class="edit"
          src="@/assets/img/edit.svg"
          alt="pen for edit" 
        />
      </td>
      <!-- <td class="td deleteBtn" @click=""> -->
      <td class="td deleteBtn" @click="$emit('turnOnModalDeleting', staff.id)">
        <img src="@/assets/img/delete.svg" alt="basket for delete" class="edit" />
      </td>
    </tr>
  </transition-group>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapMutations } from "vuex";

export default defineComponent({
  props:{
    pag:{
      type:Number,
    },
    search: {
      type:String,
      required:true
    }
  },
  methods: {
    ...mapMutations(["deleteStaff"]),

  },
});
</script>

<style scoped>
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all .5s ease;
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
  transition: all .5s, background 0.3s ease;
  background: #353535;
}

tr:nth-child(odd) {
  transition: all .5s, background 0.3s ease;
  background: #222222;
}

@media (max-width: 1100px) {
  td:not(:first-of-type) {
    min-width: 12.1rem;
  }
}
.edit {
cursor: pointer;
}
.edit:hover {
  filter: invert(5) hue-rotate(300deg);

}
</style>