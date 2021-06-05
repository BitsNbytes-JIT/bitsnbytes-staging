const Validator = require("validator");
const isEmpty = require("is-empty");


module.exports = function validateLoginInput(data) {
  let errors = {};
  
  const emailid=data.email.split("@")[1];
  //regular expression to specify jyothy  id
  var re = /^jyothyit\.ac\.in$/;
  if(re.test(emailid)){
    validdomain=true;
    }else{
      validdomain=false;
    }
  // Convert empty fields to an empty string so we can use validator functions
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  // Email checks
  //checks if email field is empty
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  } 
  //checks if email is valid or not
  else if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }else if(validdomain==false){
    errors.email = "enter jyothy id only";
  }else{
     // Password checks
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }
  }

 

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
