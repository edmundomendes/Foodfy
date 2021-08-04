const express = require('express')
const routes = express.Router()
const user = require('./controllers/user')
const admin = require('./controllers/admin')

/* index */

routes.get('/', function(req,res){
    return res.redirect('/user')
})

/* user */

routes.get('/user', user.index)

routes.get('/user/about', user.about)

routes.get('/user/recipes', user.recipes)

routes.get('/user/recipes/:id', user.recipes_details)

/* admin */

routes.get('/admin', admin.index)

routes.get("/admin/create", admin.create)

routes.get('/admin/:id', admin.show)

routes.get('/admin/:id/edit', admin.edit)

routes.post('/admin', admin.post)

module.exports = routes