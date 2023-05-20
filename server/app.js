const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const chalk = require("chalk");
const cors = require("cors");
const initDataBase = require("./startUp/initDataBase");
const routes = require("./routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/api", routes);

const PORT = config.get("port") ?? 8080;

/* if(process.env.NODE_ENV==="production"){
    console.log("Production")
}else{
    console.log("Development")
} */

// user - asokladnaya
// pass - PnpVrfDYIe2rQ8s6

async function start() {
    try {
        mongoose.connection.once("open", () => {
            initDataBase();
        });
        await mongoose.connect(config.get("mongoUri"));
        console.log(chalk.green("MongoDB connected"));
        app.listen(8080, () =>
            console.log(
                chalk.green(`Server has beem started on port ${PORT}...`)
            )
        );
    } catch (error) {
        console.log(chalk.red(error.message));
        process.exit(1);
    }
}

start();
