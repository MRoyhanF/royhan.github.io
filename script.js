function luasSegitiga(){
     var field1=document.getElementById("alas").value;
     var field2=document.getElementById("tinggi").value;

     var result=0.5 *parseFloat(field1)*parseFloat(field2);

     if(!isNaN(result)){
         document.getElementById("answer").innerHTML="L= 1/2 x a x t <br>"+
         "L = 1/2 x " + field1 + " x " + field2 +"<br>"+
         "L = "+ result;
     }
 };
 function resetTiga(){
     document.getElementById("alas").innerHTML="";
     document.getElementById("tinggi").innerHTML="";
 };

 function luasJg(){
     var field1=document.getElementById("alasjg").value;
     var field2=document.getElementById("tinggijg").value;

     var result=0.5 *parseFloat(field1)*parseFloat(field2);

     if(!isNaN(result)){
         document.getElementById("answerjg").innerHTML="L= Alas x Tinggi <br>"+
         "L = " + field1 + " x " + field2 +"<br>"+
         "L = "+ result;
     }
 };

//  function luasSegitiga (){
//      var a1 =document.getElementById('alas').value;
//      var a1 =document.getElementById('tinggi').value;
//      var total =0.5 *parseInt(alas)*parseInt(tinggi);
//      total.innerHTML = "<p>L= 1/2 x a x t</p>"; 
//      document.getElementById("Answer").innerHTML="The Answer is"+ total;
//      console.info (total);
//      // document.write("<p>L= 1/2 x a x t</p>")
//      // if(!isNaN(reesult)){
//      //     document.getElementById("Answer").innerHTML="The Answer is"+ total;
//      // }
//  }