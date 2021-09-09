"use strict";
const rastrojs_1 = require("./rastrojs");
const { track } = new rastrojs_1.RastroJS();
module.exports = {
    track,
    RastroJS: rastrojs_1.RastroJS,
    isValidOrderCode: rastrojs_1.RastroJS.isValidOrderCode,
};
