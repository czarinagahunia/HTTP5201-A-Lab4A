//LAB 4 - JS ENCRYPTION
window.onload = function() {
    "use strict";
    var passForm = document.forms.getMD5form;
    passForm.onsubmit = function() {
      var encryptedPass = document.getElementById("getMD5__output");
      var passIn = passForm.getMD5form__input;
      var passInMd5 = CryptoJS.MD5(passIn.value);
        if (passIn.value === "") {
            encryptedPass.innerHTML = "ERROR! You did not enter any characters.";
        } else {
          encryptedPass.innerHTML = "Your hashed password is: " + passInMd5;
        }
        return false;
    }
}//end of onload function