const express = require('express');
const RepositoryService = require('./models/RepositoryService');  
const RepositoryController = require('./controllers/RepositoryController');  
const LanguageController = require('./controllers/LanguageController');  

const routes = express.Router();

var langs = ['dart', 'javascript', 'python', 'ruby', 'scala'];

routes.get('/', (req, res) => {
    res.sendFile(__dirname  + '/views/index.html');

    langs.forEach(element => {
        RepositoryService.getRepositories(element);    
    });
});

routes.get('/repository', (req, res) => {
    var data;

    const languageIds = langs.map( async language => {
        return await LanguageController.index(language);
    })

    const repositories = languageIds.map( async id => {
        return await RepositoryController.indexAll(id);
    }).then(rep => {
        console.log(`data out:${rep}`);
        return rep;
    });
    
    return repositories;
});

module.exports = routes;