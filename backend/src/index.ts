import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

import userRouter from './routes/userRouter';
import indexRouter from './routes/indexRouter';


class Server {

    public app: Application;
    
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void {
        this.app.set('port', process.env.PORT || 3000);

        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }

    routes(): void {
        this.app.use('/', indexRouter)
        this.app.use('/api/users', userRouter)
    }

    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server running at ', this.app.get('port'));
        });
    }

}

const server = new Server();
server.start();