totalBalance =10000;

$(document).ready(function () {
   
   const userDeposit = $("#userDeposit");
   const userwithdraw = $("#userwithdraw");
   
   var arr = JSON.parse(localStorage.getItem("userBalance")) ||[];
    document.getElementById("balance").innerHTML=arr[arr.length-1];
    if(arr.length==0){
        var arr = []
        arr.push(totalBalance);
        localStorage.setItem("userBalance", JSON.stringify(arr));
      
    }
    $("#btnDeposit").click(function () {
               var arr = JSON.parse(localStorage.getItem("userBalance")) || [];
               var lastAmount = arr[arr.length-1]
               var amount = Number(userDeposit.val())
               lastAmount  +=  amount;
               arr.push(lastAmount);
               document.getElementById("balance").innerHTML=arr[arr.length-1];
               localStorage.setItem("userBalance", JSON.stringify(arr))
               amount = Number(userDeposit.val(""));
               console.log(arr); 

            
   });

   $("#btnWithdraw").click(function () {
       var arr = JSON.parse(localStorage.getItem("userBalance")) || [];
               var lastAmount = arr[arr.length-1]
               var amount = Number(userwithdraw.val())
               if(lastAmount >= amount)
            {
               lastAmount = lastAmount - amount;
               arr.push(lastAmount);
               document.getElementById("balance").innerHTML=arr[arr.length-1];
               localStorage.setItem("userBalance", JSON.stringify(arr))
               amount = Number(userwithdraw.val(""));
            }
            else
            {
            alert("Insufficient Balance");
            }    
            //alert("Your balance is "+lastAmount); 
           });
       
})
       