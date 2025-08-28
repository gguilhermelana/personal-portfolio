import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

// Configurar transporter do Nodemailer
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: process.env.EMAIL_SECURE === 'true',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    },
    tls: {
      rejectUnauthorized: false
    }
  });
};

// Template HTML para o email
const createEmailTemplate = ({ name, email, message }) => {
  return `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Novo Contato - Portfolio</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
        .content { background: #ffffff; padding: 20px; border: 1px solid #e9ecef; border-radius: 8px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #495057; }
        .value { margin-top: 5px; padding: 10px; background: #f8f9fa; border-radius: 4px; }
        .message-box { background: #e7f3ff; border-left: 4px solid #007bff; padding: 15px; margin-top: 15px; }
        .footer { margin-top: 20px; text-align: center; color: #6c757d; font-size: 12px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2 style="margin: 0; color: #007bff;">📧 Novo Contato do Portfolio</h2>
        </div>
        
        <div class="content">
          <div class="field">
            <div class="label">👤 Nome:</div>
            <div class="value">${name}</div>
          </div>
          
          <div class="field">
            <div class="label">📧 Email:</div>
            <div class="value">${email}</div>
          </div>
          
          <div class="message-box">
            <div class="label">💬 Mensagem:</div>
            <div style="margin-top: 10px; white-space: pre-wrap;">${message}</div>
          </div>
        </div>
        
        <div class="footer">
          <p>Este email foi enviado através do formulário de contato do seu portfolio.</p>
          <p>Data/Hora: ${new Date().toLocaleString('pt-BR')}</p>
        </div>
      </div>
    </body>
    </html>
  `;
};

// Função para enviar email de contato
export const sendContactEmail = async ({ name, email, message }) => {
  try {
    const transporter = createTransporter();
    
    // Verificar conexão com o servidor de email
    await transporter.verify();
    console.log('✅ Conexão com servidor de email estabelecida');
    
    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: `📧 Novo contato do portfolio - ${name}`,
      html: createEmailTemplate({ name, email, message }),
      text: `
Novo contato do portfolio

Nome: ${name}
Email: ${email}
Mensagem: ${message}

Data/Hora: ${new Date().toLocaleString('pt-BR')}
      `.trim()
    };
    
    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Email enviado:', info.messageId);
    
    return {
      success: true,
      messageId: info.messageId
    };
    
  } catch (error) {
    console.error('❌ Erro ao enviar email:', error);
    
    return {
      success: false,
      error: error.message
    };
  }
};

// Função para testar configuração de email
export const testEmailConfiguration = async () => {
  try {
    const transporter = createTransporter();
    await transporter.verify();
    return { success: true, message: 'Configuração de email válida' };
  } catch (error) {
    return { success: false, error: error.message };
  }
};
