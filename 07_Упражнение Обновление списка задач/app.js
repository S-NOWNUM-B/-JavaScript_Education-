const tasks = ['Задание 1'];

const addNewTask = (newTask) => tasks.push(newTask);

const deleteTask = (taskIndex) => tasks.splice(taskIndex, 1);

const firstTask = (taskName) => {
  const index = tasks.indexOf(taskName);
  if (index === -1) return;

  const [task] = tasks.splice(index, 1);
  tasks.unshift(task);
};

addNewTask('Задание 2');
addNewTask('Задание 3');
addNewTask('Задание 4');

deleteTask(2);
firstTask('Задание 4');

console.log(tasks);