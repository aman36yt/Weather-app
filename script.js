//Codes Will Update Soonnn!!!
const input = document.querySelector("input");
const btn = document.querySelector(".btn");
const h2 = document.querySelector("h2");

let temp = document.querySelector(".temp");
let humi = document.querySelector(".humi");
let lati = document.querySelector(".lat");
let logi = document.querySelector(".lon");
let con = document.querySelector(".con");
let time = document.querySelector(".time");

btn.addEventListener("click",content);

function updateValues(data){
    if(input.value){
    h2.innerText=`CITY : ${input.value.toUpperCase()}`;
    temp.innerText = `Temperature : ${data.current.temp_c}*C`;
    humi.innerText = `HUMIDITY : ${data.current.humidity}`;
    lati.innerText = `latitude : ${data.location.lat}`;
    logi.innerText = `longitude : ${data.location.lon}`;
    con.innerText = `Region : ${data.location.region} , ${data.location.name}`
    time.innerText = `Time : ${data.location.localtime} `;
    }
    input.value = "";
};


let url ="https://api.weatherapi.com/v1/current.json?key=95923165069547c782864718260504&q=";

async function content(){
    try{
        let res = await axios.get(url+input.value);
        updateValues(res.data);
    }catch{
        if(input.innerText){
            alert("API PROblem please TRy again later!!");
        }else{
            alert("Search SomeThing !! Try Other");
        }
    }
};