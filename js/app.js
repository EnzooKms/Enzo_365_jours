/**
 * @type {HTMLElement}
 */
const section = document.getElementById("injection");

/**
 * @typedef {Object} data
 * @property {string} title_day the day
 * @property {string} title_date the data
 * @property {string} icon the icon name
 * @property {string} temp_max the max température
 * @property {string} temp_min the min température
 */

/**
 * @type {data[]}
 */
const data = [
  {
    title_day: "lun",
    title_date: "20",
    icon: "chance-storm.png",
    temp_max: "14",
    temp_min: "6",
  },
  {
    title_day: "mar",
    title_date: "21",
    icon: "smoke.png",
    temp_max: "8",
    temp_min: "1",
  },
  {
    title_day: "mer",
    title_date: "22",
    icon: "sleet.png",
    temp_max: "6",
    temp_min: "-6",
  },
  {
    title_day: "jeu",
    title_date: "23",
    icon: "snow.png",
    temp_max: "4",
    temp_min: "-2",
  },
  {
    title_day: "ven",
    title_date: "24",
    icon: "sunny.png",
    temp_max: "14",
    temp_min: "10",
  },
  {
    title_day: "sam",
    title_date: "25",
    icon: "thunder-storm.png",
    temp_max: "16",
    temp_min: "12",
  },
  {
    title_day: "dim",
    title_date: "26",
    icon: "fog.png",
    temp_max: "8",
    temp_min: "5",
  },
  {
    title_day: "lun",
    title_date: "27",
    icon: "wind.png",
    temp_max: "4",
    temp_min: "-3",
  },
];

function injection() {
  for (const element of data) {
    const injector = `
    <article>
      <h3>${element.title_day}</h3>
      <p>${element.title_date}</p>
      <img src="/img/${element.icon}" alt="${element.icon}">
      <span><strong>${element.temp_max}</strong> | <strong>${element.temp_min}</strong></span>
    </article>
    `;

    section.innerHTML += injector;
  }
}

injection();
