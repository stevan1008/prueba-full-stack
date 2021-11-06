"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const router = (0, express_1.Router)();
router.route('/')
    .get(userController_1.getAll)
    .post(userController_1.createUser);
router.route('/:userId')
    .get(userController_1.getUser)
    .delete(userController_1.deleteUser)
    .put(userController_1.updateUser);
exports.default = router;
