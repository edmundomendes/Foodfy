const fs = require('fs')
const data = require('../data.json')
const oldData = require('../data')

exports.index = function(req,res){
    return res.render('admin/index',{recipes:data.recipes})
}
exports.create = function(req,res){
    return res.render('admin/create')
}
exports.post = function(req,res){
    const keys = Object.keys(req.body)

    for(key of keys){
        if (req.body[key] =='')
        return res.send('Preencha todos os campos')
    }


    let {title,author,image_url,ingredients,preparations,informantion} = req.body



    let id = 1
   const lastRecipe = data.recipes[data.recipes.length - 1]

    if(lastRecipe){
        id = lastRecipe.id + 1
    }

    data.recipes.push({
        id,
        title,
        author,
        image_url,
        ingredients,
        preparations,
        informantion
       
    })


    fs.writeFile("data.json",JSON.stringify(data,null,2),function(err){
        if(err) return res.send("Erro de escrita")
        return res.redirect('/admin')
    })
    
}