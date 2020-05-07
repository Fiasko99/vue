<template>
  <div id="app">
    <!--
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
-->
<!--    <h1>{{ title }}</h1>-->
    <!--    <appPerson v-bind:name="name" v-bind:surname="surname" v-bind:type="type" v-on:lvlUp="type = $event + '+'"></appPerson>-->
    <appBook></appBook>
  </div>
</template>

<script>
  //import HelloWorld from './components/HelloWorld.vue'
  //  import MyPerson from './components/myperson.vue';
  import MyBook from './components/myBook.vue';
  export default {
    name: 'App',
    components: {
      //    HelloWorld,
      //      appPerson: MyPerson,
      appBook: MyBook,
    },
    //    data() {
    //      return {
    //        title: 'Hello Vue',
    //        name: 'Vasya',
    //        surname: 'Ivanov',
    //        type: 'Manager',
    //      };
    //    }
    data() {
      return {

      };
    },
  };

</script>

<style>
  /*
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
*/

</style>
