import Joi from '@hapi/joi';


const registerValidation = data => {
const schema = Joi.object({
    name : Joi.string().min(3).max(50).required(),
    usn: Joi.string().min(10).max(10).required(),
    branch : Joi.string().min(3).max(50).required(),
    sem: Joi.number().integer().min(1).max(8).required(),
    email : Joi.string().min(6).max(50).required().email(),
    phone : Joi.number().integer().required(),
    volunteer: Joi.string(),
    interest: Joi.string()
 });
return schema.validate(data);
};













export default registerValidation;
