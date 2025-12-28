let dateElement = document.getElementById("todayDate");
let selectedDateElement = document.getElementById("selectedDate");
let returnElement = document.getElementById("returnDate")
let returnDateValueElement = document.getElementById("returnDateValue")

dateElement.addEventListener("change",function(){
    let selectedDate = new Date(this.value);
    
    let b=""
    let a = selectedDate.toDateString().split(" ");
    b += a[0] + "," + a[1]+ "" + a[2]+ ","+ a[3]
    console.log(b)
    selectedDateElement.textContent = b;
    
}) 

function swapValues() { 
    let fromValue = document.getElementById("FromInput");  
    let toValue = document.getElementById("ToInput"); 

    let temp = fromValue.value; 
    fromValue.value=toValue.value; 
    toValue.value = temp; 

} 

returnElement.addEventListener("change",function(){
   let selectedDate = new Date(this.value);
    
    let b=""
    let a = selectedDate.toDateString().split(" ");
    b += a[0] + "," + a[1]+ "" + a[2]+ ","+ a[3]
    console.log(b)
    returnDateValueElement.textContent = b; 
    
}) 

function swapReturnValues() {
   let from = document.getElementById("FromReturnInput");  
    let to = document.getElementById("ToReturnInput"); 

    let temp = from.value; 
    from.value=to.value; 
    to.value = temp; 
} 

// passenger 
let counts = { adult: 0, child: 0, infant: 0 };

function togglePassengerPopup() {
   document.getElementById("passengerPopup").classList.toggle("hidden");
}

function change(type, value) {
   counts[type] = Math.max(0, counts[type] + value);

   document.getElementById("adultCount").textContent = counts.adult;
   document.getElementById("childCount").textContent = counts.child;
   document.getElementById("infantCount").textContent = counts.infant;
}

function applyPassengers() {
   let total = counts.adult + counts.child + counts.infant;
   let label = `${counts.adult} Adult`;

   if(counts.child > 0) label += `, ${counts.child} Child`;
   if(counts.infant > 0) label += `, ${counts.infant} Infant`;

   document.getElementById("passengerInput").value = label;
   togglePassengerPopup();
}

// Close popup when clicking outside
document.addEventListener("click", function(e){
   if (!e.target.closest(".passenger-box-container")) {
      document.getElementById("passengerPopup").classList.add("hidden");
   }
}); 

function searchFlight() {
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;
  const date = document.getElementById("date").value;

  if (!from || !to || !date) {
    alert("⚠ Please fill From, To and Date");
    return;
  }

  alert(`Searching flights from ${from} to ${to} on ${date}`);
}




