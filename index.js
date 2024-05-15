'use strict';

/*
 * 
 * Extract the path names from the openapi docs
 * 
 * @param {*} obj 
 * @param {*} options 
 * @returns 
 */
function extract(obj, options) {
    let pathKeys = {};
    pathKeys = Object.keys(obj.paths);

    return pathKeys;
}

module.exports = {
    extract,
};

