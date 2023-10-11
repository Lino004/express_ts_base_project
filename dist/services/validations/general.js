"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isRequired = exports.checkValidation = void 0;
const express_validator_1 = require("express-validator");
const checkValidation = (req, res, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
    return;
};
exports.checkValidation = checkValidation;
exports.isRequired = {
    notEmpty: true,
    errorMessage: 'Ce champ est obligatoire',
};
//# sourceMappingURL=general.js.map