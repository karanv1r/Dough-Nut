const { response } = require("express");
const express = require("express");
const signUpTemplateCopy = require("../models/signupmodels");
const recipeTemplateCopy = require("../models/recipeModel");
const router = express.Router();
var Sentiment = require("sentiment");
var sentiment = new Sentiment();

router.post("/signup", function (req, res) {
  const signedUpUser = new signUpTemplateCopy({
    fullName: req.body.fullName,
    email: req.body.email,
    password: req.body.password,
  });
  signedUpUser
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json(error);
    });
});

router.get("/login", function (req, res) {
  signUpTemplateCopy.findOne(
    {
      email: req.query.user_email,
      password: req.query.user_password,
    },
    function (err, person) {
      if (err) res.json(err);
      res.send({
        person: {
          ...person,
        },
      });
    }
  );
});

router.post("/postRecipe", function (req, res) {
  const recipe = new recipeTemplateCopy({
    recipeName: req.body.title,
    steps: req.body.recipelist,
    comments: [],
  });
  recipe
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json(error);
    });
});

router.get("/getRecipe", function (req, res) {
  recipeTemplateCopy.find({}, function (err, recipes) {
    var scores = [];
    recipes.map((recipe) => {
      var comments = recipe.comments;
      var score = 0;
      comments.map((cmnt) => {
        var score_temp = sentiment.analyze(cmnt.comment);
        score = score + score_temp.score;
      });
      scores.push(score);
    });
    var objects_list = [];
    for (let i = 0; i < recipes.length; i++) {
      var new_obj = {
        steps: recipes[i].steps,
        comments: recipes[i].comments,
        _id: recipes[i]._id,
        recipeName: recipes[i].recipeName,
        __v: recipes[i].__v,
        score: scores[i],
      };
      objects_list.push(new_obj);
    }
    res.json(objects_list);
  });
});

router.post("/postComment", function (req, res) {
  recipeTemplateCopy.findByIdAndUpdate(
    { _id: req.body._id },
    {
      $push: {
        comments: {
          comment: req.body.comment,
          name: req.body.name,
        },
      },
    },
    {
      new: true,
    },
    function (err, docs) {
      if (err) {
        console.log(err);
      }
    }
  );
  res.json({ response: "posted successfully" });
});

module.exports = router;
