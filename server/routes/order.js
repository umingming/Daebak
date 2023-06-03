var router = require("express").Router();

module.exports = function (db) {
    router.get("/", (req, res) => {
        const { user_id } = req.query;

        db.collection("order")
            .find({ user_id })
            .toArray((err, result) => {
                if (err) return res.status(500).json();
                return res.status(200).json(result);
            });
    });

    router.post("/", (req, res) => {
        const { user_id, params } = req.body;

        db.collection("counter").findOne({ name: "order" }, (err, result) => {
            if (err) return res.status(500).json();

            let { total } = result;
            params.forEach((i) => {
                i.user_id = user_id;
                i._id = total++;
            });
            db.collection("order").insertMany(params, (err, result) => {
                if (err || !result) return res.status(500).json();

                db.collection("counter").updateOne(
                    { name: "order" },
                    { $set: { total } }
                );
                return res.status(200).json(result.ops);
            });
        });
    });

    router.put("/", (req, res) => {
        const { _id, field } = req.body;
        db.collection("order").updateMany(
            { _id: { $in: [..._id] } },
            { $set: { ...field } },
            (err) => {
                if (err) return res.status(500).json();

                db.collection("order")
                    .find({ _id: { $in: [..._id] } })
                    .toArray((err, result) => {
                        if (err) return res.status(500).json();
                        return res.status(200).json(result);
                    });
            }
        );
    });

    router.delete("/", (req, res) => {
        const ids = req.query.ids.split(",").map((i) => +i);
        db.collection("order").deleteMany(
            { _id: { $in: [...ids] } },
            (err, result) => {
                if (err) return res.status(500).json();
                return res.status(200).json(result);
            }
        );
    });

    return router;
};
