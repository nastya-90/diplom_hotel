const express = require("express");
const MyBookingRooms = require("../models/MyBookingRooms");
const auth = require("../middleware/auth.middleware");
const router = express.Router({ mergeParams: true });

router.route("/").get(async (req, res) => {
    try {
        const { orderBy, equalTo } = req.query; //уточнить параметры получаемые от фронтенда
        const list = await MyBookingRooms.find({ [orderBy]: equalTo });
        res.send(list);
    } catch (error) {
        res.status(500).json({
            message: "На сервере произошла ошибка. Попробуйте позже",
        });
    }
});
/*.post(async (req, res) => {
        try {
            await 
        } catch (error) {
            res.status(500).json({
                message: "На сервере произошла ошибка. Попробуйте позже",
            });
        }
    });*/
router.delete("/:roomId", auth, async (req, res) => {
    try {
        const { roomId } = req.params;
        const removedBookingRoom = await MyBookingRooms.findById(roomId);

        if (removedBookingRoom.userId.toString() === req.user._id) {
            await removedBookingRoom.remove();
            return res.send(null);
        } else {
            res.status(401).json({ message: "Unauthorized" });
        }
    } catch (error) {
        res.status(500).json({
            message: "На сервере произошла ошибка. Попробуйте позже",
        });
    }
});

module.exports = router;
