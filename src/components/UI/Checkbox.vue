<template>
  <div>
    <input type="checkbox" :checked="value ? true : false"  @change="$emit('setValue',$event.target.checked)" class="checker" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props:{
    value:{
      type:Number || null,
    },
    
  },
});
</script>

<style>
.checker {

  position: relative;
  min-width: 30px;
  min-height: 30px;
  outline: none;
  background: #3b3b3b;
  border-radius: 10px;
  transition: 0.5s;
}
.checker:checked:before {
  background: #ffffff;
}
.checker:before {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  content: "";
  border-radius: 5px;
  position: absolute;
  width: 15px;
  height: 15px;
}


</style>