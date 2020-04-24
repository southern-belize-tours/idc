
var calendar=document.getElementById("calendarBody");

//Removes everything from the calendar. The calendar data is spontaneously created,
//destroyed, and recreated whenever the user toggles it. This is so that it stays
//in synchronicity with the selectors, so that it is possible to use both for all
//walks of users.
function clearCalendar()
{
  clearDays();
  let year = document.getElementById("calendarYear")
  while(year.firstChild){
    year.removeChild(year.firstChild);
  }
  let month = document.getElementById("calendarMonth");
  while(month.firstChild){
    month.removeChild(month.firstChild);
  }
}

//Removes all day values on the calendar, used when moving months or toggling the
//display of the calendar itself.
function clearDays(){
  let calendar=document.getElementById("daysField");
  let days = calendar.childNodes;
  while(calendar.firstChild){
   calendar.removeChild(calendar.firstChild);
  }
}

//Changes the year based on the increment argument passed in. Since this is only
//invoked as part of deltaMonth, all checking for how far we can go forward and
//backward with yeras has already been performed. So this only needs to change the
//year
function deltaYear(incr)
{
  let years = document.getElementById("years");
  let value = parseInt(years.value);
  value+=incr;
  years.value = value.toString();
  document.getElementById("calendarYear").innerHTML="20"+value.toString();
}

//Takes in the id of an html element to make it red. Used when the user wants to
//book a tour back in time or a rediculous amount of time ahead to signal to them
//that they can unfortunately only book tours in the known future.
function indicateRed(id)
{
  let elem = document.getElementById(id);
  elem.classList.add("red");
}

//Removes the red indicator from the arrows
function removeRed(id)
{
  let elem = document.getElementById(id);
  elem.classList.remove("red");
}

//Function resulting from poorly thought out design planning. The Month select HTML
//element stores the values of months as strings with 2 digits, so months 1-9 have
//0s in front of them. So we need to convert "03" to int(3) and it's more efficient
//to just build a helper function for this than to re-label the html
function monthInt(){
  let monthStr = document.getElementById("months").value;
  let value=0;
  for(let i=0;i<monthStr.length;++i)
  {
    value*=10;
    value+=(monthStr[i]-'0');
  }
  return value;
}

//When the user is on the current month they should be unable to select previous
//days for a tour booking. For now I'm going to enable tours 24 hours in advance.
function indicatePrevDays()
{
   var today = new Date();
   if(!(document.getElementById("years").value===today.getFullYear().toString().substring(2)))return;
   //Since we actually call this function during showDays, we want to check to make
   //sure we don't black out un-eligable days when the calendar isn't displaying
   //the current month of the current year.
   if(monthInt()!=today.getMonth()+1)return;
   let daysField = document.getElementById("daysField");
   let days = daysField.getElementsByClassName("calendarDay");
   for(let i=0;i<days.length && i<today.getDate();++i)
   {
     days[i].classList.add("darken");
   }
}

//Changing a month is rather complex. First we convert the data arguments and HTML values
//into data types that can work together. We check to make sure the user isn't trying
//to go a month into the past, or two years into the future (times when they can't book)
//Once we have determined they are trying to make a valid action, we check to see if we've
//moved into months that are bordering these outliers (current month, or 24 months into future)
//and add some css to the arrows for switching months to signal to the user that they
//cannot further move months.
//We then check to see if we have moved to the current month, that we ensure the date
//is selected at least 24 hours into the future for valid bookings. We remove the red
//indicators for any month that is not bordering an outlier where the code would prevent
//the user moving to those months.
//We then finally actually change the values for our month in html with the use of some helper functions
//which get our data types to be desired (strings)
function deltaMonth(incr)
{
  let months = document.getElementById("months");
  let monthStr = months.value;
  let value=monthInt();        //Month int is indexed at 1. Embarassing, I know.
  var today = new Date();
  //We prevent it from going back a month
  if(incr<0 && value==today.getMonth()+1 &&
     document.getElementById("years").value===today.getFullYear().toString().substring(2))
  {
    indicateRed("prevMonth");
    indicatePrevDays();
    return;
  }
  else if(incr>0 && value==today.getMonth()+1 &&
          parseInt(document.getElementById("years").value)===parseInt(today.getFullYear().toString().substring(2))+2)
  {
    indicateRed("nextMonth");
    return;
  }
  value+=incr;
  if(value<1)
  {
    value=12-value;
    deltaYear(-1);
  }
  else if(value>12)
  {
    value%=12;
    deltaYear(1);
  }
  let strValue = value.toString();
  if(parseInt(strValue)<10)strValue = "0"+strValue;
  months.value=strValue;
  document.getElementById("calendarMonth").innerHTML=toMonth(strValue);
  document.getElementById("calendarMonth").value=value;
  showDays();
  if(value==today.getMonth()+1){
    //If we end up on the current month we need to indicate which days are bookable.
    if(document.getElementById("years").value===today.getFullYear().toString().substring(2))
    {
      indicateRed("prevMonth");
    }
    else if(parseInt(document.getElementById("years").value)===parseInt(today.getFullYear().toString().substring(2))+2)
    {
      indicateRed("nextMonth");
    }
    selectToday();
  }
  else{  //If the calendar isn't displaying the current month whether this year or two years from now the arrows should indicate they can keep moving
    removeRed("prevMonth");
    removeRed("nextMonth");
  }
}

//Since the month values are stored as digital strings, this converts them and modularizes the code to do this.
function toMonth(str)
{
  let ret="";
  switch(str)
  {
    case "01":
      ret="January";
      break;
    case "02":
      ret="February";
      break;
    case "03":
      ret="March";
      break;
    case "04":
      ret="April";
      break;
    case "05":
      ret="May";
      break;
    case "06":
     ret="June";
     break;
    case "07":
     ret="July";
     break;
    case "08":
     ret="August";
     break;
    case "09":
     ret="September";
     break;
    case "10":
     ret="October";
     break;
    case "11":
     ret="November";
     break;
    case "12":
     ret="December";
     break;
    default: "ERROR";
  }
  return ret;
}

//Same behavior but slightly different from the above function in that here we are
//indexing our months at 0. This is because it's probably the smarter way to have
//it done, to match the js date library.
function monthNumerical(monthStr)
{
  switch(monthStr){
    case "January":
      ret=0;
      break;
    case "February":
      ret=1;
      break;
    case "March":
      ret=2;
      break;
    case "April":
      ret=3;
      break;
    case "May":
      ret=4;
      break;
    case "June":
      ret=5;
      break;
    case "July":
      ret=6;
      break;
    case "August":
      ret=7;
      break;
    case "September":
      ret=8;
      break;
    case "October":
      ret=9;
      break;
    case "November":
      ret=10;
      break;
    case "December":
      ret=11;
      break;
    //The expected data strings should always be one of these cases being that this is
    //a helper function for various calendar procedures. However if this gives out -1
    //then we know invalid strings are somehow being passed in.
    default: ret=-1;
  }
  return ret;
}

//Removes selected day each time the calendar is created/recreated, the month is
//cycled, or (most importantly) a new day is selected for a booking
function clearSelected(){
  let days = document.getElementById("daysField").getElementsByClassName("calendarDay");
  for(let i=0;i<days.length;++i)days[i].classList.remove("selected");
}

//Poorly named variable that was generated as a workaround for a bug. Currently tracks
//The number of the day (indexed at 0) that the day select holds
var val

//Used for setting the day to whatever we are holding with val. Invoked when the user
//cycles back to the current month to prevent selecting an invalid day.
function resetDay(){
  let daySelect = document.getElementById("days");
  let daysField = document.getElementById("daysField");
  let days = daysField.getElementsByClassName("calendarDay");
  for(let i=0;i<days.length;++i)
  {
    days[i].classList.remove("selected")
    if(i==val-1)days[i].classList.add("selected");
  }
}

//Clears the selected and adds the listener to each calendar day for them to wait
//for the user to click on them for whenever they want to have their tour booking
function addSelectListener(){
  let daySelect = document.getElementById("days");
  let daysField = document.getElementById("daysField");
  let days = daysField.getElementsByClassName("calendarDay");
  for(let i=0;i<days.length;++i)
  {
    if(days[i].classList.contains("darken"))continue;
    days[i].onclick = function(e){
      clearSelected();
      e.currentTarget.classList.add("selected");
      val=parseInt(e.currentTarget.innerHTML);
      daySelect.value=val;//parseInt(e.currentTarget.innerHTML);
    }
  }
}

//Populates the calendar body. Checks to add the default selected day on the calendar
//display based on the day selector. Does some fancy css to smooth out the borders
//on days that wil end up in corners. Sneaky sneaky February
function createDays(){
  let daysField = document.getElementById("daysField");
  let days = document.getElementById("days");
  val=days.value;
  let daysOptions = days.getElementsByTagName("option")
  for(let i=0;i<daysOptions.length;++i)
  {
    let currDay = document.createElement("div");
    currDay.className = "calendarDay";
    currDay.innerHTML = daysOptions[i].value;
    if(daysOptions[i].value==val)currDay.classList.add("selected");
    if(i==0)currDay.style["border-top-left-radius"] = "8px";
    else if(i==21 && daysOptions.length==28)currDay.style["border-bottom-left-radius"]="8px";
    else if(i==6)currDay.style["border-top-right-radius"] = "8px";
    else if(i==27)currDay.style["border-bottom-right-radius"] = "8px";
    else if(i==28)currDay.style["border-bottom-left-radius"] = "8px";
    //Sneaky sneaky february is on its own row for the 28th so the if gets its own block
    if(i==daysOptions.length-1)currDay.style["border-bottom-right-radius"]="8px";
    daysField.appendChild(currDay);
  }
  indicatePrevDays();
  addSelectListener();
}

//Populates the header and calls createDays to populate the body. This is only called
//when the calendar is toggled to be shown/hidden
function populateCalendar(){
  let calendar=document.getElementById("calendarBody");
  let daysField = document.getElementById("daysField");
  clearCalendar();
  let years = document.getElementById("years");
  let x=years.value;
  let currYear = document.createElement("div");
  currYear.className = "calendarYear";
  currYear.innerHTML="20"+years.value;
  document.getElementById("calendarYear").appendChild(currYear);
  let months = document.getElementById("months");
  x=months.value;
  let currMonth = document.createElement("div");
  currMonth.className="calendarMonth";
  currMonth.innerHTML=toMonth(months.value);
  document.getElementById("calendarMonth").appendChild(currMonth);
  createDays();
}

//If the user is using a desktop and wants to cycle months with the arrow keys instead
//of clicking then they can do this. This procedure checks to see if the calendar
//is being displayed (note months can still be cycled without the calendar being displayed)
//and then checking the key source and calling to change months based on the arrow key pressed.
function checkKey(e){
  if(document.getElementById("calendarBody").classList.contains("show")){
    e = e || window.event;
    //left arrow <-
    if(e.keyCode=='37')
    {
      deltaMonth(-1);
    }
    //right arrow ->
    else if(e.keyCode=='39')
    {
      deltaMonth(1);
    }
  }
}

//Displays the calendar, creating all the headers and days to show.
function addShow(){
  let calendar=document.getElementById("calendarBody");
  populateCalendar();
  calendar.classList.toggle("show");
  if(!(calendar.classList.contains("show"))){
    document.getElementById("days").value=val;
  }
  else{
    document.onkeydown = checkKey;
  }
}

//Sets our initial month the select to contain to be the current month
function selectMonth(){
  var today = new Date();
  document.getElementById("years").value=today.getFullYear().toString().substring(2);
  let month = today.getMonth()+1;
  if(month<10) month = "0"+month.toString();
  else month = month.toString();
  document.getElementById("months").value=month;
}

//Returns true if the calendar is displaying this current month so that we can check
//for the selected date being set to at least 24 hours in advance from our current date.
function thisMonth(m)
{
  return monthNumerical(document.getElementById("calendarMonth").innerHTML)==m;
}

//Sets our initial day on the select to be the next possible day that guests can
//book a tour. For now we are saying that guests can book as soon as 24 hours in
//advance.
function selectToday(){
  var today = new Date();
  //+1 means 24 hours in advance. If Julian wants to do same-day tours than take this out.
  let dateSelecting = today.getDate()+1;
  document.getElementById("days").value=dateSelecting;
  //Hackey way of assigning a value to our global variable for avoiding bugs due
  //to variables tied to innerhtml from the calendarDays when they are cleared each
  //time the calendar changes months or gets toggled.
  if(val==null)val=today.getDate()+1;
  if(val<today.getDate()+1 && thisMonth(today.getMonth()))
  {
    val=today.getDate()+1;
    document.getElementById("days").value=val;
    resetDay();
  }
}

//Some hackey patterns for displaying the days of the month that will work for the
//next two years. Creates the days for the selector, then once they have been created
//it calls the clear days and create days to signal to the calendar to process the next month.
function showDays(){
  let numDays = 30;
  let daySelect = document.getElementById("days");
  while(daySelect.hasChildNodes())
  {
    daySelect.removeChild(daySelect.firstChild);
  }
  let month = document.getElementById("months").value;
  if(month==="01" || month==="03" || month==="05"
                  || month==="07" || month==="08"
                  || month==="10" || month==="12")
    numDays=31;
  else if(month==="02")
  {
     if(document.getElementById("years").value==="20") numDays=29;
     else numDays=28;
  }
  for(let i=1; i<=numDays;++i)
  {
     let currDay = document.createElement("OPTION");
     currDay.value=i;
     currDay.text=i.toString();
     daySelect.add(currDay);
  }
  clearDays();
  createDays();
}

//Some necessary functions for building the calendar for the first time
selectMonth();
showDays();
selectToday();
//Sets it up so that the calendar reduces when the user clicks outside of it.
window.onclick = function(event) {
  //We only want to bother checking to reduce the calendar if the thing is displayed
  if((document.getElementById("calendarBody").classList.contains("show")))
  {
    console.log("outside"); 
    //If click outside of calendar then remove css element that allows it to be displayed
    if (!(event.target.matches('.calendar'))&& !(event.target.matches('.calendarDay'))
    &&  !(event.target.matches('.calendarHeader'))&& !(event.target.matches('.calendarYear'))
    &&  !(event.target.matches('.calendarDays')) && !(event.target.matches('.prevMonth'))
    &&  !(event.target.matches('.nextMonth')) && !(event.target.matches('.calendarIcon')))
    {
      document.getElementById("calendarBody").classList.remove("show");
    }
  }
}

//Make this foolproof. If some sneaky snake tries to change the select to book a date
//in the past onto the calendar display it will snap it back to the earliest possible time.
document.getElementById("days").onchange =  function(){
  var today = new Date();
  if(today.getMonth()+1==monthInt())
  {
      if(parseInt(document.getElementById("days").value)<today.getDate()+1){
        document.getElementById("days").value=today.getDate()+1;
        val=today.getDate()+1;
      }
  }
}

//Same thing with selects on the months
document.getElementById("months").onchange = function(){
  var today = new Date();
  if(today.getMonth()+1==monthInt())
  {
      if(parseInt(document.getElementById("days").value)<today.getDate()+1){
        document.getElementById("days").value=today.getDate()+1;
        val=today.getDate()+1;
      }
  }
}
