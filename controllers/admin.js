const fs = require('fs')
const data = require('../data.json')

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
exports.show = function(req,res){
    const {id} = req.params
    const foundRecipe = data.recipes.find(function(recipe){
        return recipe.id == id
    })
    if(!foundRecipe) return res.send('Receita não encontrada')

    const recipe = {
        ...foundRecipe
    }
    return res.render('admin/show', {recipe})
}
exports.edit = function(req,res){
    const {id} = req.params
    const foundRecipe = data.recipes.find(function(recipe){
        return recipe.id == id
    })
    if(!foundRecipe) return res.send('Receita não encontrada')

    const recipe = {
        ...foundRecipe
    }
    return res.render('admin/edit', {recipe})
}
exports.put = function(req,res){
    const {id} = req.body
    let index = 0

    const foundRecipe = data.recipes.find(function(recipe, foundIndex){
        if (id == recipe.id){
            index = foundIndex
            return true
        }
    })
    if(!foundRecipe) return res.send('Recipe Not Found')

    const recipe = {
        ...foundRecipe,
        ...req.body
    }

    data.recipes[index] = recipe

    fs.writeFile('data.json',JSON.stringify(data,null,2),function(err){
        if(err) return res.send('Write file error')
        return res.redirect(`/admin/${id}`)
    })
}
exports.delete = function(req,res){
    const {id} = req.body
    

    const filteredRecipes = data.recipes.filter(function(recipe){
        return recipe.id != id
    })

    data.recipes = filteredRecipes

    fs.writeFile('data.json',JSON.stringify(data,null,2),function(err){
        if(err) return res.send("Write File error!")
    })
    return res.redirect('/admin')
}