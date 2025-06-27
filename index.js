const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

// Crear cliente con almacenamiento local
const client = new Client({
    authStrategy: new LocalAuth()
});

// Mostrar el QR en consola
client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

// Lista de contactos para mensaje automático al iniciar
const destinatarios = [
    '573115807057@c.us', // Tu número
    '573147385677@c.us'  // Segundo número de prueba
];

// Mensaje inicial personalizado (post-llamada)
const mensajeInicial = 
`👋 Hola, espero que estés muy bien. Soy [Nombre del Candidato].

Quiero agradecerte por tomarte el tiempo de hablar conmigo. Tu apoyo es muy valioso en este camino que estamos construyendo juntos.

1️⃣ Si quieres recibir noticias y actualizaciones.
2️⃣ Si deseas compartir una idea o sugerencia.
3️⃣ Si quieres hablar con alguien de mi equipo.

Escríbeme el número de la opción que prefieras. Estoy muy pendiente. 🙌`;

// Enviar mensaje automático al iniciar el bot
client.on('ready', async () => {
    console.log('✅ Bot conectado y listo');

    for (const numero of destinatarios) {
        try {
            await client.sendMessage(numero, mensajeInicial);
            console.log(`📤 Mensaje enviado a ${numero}`);
        } catch (error) {
            console.error(`❌ Error al enviar mensaje a ${numero}:`, error);
        }
    }
});

// Lógica de respuestas
client.on('message', async msg => {
    const text = msg.body.toLowerCase();

    if (text.includes('hola')) {
        msg.reply(mensajeInicial);
    } else if (text === '1') {
        msg.reply('📢 Perfecto. A partir de ahora te estaré enviando noticias y actualizaciones importantes. ¡Gracias por tu interés!');
    } else if (text === '2') {
        msg.reply('📝 Me encantará conocer tus ideas. Puedes escribirlas aquí y las leeré con atención. ¡Gracias por aportar!');
    } else if (text === '3') {
        msg.reply('📞 Un miembro de mi equipo te contactará pronto para escucharte. ¡Gracias por querer conversar más!');
    } else if (text === 'menú') {
        msg.reply(mensajeInicial);
    }
});

// Iniciar el cliente
client.initialize();
