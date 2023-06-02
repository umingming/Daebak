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
        const { _id, ...param } = req.body;
        db.collection("journal").findOneAndUpdate(
            { _id },
            { $set: { ...param } },
            { returnOriginal: false },
            (err, result) => {
                if (err) return res.status(500).json();
                return res.status(200).json(result.value);
            }
        );
    });

    router.delete("/:id", (req, res) => {
        const _id = +req.params.id;
        db.collection("journal").deleteOne({ _id }, (err, result) => {
            if (err) return res.status(500).json();
            return res.status(200).json(result);
        });
    });

    return router;
};
