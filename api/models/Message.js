const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema(
    {
        conversationId: {
            type: String,
        },
        sender: {
            type: String,
        },
        text: {
            type: String,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Message", MessageSchema);
/**El anterior array corresponde al contenedor que va en la parte central del chat donde se puede visualizar todos los mensajes,
 * Sender: es el remitente del mensaje, text: lo que contiene el mensaje y timestamps: es el tiempo en el que se envió el mensaje (hora, minuto), ccada elemento es de tipo string, conversationId=>en mongo se visualiza como un código largo */
