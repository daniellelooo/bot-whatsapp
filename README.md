# 🤖 Bot WhatsApp – Comunicación Directa con Votantes

Este es un chatbot automatizado que responde por WhatsApp y permite enviar mensajes predefinidos a ciertos contactos. Ideal para mantener una relación cercana con personas clave en una campaña política.

---

## 🧠 ¿Qué hace este bot?

- Responde automáticamente al mensaje "hola"
- Ofrece un menú con opciones interactivas
- Permite enviar mensajes automáticos a números seleccionados

---

## 🛠️ Requisitos previos

Antes de usar este bot, asegúrate de tener:

1. ✅ Una cuenta de WhatsApp activa  
2. ✅ Un computador con **Windows, macOS o Linux**  
3. ✅ Conexión a internet  
4. ✅ Node.js instalado (ver paso 1 abajo)

---

## 📦 Instalación paso a paso

### 🔹 1. Instalar Node.js (solo una vez)

1. Ve a 👉 [https://nodejs.org](https://nodejs.org)  
2. Descarga la versión **LTS (recomendada para la mayoría)**  
3. Instala normalmente (siguiente → siguiente…)

### 🔹 2. Clonar el repositorio

Abre una terminal (CMD o PowerShell) y ejecuta:

```bash
git clone https://github.com/daniellelooo/bot-whatsapp.git
cd bot-whatsapp
```

Si no tienes `git` instalado, puedes descargar el código como ZIP desde GitHub.

### 🔹 3. Instalar las dependencias

```bash
npm install
```

Esto instalará automáticamente todas las librerías necesarias como:

- `whatsapp-web.js`
- `qrcode-terminal`

---

## 🚀 Cómo iniciar el bot

### 🔹 4. Ejecutar el bot

En la misma terminal, escribe:

```bash
node index.js
```

Esto iniciará el bot y generará un **código QR**.

### 🔹 5. Escanear el QR con tu WhatsApp

1. Abre WhatsApp en tu celular  
2. Toca los **tres puntos (⋮)** > **Dispositivos vinculados**  
3. Toca **“Vincular un dispositivo”**  
4. Escanea el código QR que aparece en la terminal

✅ Una vez escaneado, la terminal mostrará:

```
✅ Bot conectado y listo
```

---

## 🧪 Probar el bot

- Desde otro número de WhatsApp, escribe **"hola"** al número donde conectaste el bot.  
- El bot responderá automáticamente con un menú interactivo.  
- Prueba enviando **1**, **2**, **3** o **menú**.

---

## 📁 Archivos importantes

| Archivo / Carpeta       | Descripción                                |
|-------------------------|--------------------------------------------|
| `index.js`              | Lógica principal del bot                   |
| `package.json`          | Lista de dependencias                      |
| `.gitignore`            | Archivos que no se suben a GitHub          |
| `.wwebjs_auth/`         | Carpeta con la sesión (no la compartas)    |

---

## ⚠️ Notas y recomendaciones

- El bot solo funciona mientras la terminal esté abierta.  
- No cierres la terminal o se detendrá el bot.  
- Para dejarlo encendido todo el tiempo, puedes usar herramientas como **PM2** más adelante.  
- No subas `node_modules/` ni compartas tu sesión de WhatsApp (carpeta `.wwebjs_auth/`).

---

## 🧠 ¿Qué sigue?

- Conectar una base de datos para guardar respuestas  
- Agregar opciones personalizadas para cada contacto  
- Crear un panel de administración para mensajes masivos

---


## 📄 Licencia

Este bot es de uso interno para campañas y fines educativos.
