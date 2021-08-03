const data = require('../data.json')

exports.index = function(req,res){
    return res.render('user/home',{recipes:data.recipes})
}

exports.about = function(req,res){
    return res.render('user/about')
}

exports.recipes = function(req,res){
    return res.render('user/recipes',{recipes:data.recipes})
}

exports.recipes_details = function (req, res) {
        const recipeIndex = req.params.index;
        return res.render('user/recipe',{recipes:data.recipes[recipeIndex]});
}