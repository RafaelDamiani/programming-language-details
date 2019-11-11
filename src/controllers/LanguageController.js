const Language = require('../models/Language');

module.exports = {
    
    async index(language) {
        const lang = await Language.findOne({
            where : {
                Name: language
            }
        });
        
        if (!lang) {
            return lang;
        }

        return lang.id;
    },

    async store(language) {
        const languageExist = await this.index(language);        

        if (!languageExist) {
            languageExist = await Language.create(
                {
                    Name: language
                }
            )
        }
        
        return languageExist;
    }
}