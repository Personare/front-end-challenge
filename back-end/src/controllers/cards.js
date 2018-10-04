const router = require("express").Router();
const fixture = require("../tarot.json");

/**
 * @swagger
 * /cards:
 *   get:
 *     description: List of Tarot cards
 *     tags:
 *       - Cards
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: success
 *         schema:
 *           type: object
 *           properties:
 *             imagesUrl:
 *               type: string
 *             imageBackCard:
 *               type: string
 *             cards:
 *               type: array
 *               items:
 *                 type: object
 */
router.get("/cards", (req, res) => {
    res.json(fixture);
});

module.exports = router;
