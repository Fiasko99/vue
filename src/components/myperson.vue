<template>
  <div>
    <p>Имя: {{name}}</p>
    <p>Фамилия: {{surname}}</p>
    <p>Должность: {{type}}</p>
    <button v-on:click="onLvlUp">Повысить</button>
  </div>
</template>


<script>
  export default {
    props: {
      name: String,
      surname: String,
      type: String,
    },
    data() {
      return {
//         name: 'Vasya',
//         surname: 'Ivanov',
//         type: 'Manager',
      }
    },
    methods: {
      onLvlUp() {
        this.$emit('lvlUp', this.type);
      },
    },
  }

</script>
