const wordCounter = document.getElementById("wordCounter");
const Totalwords = document.getElementById("Totalwords");
const TotalcharwithSpace = document.getElementById("TotalcharwithSpace");
const TotalcharwithoutSpace = document.getElementById("TotalcharwithoutSpace");
const Totalspecialchar = document.getElementById("Totalspecialchar");
const TotalTime = document.getElementById("TotalTime");
wordCounter.addEventListener("keyup" , function(e){
   let countValues = e.target.value;
   Totalwords.innerText = getTotalWords(countValues);
   TotalcharwithSpace.innerText = getTotalCharWithSpace(countValues);
   TotalcharwithoutSpace.innerText = getTotalCharWithoutSpace(countValues) ;
   Totalspecialchar.innerText = getTotalSpacialChar(countValues);
   TotalTime.innerText =   getTotalTime(countValues);
})

function getTotalWords(str){
return str.length > 0 ? str.split(/\s+/).length : 0;
}
function getTotalCharWithSpace(str){
return str.length
}
function getTotalCharWithoutSpace(str){
 return str.split("").join("").length;
}
function getTotalSpacialChar(str){
    let spChars = /[!@#$%^&"()_+\-=[\]{};':"\\|,.<>\/?]+/;
    let counts = 0;
    for (let i =0 ;i<str.length;i++){
        if(spChars.test(str[i])){
            counts++
        }
    }
    return counts;

}
function getTotalTime(str){
let WPM = 200;
return Math.ceil(getTotalWords(str)/WPM)
}


