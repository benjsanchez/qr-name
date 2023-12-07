// Requerir el módulo nodemailer
const nodemailer = require('nodemailer');

// Configurar el transporter (servidor SMTP)
let transporter = nodemailer.createTransport({
    service: 'alumnoduoc', // Aquí puedes usar otros servicios SMTP o configurar SMTP personalizado
    auth: {
        user: 'benjas@alumnoduoc.cl', // Cambiar por tu dirección de correo electrónico
        pass: '12345' // Cambiar por tu contraseña de correo electrónico
    }
});

// Configurar el mensaje
let mailOptions = {
    from: 'tucorreo@gmail.com', // Dirección de correo del remitente
    to: 'destinatario@example.com', // Dirección de correo del destinatario
    subject: 'Asunto del correo',
    text: 'Contenido del correo'
};


