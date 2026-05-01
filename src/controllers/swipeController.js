const swipeService = require("../services/swipeService");

const swipe = async (req, res) => {
    try {
        const { touserid, type } = req.body;
        const { swipe, match } = await swipeService.processSwipe(req.userid, touserid, type);

        if (match) {
            return res.status(200).json({
                msg: "swipe saved and it's a match!",
                swipe,
                match
            });
        }

        res.json({
            msg: "swipe saved",
            swipe
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { swipe };
