function addChoice(obj) {
  this.dic[obj.value] = obj;
  this.arr.push(obj);
}

function getTaskLabel(grunt, options, tasks, key) {
  return grunt.option('info') || options.info ?
    tasks[key].name + ' - ' + tasks[key].info :
    tasks[key].name;
}

// Gets an object with both an array and a dictionary of choices
module.exports = function getChoices(grunt, options, tasks, onlyLocalTasks) {

  var arr = [];
  var dic = {};

  for (var key in tasks) {
    if (tasks.hasOwnProperty(key)){

      if (onlyLocalTasks && tasks[key].meta.info !== 'Gruntfile') {
        continue;
      }

      dic[key] = {
        name: getTaskLabel(grunt, options, tasks, key),
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

