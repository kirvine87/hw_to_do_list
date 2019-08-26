import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      items: [{name: "Buy Shopping", priority: false},
      {name: "Clean Bathroom", priority: true},
      {name: "Car\'s MOT", priority: false}],
      newToDo: ""
    },
    methods: {
      saveNewItem: function() {
        if (this.newToDo !== "") {
          const itemToAdd = {name: this.newToDo, priority: false};
          this.items.push(itemToAdd);
          this.newToDo = "";
        };
      }
    }

  });
});
