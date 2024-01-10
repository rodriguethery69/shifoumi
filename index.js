const choix = document.querySelectorAll('.choixjoueur img');
const robot = document.querySelector('.choixrobot img');
const possibilites = ['pierre', 'papier', 'ciseaux'];
const res = document.querySelector('.section2 div');
const score = document.querySelector('.score span');
let choixjoueur = '';
let choixrobot = '';
let resultat = '';
let scorejoueur = 0;
let scorerobot = 0;


const setResultat = ()=>{
  res.innerHTML = resultat;
  score.innerHTML = `${scorejoueur} - ${scorerobot}`;
}

const getResultat = ()=>{
  switch (true) {
    case choixjoueur == choixrobot:
      resultat = 'Match nul';
      break;
    case ((choixjoueur == 'pierre' && choixrobot == 'papier') || (choixjoueur == 'papier' && choixrobot == 'ciseaux') || (choixjoueur == 'ciseaux' && choixrobot == 'pierre')):
      resultat = 'Vous avez perdu';
      scorerobot++;
      break;
    default:
      resultat = '    Vous avez gagner';
      scorejoueur++;
      break;
  }
  setResultat();
}

const getChoiseRobot = ()=>{
  choixrobot = possibilites[Math.floor(Math.random() * 3)];
  robot.setAttribute("src", `img/${choixrobot}.png`);
  getResultat();
}

choix.forEach(element => {
  element.addEventListener('click', e => {
    choixjoueur = e.target.className;
    getChoiseRobot();
  })
});