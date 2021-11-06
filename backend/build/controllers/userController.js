"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.deleteUser = exports.getUser = exports.createUser = exports.getAll = void 0;
// DB
const database_1 = require("../database");
function getAll(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const con = yield (0, database_1.connect)();
            const users = yield con.query('SELECT * FROM user');
            return res.json(users[0]);
        }
        catch (e) {
            console.log(e);
        }
    });
}
exports.getAll = getAll;
function createUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const newUser = req.body;
        const con = yield (0, database_1.connect)();
        yield con.query('INSERT INTO user SET ?', [newUser]);
        res.json({
            message: 'New user Created'
        });
    });
}
exports.createUser = createUser;
function getUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.userId;
        const con = yield (0, database_1.connect)();
        const users = yield con.query('SELECT * FROM user WHERE id = ?', [id]);
        res.json(users[0]);
    });
}
exports.getUser = getUser;
function deleteUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.userId;
        const con = yield (0, database_1.connect)();
        yield con.query('DELETE FROM user WHERE id = ?', [id]);
        res.json({
            message: 'user deleted'
        });
    });
}
exports.deleteUser = deleteUser;
function updateUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.userId;
        const updatePost = req.body;
        const con = yield (0, database_1.connect)();
        yield con.query('UPDATE user set ? WHERE id = ?', [updatePost, id]);
        res.json({
            message: 'user Updated'
        });
    });
}
exports.updateUser = updateUser;
