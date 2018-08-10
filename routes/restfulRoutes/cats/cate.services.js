const Cat = require('./cats.model');
const Fish = require('../fishes/fishes.model');
const Owner = require('../owners/owners.model');
const moment = require('../../../utils/moment');


const findAll = async () => {
    cats = await Cat.findAll({
        include: [{
            model: Fish,
            model: Owner
        }]
    });
    return cats;
}

const create = async (data) => {
    data.createdAt = moment().format();
    data.updatedAt = moment().format();

    const cat = await Cat.create(data);
    return cat;
}

const findById = async (id) => {
    const cat = await Cat.findById(id, {
        include: [{
            model: Fish
        }]
    });
    return cat;
}

const updateById = async (id, data) => {
  
    data.updatedAt = moment().format();
    
    const options = {
        where: {
            id
        }
    }

    let cats = await Cat.update(data, options);
    cats = await Cat.findById(id);
    return cats;   
}

const deleteById = async (id) => {
    const options = {
        where: {
            id
        }
    }

    const cats = await Cat.destroy(options);
    return cats;
} 

module.exports = {
    findAll,
    create,
    findById,
    updateById,
    deleteById
}