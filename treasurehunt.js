var counter = 0
var bomb = Math.floor(Math.random()*9)
var rainbow = Math.floor(Math.random()*9)
console.log("rainbow", rainbow, "bomb", bomb)
if(bomb === rainbow){
  rainbow = Math.floor(Math.random()*9)
  console.log("reset rainbow", rainbow, "bomb", bomb)
}
const treasure = (location) => {
  counter = counter + 1
  document.getElementById("count").innerHTML= counter
  if(location === rainbow){
    document.getElementById(location).innerHTML="<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQIlnN3dd1v5jgucuTy8fKR5lfVki5LaSaGUQ&usqp=CAU' height='100px' width='100px'>"
    setTimeout(function(){ alert("You Found The Impostor"); }, 500);
    document.getElementById("table").style.pointerEvents = "none";
  } else if(location === bomb){
    document.getElementById(location).innerHTML="<img src='https://vignette.wikia.nocookie.net/among-us-wiki/images/5/5a/DeadCharacter.png/revision/latest/top-crop/width/220/height/220?cb=20200803160829' height='100px' width='100px'>"
    setTimeout(function(){ alert("You Died, Try Again"); }, 500);
    document.getElementById("table").style.pointerEvents = "none";
  }else if(counter === 4){
    //This should be image of game over you lose
    document.getElementById(location).innerHTML="<img src='https://www.androidcentral.com/sites/androidcentral.com/files/styles/large/public/article_images/2020/09/among-us-dead-body-reported.jpg' height='100px' width='100px'>"
    setTimeout(function(){ alert("You Lost Too Many Crewmates"); }, 500);
    document.getElementById("table").style.pointerEvents = "none";
  }else {
    document.getElementById(location).innerHTML="<img src='https://www.androidcentral.com/sites/androidcentral.com/files/styles/large/public/article_images/2020/09/among-us-dead-body-reported.jpg' height='100px' width='100px'>"
    document.getElementById(location).style.pointerEvents = "none";
  }
}
