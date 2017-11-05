// This code validates email id from java script//

function ValidateEmail(mail)   
{  
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))  
  {  
    return (true)  
  }  
    alert("You have entered an invalid email address!")  
    return (false)  
}  


 $(document).ready(function () {
         var listItems = '<option selected="selected" value="0">- Select -</option>';
 
      for (var i = 0; i < jsonData.Table.length; i++) {
             listItems += "<option value='" + jsonData.Table[i].stateid + "'>" + jsonData.Table[i].statename + "</option>";
         }
 
         $("#DLState").html(listItems);
     });