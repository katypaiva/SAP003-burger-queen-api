import models from '../.../models/index'

const getAll = async (res, rest) => {
    models.products.findAll({raw: true})
    
};

export default getAll