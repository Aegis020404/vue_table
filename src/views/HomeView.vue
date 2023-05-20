<script lang="ts">
  import {defineComponent} from 'vue'
  import {HomeViewI,StaffI} from '@/models'
  export default defineComponent({
    data(): HomeViewI {
      return {
        list: [
          {id:1,firstName:"zlex", lastName:"Володя",middleName:null,birthDate:new Date(Date.now()).toISOString(),description:"Работяга"},
          {id:2,firstName:"blex", lastName:"Алерго",middleName:null,birthDate:Date.now()+"",description:"НеРаботяга"},
          {id:3,firstName:"clex", lastName:"Лерго",middleName:"Лемур",birthDate:Date.now()+"",description:"разраб"},
          {id:4,firstName:"dlex", lastName:"Сюрелиант",middleName:"Авокадо",birthDate:Date.now()+"",description:"айтишник"},
          {id:5,firstName:"elex", lastName:"Sergio",middleName:"Суслик",birthDate:Date.now()+"",description:"дизайнер"},
        ],
        listPattern:[
          ["firstName", "Фамилия",'1'],
          ["lastName", "Имя",'2'],
          ["middleName", "Отчество",'3'],
          ["birthDate", "Дата рождения",'4'],
          ["description", "Описание",'5']
    ]
        ,
        sortedBy: '',
      }
    },
    methods:{
        sortedByList(pattern:string) {
        if(pattern === this.sortedBy) {
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
      deleteStaff(id:number) {
        this.list= this.list.filter((staff) => staff.id !== id);
      }
    },
  })
</script>


<template>
  <main class="table">
        <section class="table__header">
        </section>
        <section class="table__body">
            <table v-if="list.length">
                <thead>
                    <tr>
                        <th/>
                        <th v-for="pattern of listPattern" :key="pattern.id" @click="sortedByList(pattern[0])" class="thead">
                            {{ pattern[1] }}
                          <span class="icon-arrow">
                          <img src="@/assets/triangle.svg" class="triangle"
                               :class="pattern[0] === sortedBy ? 'triangle__selected' : '' ">
                          <img src="@/assets/triangle.svg" class="triangle"
                               :class="pattern[0] === sortedBy.split('').reverse().join('') ? 'triangle__selected' : '' ">
                          </span>
                        </th>
                        <th/>
                        <th/>
                    </tr>
                </thead>
<!--                <tbody>-->
                <transition-group name="list" tag="tbody">
                  <tr v-for="staff of list" :key="staff.id">
                    <td><input type="checkbox"></td>
                    <td>{{staff.firstName}}</td>
                    <td>{{staff.lastName}}</td>
                    <td>{{staff.middleName}}</td>
                    <td>{{staff.birthDate}}</td>
                    <td>{{staff.description}}</td>
                    <td><img src="@/assets/edit.svg" alt="pen for edit"></td>
                    <td  @click="deleteStaff(staff.id)"><img src="@/assets/delete.svg" alt="basket for delete"></td>
                  </tr>
                </transition-group>
<!--                </tbody>-->
            </table>
          <div v-else>Добавьте данные</div>
        </section>
    </main>
</template>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
}

body {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

main.table {
    width: 82vw;
    height: 90vh;
    background-color: #fff5;
    backdrop-filter: blur(7px);
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

.table__header .input-group {
    width: 35%;
    height: 100%;
    background-color: #fff5;
    padding: 0 .8rem;
    border-radius: 2rem;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: .2s;
}


.table__header .input-group img {
    width: 1.2rem;
    height: 1.2rem;
}

.table__header .input-group input {
    width: 100%;
    padding: 0 .5rem 0 .3rem;
    background-color: transparent;
    border: none;
    outline: none;
}

.table__body {
    width: 95%;
    max-height: calc(89% - 1.6rem);
    background-color: #fffb;

    margin: .8rem auto;
    border-radius: .6rem;

    overflow: auto;
    /*overflow: overlay;*/
}

.table__body::-webkit-scrollbar{
    width: 0.5rem;
    height: 0.5rem;
}

.table__body::-webkit-scrollbar-thumb{
    border-radius: .5rem;
    background-color: #0004;
    visibility: hidden;
}

.table__body:hover::-webkit-scrollbar-thumb{
    visibility: visible;
}

table {
    width: 100%;
}

td img {
    width: 36px;
    height: 36px;
    margin-right: .5rem;
    border-radius: 50%;

    vertical-align: middle;
}

table, th, td {
    border-collapse: collapse;
    padding: 1rem;
    text-align: left;
}

thead th {
    position: sticky;
    top: 0;
    left: 0;
    background-color: #d5d1defe;
    cursor: pointer;
    text-transform: capitalize;
}

tbody tr:nth-child(even) {
    background-color: #0000000b;
}

tbody tr {
    --delay: .1s;
    /*transition: .5s ease-in-out var(--delay), background-color 0s;*/
}

tbody tr.hide {
    opacity: 0;
    transform: translateX(100%);
}

tbody tr:hover {
    background-color: #fff6 !important;
}

tbody tr td,
tbody tr td p,
tbody tr td img {
    transition: .2s ease-in-out;
}

tbody tr.hide td,
tbody tr.hide td p {
    padding: 0;
    /*font: 0 / 0 sans-serif;*/
    transition: .2s ease-in-out .5s;
}

tbody tr.hide td img {
    width: 0;
    height: 0;
    transition: .2s ease-in-out .5s;
}

.status {
    padding: .4rem 0;
    border-radius: 2rem;
    text-align: center;
}

.status.delivered {
    background-color: #86e49d;
    color: #006b21;
}

.status.cancelled {
    background-color: #d893a3;
    color: #b30021;
}

.status.pending {
    background-color: #ebc474;
}

.status.shipped {
    background-color: #6fcaea;
}


@media (max-width: 1000px) {
    td:not(:first-of-type) {
        min-width: 12.1rem;
    }
}





thead th:hover {
    color: #2B2F3B;
}






.export__file {
    position: relative;
}

.export__file .export__file-btn {
    display: inline-block;
    width: 2rem;
    height: 2rem;
    /* background: #fff6 url(images/export.png) center / 80% no-repeat; */
    border-radius: 50%;
    transition: .2s ease-in-out;
}

.export__file .export__file-btn:hover {
    background-color: #fff;
    transform: scale(1.15);
    cursor: pointer;
}

.export__file input {
    display: none;
}

.export__file .export__file-options {
    position: absolute;
    right: 0;

    width: 12rem;
    border-radius: .5rem;
    overflow: hidden;
    text-align: center;

    opacity: 0;
    transform: scale(.8);
    transform-origin: top right;

    box-shadow: 0 .2rem .5rem #0004;

    transition: .2s;
}

.export__file input:checked + .export__file-options {
    opacity: 1;
    transform: scale(1);
    z-index: 100;
}

.export__file .export__file-options label{
    width: 100%;
    padding: .6rem 0;
    background-color: #f2f2f2;
    display: flex;
    justify-content: space-around;
    align-items: center;

    transition: .2s ease-in-out;
}

.export__file .export__file-options label:first-of-type{
    padding: 1rem 0;
    background-color: #86e49d !important;
}

.export__file .export__file-options label:hover{
    transform: scale(1.05);
    background-color: #fff;
    cursor: pointer;
}

.export__file .export__file-options img{
    width: 2rem;
    height: auto;
}

.thead {
  /*align-items: center;*/
}
.icon-arrow {
  position: relative;
}
.triangle {
  position: absolute;
  left: 10px;
}
.triangle:first-child {
  top: 4px;

}
.triangle:last-child{
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