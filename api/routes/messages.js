const router = require("express").Router();
const Message = require("../models/Message");

//add

router.post("/", async (req, res) => {
    /** Se crea una constante newMessage que va ser la respuesta que viene de la base de datos, se va a crear un nuevo mensaje (new Message: con las propiedades del modelo) que requiere del body*/
    const newMessage = new Message(req.body);

    try {
        /**Con await newMessage.save(): vamos a guardar la información en mongoDB */
        const savedMessage = await newMessage.save();
        /**el status(200) me indica que la solicitud ha tenido exito y me devuelve un json de  conversation*/
        res.status(200).json(savedMessage);
    } catch (err) {
        /**el status(500) Error Interno del servidor: indica que el servidor encontró una condición inesperada que le impide completar la petición*/
        res.status(500).json(err);
    }
});

//get

router.get("/:conversationId", async (req, res) => {
    try {
        /** Creo una constante messages y va esperar a el modelo Message para encontrar la colección de Message*/
        const messages = await Message.find({
            /**Una vez dentro de la colección Message va a: req.params.conversationId: requerir el parametro conversationId que indica la url "/:conversationId" en la base de datos*/
            conversationId: req.params.conversationId,
        });
        res.status(200).json(messages);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
