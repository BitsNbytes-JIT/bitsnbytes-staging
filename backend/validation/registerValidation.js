const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data){
    // return res.status(200).json(data.Name);

    let errors = {};

    // Convert empty fields to an empty string so we can use validator functions
    data.Name = !isEmpty(data.Name) ? data.Name : "";
    data.USN = !isEmpty(data.USN) ? data.USN : "";
    data.Branch = !isEmpty(data.Branch) ? data.Branch : "";
    data.Sem = !isEmpty(data.Sem) ? data.Sem : "";
    data.Email = !isEmpty(data.Email) ? data.Email : "";
    data.Password = !isEmpty(data.Password) ? data.Password : "";
    data.Phone = !isEmpty(data.Phone) ? data.Phone : "";
    data.Role = !isEmpty(data.Role) ? data.Role : "";

    //Name checks
    if(Validator.isEmpty(data.Name)) {
        errors.Name = "Name field is required";
    }

    //USN check
    if(Validator.isEmpty(data.USN)) {
        errors.USN = "USN field is required";
    }

    //Branch check
    if(Validator.isEmpty(data.Branch)) {
        errors.Branch = "Branch field is required";
    }

    //Sem check
    if(Validator.isEmpty(data.Sem)) {
        errors.Sem = "Semester field is required";
    }

    //Email checks
    if(Validator.isEmpty(data.Email)){
        errors.Email = "Email field is required";
    }
    else if(!Validator.isEmail(data.Email)){
        errors.Email = "Email is invalid";
    }

    //Password checks
    if(Validator.isEmpty(data.Password)){
        errors.Password = "Password field is required";
    }

    if(!Validator.isLength(data.Password,{min:6,max:30})){
        errors.Password = "Password must be at least 6 characters";
    }

    //Phone check
    if(Validator.isEmpty(data.Phone)){
        errors.Phone = "Phone field is required";
    }

    if(!Validator.isLength(data.Phone,{min:10,max:10})){
        errors.Phone = "Phone number must be of 10 digits";
    }

    //role check
    if(Validator.isEmpty(data.Role)){
        errors.Role = "Role field is required";
    }


    return{
        errors,
        isValid:isEmpty(errors)
    };

};