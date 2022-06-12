import express from 'express';
import { createUser, getUser, findById, deleteUser, patchUser } from '../controllers/user.js';

const router = express.Router();

//All routes in here are starting with /users
router.get('/', getUser);

router.post('/', createUser);

router.get('/:id', findById);

router.delete('/:id', deleteUser);

router.patch('/:id', patchUser);

export default router;
