const nodemailer = require("nodemailer");

async function sendMail(client, email, products) {
  const transporter = nodemailer.createTransport({
    host: "smtp.mail.yahoo.com",
    port: 465, // Usa 465 para conexión segura (SSL/TLS)
    secure: true, // true para puerto 465, falso para otros puertos
    auth: {
      user: "damian.bastos@yahoo.com",
      pass: "bjocefmgqmgonnos", // Asegúrate de que esta sea la contraseña correcta o la contraseña de la aplicación
    },
  });

  // Genera la lista de productos en HTML
  const productList = products.map(product => `
    <li>
      <img src="${product.image}" alt="${product.name}" style="width:100px;">
      <p><strong>Producto:</strong> ${product.name}</p>
      <p><strong>Cantidad:</strong> ${product.quantity}</p>
      <p><strong>Precio por unidad:</strong> $${product.unit_price}</p>
      <p><strong>Total:</strong> $${product.price}</p>
    </li>
  `).join('');

  try {
    const info = await transporter.sendMail({
      from: '"Market Shoe 👟" <damian.bastos@yahoo.com>', // Dirección del remitente
      to: [email, "damian.bastos@yahoo.com", "cigano32@hotmail.com"], // Dirección del receptor
      subject: "Info de tu compra!", // Asunto del correo
      text: `Buenos días, ${client}`, // Cuerpo del texto plano
      html: `
        <div>
          <h2>Hola ${client}, gracias por tu compra!!</h2>
          <h3>Aquí está la información de tus productos:</h3>
          <ul>
            ${productList}
          </ul>
          <div>
          <ul>
          <h4>Para confirmar pago comunicarse por:</h4>
           <li>Email:cigano32@hotmail.com</li>
           <li>Whatsapp:+54 11 5004-3472</li></ul>
          
          </div>
        </div>
      `,
    });

    // console.log("Message sent: %s", info.messageId);
  } catch (error) {
    console.error("Error sending email: ", error);
  }
}

module.exports = sendMail;
