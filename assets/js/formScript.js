//Takes in the html email input element. Tests its value to match typical email regexes
// in case the user makes a typo. Returns true if valid email regex, false otherwise.
// Assumes elem has a value
function checkEmailValidity(elem)
{
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(elem.value))
  {
    return true;
  }
  return false;
}

//Takes in a string value sent in from other procedures and sends it into the inner html
//of all elements designated to show the user the form inadequacy that must be fulfilled
function showAlert(alertString)
{
  let alertBoxes = document.getElementsByClassName("alertBox");
  //There are several alert boxes. This also keeps it scalable if we add more.
  for(let i=0;i<alertBoxes.length;++i)
  {
      sendTextToHTML(alertBoxes[i].getAttribute("id"),alertString);
  }
}

//Checks to make sure the user has inputted all the required form values for a booking to be made
//before displaying the paypall button. Checks the email to make sure it is a valid email regex.
//Makes sure they have booked at least one tour
function validate(){
    let name=document.getElementById("owner").checkValidity();
    if(!name)
    {
      alert("You need to specify a first name");
      showAlert("You need to specify a first name");
      return;
    }
    let lastName=document.getElementById("cvv").checkValidity();
    if(!lastName)
    {
      alert("You need to specify a last name");
      showAlert("You need to specify a last name");
      return
    }
    let email=document.getElementById("emailAddr").checkValidity();
    if(email)
    {
      email=checkEmailValidity(document.getElementById("emailAddr"));
    }
    if(!email)
    {
      alert("You need to specify a valid email");
      showAlert("You need to specify a valid email");
      return;
    }
    if(computePrice()<=0)//Compute price already invokes showAlert
    {
        alert("You currently don't have any tours selected");
        return;
    }
    showPaypal();
}

//Displays the paypal button after validating the form for all necessary inputs
function showPaypal(){
    document.getElementById("ppCont").classList.toggle("ppShow");
}
