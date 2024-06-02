const Joi = require('joi');
const dataSchema = Joi.object({
    name: Joi.string().min(5).max(10).required(),
    value: Joi.number().required(),
});

const validateData = (data)=>{
    return dataSchema.validate(data);
}

module.exports =validateData;