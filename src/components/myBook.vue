<template>
  <div>
    <!--
    <p>Имя: {{name}}</p>
    <p>Фамилия: {{surname}}</p>
    <p>Должность: {{type}}</p>
-->
    <!--    <button v-on:click="onLvlUp">Повысить</button>-->
    <input type="text" v-on:input="onGetName" value="Имя">
    <div style="clear: both;"></div>
    <input type="text" v-on:input="onGetSurname" value="Фамилия">
    <div style="clear: both;"></div>
    <input type="number" v-on:input="onGetNumberPhone" value="8">
    <div style="clear: both;"></div>
    <p> Имя: {{name}} <br> Фамилия: {{surname}} <br> Номер телефона: {{numberPhone}}</p>
    <button v-on:click="[onAddContact(), onGetSort()]">Добавить</button>
    <button v-on:click="[onAddSpecialContact(), onGetSort()]">Добавить в избранное</button>
    <div style="clear: both;"></div>
    <label>Нажмите на кнопку для смены: <br> <button v-on:click="onGetSort()">Сортировка по {{flag ? "имени" : "фамилии"}}</button></label>

    <ol id="specialContacts">
      <li v-for="specialContact in specialContacts" v-bind:key="specialContact">{{specialContact}}</li>
    </ol>

    <ol>
      <li v-for="contact in contacts" v-bind:key="contact">{{contact}}</li>
    </ol>
  </div>
</template>


<script>
  export default {
    props: {
      //      name: String,
      //      surname: String,
      //      type: String,
    },
    data() {
      return {
        //         name: 'Vasya',
        //         surname: 'Ivanov',
        //         type: 'Manager',
        name: '',
        surname: '',
        numberPhone: '',
        flag: true,
        contacts: [],
        contactsName: [],
        contactsSurname: [],
        specialContacts: [],
        specialContactsName: [],
        specialContactsSurname: [],
      }
    },
    methods: {
      onGetName: function() {
        this.name = event.target.value;
      },
      onGetSurname: function() {
        this.surname = event.target.value;
      },
      onGetNumberPhone: function() {
        this.numberPhone = event.target.value;
      },
      onAddContact: function() {
        this.contactsName.unshift(this.name + " " +
          this.surname + " " +
          this.numberPhone);
        this.contactsSurname.unshift(this.surname + " " +
          this.name + " " +
          this.numberPhone);
      },
      onAddSpecialContact: function() {
        this.specialContactsName.unshift(this.name + " " +
          this.surname + " " +
          this.numberPhone);
        this.specialContactsSurname.unshift(this.surname + " " +
          this.name + " " +
          this.numberPhone);
      },
      onGetSort: function() {
        this.flag = !this.flag;
        if (this.flag) {
          this.contacts = this.contactsName;
          this.contacts.sort();
          this.specialContacts = this.specialContactsName;
          this.specialContacts.sort();
        } else {
          this.contacts = this.contactsSurname;
          this.contacts.sort();
          this.specialContacts = this.specialContactsSurname;
          this.specialContacts.sort();
        }
      },
    },
  }

</script>
