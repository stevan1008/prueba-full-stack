import { Request, Response } from 'express'

// DB
import { connect } from '../database'

export async function getAll(req: Request, res: Response): Promise<Response | void> {
    try {
        const con = await connect();
        const users = await con.query('SELECT * FROM user');
        return res.json(users[0]);
    }
    catch (e) {
        console.log(e)
    }
}

export async function createUser(req: Request, res: Response) {
    const newUser = req.body;
    const con = await connect();
    await con.query('INSERT INTO user SET ?', [newUser]);
    res.json({
        message: 'New user Created'
    });
}

export async function getUser(req: Request, res: Response) {
    const id = req.params.userId;
    const con = await connect();
    const users = await con.query('SELECT * FROM user WHERE id = ?', [id]);
    res.json(users[0]);
}

export async function deleteUser(req: Request, res: Response) {
    const id = req.params.userId;
    const con = await connect();
    await con.query('DELETE FROM user WHERE id = ?', [id]);
    res.json({
        message: 'user deleted'
    });
}

export async function updateUser(req: Request, res: Response) {
    const id = req.params.userId;
    const updatePost = req.body;
    const con = await connect();
    await con.query('UPDATE user set ? WHERE id = ?', [updatePost, id]);
    res.json({
        message: 'user Updated'
    });
}