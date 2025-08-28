import Joi from 'joi';

// Schema de validação para dados de email
const emailSchema = Joi.object({
  name: Joi.string()
    .min(2)
    .max(100)
    .required()
    .trim()
    .messages({
      'string.empty': 'Nome é obrigatório',
      'string.min': 'Nome deve ter pelo menos 2 caracteres',
      'string.max': 'Nome deve ter no máximo 100 caracteres',
      'any.required': 'Nome é obrigatório'
    }),
  
  email: Joi.string()
    .email()
    .required()
    .trim()
    .lowercase()
    .messages({
      'string.empty': 'Email é obrigatório',
      'string.email': 'Email deve ter um formato válido',
      'any.required': 'Email é obrigatório'
    }),
  
  message: Joi.string()
    .min(10)
    .max(5000)
    .required()
    .trim()
    .messages({
      'string.empty': 'Mensagem é obrigatória',
      'string.min': 'Mensagem deve ter pelo menos 10 caracteres',
      'string.max': 'Mensagem deve ter no máximo 5000 caracteres',
      'any.required': 'Mensagem é obrigatória'
    })
});

// Middleware de validação
export const validateEmailData = (req, res, next) => {
  const { error, value } = emailSchema.validate(req.body, {
    abortEarly: false, // Retornar todos os erros
    stripUnknown: true // Remover campos não definidos no schema
  });
  
  if (error) {
    const errors = error.details.map(detail => ({
      field: detail.path[0],
      message: detail.message
    }));
    
    return res.status(400).json({
      success: false,
      error: 'Dados inválidos',
      details: errors,
      timestamp: new Date().toISOString()
    });
  }
  
  // Substituir req.body pelos dados validados e sanitizados
  req.body = value;
  next();
};

// Função para validar configurações de email
export const validateEmailConfig = () => {
  const requiredEnvVars = [
    'EMAIL_HOST',
    'EMAIL_PORT',
    'EMAIL_USER',
    'EMAIL_PASS',
    'EMAIL_FROM',
    'EMAIL_TO'
  ];
  
  const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);
  
  if (missingVars.length > 0) {
    throw new Error(`Variáveis de ambiente faltando: ${missingVars.join(', ')}`);
  }
  
  return true;
};
