const playBtn1 = document.querySelector('.play1');
const speakin1 = document.querySelector('#speakin1');
const playBtn2 = document.querySelector('.play2');
const playBtn3 = document.querySelector('.play3');
const playBtn4 = document.querySelector('.play4');
const playBtn5 = document.querySelector('.play5');
const playBtn6 = document.querySelector('.play6');
const playBtn7 = document.querySelector('.play7');
const playBtn8 = document.querySelector('.play8');
const playBtn9 = document.querySelector('.play9');
const playBtn10 = document.querySelector('.play10');

const recognition = new window.webkitSpeechRecognition(); //crea una instancia del objeto SpeechRecognition

recognition.onstart = function() {
  console.log('La grabación de voz ha comenzado.');
  speakin1.innerHTML= 'La grabación de voz ha comenzado.';
};

recognition.onresult = function(event) {
  const resultado = event.results[0][0].transcript;
  console.log('Resultado:', resultado); 
  speakin1.innerHTML= resultado; //muestra el resultado del reconocimiento de voz
};

recognition.start(); //inicia el reconocimiento de voz

playBtn1.addEventListener('click', function(){

}); 