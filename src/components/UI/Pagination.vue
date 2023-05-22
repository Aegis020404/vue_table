<template>
      <div v-if="$store.state.employess.list.length > 10" class="Pagination">
        <span v-if="pag > 1" class="arrow" @click="$emit('prevPag')">←</span>
        <div v-if="pag > 1 || $store.getters.sortAndFilterList(pag, search).length == 10"  >{{ pag }}</div>
        <div class="" v-else> Не найдены работники</div>
        <span v-if="$store.getters.sortAndFilterList(pag, search).length == 10" class="arrow" @click="$emit('nextPag')">→</span>
      </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    props:{
        pag:{
            type:Number,
        },
        search:{
            type:String,
        }
    }
})
</script>

<style scoped>
.Pagination {
    margin-top: 30px;
    display: flex;
    justify-content: center;
    gap:10px;
}
.arrow {
    cursor: pointer;
    transition: all .3s ;
}
.arrow:hover {
    color: gold;
}
</style>