import fs from 'fs';
import mysql from 'mysql2';
import { ITask } from './src/types/index';
import express from 'express';
import bodyParser from 'body-parser';
import { DBQuery } from './src/db';

const PORT = process.env.PORT || 3001;
const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    next();
});
app.use(
    bodyParser.json({
        limit: '5mb'
    })
);
app.use(
    bodyParser.urlencoded({
        extended: true,
    }),
);

app.post('/api/post-task', (req, res) => {
    console.log(req.body);
    const body = req.body;
    const base64Data = body.image.imgBuffToSave.replace(/^data:image\/jpeg;base64,/, "");
    const imgBuffer = Buffer.from(base64Data, 'base64');
    fs.writeFile(
        `./media/${body.image.imgName}.${body.image.type}`,
        imgBuffer,
        err => {
            err && console.log(err, '__IMAGE_SAVING_ERROR__');
        }
    );
    new DBQuery(mysql).insert<ITask>('tasks', { ...body, image: body.image.imgName });
    res.statusCode = 200; // @todo: check data first
    res.send({ ok: true, message: 'Task is posted succefully' });
})

app.get('/api/get-all-tasks', async (req, res) => {
    const allTasks = await new DBQuery(mysql).call('SELECT * FROM tasks');
    if (!allTasks) throw new Error('[API][get-all-tasks] no tasks erorr');
    console.log(allTasks, '__ALL_TASKS__');
    res.statusCode = 200;
    res.send({
        ok: true,
        body: allTasks,
    });
})

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});

export default 1;