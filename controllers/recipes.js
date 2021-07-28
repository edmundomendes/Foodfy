const data = require('../data')

exports.index = function(req,res){
    return res.render('recipes/home',{items:data})
}

exports.about = function(req,res){
    return res.render('recipes/about')
}

exports.receita = function(req,res){
    return res.render('recipes/recipes',{items:data})
}

exports.show =  function (req, res) {
    const dataIndex = req.params.index;
    return res.render('recipes/recipe',{item: data[dataIndex]})
}