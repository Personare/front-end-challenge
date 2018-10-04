const router = require("express").Router();

/**
 * @swagger
 * /health-check:
 *   get:
 *     description: Health Check
 *     tags:
 *       - Health
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: success
 *         schema:
 *           type: object
 *           properties:
 *             status:
 *               type: string
 */
router.get("/health-check", (req, res) => {
    res.json({ status: "UP" });
});

module.exports = router;
