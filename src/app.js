import express from 'express';
import authRouter from './auth';

const app = new express();

app.set('port', 4001);

app.get('/auth/ping', (req, res) => {
    console.log('ping');
    return res.send('/auth/ping - good');
});
app.use('/auth', authRouter);

// 404 Page_Not_Found
app.use((req, res, next) => {
    const error = new Error(`${req.method} ${req.url} No such a router`);
    console.log(error);
    error.status = 404;
    next(error);
});

// Error Handling
app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV === 'production' ? {} : err;
    return res.status(err.status || 500).json({
        info: res.locals.error,
    });
});

export default app;
