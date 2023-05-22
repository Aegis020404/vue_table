<script lang="ts">
import { defineComponent } from "vue";
import { HomeViewI, StaffI } from "@/models";
import TableRow from "../components/TableRow.vue";
import Pagination from "../components/UI/Pagination.vue";
import ModalConfirmDelete from "../components/UI/ModalConfirmDelete.vue";
import { useStore } from "vuex";
import { ComponentPublicInstance } from "vue";

export default defineComponent({
  components: {
    TableRow,
    ModalConfirmDelete,
    Pagination,
  },
  data() {
    return {
      listPattern: [
        ["firstName", "Фамилия", "1"],
        ["lastName", "Имя", "2"],
        ["middleName", "Отчество", "3"],
        ["birthDate", "Дата рождения", "4"],
        ["description", "Описание", "5"],
      ],
      id_deleting: NaN,
      pag: 1,
      search: "",
    };
  },
  methods: {
    turnOnModalDeleting(id: number) {
      this.id_deleting = id;
    },
    hideDialog() {
      this.id_deleting = NaN;
    },
    nextPag() {
      this.pag++;
    },
    prevPag() {
      this.pag--;
    },
  },
  watch: {
    search() {
      this.pag = 1;
    },
    pag() {
      if (this.pag <= 0) {
        this.pag = 1;
      } else if (
        !this.$store.getters.sortAndFilterList(this.pag, this.search).length
      ) {
        this.pag--;
      }
    },
  },
});
</script>


<template>
  <main class="table">
    <modal-confirm-delete
      :show="!isNaN(id_deleting)"
      :id="id_deleting"
      @hideDialog="hideDialog"
    />
    <section class="table__header">
      <a href="https://www.atbgroup.ru/">
        <img
          src="https://static.tildacdn.com/tild3036-6239-4632-a466-363239613163/_.png"
          alt=""
        />
      </a>
      <input
        type="text"
        class="searchInput"
        placeholder="Поиск"
        size="30"
        v-model="search"
        spellcheck
      />
      <router-link to="/add_staff">Добавить пользователя</router-link>
    </section>
    <section class="table__body">
      <table v-if="$store.state.employess.list.length">
        <thead>
          <tr>
            <th />
            <th
              v-for="pattern of listPattern"
              :key="pattern.id"
              @click="$store.commit('sortedByList', pattern[0]);pag=1"
              class="thead"
            >
              {{ pattern[1] }}
              <span class="icon-arrow">
                <img
                  src="@/assets/img/triangle.svg"
                  class="triangle"
                  :class="
                    pattern[0] === $store.state.employess.sortedBy
                      ? 'triangle__selected'
                      : ''
                  "
                />
                <img
                  src="@/assets/img/triangle.svg"
                  class="triangle"
                  :class="
                    pattern[0] ===
                    $store.state.employess.sortedBy.split('').reverse().join('')
                      ? 'triangle__selected'
                      : ''
                  "
                />
              </span>
            </th>
            <th />
            <th />
          </tr>
        </thead>
        <table-row
          @turnOnModalDeleting="turnOnModalDeleting"
          :search="search"
          :pag="pag"
        />
      </table>
      <div v-else>Добавьте данные</div>

  
      <pagination :pag="pag" @nextPag="nextPag" @prevPag="prevPag" :search="search" />
    </section>
  </main>
</template>

<style scoped>
.table {
  width: 82vw;
  height: 90vh;
  box-shadow: 0 0.4rem 0.8rem #0005;
  border-radius: 0.8rem;
  overflow: hidden;
}

.table__header {
  width: 100%;
  height: 10%;
  padding: 0.8rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
th {
  transition: all .4s;
}
th:hover {
  color: #fbf41d;
}
.table__body {
  width: 95%;
  max-height: calc(89% - 1.6rem);

  margin: 0.8rem auto;
  border-radius: 0.6rem;

  overflow: auto;
}
th {
  position: sticky;
  top: 0;
  left: 0;
  cursor: pointer;
  text-transform: capitalize;
}
.table__body::-webkit-scrollbar {
  width: 0.5rem;
  height: 0.5rem;
}

.table__body::-webkit-scrollbar-thumb {
  border-radius: 0.5rem;
  /* background-color: #0004; */
  visibility: hidden;
}

.table__body:hover::-webkit-scrollbar-thumb {
  background: w;
  visibility: visible;
}

table {
  width: 100%;
}

.icon-arrow {
  display: inline-block;
  width: 1.3rem;
  height: 0.9rem;
  position: relative;
}

.triangle {
  position: absolute;
  left: 10px;
}

.triangle:first-child {
  top: 4px;
}

.triangle:last-child {
  transform: rotate(180deg);
  top: 10px;
}

.triangle__selected {
  filter: invert(5) hue-rotate(300deg);
}
.searchInput {
  border: 1px solid rgb(44, 44, 44);
  padding: 15px 25px;
  border-radius: 40px;
}
</style>