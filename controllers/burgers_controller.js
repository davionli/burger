var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res) {
    console.log("input", req.body)
    burger.createOne(["burger_name", "burger_calories"], [req.body.burger_name, req.body.burger_calories], function(result) {
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
    });
});  

router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burger.updateOne(
        {
            devoured: req.body.devoured
        },
        condition,
        function(result) {
            if (result.changedRows === 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
            }
            res.status(200).end();
        }
    );
});
  
// Export routes for server.js to use.
module.exports = router;