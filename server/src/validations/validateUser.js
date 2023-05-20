const Joi = require("joi");

function validateUser(user) {
  const schema = Joi.object({
    name: Joi.string().min(3).max(50).required(),
    email: Joi.string()
      .min(5)
      .max(255)
      .required()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "ru", "uz"] } }),
    password: Joi.string().min(5).max(1024).required(),
    photo: Joi.string(), // ustozdan so'rash kerak
  });
  return schema.validate(user);
}

module.exports = validateUser;
