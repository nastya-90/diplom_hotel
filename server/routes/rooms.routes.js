const express = require("express");
const Room = require("../models/Room");
const auth = require("../middleware/auth.middleware"); // защита роутов (отключено)
const router = express.Router({ mergeParams: true });

router.patch("/:roomId", async (req, res) => {
    try {
        const { roomId } = req.params;

        if (roomId) {
            const updateRoom = await Room.findByIdAndUpdate(roomId, req.body, {
                new: true,
            });
            res.send(updateRoom);
        } else {
            res.status(401).json({ message: "Unauthorized" });
        }
    } catch (error) {
        res.status(500).json({
            message: "На сервере произошла ошибка. Попробуйте позже",
        });
    }
});

router.get("/", async (req, res) => {
    try {
        const rooms = await Room.find();
        res.status(200).send(rooms);
    } catch (error) {
        res.status(500).json({
            message: "На сервере произошла ошибка. Попробуйте позже",
        });
    }
});

module.exports = router;
