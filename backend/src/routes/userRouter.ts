import express, { Router } from 'express';

import  { getAll, createUser, getUser, deleteUser, updateUser } from '../controllers/userController';

const router = Router();

router.route('/')
    .get(getAll)
    .post(createUser);


router.route('/:userId')
    .get(getUser)
    .delete(deleteUser)
    .put(updateUser);


export default router;