function createDaysOfTheWeek() {
  const weekDays = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
  ];
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

const dezDaysList = [
  29,
  30,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31,
];

const createDaysOfTheMonth = () => {
  const days = document.querySelector('#days');
  dezDaysList.forEach((day) => {
    const createDay = document.createElement('li');
    createDay.className = 'days';
    if (day === 24 || day === 25 || day === 31) {
      createDay.classList.add('holiday');
    }
    if (day === 4 || day === 11 || day === 18 || day === 25) {
      createDay.classList.add('friday');
    }
    createDay.innerHTML = day;
    createDay.addEventListener('mouseover', mouseOver);
    createDay.addEventListener('mouseout', mouseOut);
    createDay.addEventListener('click', markTask);
    days.appendChild(createDay);
  });
};

const btnHolidays = (str) => {
  const btnContainer = document.querySelector('.buttons-container');
  const holidayBtn = document.createElement('button');
  holidayBtn.id = 'btn-holiday';
  holidayBtn.innerText = str;
  holidayBtn.addEventListener('click', btnHolidaysClick);
  btnContainer.appendChild(holidayBtn);
};

const btnHolidaysClick = () => {
  const holidays = document.querySelectorAll('.holiday');

  holidays.forEach((day) => {
    day.classList.toggle('holidayColor');
  });
};

const btnFriday = (str) => {
  const btnContainer = document.querySelector('.buttons-container');
  const fridayBtn = document.createElement('button');
  fridayBtn.id = 'btn-friday';
  fridayBtn.innerText = str;
  fridayBtn.addEventListener('click', changeTextFriday);
  btnContainer.appendChild(fridayBtn);
};

const changeTextFriday = () => {
  const fridays = document.querySelectorAll('.friday');

  fridays.forEach((day, index) => {
    if (day.innerHTML !== 'SEXTOU!') {
      day.innerHTML = 'SEXTOU!';
    } else {
      day.innerHTML = index + 4 + 6 * index;
    }
  });
};

const mouseOver = (event) => {
  event.target.style.fontSize = '25px';
};
const mouseOut = (event) => {
  event.target.style.fontSize = '20px';
};

const createTask = (task) => {
  const myTasks = document.querySelector('.my-tasks');
  const newTask = document.createElement('span');
  newTask.innerHTML = task;
  myTasks.appendChild(newTask);
};

const subForTask = (...color) => {
  const subtDiv = document.createElement('div');
  const myTasks = document.querySelector('.my-tasks');
  const brLine = document.createElement('br');
  subtDiv.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
  subtDiv.className = 'task';
  subtDiv.addEventListener('click', selectTask);
  myTasks.appendChild(subtDiv);
  myTasks.appendChild(brLine);
};

const selectTask = (event) => {
  const selectedTask = document.querySelector('.selected');
  if (selectedTask !== null) {
    selectedTask.classList.remove('selected');
    event.target.classList.add('selected');
  } else {
    event.target.classList.add('selected');
  }
};

const markTask = (event) => {
  const selectedTask = document.querySelector('.selected');
  if (selectedTask !== null) {
    if (event.target.style.color !== selectedTask.style.backgroundColor) {
      event.target.style.color = selectedTask.style.backgroundColor;
    } else {
      event.target.style.color = 'rgb(119,119,119)';
    }
  }
};

const addNewTaskBtn = document.querySelector('#btn-add');
const taskInput = document.querySelector('#task-input');

const addNewTasks = () => {
  let taskValue = document.querySelector('#task-input');
  if (taskValue.value.length !== 0) {
    const redColor = Math.random() * 255;
    const greenColor = Math.random() * 255;
    const blueColor = Math.random() * 255;

    createTask(taskValue.value);
    subForTask(redColor, greenColor, blueColor);
    taskValue.value = '';
  } else {
    alert('campo vazio');
  }
};

taskInput.addEventListener('keydown', (event) => {
  if (event.keyCode === 13) {
    addNewTasks();
  }
});
addNewTaskBtn.addEventListener('click', addNewTasks);

createDaysOfTheWeek();
createDaysOfTheMonth();
btnHolidays('Feriados');
btnFriday('Sexta-feira');
createTask('Cozinhar');
subForTask(145, 254, 95);
