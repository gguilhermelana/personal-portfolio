# Portfolio Backend - API de Email

Backend em Node.js com Express para envio de emails do formulário de contato do portfolio.

## 🚀 Funcionalidades

- ✅ Envio de emails via formulário de contato
- ✅ Validação de dados com Joi
- ✅ Rate limiting para prevenir spam
- ✅ CORS configurado para o frontend
- ✅ Templates HTML para emails
- ✅ Middleware de segurança
- ✅ Logs detalhados
- ✅ Health check endpoint

## 📋 Pré-requisitos

- Node.js 18+ 
- NPM ou Yarn
- Conta de email (Gmail recomendado)

## 🔧 Instalação

1. **Instalar dependências:**
```bash
cd src/back
npm install
```

2. **Configurar variáveis de ambiente:**
```bash
cp .env.example .env
```

3. **Editar o arquivo `.env` com suas configurações:**

4. **Configurar o email no Gmail** (veja seção abaixo)

## 📧 Configuração do Gmail

Para usar o Gmail, você precisará:

1. **Ativar autenticação de 2 fatores** na sua conta Google
2. **Gerar uma senha de app:**
   - Vá para [Configurações da conta Google](https://myaccount.google.com)
   - Segurança → Senhas de app
   - Selecione "Email" e "Computador"
   - Use a senha gerada no campo `EMAIL_PASS`

## 🎯 Como usar

1. **Iniciar o servidor:**
```bash
npm run dev  # desenvolvimento
npm start    # produção
```

2. **Testar a API:**
```bash
curl http://localhost:3001/api/health
```

## 📡 Endpoints da API

### `GET /api/health`
Health check do servidor.

### `POST /api/email/send`
Envio de email de contato.

**Body:**
```json
{
  "name": "João Silva",
  "email": "joao@exemplo.com",
  "message": "Olá, gostaria de conversar sobre um projeto..."
}
```

## 🔒 Segurança

- **Rate Limiting:** Máximo 5 requests por IP a cada 15 minutos
- **CORS:** Configurado para aceitar apenas requests do frontend
- **Helmet:** Headers de segurança
- **Validação:** Sanitização de dados com Joi

## 📝 Licença

Este projeto está sob a licença MIT.