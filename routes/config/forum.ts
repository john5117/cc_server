import { authorizeRoute } from './../middleware'

const list = {};
const create = {};
const retrieve = {};

const forum = {
    resources: {
        list,
        create,
        retrieve
    }
};

module.exports = forum;