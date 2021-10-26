const router = require("express").Router();
//Converstion accede a bd de datos utilizando mongoose
const Conversation = require("../models/Conversation");

//new conv
/**req: requiere una petición que de la url : "/" */
router.post("/", async (req, res) => {
    /** Se crea una constante newConversation que va ser la respuesta que viene de la base de datos, se va a crear una nueva conversación (new Conversation: con las propiedades del modelo) que requiere del body el senderId: Id del remitente y receiverId:Id del receptor*/
    const newConversation = new Conversation({
        members: [req.body.senderId, req.body.receiverId],
    });

    try {
        /** Con await newConversation.save(): vamos a guardar la información en mongoDB*/
        const savedConversation = await newConversation.save();
        /**el status(200) me indica que la solicitud ha tenido exito y me devuelve un json de  conversation*/
        res.status(200).json(savedConversation);
    } catch (err) {
        /**el status(500) Error Interno del servidor: indica que el servidor encontró una condición inesperada que le impide completar la petición*/
        res.status(500).json(err);
    }
});

//get conv of a user
/**De mongoose se untiliza la función: model.find() */
router.get("/:userId", async (req, res) => {
    try {
        /** Creo una constante conversation y va esperar a el modelo Conversation para encontrar la colección de Conversation*/
        const conversation = await Conversation.find({
            /**$in:operador de mongo el cual selecciona los documentos donde el valor de un campo es igual a cualquier valor de la matriz especificada(en este caso a userId, es decir, me buscara y filtrara en la BD el "/:userId" que se encuentra especificado en la url) */
            /** req.params.userId: se requiere el parametro  userId enviado por url "/:userId"*/
            members: { $in: [req.params.userId] },
        });
        /**el status(200) me indica que la solicitud ha tenido exito y me devuelve un json de  conversation*/
        res.status(200).json(conversation);
    } catch (err) {
        /**el status(500) Error Interno del servidor: indica que el servidor encontró una condición inesperada que le impide completar la petición*/
        res.status(500).json(err);
    }
});

// get conv includes two userId

router.get("/find/:firstUserId/:secondUserId", async (req, res) => {
    try {
        const conversation = await Conversation.findOne({
            members: {
                $all: [req.params.firstUserId, req.params.secondUserId],
            },
        });
        res.status(200).json(conversation);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
