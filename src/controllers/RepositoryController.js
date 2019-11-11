const Repository = require('../models/Repository');
const LanguageController = require('../controllers/LanguageController');

const langs = ['dart', 'javascript', 'python', 'ruby', 'scala'];

module.exports = {

    

    async index(name, description, login) {
        const repository = await Repository.findOne({
            where: {
                Name: name,
                Description: description,
                Login: login
            }
        });
        
        return repository;
    },

    async indexAll(id_language) {
        const resultId = id_language.then(result =>  { return result.data; });
        const repositories = await Repository.findAll({
            where: {
                IdLanguage: resultId
            }
        });

        repositoryArray = [];

        repositories.forEach(element => {
            var repository = new Object({
                Name: element.Name,
                Description: element.Description,
                Login: element.Login,
                CreatedAt: element.CreatedAt,
                UpdatedAt: element.UpdatedAt
            })

            repositoryArray.push(repository);
        });

        return JSON.stringify(repositoryArray);
    },

    async store(name, description, login, created_at, updated_at, id_language) {
        const repository = await Repository.create({ 
            Name: name,
            Description: description,
            Login: login,
            CreatedAt: created_at,
            UpdatedAt: updated_at,
            IdLanguage: id_language
        })

        return repository;
    },

    async delete(id_language) {
        await Repository.destroy({
            where: {
                IdLanguage: id_language
            }
        });
    },
}