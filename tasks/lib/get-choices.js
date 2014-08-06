function addChoice(obj) {
  this.dic[obj.value] = obj;
  this.arr.push(obj);
}

// Gets an object with both an array and a dictionary of choices
module.exports = function getChoices(grunt, tasks, onlyLocalTasks) {

  var arr = [];
  var dic = {};

  for (var key in tasks) {
    if (tasks.hasOwnProperty(key)){

      if (onlyLocalTasks && tasks[key].meta.info !== 'Gruntfile') {
        continue;
      }

      dic[key] = {
        name: tasks[key].name,
        value: key,
        run: grunt.task.run
      };
      arr.push(dic[key]);
    }
  }

  return {
    addChoice: addChoice,
    arr: arr,
    dic: dic
  };
};

