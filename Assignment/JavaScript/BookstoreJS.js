
 // Redirect the user to the pay.html page

document.getElementById("Pay1").addEventListener("click", function() { // Find the pay1 button element on the index.html page and add a click event listener to the pay button //
    window.open("pay.html", "_blank");          // Redirect the user to the pay.html page
  });

document.getElementById("Pay2").addEventListener("click", function() { // Find the pay2 button element on the index.html page and add a click event listener to the pay button //
    window.open("pay.html", "_blank");         // Redirect the user to the pay.html page
  });

document.getElementById("Pay3").addEventListener("click", function() { // Find the pay3 button element on the index.html page and add a click event listener to the pay button //
    window.open("pay.html", "_blank");         // Redirect the user to the pay.html page
  });

document.getElementById("Pay4").addEventListener("click", function() { // Find the pay4 button element on the index.html page and add a click event listener to the pay button //
    window.open("pay.html", "_blank");        // Redirect the user to the pay.html page
  });


function ConButton(){

  // user's input values - card details
  var CardNumber = document.getElementById("CardNo").value;
  var months = document.getElementById("Month").value;
  var years = document.getElementById("Year").value;
  var pin = document.getElementById("PIN").value;

  // validate user's credit card details

  if(!/^[0-9]{16}$/.test(CardNumber)) {                     
    document.getElementById("Alert").innerHTML = "Card Number Entered Invalid";
  } else if ( months < 1 || months > 12) {
    document.getElementById("Alert").innerHTML = "Month Entered Invalid";
  } else if ( years < 2023 || years > 2030) {
    document.getElementById("Alert").innerHTML = "Year Entered Invalid";
  } else if (!/^[0-9]{3}$/.test(pin)) {
    document.getElementById("Alert").innerHTML = "PIN Number Entered Invalid";
  } else {
     //On passing validation, use JavaScript to send a POST request to the server (mudfoot.doc.stu.mmu.ac.uk/node/api/creditcard)//
      const url ="https://mudfoot.doc.stu.mmu.ac.uk/node/api/creditcard";
      const data = {
        master_card: CardNumber,
        exp_month: months,
        exp_year: years,
        cvv_code: pin
      };

      fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type' : 'application/json'
        }
      })

      .then(response => {
        if(response.ok) {
          window.open("success.html");
        } else {
          document.getElementById("Alert").innerHTML = "Error";
        }
      })

      .catch(error => {
        console.error('Error:', error);
        document.getElementById("Alert").innerHTML = "Error";
      });
    }
}