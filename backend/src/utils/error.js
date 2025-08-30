// 404 handler
const notFound = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404);
    next(error);
    };
    
    
    // Global error handler
    // eslint-disable-next-line no-unused-vars
    const errorHandler = (err, req, res, next) => {
    const status = res.statusCode && res.statusCode !== 200 ? res.statusCode : 500;
    res.status(status).json({
    message: err.message || 'Server Error',
    stack: process.env.NODE_ENV === 'production' ? undefined : err.stack,
    });
    };
    
    
    module.exports = { notFound, errorHandler };