const users = [
  {
    id: 1,
    email: "alexander@mail.com",
    isMarried: false,
    programmingLanguages: ["Javascript", "C++", "Python"],
  },
  {
    id: 2,
    email: "graham@mail.com",
    isMarried: false,
    programmingLanguages: ["PHP", "Ruby"],
  },
  {
    id: 3,
    email: "bell@mail.com",
    isMarried: false,
    programmingLanguages: ["Go", "Javascript", "Ruby", "C#"],
  },
  {
    id: 4,
    email: "thomas@mail.com",
    isMarried: false,
    programmingLanguages: ["C#", "Rust", "Typescript"],
  },
  {
    id: 5,
    email: "alva@mail.com",
    isMarried: false,
    programmingLanguages: ["Rust", "Python"],
  },
  {
    id: 6,
    email: "edison@mail.com",
    isMarried: false,
    programmingLanguages: ["Ruby", "Python", "Go"],
  },
];

function language() {
  let lang = document.getElementById("language").value;
  var arrLang = [];
  for (let i = 0; i < users.length; i++) {
    if (users[i].programmingLanguages.includes(lang)) {
      arrLang.push(users[i]);
    }
  }
  show(arrLang);
}
function show(value) {
  let tab = `<tr class="headerColor">
          <th class="headerTextColor">Id</th>
          <th class="headerTextColor">Email</th>
          <th class="headerTextColor">Married</th>
          <th class="headerTextColor">Programming Language</th>
         </tr>`;

  // Loop to access all rows
  if (value.length === 0) {
    for (let r of users) {
      tab += `<tr class="detailColor"> 
      <td class="detailTextColor>${r.id} </td>
      <td class="detailTextColor>${r.email}</td>
      <td class="detailTextColor>${r.isMarried}</td> 
      <td class="detailTextColor>${r.programmingLanguages}</td>          
  </tr>`;
    }
    // Setting innerHTML as tab variable
    document.getElementById("employees").innerHTML = tab;
  } else {
    for (let r of value) {
      tab += `<tr class="detailColor"> 
    <td class="detailTextColor">${r.id} </td>
    <td class="detailTextColor">${r.email}</td>
    <td class="detailTextColor">${r.isMarried}</td> 
    <td class="detailTextColor">${r.programmingLanguages}</td>          
</tr>`;
    }
    // Setting innerHTML as tab variable
    document.getElementById("employees").innerHTML = tab;
  }
}

show(users);

const themes = [
  {
    name: "Default",
    headerColor: "#dddddd",
    headerTextColor: "#000000",
    detailColor: "#dddddd",
    detailTextColor: "#000000",
  },
  {
    name: "Dark",
    headerColor: "#2c3e50",
    headerTextColor: "#ffffff",
    detailColor: "#bdc3c7",
    detailTextColor: "#2c3e50",
  },
  {
    name: "Light",
    headerColor: "#bdc3c7",
    headerTextColor: "#2c3e50",
    detailColor: "#ffffff",
    detailTextColor: "#2c3e50",
  },
  {
    name: "Blue",
    headerColor: "#3498db",
    headerTextColor: "#ffffff",
    detailColor: "#ecf0f1",
    detailTextColor: "#2980b9",
  },
  {
    name: "Red",
    headerColor: "#e74c3c",
    headerTextColor: "#ffffff",
    detailColor: "#ecf0f1",
    detailTextColor: "#c0392b",
  },
];

function theme() {
  let themeNames = document.getElementById("theme").value;
  let arrThemes = [];
  for (let i = 0; i < themes.length; i++) {
    if (themes[i].name.includes(themeNames)) {
      arrThemes.push(themes[i]);
    }
  }
  changeColor(arrThemes);
}
function changeColor(arrThemes) {
  const headerColor = document.querySelector(".headerColor");
  headerColor.style.backgroundColor = arrThemes[0].headerColor;

  const headerText = document.querySelectorAll(".headerTextColor");
  headerText.forEach((x) => {
    x.style.color = arrThemes[0].headerTextColor;
  });

  const detailColor = document.querySelectorAll(".detailColor");
  detailColor.forEach((x) => {
    x.style.backgroundColor = arrThemes[0].detailColor;
  });

  const detailTextColor = document.querySelectorAll(".detailTextColor");
  detailTextColor.forEach((x) => {
    x.style.color = arrThemes[0].detailTextColor;
  });
}
