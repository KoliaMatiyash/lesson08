// На 8 балів:
// Підготувати властивість PI:3.14 у своєму власному об'єкті таким чином,
// щоб її не можна було змінити або видалити.
// const math = {
//   Pi: 3.14,
// };
// Object.defineProperty(math, "Pi", {
//   writable: false,
//   configurable: false,
// });
// math.Pi = 3.16;
// delete math.Pi;
// console.log(math);
// На 12 балів:
// Попередні задання+
// Створити інтерактивний список справ (To-Do List), де користувач може додавати нові справи та
// відзначати виконані. Використовувати this для позначення конкретного елемента, який взаємодіє
// з користувачем, а також document для роботи з елементами сторінки.
const add = document.getElementById("Add");
const inpBusines = document.getElementById("businesses");
const list = document.getElementById("toDoList");
function addBusines() {
  const businesText = inpBusines.value;
  const newBusines = document.createElement("li");
  newBusines.textContent = businesText;
  newBusines.addEventListener("click", function () {
    this.classList.toggle("addStyle");
  });
  list.appendChild(newBusines);
  inpBusines.value = "";
}
add.onclick = addBusines;
