const Joi = require("joi");

function validateAuth(req) {
  const schema = Joi.object({
    email: Joi.string()
      .min(5)
      .max(255)
      .required()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "ru", "uz"] } }),
    password: Joi.string().min(5).max(1024).required(),
  });
  return schema.validate(req);
}

module.exports = validateAuth;
