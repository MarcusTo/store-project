@@ -0,0 +1,9 @@
import express, { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
    res.send('Running');
});

app.listen(3000, () => { console.log('App is running.'); });