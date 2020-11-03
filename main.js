let arrayIssues = [];
 
loadIssues();
 
function openDropdown() {
  document.querySelector(".dropdown").classList.toggle("show");
}  
 
function loadIssues(){
  fetch('../archive.json').then(function(response){
    return response.json();
  }).then(function(data){
    arrayIssues = data.archive;
   
    populateDropdown()
   
  })
}
 
 
 
function populateDropdown(){
  let listWrap = document.querySelector(".dropdown-list");
 
  for(var i = 0; i < arrayIssues.length; i++){
   
    let link = document.createElement('a')
    let linkWrapper = document.createElement('li')
 
    link.setAttribute('href', arrayIssues[i].href)
    link.innerText = 'Issue ' + (i + 1);
 
    linkWrapper.appendChild(link)
   
    listWrap.appendChild(linkWrapper)
 
  }
 
  currentIssue();
}
 
function currentIssue(){
  let body = document.querySelector('body');
  let dataCurrent = body.getAttribute('data-issue');
  let listWrappers = document.querySelectorAll(".dropdown-list li");
 
  for(var i = 0; i < arrayIssues.length; i++){
   
    if(i  === (dataCurrent - 1)){
      listWrappers[i].classList.add('selected')
      document.title = arrayIssues[i].issue
    }
   
  }
}
 
let btn = document.querySelector('.dropbtn');
 
btn.addEventListener('click', openDropdown )