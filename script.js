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
  // Fungsi untuk membuat data array yang baru berdasarkan filter bahasa pemrograman
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
  // Fungsi untuk menampilkan tabel ke html
  let tab = `<tr class="headerColor">
          <th>Id</th>
          <th>Email</th>
          <th>Married</th>
          <th>Programming Language</th>
         </tr>`;

  // Loop to access all rows
  if (value.length === 0) {
    // Memeriksa apakah array yang berisi data hasil filter itu kosong
    for (let r of users) {
      // Jika ya, maka ambil data dari array yang utuh
      tab += `<tr class="detailColor"> 
      <td>${r.id} </td>
      <td>${r.email}</td>
      <td>${r.isMarried}</td> 
      <td>${r.programmingLanguages}</td>          
  </tr>`;
    }
    // Setting innerHTML as tab variable
    document.getElementById("employees").innerHTML = tab;
  } else {
    // jika tidak, maka ambil data dari array hasil filter
    for (let r of value) {
      tab += `<tr class="detailColor"> 
    <td>${r.id} </td>
    <td>${r.email}</td>
    <td>${r.isMarried}</td> 
    <td>${r.programmingLanguages}</td>          
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
  // Fungsi untuk membuat data array yang baru berdasarkan pemilihan theme
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
  // Fungsi untuk memberikan style tertentu berdasarkan array hasil pemilihan theme
  const headerColor = document.querySelector(".headerColor");
  headerColor.style.backgroundColor = arrThemes[0].headerColor;

  const headerText = document.querySelectorAll("th");
  headerText.forEach((x) => {
    x.style.color = arrThemes[0].headerTextColor;
  });

  const detailColor = document.querySelectorAll(".detailColor");
  detailColor.forEach((x) => {
    x.style.backgroundColor = arrThemes[0].detailColor;
  });

  const detailTextColor = document.querySelectorAll("td");
  detailTextColor.forEach((x) => {
    x.style.color = arrThemes[0].detailTextColor;
  });
}
