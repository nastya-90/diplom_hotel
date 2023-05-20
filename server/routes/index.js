const express = require("express");
const router = express.Router({ mergeParams: true });

router.use("/userAuth", require("./userAuth.routes"));
router.use("/rooms", require("./rooms.routes"));
router.use("/myBookingRooms", require("./myBookingRooms.routes"));

module.exports = router;
