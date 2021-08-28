// MENU
let openMenuBtn = document.querySelector('.nav__open');
let menuList = document.querySelector('.nav__list');
let svgOpen = document.querySelector('#nav__svg__open');
let svgClose = document.querySelector('#nav__svg__close');
let isMenuOpen = false;

toggleMenu(isMenuOpen);
openMenuBtn.addEventListener('click', () => {
  isMenuOpen = !isMenuOpen;
  toggleMenu(isMenuOpen);
});

function toggleMenu(value) {
  if (value) {
    menuList.style.display = 'flex';
    svgClose.style.display = 'block';
    svgOpen.style.display = 'none';
  }
  else {
    menuList.style.display = 'none';
    svgClose.style.display = 'none';
    svgOpen.style.display = 'block';
  }
}



// GRAPHIQUE PAGE D'ACCUEIL

var ctx = document.getElementById('myChart')?.getContext('2d');
var myChart = ctx ? new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
        datasets: [{
            label: 'Nombres de rots de Nicolas par jour',
            data: [5, 13, 13, 8, 15, 14],
            backgroundColor: [
                'rgba(164, 184, 196, 0.2)',
                'rgba(75, 163, 195, 0.2)',
                'rgba(186, 50, 79, 0.2)',
                'rgba(95, 84, 73, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(144, 168, 182, 1)',
                'rgba(51, 126, 153, 1)',
                'rgba(145, 39, 62, 1)',
                'rgba(69, 61, 53, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
}) : null;


/* graphique lundi */
let lundi  = document.getElementById("myChart-lundi");
if (lundi) {
new Chart(lundi, {
    type: 'pie',
    data: {
      labels: ["0h00-4h00", "04h00-8h00", "8h00-14h00", "14h00-18h00", "18h00-21h00", "21h00-00h00"],
      datasets: [{
        label: "Nombre de rots par horaire",
        backgroundColor: ["#FFDC5E", "#8e5ea2","#3cba9f","#e8c3b9","#c45850", "#FF86C8"],
        data: [0,0,2,1,2,0]
      }]
    },
});
}

/* graphique mardi */
let mardi  = document.getElementById("myChart-mardi");
if (mardi) {
new Chart(mardi, {
    type: 'pie',
    data: {
      labels: ["0h00-4h00", "04h00-8h00", "8h00-14h00", "14h00-18h00", "18h00-21h00", "21h00-00h00"],
      datasets: [{
        label: "Nombre de rots par horaire",
        backgroundColor: ["#FFDC5E", "#8e5ea2","#3cba9f","#e8c3b9","#c45850", "#FF86C8"],
        data: [3,0,1,4,1,4]
      }]
    },
});
}

/* graphique mercredi */

let mercredi  = document.getElementById("myChart-mercredi");
if (mercredi) {
new Chart(mercredi, {
    type: 'pie',
    data: {
      labels: ["0h00-4h00", "04h00-8h00", "8h00-14h00", "14h00-18h00", "18h00-21h00", "21h00-00h00"],
      datasets: [{
        label: "Nombre de rots par horaire",
        backgroundColor: ["#FFDC5E", "#8e5ea2","#3cba9f","#e8c3b9","#c45850", "#FF86C8"],
        data: [10,0,1,2,0,0]
      }]
    },
});
}


/* graphique jeudi */

let jeudi  = document.getElementById("myChart-jeudi");
if (jeudi) {
new Chart(jeudi, {
    type: 'pie',
    data: {
      labels: ["0h00-4h00", "04h00-8h00", "8h00-14h00", "14h00-18h00", "18h00-21h00", "21h00-00h00"],
      datasets: [{
        label: "Nombre de rots par horaire",
        backgroundColor: ["#FFDC5E", "#8e5ea2","#3cba9f","#e8c3b9","#c45850", "#FF86C8"],
        data: [2,0,1,1,0,4]
      }]
    },
});
}

/* graphique vendredi */

let vendredi  = document.getElementById("myChart-vendredi");
if (vendredi) {
new Chart(vendredi, {
    type: 'pie',
    data: {
      labels: ["0h00-4h00", "04h00-8h00", "8h00-14h00", "14h00-18h00", "18h00-21h00", "21h00-00h00"],
      datasets: [{
        label: "Nombre de rots par horaire",
        backgroundColor: ["#FFDC5E", "#8e5ea2","#3cba9f","#e8c3b9","#c45850" , "#FF86C8"],
        data: [4,0,1,3,0,7]
      }]
    },
});
}


/* graphique samedi */

let samedi  = document.getElementById("myChart-samedi");
if (samedi) {
new Chart(samedi, {
    type: 'pie',
    data: {
      labels: ["0h00-4h00", "04h00-8h00", "8h00-14h00", "14h00-18h00", "18h00-21h00", "21h00-00h00"],
      datasets: [{
        label: "Nombre de rots par horaire",
        backgroundColor: ["#FFDC5E", "#8e5ea2","#3cba9f","#e8c3b9","#c45850", "#FF86C8"],
        data: [7,0,2,3,0,2]
      }]
    },
});
}