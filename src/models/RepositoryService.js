const LanguageController = require('../controllers/LanguageController');
const RepositoryController = require('../controllers/RepositoryController');
const request = require('request');

module.exports = {
    getRepositories: async function (lang) {
        
        const id_language = await LanguageController.store(lang);

        const options = 
        { 
            method: 'GET',
            url: `https://api.github.com/search/repositories?q=language:${lang}&type=Repositories&page=1&per_page=10`,
            headers: 
            { 
                'user-agent': 'node.js'
            } 
        };
      
        request(options, (error, res, body) => {

            if (error) throw new Error(error);
       
            RepositoryController.delete(id_language);

            var parsedBody = JSON.parse(body);
            var items = parsedBody.items;

            items.forEach(element => {
                RepositoryController.store(
                    element.name, 
                    element.description, 
                    element.owner.login, 
                    element.created_at,
                    element.updated_at,
                    id_language
                )
            });
        });
    }
}
