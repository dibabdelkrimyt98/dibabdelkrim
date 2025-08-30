const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const path = require('path');
require('dotenv').config();


const studyRoutes = require('./routes/studyRoutes');
const academicRoutes = require('./routes/academicRoutes');
const professionalRoutes = require('./routes/professionalRoutes');
const volunteeringRoutes = require('./routes/volunteeringRoutes');
const referenceRoutes = require('./routes/referenceRoutes');
const contactRoutes = require('./routes/contactRoutes');
const { notFound, errorHandler } = require('./utils/error');


const app = express();


app.use(helmet());
app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));
app.use(express.json({ limit: '2mb' }));
app.use(express.urlencoded({ extended: true }));


const origin = process.env.CLIENT_ORIGIN || '*';
app.use(cors({ origin }));


// Static files (uploaded docs)
const uploadDir = process.env.UPLOAD_DIR || 'uploads';
app.use('/uploads', express.static(path.join(__dirname, '..', uploadDir)));


// Routes
app.get('/api/health', (req, res) => res.json({ status: 'ok' }));
app.use('/api/studies', studyRoutes);
app.use('/api/works/academic', academicRoutes);
app.use('/api/works/professional', professionalRoutes);
app.use('/api/volunteering', volunteeringRoutes);
app.use('/api/references', referenceRoutes);
app.use('/api/contact', contactRoutes);


// Errors
app.use(notFound);
app.use(errorHandler);


module.exports = app;