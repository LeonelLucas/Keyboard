

// atribuicao dos botoes do teclado para o JS
const teclaC4 = document.getElementById('C4');
const teclaC4Sus = document.getElementById('C4Sus');
const teclaD4 = document.getElementById('D4');
const teclaD4Sus = document.getElementById('D4Sus');
const teclaE4 = document.getElementById('E4');
const teclaF4 = document.getElementById('F4');
const teclaF4Sus = document.getElementById('F4Sus');
const teclaG4 = document.getElementById('G4');
const teclaG4Sus = document.getElementById('G4Sus');
const teclaA4 = document.getElementById('A4');
const teclaA4Sus = document.getElementById('A4Sus');
const teclaB4 = document.getElementById('B4');
const teclaC = document.getElementById('C');
const teclaCSus = document.getElementById('CSus');
const teclaD = document.getElementById('D');
const teclaDSus = document.getElementById('DSus');
const teclaE = document.getElementById('E');
const teclaF = document.getElementById('F');
const teclaFSus = document.getElementById('FSus');
const teclaG = document.getElementById('G');
const teclaGSus = document.getElementById('GSus');
const teclaA = document.getElementById('A');
const teclaASus = document.getElementById('ASus');
const teclaB = document.getElementById('B');


// definição da frequencia das notas
const c4 = 261.625519	,
    c4Sus = 277.182648,
    d4 = 	293.664734,
    d4Sus = 311.126984,
    e4 = 329.627533,
    f4 = 	349.228241,
    f4Sus = 369.994385,
    g4 = 391.995392,
    g4Sus = 415.304688,
    a4 = 	440.00,
    a4Sus = 466.163788,
    b4 = 	493.883301,
    c = 523.251099,
    cSus = 554.365234,
    d = 587.329529,
    dSus = 622.253906,
    e = 659.255127,
    f = 698.456482,
    fSus = 739.988831,
    g = 783.990845,
    gSus = 830.609375,
    a = 880.0,
    aSus = 932.327576,
    b = 987.766602;
    



// inicialização das variáveis de controle de audio do AudioCOntext
let keyboarAudio, oscilador, ganho, tempo = 5.000, tipo = 'sine', frequencia;

function startKey( ){
    keyboarAudio = new AudioContext();
    oscilador = keyboarAudio.createOscillator();
    ganho = keyboarAudio.createGain();
    oscilador.frequency.value = frequencia;
    oscilador.type = tipo;
    oscilador.connect(ganho);
    ganho.connect(keyboarAudio.destination);
    oscilador.start(0);


};

function stopKey(){
   
    ganho.gain.exponentialRampToValueAtTime(
        0.00001, keyboarAudio.currentTime + tempo);
};



teclaC4.addEventListener('mousedown', function(){
    frequencia = c4;
    startKey();

});
teclaC4.addEventListener('mouseup', function(){
    ganho.gain.exponentialRampToValueAtTime(
        0.000023, keyboarAudio.currentTime + tempo );
});

teclaC4Sus.addEventListener('mousedown', function(){
    frequencia = c4Sus;
    startKey();
});
teclaC4Sus.addEventListener('mouseup', function(){
    ganho.gain.exponentialRampToValueAtTime(
        0.00001, keyboarAudio.currentTime + tempo);
});

teclaD4.addEventListener('mousedown', function(){
    frequencia = d4;
    startKey();
});
teclaD4.addEventListener('mouseup', function(){
    ganho.gain.exponentialRampToValueAtTime(
        0.00001, keyboarAudio.currentTime + tempo);
});

teclaD4Sus.addEventListener('mousedown', function(){
    frequencia = d4Sus;
    startKey();
});
teclaD4Sus.addEventListener('mouseup', function(){
    ganho.gain.exponentialRampToValueAtTime(
        0.00001, keyboarAudio.currentTime + tempo);
});

teclaE4.addEventListener('mousedown', function(){
    frequencia = e4;
    startKey();
});
teclaE4.addEventListener('mouseup', function(){
    ganho.gain.exponentialRampToValueAtTime(
        0.00001, keyboarAudio.currentTime + tempo);
});

teclaF4.addEventListener('mousedown', function(){
    frequencia = f4;
    startKey();
});
teclaF4.addEventListener('mouseup', function(){
    ganho.gain.exponentialRampToValueAtTime(
        0.00001, keyboarAudio.currentTime + tempo);
});

teclaF4Sus.addEventListener('mousedown', function(){
    frequencia = f4Sus;
    startKey();
});
teclaF4Sus.addEventListener('mouseup', function(){
    ganho.gain.exponentialRampToValueAtTime(
        0.00001, keyboarAudio.currentTime + tempo);
});

teclaG4.addEventListener('mousedown', function(){
    frequencia = g4;
    startKey();
});
teclaG4.addEventListener('mouseup', function(){
    ganho.gain.exponentialRampToValueAtTime(
        0.00001, keyboarAudio.currentTime + tempo);
});

teclaG4Sus.addEventListener('mousedown', function(){
    frequencia = g4Sus;
    startKey();
});
teclaG4Sus.addEventListener('mouseup', function(){
    ganho.gain.exponentialRampToValueAtTime(
        0.00001, keyboarAudio.currentTime + tempo);
});

teclaA4.addEventListener('mousedown', function(){
    frequencia = a4;
    startKey();
});
teclaA4.addEventListener('mouseup', function(){
    ganho.gain.exponentialRampToValueAtTime(
        0.00001, keyboarAudio.currentTime + tempo);
});

teclaA4Sus.addEventListener('mousedown', function(){
    frequencia = a4Sus;
    startKey();
});
teclaA4Sus.addEventListener('mouseup', function(){
    ganho.gain.exponentialRampToValueAtTime(
        0.00001, keyboarAudio.currentTime + tempo);
});

teclaB4.addEventListener('mousedown', function(){
    frequencia = b4;
    startKey();
});
teclaB4.addEventListener('mouseup', function(){
    ganho.gain.exponentialRampToValueAtTime(
        0.00001, keyboarAudio.currentTime + tempo);
});

teclaC.addEventListener('mousedown', function(){
    frequencia = c;
    startKey();
});
teclaC.addEventListener('mouseup', function(){
    ganho.gain.exponentialRampToValueAtTime(
        0.00001, keyboarAudio.currentTime + tempo);
});

teclaCSus.addEventListener('mousedown', function(){
    frequencia = cSus;
    startKey();
});
teclaCSus.addEventListener('mouseup', function(){
    ganho.gain.exponentialRampToValueAtTime(
        0.00001, keyboarAudio.currentTime + tempo);
});

teclaD.addEventListener('mousedown', function(){
    frequencia = d;
    startKey();
});
teclaD.addEventListener('mouseup', function(){
    ganho.gain.exponentialRampToValueAtTime(
        0.00001, keyboarAudio.currentTime + tempo);
});

teclaDSus.addEventListener('mousedown', function(){
    frequencia = dSus;
    startKey();
});
teclaDSus.addEventListener('mouseup', function(){
    ganho.gain.exponentialRampToValueAtTime(
        0.00001, keyboarAudio.currentTime + tempo);
});

teclaE.addEventListener('mousedown', function(){
    frequencia = e;
    startKey();
});
teclaE.addEventListener('mouseup', function(){
    ganho.gain.exponentialRampToValueAtTime(
        0.00001, keyboarAudio.currentTime + tempo);
});

teclaF.addEventListener('mousedown', function(){
    frequencia = f;
    startKey();
});
teclaF.addEventListener('mouseup', function(){
    ganho.gain.exponentialRampToValueAtTime(
        0.00001, keyboarAudio.currentTime + tempo);
});

teclaFSus.addEventListener('mousedown', function(){
    frequencia = fSus;
    startKey();
});
teclaFSus.addEventListener('mouseup', function(){
    ganho.gain.exponentialRampToValueAtTime(
        0.00001, keyboarAudio.currentTime + tempo);
});

teclaG.addEventListener('mousedown', function(){
    frequencia = g;
    startKey();
});
teclaG.addEventListener('mouseup', function(){
    ganho.gain.exponentialRampToValueAtTime(
        0.00001, keyboarAudio.currentTime + tempo);
});

teclaGSus.addEventListener('mousedown', function(){
    frequencia = gSus;
    startKey();
});
teclaGSus.addEventListener('mouseup', function(){
    ganho.gain.exponentialRampToValueAtTime(
        0.00001, keyboarAudio.currentTime + tempo);
});

teclaA.addEventListener('mousedown', function(){
    frequencia = a;
    startKey();
});
teclaA.addEventListener('mouseup', function(){
    ganho.gain.exponentialRampToValueAtTime(
        0.00001, keyboarAudio.currentTime + tempo);
});


teclaASus.addEventListener('mousedown', function(){
    frequencia = aSus;
    startKey();
});
teclaASus.addEventListener('mouseup', function(){
    ganho.gain.exponentialRampToValueAtTime(
        0.00001, keyboarAudio.currentTime + tempo);
});

teclaB.addEventListener('mousedown', function(){
    frequencia = b;
    startKey();
});
teclaB.addEventListener('mouseup', function(){
    ganho.gain.exponentialRampToValueAtTime(
        0.00001, keyboarAudio.currentTime + tempo);
});

const bpm = document.getElementById('bpm');
const h3 = document.querySelector('h3')
const play = document.getElementById('play')
const audio = document.querySelector('audio')
 let currentBpm = 40
bpm.addEventListener('change', function(){
  h3.innerHTML = this.value + 'bpm'  
  currentBpm = parseInt(this.value)
} )

function tick(){
    Audio.currentTime = 0
    Audio.play()
}
play.addEventListener('click',function(){
const timer = setInterval(tick, 100)
})




