import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      items: [{name: "Buy Shopping", priority: "low", status: false},
      {name: "Clean Bathroom", priority: "high", status: false},
      {name: "Car\'s MOT", priority: "high", status: false}],
      newToDo: "",
      newPriority: ""
    },
    methods: {
      saveNewItem: function() {
        if (this.newToDo !== "") {
          const itemToAdd = {name: this.newToDo, priority: this.newPriority, status: false};
          this.items.push(itemToAdd);
          this.newToDo = "";
          this.newPriority = "";
        };
      },

      taskCompleted: function(index) {
        this.items[index].status = true;
        this.items[index].name = `${this.items[index].name}:Done`
      },

    }

  });
});
