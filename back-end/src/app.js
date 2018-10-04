const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const healthController = require("./controllers/health");

const PORT = process.env.MOCK_SERVER_PORT || 5000;
const BASE_URL = `http://localhost:${PORT}`;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

const options = {
    swaggerDefinition: {
        info: {
            title: "Tarot API",
            version: "0.1.0"
        }
    },
    apis: ["./src/controllers/*.js"]
};
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(options)));

app.use(healthController);

app.listen(PORT, () => {
    if (process.env.NODE_ENV !== "test") {
        console.log(`\nTarot API started: ${BASE_URL}/api-docs\n`);
    }
});

module.exports = app;
