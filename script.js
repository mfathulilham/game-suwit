function getPilihanComputer(){
    const comp = Math.random();
    if (comp < 0.34) return 'gajah';
    else if (comp >= 0.34 && comp < 0.67) return 'orang';
    else return 'semut';
}

function getHasil(comp, player){
    if(comp == player) return 'SERI!';
    if(player == 'gajah') return (comp == 'orang') ? 'MENANG' : 'KALAH';
    if(player == 'orang') return (comp == 'gajah') ? 'KALAH' : 'MENANG';
    if(player == 'semut') return (comp == 'gajah') ? 'MENANG' : 'KALAH';
}

function putar(){
    const putarComputer = document.querySelector('.img-komputer');
    const gambar = ['gajah','semut','orang'];
    let i=0;
    const waktuMulai = new Date().getTime();
    setInterval(function(){
        if(new Date().getTime() - waktuMulai >1000){
            clearInterval;
            return;
        }
        putarComputer.setAttribute('src','img/' + gambar[i++] + '.png');
        if(i == gambar.length) i = 0;
    }, 100);
}

const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function(pil){
    pil.addEventListener('click',function(){
        const pComputer = getPilihanComputer();
        const pPlayer = pil.className;
        const hasil = getHasil(pComputer, pPlayer);
        const imgComputer = document.querySelector('.img-komputer');

        const info = document.querySelector('.info');
            info.innerHTML = '';

        putar();
        setTimeout(function(){
            imgComputer.setAttribute('src','img/' + pComputer + '.png');

            info.innerHTML = hasil;
            
        },1000);
    }); 
});

// const pGajah = document.querySelector('.gajah');
// pGajah.addEventListener('click',function(){
//     const pComputer = getPilihanComputer();
//     const pPlayer = pGajah.className;
//     const hasil = getHasil(pComputer, pPlayer);

//     const imgComputer = document.querySelector('.img-komputer');
//     imgComputer.setAttribute('src','img/' + pComputer + '.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });


