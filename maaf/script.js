const photos = [
    "images/foto1.png",
    "images/foto2.png",
    "images/foto3.png"
];

const messages = [

`Maaf ya buat semalem. Maaf juga kalau bad mood aku jadi gak jelas cuma karena hal yang sebenarnya sepele.<br><br>Soalnya kan kamu pernah bilang, kalau ada sesuatu yang gak aku suka, bilang aja ke kamu. Nah, yang aku gak suka itu sikap kamu semalem. Tapi mungkin cara aku nyampainya juga kurang baik, jadi malah kebawa emosi.`,

`Maaf ya kalau aku jadi bikin kamu ngerasa hubungan kita gak ada bedanya sama hubungan kamu sama mantan-mantan kamu dulu. Aku sama sekali gak pengen bikin kamu ngerasa kayak gitu.<br><br>Aku cuma lagi ngikutin perasaan aku waktu itu, sampai gak kepikiran kalau sikap aku juga bisa bikin kamu sedih.`,

`Maaf juga karena semalem aku lebih nurutin mood dan ego aku sendiri. Harusnya aku bisa ngobrol baik-baik, bukan malah kebawa emosi.<br><br>Aku bakal berusaha buat lebih ngontrol emosi dan nyampein apa yang aku rasain dengan cara yang lebih baik. Semoga kita bisa sama-sama belajar dan gak ngulangin hal yang sama lagi ya. 🤍`

];
let index = 0;

const btn = document.getElementById("btn");
const text = document.getElementById("text");
const photo = document.getElementById("photo");

btn.addEventListener("click",()=>{

    index++;

    if(index < messages.length){

        photo.style.opacity=0;
        text.style.opacity=0;

        setTimeout(()=>{

            photo.src=photos[index];
            text.innerHTML=`<p>${messages[index]}</p>`;

            photo.style.opacity=1;
            text.style.opacity=1;

        },500);

    }

    else{

        document.querySelector(".card").innerHTML=`

        <h1>Thank You</h1>

        <p>
        Terima kasih ya karena masih sabar sama aku. Aku bakal berusaha buat lebih ngontrol emosi dan nyampein apa yang aku rasain dengan cara yang lebih baik. Aku sayang sama kamu, dan aku gak mau masalah kecil kayak gini malah bikin hubungan kita jadi renggang. 🤍        </p>

        <p style="margin-top:20px;font-size:28px;">
        🌌
        </p>

        `;

    }

});

// =======================
// Background Galaxy
// =======================

const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

function resizeCanvas(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

const stars = [];

for(let i = 0; i < 250; i++){

    stars.push({

        x:Math.random()*canvas.width,
        y:Math.random()*canvas.height,

        radius:Math.random()*2+0.3,

        speed:Math.random()*0.4+0.1,

        alpha:Math.random()

    });

}

function draw(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    stars.forEach(star=>{

        ctx.beginPath();

        ctx.arc(star.x,star.y,star.radius,0,Math.PI*2);

        ctx.fillStyle=`rgba(255,255,255,${star.alpha})`;

        ctx.fill();

        star.y += star.speed;

        if(star.y > canvas.height){

            star.y = 0;
            star.x = Math.random()*canvas.width;

        }

    });

    requestAnimationFrame(draw);

}

draw();