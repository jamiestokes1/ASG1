'use strict';

import express from 'express';

const router = express.Router();


import Dashboard from './controllers/Dashboard.js';
import about from './controllers/about.js'; 
import logger from "./utils/logger.js";
import start from './controllers/start.js';
import CollectionDetails from './controllers/CollectionDetails.js';
import playlist from './controllers/playlist.js';

router.get('/', start.createView);
router.get('/Dashboard', Dashboard.createView);
router.get('/about', about.createView);
router.get('/CollectionDetails', CollectionDetails.createView);
router.get('/playlist/:id', playlist.createView);


router.get('/error', (request, response) => response.status(404).end('Page not found.'));

export default router;
