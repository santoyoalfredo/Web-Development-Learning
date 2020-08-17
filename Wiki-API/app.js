const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const e = require("express");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/wikiDB", { useNewUrlParser: true, useUnifiedTopology: true });

const articleSchema = new mongoose.Schema({
    title: String,
    content: String
});

const Article = mongoose.model("Article", articleSchema);

app.route("/articles")

.get(function(req, res) {
    Article.find(function (err, foundArticles) {
        if (!err) {
            res.send(foundArticles);
        } else {
            res.send(err);
        }
    });
})
.post(function (req, res) {

    const article = new Article({ title: req.body.title, content: req.body.content });
    article.save(function (err) {
        if (!err) {
            res.send("Success.");
        } else {
            res.send(err);
        }
    });
})
.delete(function (req, res) {
    Article.deleteMany(function (err) {
        if (!err) {
            res.send("Success.");
        } else {
            res.send(err);
        }
    });
});

app.route("/articles/:articleTitle")

.get(function(req, res) {
    Article.findOne({ title: req.params.articleTitle}, function(err, foundArticle) {
        if(!err) {
            res.send(foundArticle);
        } else {
            res.send(err);
        }
    });
});

app.listen(3000, function () {
    console.log("Server started on port 3000");
});
