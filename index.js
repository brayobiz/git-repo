var mtitles = document.getElementsByClassName('mytitle');
var mytitleContents = document.getElementsByClassName('mytitle-contents');

function OpenContent(titlename){
  for(mtitle of mtitles){
    mtitle.classList.remove("active-link");
  }
  for(mytitleContent of mytitleContents){
    mytitleContent.classList.remove("active-title");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(titlename).classList.add("active-title");
  
}