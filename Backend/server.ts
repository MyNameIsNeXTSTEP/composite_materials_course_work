import fs from 'fs';
import mysql from 'mysql2';
import { IMaterial } from './src/types/index';
import express from 'express';
import bodyParser from 'body-parser';
import { DBQuery } from './src/db';

const PORT = process.env.PORT || 3001;
const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
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

app.post('/api/add-material', (req, res) => {
    try {
        const body = req.body;
        if (body.image?.imgBuffToSave) {
            const base64Data = body.image.imgBuffToSave.replace(/^data:image\/jpeg;base64,/, "");
            const imgBuffer = Buffer.from(base64Data, 'base64');
            fs.writeFile(
                `./media/${body.image.imgName}.${body.image.type}`,
                imgBuffer,
                err => {
                    err && console.log(err, '__IMAGE_SAVING_ERROR__');
                }
            );
        }
        new DBQuery(mysql).insert<IMaterial>('materials', { ...body, image: body.image.imgName || null });
        res.statusCode = 200; // @todo: check data first
        res.send({ message: 'The material is added succefully' });
    } catch (error) {
        res.statusCode = 500; // @todo: check data first
        res.send({ message: `Internal server error: ${error}` });
    }
})

app.get('/api/get-all-materials', async (req, res) => {
    try {
        const materials = await new DBQuery(mysql).call('SELECT * FROM materials');
        if (!materials) throw new Error('[API][get-all-materials] no tasks erorr');
        console.log(materials, '__materials__');
        res.statusCode = 200;
        res.send({ materials });
    } catch (error) {        
        res.statusCode = 500; // @todo: check data first
        res.send({ message: `Internal server error: ${error}` });
    }
});

app.post('/api/delete-material', async (req, res) => {
    try {
        const { id } = req.body;
        await new DBQuery(mysql).call(`DELETE FROM materials WHERE id = ${id}`);
        res.statusCode = 200;
        res.send({ ok: true });
    } catch (error) {
        res.statusCode = 500; // @todo: check data first
        res.send({ message: `Internal server error: ${error}` });
    }
})

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});

export default 1;