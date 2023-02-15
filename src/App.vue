<template>
  <div>
    <div>
      <input type="text" v-bind:value="name" >
    </div>
    <div>
      <input type="date" :value="birthday">
    </div>
  </div>
</template>


<script>
const options = {
  data:function (){
    return{
      name:'王五',
      birthday:'2005-03-02'
    };
  }
};
export default options;

</script>