// Gets an object with both an array and a dictionary of choices
module.exports = function getChoices(grunt, tasks) {

  var arr = [];
  var dic = {};

  for (var key in tasks) {
    if (tasks.hasOwnProperty(key)){
      dic[key] = {
        name: tasks[key].name,
        value: key,
        run: grunt.task.run
      };
      arr.push(dic[key]);
    }
  }

  return {
    arr: arr,
    dic: dic
  };
};

