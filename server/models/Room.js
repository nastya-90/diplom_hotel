const { Schema, model } = require("mongoose");

const schema = new Schema(
    {
        name: {
            type: String,
        },
        number: {
            type: String,
        },
        photo: {
            type: String,
        },
        price: {
            type: Number,
        },
        reserve: {
            type: Boolean,
        },
        dataStart: {
            type: Number,
        },
        dataEnd: {
            type: Number,
        },
        beds: {
            type: String,
        },
        room: {
            type: Number,
        },
        area: {
            type: Number,
        },
        guests: {
            type: Number,
        },
        info: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = model("Room", schema);
