const Swipe = require("../models/swipeModel");
const Match = require("../models/matchModel");

const processSwipe = async (userid, touserid, type) => {
    if (touserid === userid) {
        throw new Error("you cannot swipe yourself");
    }

    // Create the swipe record
    const swipe = await Swipe.create({
        fromUser: userid,
        toUser: touserid,
        type
    });

    let match = null;

    // Logic for match detection
    if (type === "like" && touserid) {
        // Check if the other user has already liked the current user
        const existinglike = await Swipe.findOne({
            fromUser: touserid,
            toUser: userid,
            type: "like"
        });

        if (existinglike) {
            // Check if a match already exists to avoid duplicates
            match = await Match.findOne({
                users: { $all: [userid, touserid] }
            });

            if (!match) {
                match = await Match.create({
                    users: [userid, touserid]
                });
            }
        }
    }

    return { swipe, match };
};

module.exports = { processSwipe };
