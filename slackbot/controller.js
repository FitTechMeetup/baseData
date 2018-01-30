import Bot from '../models/bots';
import BaseCtrl from './base';

export default class BotCtrl extends BaseCtrl {
  model = Bot;
  fittechseattle = (req, res) => {
    console.log(req);
    res.json({ 'status': 'ok' });
    res.status(200);
  };
  interactive = (req,res) =>{
    console.log(req.body.payload);

    res.json({'text':'Tell me more about this workout'});
    res.status(200);
  }
  workoutstart = (req, res) => {
    console.log(req);
    res.json(
      {
        "text": "Is this workout planded?",
        "attachments": [
            {
                "text": "Choose the type of workout",
                "fallback": "You are unable to choose a game",
                "callback_id": "wopr_game",
                "color": "#3AA3E3",
                "attachment_type": "default",
                "actions": [
                    {
                        "name": "wod",
                        "text": "Random",
                        "type": "button",
                        "value": "random_wod"
                    },
                    {
                        "name": "wod",
                        "text": "Trainer Rx'd",
                        "type": "button",
                        "value": "trainer_wod"
                    },
                    {
                        "name": "wod",
                        "text": "Crossfit Open",
                        "style": "danger",
                        "type": "button",
                        "value": "crossfit_wod",
                        "confirm": {
                            "title": "Are you sure?",
                            "text": "Is your HRV in balance HRV Score (65+)",
                            "ok_text": "Yes",
                            "dismiss_text": "No"
                        }
                    }
                ]
            }
        ]
    }
    );
    res.status(200);
  };
  workoutend = (req, res) => {
    console.log(req);
    res.json({    "text": "Workout ended"
  });
    res.status(200);
  };
  challenge = (req,res) => {
    console.log(req.body);
    res.json({ 'challenge': req.body.challenge});
    res.status(200);
  };
}
