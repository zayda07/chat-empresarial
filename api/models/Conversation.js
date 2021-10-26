const mongoose = require("mongoose");

const ConversationSchema = new mongoose.Schema(
    {
        members: {
            type: Array,
        },
    },
    { timestamps: true }
);

//crear modelo: Conversation=nombre del modelo y ConversationSchema=Shema
module.exports = mongoose.model("Conversation", ConversationSchema);
/** Se tiene que instalar mongoose: npm install mongoose*/

/**schema es como la estructura */
/**dentro de Shema estan los parametros o estructura que va a tener nuestra collection en mongodb */

/**El anterior objeto corresponde al contenedor que va en la parte izquierda del chat donde se puede ver los miembros,
 * members: array de los miembros del chat, timestamps: es el tiempo en el que se envió el último mensaje (hora, minuto)*/
