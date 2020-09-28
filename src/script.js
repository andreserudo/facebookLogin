
function loadBirthDate(){
  const selectDayBirth = document.getElementById('dayBirth');
  const selectMonthBirth = document.getElementById('monthBirth');
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

  for(let i=0; i<31; i+= 1){
    let newDay = document.createElement('option');

    newDay.innerText = String(i+1);
    selectDayBirth.append(newDay);
  }

  for(let i=0; i<months.length; i+= 1){
    let newMonth = document.createElement('option');    

    newMonth.innerText = months[i];
    selectMonthBirth.append(newMonth);
  }  
}

function createEvents(){
  //const selectDayBirth = document.getElementById('dayBirth');
  loadBirthDate();
}

document.onload = createEvents();