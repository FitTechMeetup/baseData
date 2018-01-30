import * as express from 'express';

import BotCtrl from './controllers/bot';

import Bots from './models/bots';
import { svg } from 'leaflet';



export default function setRoutes(app) {



  const router = express.Router();

  const botCtrl = new BotCtrl();

  // Bots 
  router.route('/bot/fittechseattle').get(botCtrl.fittechseattle);
  router.route('/bot/workoutstart').post(botCtrl.workoutstart);
  router.route('/bot/workoutend').post(botCtrl.workoutend);
  router.route('/bot/challenge').post(botCtrl.challenge);
  router.route('/bot/intcomp').post(botCtrl.interactive);

  app.use('/api', router);


}
