const { Schema, model } = require("mongoose");

const schema = new Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: "UserAuth",
            required: true,
        },
        roomId: {
            type: Schema.Types.ObjectId,
            ref: "Room",
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = model("MyBookingRooms", schema);
