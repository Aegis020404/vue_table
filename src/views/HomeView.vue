<script lang="ts">
import {defineComponent} from 'vue'
import {HomeViewI, StaffI} from '@/models'
import TableRow from '../components/TableRow.vue'

export default defineComponent({
  components:{
    TableRow
  },
  data(): HomeViewI {
    return {

      list: [
        {
          id: 1,
          firstName: "zlex",
          lastName: "Володя",
          middleName: null,
          birthDate: new Date(Date.now()).toISOString(),
          description: "Работяга"
        },
        {
          id: 2,
          firstName: "blex",
          lastName: "Алерго",
          middleName: null,
          birthDate: Date.now() + "",
          description: "НеРаботяга"
        },
        {
          id: 3,
          firstName: "clex",
          lastName: "Лерго",
          middleName: "Лемур",
          birthDate: Date.now() + "",
          description: "разраб"
        },
        {
          id: 4,
          firstName: "dlex",
          lastName: "Сюрелиант",
          middleName: "Авокадо",
          birthDate: Date.now() + "",
          description: "айтишник"
        },
        {
          id: 5,
          firstName: "elex",
          lastName: "Sergio",
          middleName: "Суслик",
          birthDate: Date.now() + "",
          description: "дизайнер"
        },
      ],
      listPattern: [
        ["firstName", "Фамилия", '1'],
        ["lastName", "Имя", '2'],
        ["middleName", "Отчество", '3'],
        ["birthDate", "Дата рождения", '4'],
        ["description", "Описание", '5']
      ]
      ,
      sortedBy: '',
    }
  },
  methods: {
    sortedByList(pattern: string) {
      if (pattern === this.sortedBy) {
        this.list.sort((staff1, staff2): number => {
          const value1 = String(staff1[pattern as keyof StaffI]);
          const value2 = String(staff2[pattern as keyof StaffI]);
          return value2.localeCompare(value1);
        });
        this.sortedBy = pattern.split("").reverse().join("");
      } else {
        this.list.sort((staff1, staff2): number => {
          const value1 = String(staff1[pattern as keyof StaffI]);
          const value2 = String(staff2[pattern as keyof StaffI]);
          return value1.localeCompare(value2);
        });
        this.sortedBy = pattern;
      }
    },
    deleteStaff(id: number) {
      this.list = this.list.filter((staff) => staff.id !== id);
    }
  },
})
</script>


<template>
  <main class="table">
    <section class="table__header">
      <img src="https://static.tildacdn.com/tild3036-6239-4632-a466-363239613163/_.png" alt="">
    </section>
    <section class="table__body">
      <table v-if="list.length">
        <thead>
        <tr>
          <th/>
          <th v-for="pattern of listPattern" :key="pattern.id" @click="sortedByList(pattern[0])" class="thead">
            {{ pattern[1] }}

            <span class="icon-arrow">
                          <img src="@/assets/img/triangle.svg" class="triangle"
                               :class="pattern[0] === sortedBy ? 'triangle__selected' : '' ">
                          <img src="@/assets/img/triangle.svg" class="triangle"
                               :class="pattern[0] === sortedBy.split('').reverse().join('') ? 'triangle__selected' : '' ">
                          </span>
          </th>
          <th/>
          <th/>
        </tr>
        </thead>
        <table-row :list="list" @deleteStaff="deleteStaff"/>
      </table>
      <div v-else>Добавьте данные</div>
    </section>
  </main>
</template>

<style>

.table {
  width: 82vw;
  height: 90vh;
  background-color: #fff5;
  box-shadow: 0 .4rem .8rem #0005;
  border-radius: .8rem;
  overflow: hidden;
}

.table__header {
  width: 100%;
  height: 10%;
  background-color: #fff4;
  padding: .8rem 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
}


.table__body {
  width: 95%;
  max-height: calc(89% - 1.6rem);
  background-color: #fffb;

  margin: .8rem auto;
  border-radius: .6rem;

  overflow: auto;
}

.table__body::-webkit-scrollbar {
  width: 0.5rem;
  height: 0.5rem;
}

.table__body::-webkit-scrollbar-thumb {
  border-radius: .5rem;
  background-color: #0004;
  visibility: hidden;
}

.table__body:hover::-webkit-scrollbar-thumb {
  visibility: visible;
}

table {
  width: 100%;
}


table, th, td {
  border-collapse: collapse;
  padding: 1rem;
  text-align: left;
}

th {
  position: sticky;
  top: 0;
  left: 0;
  background-color: #d5d1defe;
  cursor: pointer;
  text-transform: capitalize;
}

tr:nth-child(even) {
  background-color: #0000000b;
}

tr {
  --delay: .1s;
}

tbody tr.hide td img {
  width: 0;
  height: 0;
  transition: .2s ease-in-out .5s;
}


@media (max-width: 1000px) {
  td:not(:first-of-type) {
    min-width: 12.1rem;
  }
}

th:hover {
  color: #003fff;
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

.list-item {
  display: inline-block;
  display: block;
  width: 30%;
  position: relative;
  overflow: hidden;
  border: 3px solid #BBDEFB;
}

.list-enter-active,
.list-leave-active {
  transition: all 1s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>