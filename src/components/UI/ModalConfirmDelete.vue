<template>
    <div class="dialog" v-if="show" @click="hideDialog">
      <div class="dialog__content" @click.stop>
        <div class="title">Запись будет удалена. Уверены?</div>
        <div class="btns">
          <button class="btn delete"
           @keydown.enter="{deleteStaff(id);hideDialog();}"
           @click="{$store.commit('deleteBuffer');deleteStaff(id);hideDialog();}"
           >Ок</button>
          <button class="btn cancel" @click="hideDialog">Отмена</button>
        </div>
      </div>
    </div>
  </template>
  
  
  <script lang="ts">
  import {defineComponent} from 'vue'
  import {mapMutations} from 'vuex'

export default defineComponent({
    name: "my-dialog",
    props: {
      show: {
          type: Boolean,
          default: false,   
      },
      id: {
        type:Number,
        default:0,
      },
      
    },
    methods:{
  ...mapMutations(['deleteStaff']) ,
      hideDialog() {
        this.$emit("hideDialog",false)
      },

    }
  })
  </script>
  
  <style scoped>
  .dialog {
    z-index: 3;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0,0,0,0.5);
    position: fixed;
    display: flex;
  }
  .dialog__content {
    border-radius: 1rem ;
    width: 42vw;
    padding: 20px;
    margin: auto;
    background: rgb(27, 28, 30);
    border-radius: 12px;
    min-height: 50px;
    min-width: 300px;
  }
  .title {
    font-size: 30px;
    text-align: center;
    margin-top: 40px;
  }
  .btns {
    font-size: 20pxs;
    margin-top: 40px;
    display: flex;
    justify-content: center;
    gap: 40px;
    align-items: center;
  }
  .btn {
    border:1px solid rgb(158, 158, 158);
    padding: 10px 15px;
    border-radius: 0.7em;
    cursor: pointer;
    transition: all .3s;
  }
  .btn:hover {
    border:1px dotted rgb(158, 158, 158);
  }
  .delete:hover {
    border:1px dotted rgba(158, 158, 158, 0);
    background: red;
  }
  </style>
  