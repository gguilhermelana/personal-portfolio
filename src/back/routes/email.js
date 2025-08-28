import express from 'express';
import { sendContactEmail } from '../services/emailService.js';
import { validateEmailData } from '../middlewares/validation.js';

const router = express.Router();

// Rota para envio de email de contato
router.post('/send', validateEmailData, async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    console.log(`📧 Enviando email de: ${name} (${email})`);
    
    const result = await sendContactEmail({ name, email, message });
    
    if (result.success) {
      console.log(`✅ Email enviado com sucesso para: ${email}`);
      res.status(200).json({
        success: true,
        message: 'Email enviado com sucesso!',
        timestamp: new Date().toISOString()
      });
    } else {
      console.error(`❌ Erro ao enviar email:`, result.error);
      res.status(500).json({
        success: false,
        error: 'Erro ao enviar email. Tente novamente mais tarde.',
        timestamp: new Date().toISOString()
      });
    }
  } catch (error) {
    console.error('❌ Erro no endpoint de envio:', error);
    res.status(500).json({
      success: false,
      error: 'Erro interno do servidor',
      timestamp: new Date().toISOString()
    });
  }
});

// Rota de teste (apenas em desenvolvimento)
if (process.env.NODE_ENV !== 'production') {
  router.get('/test', (req, res) => {
    res.status(200).json({
      message: 'API de email funcionando!',
      timestamp: new Date().toISOString(),
      env: process.env.NODE_ENV
    });
  });
}

export default router;
