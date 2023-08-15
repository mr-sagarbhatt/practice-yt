"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHome = void 0;
const getFullName = (obj) => {
    return obj.fn + obj.ln;
};
const getHome = (req, res) => {
    const { firstName, lastName } = req.query;
    const fullName = getFullName({ firstName: firstName || 'test', lastName: lastName || 'test' });
    res.json({
        message: 'Home Page',
        fullName,
    });
};
exports.getHome = getHome;
