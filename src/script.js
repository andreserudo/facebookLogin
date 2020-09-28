
function loadBirthDate(){
  const selectDayBirth = document.getElementById('dayBirth');
  const selectMonthBirth = document.getElementById('monthBirth');
  const selectYearBirth = document.getElementById('yearBirth');
  const months = [
    'Janeiro',
   'Fevereiro', 
   'Março', 
   'Abril', 
   'Maio', 
   'Junho', 
   'Julho', 
   'Agosto', 
   'Setembro', 
   'Outubro', 
   'Novembro', 
   'Dezembro'];
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth();
  const year = today.getFullYear();
  const initialYear = year - 100;

  for(let i=0; i<31; i+= 1){
    let newDay = document.createElement('option');

    newDay.innerText = String(i+1);
    
    if(day == (i+1)){
      newDay.selected = true;
    }

    selectDayBirth.append(newDay);
  }

  for(let i=0; i<months.length; i+= 1){
    let newMonth = document.createElement('option');    

    newMonth.innerText = months[i];

    if(month === i){
      newMonth.selected = true;
    }

    selectMonthBirth.append(newMonth);
  }  

  for(let i=initialYear; i<=year; i+= 1){
    let newYear = document.createElement('option');

    newYear.innerText = String(i);

    if(year === i){
      newYear.selected = true;
    }

    selectYearBirth.append(newYear);
  }
  
}

function changeLanguage(e){
  const language = e.srcElement;

  if(language.className === 'language'){
    const activeLanguage = document.querySelector('.language-active');    
    
    activeLanguage.classList.replace('language-active','language');    
    language.className = 'language-active';
   
  }
  
}

function createEvents(){
  const languages = document.querySelectorAll('#listLanguages');

  loadBirthDate();

  for( let i=0; i<languages[0].children.length; i += 1){
    let language =languages[0].children[i];

    language.addEventListener('click', changeLanguage);
  }
  
}

document.onload = createEvents();