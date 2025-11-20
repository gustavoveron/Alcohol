/************************* 
 * Questionaire_Igt *
 *************************/

import { core, data, sound, util, visual, hardware } from 'https://lib.pavlovia.org/psychojs-2024.2.4.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;

// store info about the experiment session:
let expName = 'Questionaire_IGT';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};

// ----------------------------------------------------
// GLV: DataPruebas (url)
let redirect_url = "https://datapruebas.org"; 
// GLV: DataPruebas (End)
// ----------------------------------------------------

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([1,1,1]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});

// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);


// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(AUDIT_InstructionsRoutineBegin());
flowScheduler.add(AUDIT_InstructionsRoutineEachFrame());
flowScheduler.add(AUDIT_InstructionsRoutineEnd());
const trials_AUDITLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_AUDITLoopBegin(trials_AUDITLoopScheduler));
flowScheduler.add(trials_AUDITLoopScheduler);
flowScheduler.add(trials_AUDITLoopEnd);


flowScheduler.add(TAS_20_InstructionsRoutineBegin());
flowScheduler.add(TAS_20_InstructionsRoutineEachFrame());
flowScheduler.add(TAS_20_InstructionsRoutineEnd());
const trials_TAS_20LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_TAS_20LoopBegin(trials_TAS_20LoopScheduler));
flowScheduler.add(trials_TAS_20LoopScheduler);
flowScheduler.add(trials_TAS_20LoopEnd);


flowScheduler.add(BPQ_SF_InstructionsRoutineBegin());
flowScheduler.add(BPQ_SF_InstructionsRoutineEachFrame());
flowScheduler.add(BPQ_SF_InstructionsRoutineEnd());
const trials_BPQ_SFLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_BPQ_SFLoopBegin(trials_BPQ_SFLoopScheduler));
flowScheduler.add(trials_BPQ_SFLoopScheduler);
flowScheduler.add(trials_BPQ_SFLoopEnd);


flowScheduler.add(PACS_InstructionsRoutineBegin());
flowScheduler.add(PACS_InstructionsRoutineEachFrame());
flowScheduler.add(PACS_InstructionsRoutineEnd());
const trials_PACSLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_PACSLoopBegin(trials_PACSLoopScheduler));
flowScheduler.add(trials_PACSLoopScheduler);
flowScheduler.add(trials_PACSLoopEnd);


flowScheduler.add(IGT_InstructionsRoutineBegin());
flowScheduler.add(IGT_InstructionsRoutineEachFrame());
flowScheduler.add(IGT_InstructionsRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);



flowScheduler.add(finalMessageRoutineBegin());
flowScheduler.add(finalMessageRoutineEachFrame());
flowScheduler.add(finalMessageRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

// ----------------------------------------------------
// GLV: DataPruebas (Global variables)

const queryParams = new URLSearchParams(window.location.search);
let run_id = queryParams.get('run-id');


function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}
// GLV: DataPruebas (End)
// ----------------------------------------------------

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'audit.csv', 'path': 'audit.csv'},
    {'name': 'tas20.csv', 'path': 'tas20.csv'},
    {'name': 'bpqsf.csv', 'path': 'bpqsf.csv'},
    {'name': 'pacs.csv', 'path': 'pacs.csv'},
    {'name': 'form.png', 'path': 'form.png'},
    {'name': 'flash-cards.png', 'path': 'flash-cards.png'},
    {'name': 'flash-cards.png', 'path': 'flash-cards.png'},
    {'name': 'form.png', 'path': 'form.png'},
    {'name': 'audit.csv', 'path': 'audit.csv'},
    {'name': 'bpqsf.csv', 'path': 'bpqsf.csv'},
    {'name': 'pacs.csv', 'path': 'pacs.csv'},
    {'name': 'tas20.csv', 'path': 'tas20.csv'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2024.2.4';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var AUDIT_InstructionsClock;
var image_1;
var text_title_1;
var text_instructions_1;
var button_instructions_1;
var AUDITClock;
var button_opt1;
var button_opt2;
var button_opt3;
var button_opt4;
var button_opt5;
var text_opt_1;
var text_opt_2;
var text_opt_3;
var text_opt_4;
var text_opt_5;
var polygon_question;
var text_question;
var TAS_20_InstructionsClock;
var image_2;
var text_title_2;
var text_instructions_2;
var button_instructions_2;
var TAS_20Clock;
var button_opt1_2;
var button_opt2_2;
var button_opt3_2;
var button_opt4_2;
var button_opt5_2;
var text_opt_1_2;
var text_opt_2_2;
var text_opt_3_2;
var text_opt_4_2;
var text_opt_5_2;
var polygon_question_2;
var text_question_2;
var BPQ_SF_InstructionsClock;
var image_3;
var text_title_3;
var text_instructions_3;
var button_instructions_3;
var BPQ_SFClock;
var button_opt1_3;
var button_opt2_3;
var button_opt3_3;
var button_opt4_3;
var button_opt5_3;
var text_opt_1_3;
var text_opt_2_3;
var text_opt_3_3;
var text_opt_4_3;
var text_opt_5_3;
var polygon_question_3;
var text_question_3;
var PACS_InstructionsClock;
var image_4;
var text_title_4;
var text_instructions_4;
var button_instructions_4;
var PACSClock;
var button_opt1_4;
var button_opt2_4;
var button_opt3_4;
var button_opt4_4;
var button_opt5_4;
var button_opt6_4;
var button_opt7_4;
var text_opt_1_4;
var text_opt_2_4;
var text_opt_3_4;
var text_opt_4_4;
var text_opt_5_4;
var text_opt_6_4;
var text_opt_7_4;
var polygon_question_4;
var text_question_4;
var IGT_InstructionsClock;
var image_5;
var text_title_5;
var text_instructions_5;
var button_instructions_5;
var ChoiceClock;
var balance;
var deck_label_from_name;
var reward_by_deck;
var loss_pattern;
var deck_counts;
var fbText;
var fbColor;
var gain_text;
var loss_text;
var gain_color;
var loss_color;
var gain_opacity;
var loss_opacity;
var deckA;
var deckB;
var deckC;
var deckD;
var mouse;
var textA;
var textB;
var textC;
var textD;
var textSelection;
var textBalance;
var FeedbackClock;
var gainFB;
var lossFB;
var finalMessageClock;
var textExit;
var button_end;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "AUDIT_Instructions"
  AUDIT_InstructionsClock = new util.Clock();
  image_1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_1', units : undefined, 
    image : 'form.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0.25], 
    draggable: false,
    size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  text_title_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_title_1',
    text: 'AUDIT - Alcohol Use Disorders Identification Test',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  text_instructions_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_instructions_1',
    text: 'Seleccione la opción que mejor describa su respuesta a cada pregunta.\nEs importante que responda lo más sinceramente posible.',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.2)], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 0.0039), (- 0.0039), (- 0.0039)]),  opacity: undefined,
    depth: -2.0 
  });
  
  button_instructions_1 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_instructions_1',
    text: 'Comenzar',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0, (- 0.4)],
    letterHeight: 0.04,
    size: [0.5, 0.1],
    ori: 0.0
    ,
    depth: -3
  });
  button_instructions_1.clock = new util.Clock();
  
  // Initialize components for Routine "AUDIT"
  AUDITClock = new util.Clock();
  button_opt1 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_opt1',
    text: '-',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'darkgrey',
    colorSpace: 'rgb',
    pos: [0, 0],
    letterHeight: 0.04,
    size: [1.1, 0.05],
    ori: 0.0
    ,
    depth: 0
  });
  button_opt1.clock = new util.Clock();
  
  button_opt2 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_opt2',
    text: '-',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'darkgrey',
    colorSpace: 'rgb',
    pos: [0, (- 0.1)],
    letterHeight: 0.04,
    size: [1.1, 0.05],
    ori: 0.0
    ,
    depth: -1
  });
  button_opt2.clock = new util.Clock();
  
  button_opt3 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_opt3',
    text: '-',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'darkgrey',
    colorSpace: 'rgb',
    pos: [0, (- 0.2)],
    letterHeight: 0.04,
    size: [1.1, 0.05],
    ori: 0.0
    ,
    depth: -2
  });
  button_opt3.clock = new util.Clock();
  
  button_opt4 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_opt4',
    text: '-',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'darkgrey',
    colorSpace: 'rgb',
    pos: [0, (- 0.3)],
    letterHeight: 0.04,
    size: [1.1, 0.05],
    ori: 0.0
    ,
    depth: -3
  });
  button_opt4.clock = new util.Clock();
  
  button_opt5 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_opt5',
    text: '-',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'darkgrey',
    colorSpace: 'rgb',
    pos: [0, (- 0.4)],
    letterHeight: 0.04,
    size: [1.1, 0.05],
    ori: 0.0
    ,
    depth: -4
  });
  button_opt5.clock = new util.Clock();
  
  text_opt_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_opt_1',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  text_opt_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_opt_2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.1)], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  text_opt_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_opt_3',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.2)], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  text_opt_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_opt_4',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.3)], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -8.0 
  });
  
  text_opt_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_opt_5',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.4)], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -9.0 
  });
  
  polygon_question = new visual.Rect ({
    win: psychoJS.window, name: 'polygon_question', 
    width: [1.1, 0.3][0], height: [1.1, 0.3][1],
    ori: 0.0, 
    pos: [0, 0.3], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 2.0, 
    lineColor: new util.Color('black'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -10, 
    interpolate: true, 
  });
  
  text_question = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_question',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -11.0 
  });
  
  // Initialize components for Routine "TAS_20_Instructions"
  TAS_20_InstructionsClock = new util.Clock();
  image_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_2', units : undefined, 
    image : 'form.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0.25], 
    draggable: false,
    size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  text_title_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_title_2',
    text: 'TAS-20 Toronto Alexithymia Scale 20 ítems',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  text_instructions_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_instructions_2',
    text: 'Indique el grado de acuerdo o desacuerdo con cada afirmación.\nEs importante que responda lo más sinceramente posible.',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.2)], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 0.0039), (- 0.0039), (- 0.0039)]),  opacity: undefined,
    depth: -2.0 
  });
  
  button_instructions_2 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_instructions_2',
    text: 'Comenzar',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0, (- 0.4)],
    letterHeight: 0.04,
    size: [0.5, 0.1],
    ori: 0.0
    ,
    depth: -3
  });
  button_instructions_2.clock = new util.Clock();
  
  // Initialize components for Routine "TAS_20"
  TAS_20Clock = new util.Clock();
  button_opt1_2 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_opt1_2',
    text: '-',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'darkgrey',
    colorSpace: 'rgb',
    pos: [0, 0],
    letterHeight: 0.04,
    size: [1.1, 0.05],
    ori: 0.0
    ,
    depth: 0
  });
  button_opt1_2.clock = new util.Clock();
  
  button_opt2_2 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_opt2_2',
    text: '-',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'darkgrey',
    colorSpace: 'rgb',
    pos: [0, (- 0.1)],
    letterHeight: 0.04,
    size: [1.1, 0.05],
    ori: 0.0
    ,
    depth: -1
  });
  button_opt2_2.clock = new util.Clock();
  
  button_opt3_2 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_opt3_2',
    text: '-',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'darkgrey',
    colorSpace: 'rgb',
    pos: [0, (- 0.2)],
    letterHeight: 0.04,
    size: [1.1, 0.05],
    ori: 0.0
    ,
    depth: -2
  });
  button_opt3_2.clock = new util.Clock();
  
  button_opt4_2 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_opt4_2',
    text: '-',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'darkgrey',
    colorSpace: 'rgb',
    pos: [0, (- 0.3)],
    letterHeight: 0.04,
    size: [1.1, 0.05],
    ori: 0.0
    ,
    depth: -3
  });
  button_opt4_2.clock = new util.Clock();
  
  button_opt5_2 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_opt5_2',
    text: '-',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'darkgrey',
    colorSpace: 'rgb',
    pos: [0, (- 0.4)],
    letterHeight: 0.04,
    size: [1.1, 0.05],
    ori: 0.0
    ,
    depth: -4
  });
  button_opt5_2.clock = new util.Clock();
  
  text_opt_1_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_opt_1_2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  text_opt_2_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_opt_2_2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.1)], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  text_opt_3_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_opt_3_2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.2)], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  text_opt_4_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_opt_4_2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.3)], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -8.0 
  });
  
  text_opt_5_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_opt_5_2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.4)], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -9.0 
  });
  
  polygon_question_2 = new visual.Rect ({
    win: psychoJS.window, name: 'polygon_question_2', 
    width: [1.1, 0.3][0], height: [1.1, 0.3][1],
    ori: 0.0, 
    pos: [0, 0.3], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 2.0, 
    lineColor: new util.Color('black'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -10, 
    interpolate: true, 
  });
  
  text_question_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_question_2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -11.0 
  });
  
  // Initialize components for Routine "BPQ_SF_Instructions"
  BPQ_SF_InstructionsClock = new util.Clock();
  image_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_3', units : undefined, 
    image : 'form.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0.25], 
    draggable: false,
    size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  text_title_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_title_3',
    text: 'BPQ-SF Body Perception Questionnaire Short Form',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  text_instructions_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_instructions_3',
    text: 'Piense hasta qué punto percibe sus propios procesos corporales. Marque la respuesta que más se le ajusta.\nEs importante responder lo más sinceramente posible. \nNormalmente me doy cuenta de:',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.2)], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 0.0039), (- 0.0039), (- 0.0039)]),  opacity: undefined,
    depth: -2.0 
  });
  
  button_instructions_3 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_instructions_3',
    text: 'Comenzar',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0, (- 0.4)],
    letterHeight: 0.04,
    size: [0.5, 0.1],
    ori: 0.0
    ,
    depth: -3
  });
  button_instructions_3.clock = new util.Clock();
  
  // Initialize components for Routine "BPQ_SF"
  BPQ_SFClock = new util.Clock();
  button_opt1_3 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_opt1_3',
    text: '-',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'darkgrey',
    colorSpace: 'rgb',
    pos: [0, 0],
    letterHeight: 0.04,
    size: [1.1, 0.05],
    ori: 0.0
    ,
    depth: 0
  });
  button_opt1_3.clock = new util.Clock();
  
  button_opt2_3 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_opt2_3',
    text: '-',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'darkgrey',
    colorSpace: 'rgb',
    pos: [0, (- 0.1)],
    letterHeight: 0.04,
    size: [1.1, 0.05],
    ori: 0.0
    ,
    depth: -1
  });
  button_opt2_3.clock = new util.Clock();
  
  button_opt3_3 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_opt3_3',
    text: '-',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'darkgrey',
    colorSpace: 'rgb',
    pos: [0, (- 0.2)],
    letterHeight: 0.04,
    size: [1.1, 0.05],
    ori: 0.0
    ,
    depth: -2
  });
  button_opt3_3.clock = new util.Clock();
  
  button_opt4_3 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_opt4_3',
    text: '-',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'darkgrey',
    colorSpace: 'rgb',
    pos: [0, (- 0.3)],
    letterHeight: 0.04,
    size: [1.1, 0.05],
    ori: 0.0
    ,
    depth: -3
  });
  button_opt4_3.clock = new util.Clock();
  
  button_opt5_3 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_opt5_3',
    text: '-',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'darkgrey',
    colorSpace: 'rgb',
    pos: [0, (- 0.4)],
    letterHeight: 0.04,
    size: [1.1, 0.05],
    ori: 0.0
    ,
    depth: -4
  });
  button_opt5_3.clock = new util.Clock();
  
  text_opt_1_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_opt_1_3',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  text_opt_2_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_opt_2_3',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.1)], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  text_opt_3_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_opt_3_3',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.2)], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  text_opt_4_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_opt_4_3',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.3)], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -8.0 
  });
  
  text_opt_5_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_opt_5_3',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.4)], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -9.0 
  });
  
  polygon_question_3 = new visual.Rect ({
    win: psychoJS.window, name: 'polygon_question_3', 
    width: [1.1, 0.3][0], height: [1.1, 0.3][1],
    ori: 0.0, 
    pos: [0, 0.3], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 2.0, 
    lineColor: new util.Color('black'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -10, 
    interpolate: true, 
  });
  
  text_question_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_question_3',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -11.0 
  });
  
  // Initialize components for Routine "PACS_Instructions"
  PACS_InstructionsClock = new util.Clock();
  image_4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_4', units : undefined, 
    image : 'form.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0.25], 
    draggable: false,
    size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  text_title_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_title_4',
    text: 'PACS Penn Alcohol Craving Scale',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  text_instructions_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_instructions_4',
    text: 'Lea atentamente cada pregunta y señale qué situación describe mejor durante la última semana. \nEs importante que responda lo más sinceramente posible.',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.2)], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 0.0039), (- 0.0039), (- 0.0039)]),  opacity: undefined,
    depth: -2.0 
  });
  
  button_instructions_4 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_instructions_4',
    text: 'Comenzar',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0, (- 0.4)],
    letterHeight: 0.04,
    size: [0.5, 0.1],
    ori: 0.0
    ,
    depth: -3
  });
  button_instructions_4.clock = new util.Clock();
  
  // Initialize components for Routine "PACS"
  PACSClock = new util.Clock();
  button_opt1_4 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_opt1_4',
    text: '-',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'darkgrey',
    colorSpace: 'rgb',
    pos: [0, 0.05],
    letterHeight: 0.03,
    size: [1.1, 0.05],
    ori: 0.0
    ,
    depth: 0
  });
  button_opt1_4.clock = new util.Clock();
  
  button_opt2_4 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_opt2_4',
    text: '-',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'darkgrey',
    colorSpace: 'rgb',
    pos: [0, (- 0.025)],
    letterHeight: 0.03,
    size: [1.1, 0.05],
    ori: 0.0
    ,
    depth: -1
  });
  button_opt2_4.clock = new util.Clock();
  
  button_opt3_4 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_opt3_4',
    text: '-',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'darkgrey',
    colorSpace: 'rgb',
    pos: [0, (- 0.1)],
    letterHeight: 0.03,
    size: [1.1, 0.05],
    ori: 0.0
    ,
    depth: -2
  });
  button_opt3_4.clock = new util.Clock();
  
  button_opt4_4 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_opt4_4',
    text: '-',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'darkgrey',
    colorSpace: 'rgb',
    pos: [0, (- 0.175)],
    letterHeight: 0.03,
    size: [1.1, 0.05],
    ori: 0.0
    ,
    depth: -3
  });
  button_opt4_4.clock = new util.Clock();
  
  button_opt5_4 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_opt5_4',
    text: '-',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'darkgrey',
    colorSpace: 'rgb',
    pos: [0, (- 0.25)],
    letterHeight: 0.03,
    size: [1.1, 0.05],
    ori: 0.0
    ,
    depth: -4
  });
  button_opt5_4.clock = new util.Clock();
  
  button_opt6_4 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_opt6_4',
    text: '-',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'darkgrey',
    colorSpace: 'rgb',
    pos: [0, (- 0.325)],
    letterHeight: 0.03,
    size: [1.1, 0.05],
    ori: 0.0
    ,
    depth: -5
  });
  button_opt6_4.clock = new util.Clock();
  
  button_opt7_4 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_opt7_4',
    text: '-',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'darkgrey',
    colorSpace: 'rgb',
    pos: [0, (- 0.4)],
    letterHeight: 0.03,
    size: [1.1, 0.05],
    ori: 0.0
    ,
    depth: -6
  });
  button_opt7_4.clock = new util.Clock();
  
  text_opt_1_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_opt_1_4',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.05], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  text_opt_2_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_opt_2_4',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.025)], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -8.0 
  });
  
  text_opt_3_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_opt_3_4',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.1)], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -9.0 
  });
  
  text_opt_4_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_opt_4_4',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.175)], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -10.0 
  });
  
  text_opt_5_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_opt_5_4',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.25)], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -11.0 
  });
  
  text_opt_6_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_opt_6_4',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.325)], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -12.0 
  });
  
  text_opt_7_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_opt_7_4',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.4)], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -13.0 
  });
  
  polygon_question_4 = new visual.Rect ({
    win: psychoJS.window, name: 'polygon_question_4', 
    width: [1.1, 0.3][0], height: [1.1, 0.3][1],
    ori: 0.0, 
    pos: [0, 0.3], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 2.0, 
    lineColor: new util.Color('black'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -14, 
    interpolate: true, 
  });
  
  text_question_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_question_4',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -15.0 
  });
  
  // Initialize components for Routine "IGT_Instructions"
  IGT_InstructionsClock = new util.Clock();
  image_5 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_5', units : undefined, 
    image : 'flash-cards.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0.25], 
    draggable: false,
    size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  text_title_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_title_5',
    text: 'IGT Iowa Gambling Task',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  text_instructions_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_instructions_5',
    text: 'El objetivo de esta tarea es ganar la mayor cantidad de dinero posible, empezando con un monto de $2000 (dinero ficticio). \nPara lograrlo deberás elegir una carta por vez, de cualquiera de los cuatro mazos (A, B, C o D) que verás en la pantalla (te llevará 5 minutos aprox.). \nLa elección de ciertas cartas te hará ganar más dinero ficticio, pero también podrás perderlo.',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.2)], draggable: false, height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 0.0039), (- 0.0039), (- 0.0039)]),  opacity: undefined,
    depth: -2.0 
  });
  
  button_instructions_5 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_instructions_5',
    text: 'Comenzar',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0, (- 0.4)],
    letterHeight: 0.04,
    size: [0.5, 0.1],
    ori: 0.0
    ,
    depth: -3
  });
  button_instructions_5.clock = new util.Clock();
  
  // Initialize components for Routine "Choice"
  ChoiceClock = new util.Clock();
  // Begin Experiment
  
  // Saldo inicial
  balance = 2000;
  
  // Mapas de utilidad
  deck_label_from_name = {'deckA':'A', 'deckB':'B', 'deckC':'C', 'deckD':'D'};
  reward_by_deck = {'A':100, 'B':100, 'C':50, 'D':50};
  
  // Patrones de pérdida por mazo (scheme 1)
  loss_pattern = {
      'A': [0,0,-150,0,-300,0,-200,0,-250,-350,0,-350,0,-250,-200,0,-300,-150,0,0,0,-300,0,-350,0,-200,-250,-150,0,0,-350,-200,-250,0,0,0,-150,-300,0,0],
      'B': [0,0,0,0,0,0,0,0,-1250,0,0,0,0,-1250,0,0,0,0,0,0,-1250,0,0,0,0,0,0,0,0,0,0,-1250,0,0,0,0,0,0,0,0],
      'C': [0,0,-50,0,-50,0,-50,0,-50,-50,0,-25,-75,0,0,0,-25,-75,0,-50,0,0,0,-50,-25,-50,0,0,-75,-50,0,0,0,-25,-25,0,-75,0,-50,-75],
      'D': [0,0,0,0,0,0,0,0,0,-250,0,0,0,0,0,0,0,0,0,-250,0,0,0,0,0,0,0,0,-250,0,0,0,0,0,-250,0,0,0,0,0]
  };
  
  // Contadores: cuántas veces se eligió cada mazo
  deck_counts = {'A':0, 'B':0, 'C':0, 'D':0};
  
  // Variables de feedback
  fbText = '';
  fbColor = 'white';
  gain_text = "";
  loss_text = "";
  gain_color = "white";
  loss_color = "white";
  gain_opacity = 0.0;
  loss_opacity = 0.0;
  deckA = new visual.Rect ({
    win: psychoJS.window, name: 'deckA', 
    width: [0.18, 0.28][0], height: [0.18, 0.28][1],
    ori: 0.0, 
    pos: [(- 0.45), 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]), 
    fillColor: new util.Color('darkgrey'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -1, 
    interpolate: true, 
  });
  
  deckB = new visual.Rect ({
    win: psychoJS.window, name: 'deckB', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0.0, 
    pos: [(- 0.15), 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]), 
    fillColor: new util.Color('darkgrey'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -2, 
    interpolate: true, 
  });
  
  deckC = new visual.Rect ({
    win: psychoJS.window, name: 'deckC', 
    width: [0.18, 0.28][0], height: [0.18, 0.28][1],
    ori: 0.0, 
    pos: [0.15, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]), 
    fillColor: new util.Color('darkgrey'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -3, 
    interpolate: true, 
  });
  
  deckD = new visual.Rect ({
    win: psychoJS.window, name: 'deckD', 
    width: [0.18, 0.28][0], height: [0.18, 0.28][1],
    ori: 0.0, 
    pos: [0.45, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]), 
    fillColor: new util.Color('darkgrey'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -4, 
    interpolate: true, 
  });
  
  mouse = new core.Mouse({
    win: psychoJS.window,
  });
  mouse.mouseClock = new util.Clock();
  textA = new visual.TextStim({
    win: psychoJS.window,
    name: 'textA',
    text: 'A',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.45), 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  textB = new visual.TextStim({
    win: psychoJS.window,
    name: 'textB',
    text: 'B',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.15), 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  textC = new visual.TextStim({
    win: psychoJS.window,
    name: 'textC',
    text: 'C',
    font: 'Arial',
    units: undefined, 
    pos: [0.15, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -8.0 
  });
  
  textD = new visual.TextStim({
    win: psychoJS.window,
    name: 'textD',
    text: 'D',
    font: 'Arial',
    units: undefined, 
    pos: [0.45, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -9.0 
  });
  
  textSelection = new visual.TextStim({
    win: psychoJS.window,
    name: 'textSelection',
    text: 'Haz click sobre un mazo para seleccionar una carta.',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.3)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -10.0 
  });
  
  textBalance = new visual.TextStim({
    win: psychoJS.window,
    name: 'textBalance',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -11.0 
  });
  
  // Initialize components for Routine "Feedback"
  FeedbackClock = new util.Clock();
  gainFB = new visual.TextStim({
    win: psychoJS.window,
    name: 'gainFB',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.05], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1.0,
    depth: 0.0 
  });
  
  lossFB = new visual.TextStim({
    win: psychoJS.window,
    name: 'lossFB',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.05)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1.0,
    depth: -1.0 
  });
  
  // Initialize components for Routine "finalMessage"
  finalMessageClock = new util.Clock();
  textExit = new visual.TextStim({
    win: psychoJS.window,
    name: 'textExit',
    text: '¡Gracias por participar!',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  button_end = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_end',
    text: 'Finalizar',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0, (- 0.4)],
    letterHeight: 0.04,
    size: [0.5, 0.1],
    ori: 0.0
    ,
    depth: -1
  });
  button_end.clock = new util.Clock();
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var AUDIT_InstructionsMaxDurationReached;
var AUDIT_InstructionsMaxDuration;
var AUDIT_InstructionsComponents;
function AUDIT_InstructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'AUDIT_Instructions' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    AUDIT_InstructionsClock.reset();
    routineTimer.reset();
    AUDIT_InstructionsMaxDurationReached = false;
    // update component parameters for each repeat
    // reset button_instructions_1 to account for continued clicks & clear times on/off
    button_instructions_1.reset()
    psychoJS.experiment.addData('AUDIT_Instructions.started', globalClock.getTime());
    AUDIT_InstructionsMaxDuration = null
    // keep track of which components have finished
    AUDIT_InstructionsComponents = [];
    AUDIT_InstructionsComponents.push(image_1);
    AUDIT_InstructionsComponents.push(text_title_1);
    AUDIT_InstructionsComponents.push(text_instructions_1);
    AUDIT_InstructionsComponents.push(button_instructions_1);
    
    for (const thisComponent of AUDIT_InstructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function AUDIT_InstructionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'AUDIT_Instructions' ---
    // get current time
    t = AUDIT_InstructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_1* updates
    if (t >= 0.0 && image_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_1.tStart = t;  // (not accounting for frame time here)
      image_1.frameNStart = frameN;  // exact frame index
      
      image_1.setAutoDraw(true);
    }
    
    
    // *text_title_1* updates
    if (t >= 0.0 && text_title_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_title_1.tStart = t;  // (not accounting for frame time here)
      text_title_1.frameNStart = frameN;  // exact frame index
      
      text_title_1.setAutoDraw(true);
    }
    
    
    // *text_instructions_1* updates
    if (t >= 0.0 && text_instructions_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_instructions_1.tStart = t;  // (not accounting for frame time here)
      text_instructions_1.frameNStart = frameN;  // exact frame index
      
      text_instructions_1.setAutoDraw(true);
    }
    
    
    // *button_instructions_1* updates
    if (t >= 0 && button_instructions_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_instructions_1.tStart = t;  // (not accounting for frame time here)
      button_instructions_1.frameNStart = frameN;  // exact frame index
      
      button_instructions_1.setAutoDraw(true);
    }
    
    if (button_instructions_1.status === PsychoJS.Status.STARTED) {
      // check whether button_instructions_1 has been pressed
      if (button_instructions_1.isClicked) {
        if (!button_instructions_1.wasClicked) {
          // store time of first click
          button_instructions_1.timesOn.push(button_instructions_1.clock.getTime());
          // store time clicked until
          button_instructions_1.timesOff.push(button_instructions_1.clock.getTime());
        } else {
          // update time clicked until;
          button_instructions_1.timesOff[button_instructions_1.timesOff.length - 1] = button_instructions_1.clock.getTime();
        }
        if (!button_instructions_1.wasClicked) {
          // end routine when button_instructions_1 is clicked
          continueRoutine = false;
          
        }
        // if button_instructions_1 is still clicked next frame, it is not a new click
        button_instructions_1.wasClicked = true;
      } else {
        // if button_instructions_1 is clicked next frame, it is a new click
        button_instructions_1.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_instructions_1 hasn't started / has finished
      button_instructions_1.clock.reset();
      // if button_instructions_1 is clicked next frame, it is a new click
      button_instructions_1.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of AUDIT_InstructionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function AUDIT_InstructionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'AUDIT_Instructions' ---
    for (const thisComponent of AUDIT_InstructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('AUDIT_Instructions.stopped', globalClock.getTime());
    psychoJS.experiment.addData('button_instructions_1.numClicks', button_instructions_1.numClicks);
    psychoJS.experiment.addData('button_instructions_1.timesOn', button_instructions_1.timesOn);
    psychoJS.experiment.addData('button_instructions_1.timesOff', button_instructions_1.timesOff);
    // the Routine "AUDIT_Instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trials_AUDIT;
function trials_AUDITLoopBegin(trials_AUDITLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_AUDIT = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'audit.csv',
      seed: undefined, name: 'trials_AUDIT'
    });
    psychoJS.experiment.addLoop(trials_AUDIT); // add the loop to the experiment
    currentLoop = trials_AUDIT;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrials_AUDIT of trials_AUDIT) {
      snapshot = trials_AUDIT.getSnapshot();
      trials_AUDITLoopScheduler.add(importConditions(snapshot));
      trials_AUDITLoopScheduler.add(AUDITRoutineBegin(snapshot));
      trials_AUDITLoopScheduler.add(AUDITRoutineEachFrame());
      trials_AUDITLoopScheduler.add(AUDITRoutineEnd(snapshot));
      trials_AUDITLoopScheduler.add(trials_AUDITLoopEndIteration(trials_AUDITLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_AUDITLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_AUDIT);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_AUDITLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_TAS_20;
function trials_TAS_20LoopBegin(trials_TAS_20LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_TAS_20 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'tas20.csv',
      seed: undefined, name: 'trials_TAS_20'
    });
    psychoJS.experiment.addLoop(trials_TAS_20); // add the loop to the experiment
    currentLoop = trials_TAS_20;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrials_TAS_20 of trials_TAS_20) {
      snapshot = trials_TAS_20.getSnapshot();
      trials_TAS_20LoopScheduler.add(importConditions(snapshot));
      trials_TAS_20LoopScheduler.add(TAS_20RoutineBegin(snapshot));
      trials_TAS_20LoopScheduler.add(TAS_20RoutineEachFrame());
      trials_TAS_20LoopScheduler.add(TAS_20RoutineEnd(snapshot));
      trials_TAS_20LoopScheduler.add(trials_TAS_20LoopEndIteration(trials_TAS_20LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_TAS_20LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_TAS_20);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_TAS_20LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_BPQ_SF;
function trials_BPQ_SFLoopBegin(trials_BPQ_SFLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_BPQ_SF = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'bpqsf.csv',
      seed: undefined, name: 'trials_BPQ_SF'
    });
    psychoJS.experiment.addLoop(trials_BPQ_SF); // add the loop to the experiment
    currentLoop = trials_BPQ_SF;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrials_BPQ_SF of trials_BPQ_SF) {
      snapshot = trials_BPQ_SF.getSnapshot();
      trials_BPQ_SFLoopScheduler.add(importConditions(snapshot));
      trials_BPQ_SFLoopScheduler.add(BPQ_SFRoutineBegin(snapshot));
      trials_BPQ_SFLoopScheduler.add(BPQ_SFRoutineEachFrame());
      trials_BPQ_SFLoopScheduler.add(BPQ_SFRoutineEnd(snapshot));
      trials_BPQ_SFLoopScheduler.add(trials_BPQ_SFLoopEndIteration(trials_BPQ_SFLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_BPQ_SFLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_BPQ_SF);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_BPQ_SFLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_PACS;
function trials_PACSLoopBegin(trials_PACSLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_PACS = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'pacs.csv',
      seed: undefined, name: 'trials_PACS'
    });
    psychoJS.experiment.addLoop(trials_PACS); // add the loop to the experiment
    currentLoop = trials_PACS;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrials_PACS of trials_PACS) {
      snapshot = trials_PACS.getSnapshot();
      trials_PACSLoopScheduler.add(importConditions(snapshot));
      trials_PACSLoopScheduler.add(PACSRoutineBegin(snapshot));
      trials_PACSLoopScheduler.add(PACSRoutineEachFrame());
      trials_PACSLoopScheduler.add(PACSRoutineEnd(snapshot));
      trials_PACSLoopScheduler.add(trials_PACSLoopEndIteration(trials_PACSLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_PACSLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_PACS);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_PACSLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 5, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(ChoiceRoutineBegin(snapshot));
      trialsLoopScheduler.add(ChoiceRoutineEachFrame());
      trialsLoopScheduler.add(ChoiceRoutineEnd(snapshot));
      trialsLoopScheduler.add(FeedbackRoutineBegin(snapshot));
      trialsLoopScheduler.add(FeedbackRoutineEachFrame());
      trialsLoopScheduler.add(FeedbackRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var AUDITMaxDurationReached;
var AUDITMaxDuration;
var AUDITComponents;
function AUDITRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'AUDIT' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    AUDITClock.reset();
    routineTimer.reset();
    AUDITMaxDurationReached = false;
    // update component parameters for each repeat
    // reset button_opt1 to account for continued clicks & clear times on/off
    button_opt1.reset()
    // reset button_opt2 to account for continued clicks & clear times on/off
    button_opt2.reset()
    // reset button_opt3 to account for continued clicks & clear times on/off
    button_opt3.reset()
    button_opt4.setOpacity(Opacity_4);
    // reset button_opt4 to account for continued clicks & clear times on/off
    button_opt4.reset()
    button_opt5.setOpacity(Opacity_5);
    // reset button_opt5 to account for continued clicks & clear times on/off
    button_opt5.reset()
    text_opt_1.setText(Opt_1);
    text_opt_2.setText(Opt_2);
    text_opt_3.setText(Opt_3);
    text_opt_4.setText(Opt_4);
    text_opt_5.setText(Opt_5);
    text_question.setText(Question);
    psychoJS.experiment.addData('AUDIT.started', globalClock.getTime());
    AUDITMaxDuration = null
    // keep track of which components have finished
    AUDITComponents = [];
    AUDITComponents.push(button_opt1);
    AUDITComponents.push(button_opt2);
    AUDITComponents.push(button_opt3);
    AUDITComponents.push(button_opt4);
    AUDITComponents.push(button_opt5);
    AUDITComponents.push(text_opt_1);
    AUDITComponents.push(text_opt_2);
    AUDITComponents.push(text_opt_3);
    AUDITComponents.push(text_opt_4);
    AUDITComponents.push(text_opt_5);
    AUDITComponents.push(polygon_question);
    AUDITComponents.push(text_question);
    
    for (const thisComponent of AUDITComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function AUDITRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'AUDIT' ---
    // get current time
    t = AUDITClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *button_opt1* updates
    if (t >= 0 && button_opt1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_opt1.tStart = t;  // (not accounting for frame time here)
      button_opt1.frameNStart = frameN;  // exact frame index
      
      button_opt1.setAutoDraw(true);
    }
    
    if (button_opt1.status === PsychoJS.Status.STARTED) {
      // check whether button_opt1 has been pressed
      if (button_opt1.isClicked) {
        if (!button_opt1.wasClicked) {
          // store time of first click
          button_opt1.timesOn.push(button_opt1.clock.getTime());
          // store time clicked until
          button_opt1.timesOff.push(button_opt1.clock.getTime());
        } else {
          // update time clicked until;
          button_opt1.timesOff[button_opt1.timesOff.length - 1] = button_opt1.clock.getTime();
        }
        if (!button_opt1.wasClicked) {
          // end routine when button_opt1 is clicked
          continueRoutine = false;
          
        }
        // if button_opt1 is still clicked next frame, it is not a new click
        button_opt1.wasClicked = true;
      } else {
        // if button_opt1 is clicked next frame, it is a new click
        button_opt1.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_opt1 hasn't started / has finished
      button_opt1.clock.reset();
      // if button_opt1 is clicked next frame, it is a new click
      button_opt1.wasClicked = false;
    }
    
    // *button_opt2* updates
    if (t >= 0 && button_opt2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_opt2.tStart = t;  // (not accounting for frame time here)
      button_opt2.frameNStart = frameN;  // exact frame index
      
      button_opt2.setAutoDraw(true);
    }
    
    if (button_opt2.status === PsychoJS.Status.STARTED) {
      // check whether button_opt2 has been pressed
      if (button_opt2.isClicked) {
        if (!button_opt2.wasClicked) {
          // store time of first click
          button_opt2.timesOn.push(button_opt2.clock.getTime());
          // store time clicked until
          button_opt2.timesOff.push(button_opt2.clock.getTime());
        } else {
          // update time clicked until;
          button_opt2.timesOff[button_opt2.timesOff.length - 1] = button_opt2.clock.getTime();
        }
        if (!button_opt2.wasClicked) {
          // end routine when button_opt2 is clicked
          continueRoutine = false;
          
        }
        // if button_opt2 is still clicked next frame, it is not a new click
        button_opt2.wasClicked = true;
      } else {
        // if button_opt2 is clicked next frame, it is a new click
        button_opt2.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_opt2 hasn't started / has finished
      button_opt2.clock.reset();
      // if button_opt2 is clicked next frame, it is a new click
      button_opt2.wasClicked = false;
    }
    
    // *button_opt3* updates
    if (t >= 0 && button_opt3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_opt3.tStart = t;  // (not accounting for frame time here)
      button_opt3.frameNStart = frameN;  // exact frame index
      
      button_opt3.setAutoDraw(true);
    }
    
    if (button_opt3.status === PsychoJS.Status.STARTED) {
      // check whether button_opt3 has been pressed
      if (button_opt3.isClicked) {
        if (!button_opt3.wasClicked) {
          // store time of first click
          button_opt3.timesOn.push(button_opt3.clock.getTime());
          // store time clicked until
          button_opt3.timesOff.push(button_opt3.clock.getTime());
        } else {
          // update time clicked until;
          button_opt3.timesOff[button_opt3.timesOff.length - 1] = button_opt3.clock.getTime();
        }
        if (!button_opt3.wasClicked) {
          // end routine when button_opt3 is clicked
          continueRoutine = false;
          
        }
        // if button_opt3 is still clicked next frame, it is not a new click
        button_opt3.wasClicked = true;
      } else {
        // if button_opt3 is clicked next frame, it is a new click
        button_opt3.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_opt3 hasn't started / has finished
      button_opt3.clock.reset();
      // if button_opt3 is clicked next frame, it is a new click
      button_opt3.wasClicked = false;
    }
    
    // *button_opt4* updates
    if (t >= 0 && button_opt4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_opt4.tStart = t;  // (not accounting for frame time here)
      button_opt4.frameNStart = frameN;  // exact frame index
      
      button_opt4.setAutoDraw(true);
    }
    
    if (button_opt4.status === PsychoJS.Status.STARTED) {
      // check whether button_opt4 has been pressed
      if (button_opt4.isClicked) {
        if (!button_opt4.wasClicked) {
          // store time of first click
          button_opt4.timesOn.push(button_opt4.clock.getTime());
          // store time clicked until
          button_opt4.timesOff.push(button_opt4.clock.getTime());
        } else {
          // update time clicked until;
          button_opt4.timesOff[button_opt4.timesOff.length - 1] = button_opt4.clock.getTime();
        }
        if (!button_opt4.wasClicked) {
          // end routine when button_opt4 is clicked
          continueRoutine = false;
          
        }
        // if button_opt4 is still clicked next frame, it is not a new click
        button_opt4.wasClicked = true;
      } else {
        // if button_opt4 is clicked next frame, it is a new click
        button_opt4.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_opt4 hasn't started / has finished
      button_opt4.clock.reset();
      // if button_opt4 is clicked next frame, it is a new click
      button_opt4.wasClicked = false;
    }
    
    // *button_opt5* updates
    if (t >= 0 && button_opt5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_opt5.tStart = t;  // (not accounting for frame time here)
      button_opt5.frameNStart = frameN;  // exact frame index
      
      button_opt5.setAutoDraw(true);
    }
    
    if (button_opt5.status === PsychoJS.Status.STARTED) {
      // check whether button_opt5 has been pressed
      if (button_opt5.isClicked) {
        if (!button_opt5.wasClicked) {
          // store time of first click
          button_opt5.timesOn.push(button_opt5.clock.getTime());
          // store time clicked until
          button_opt5.timesOff.push(button_opt5.clock.getTime());
        } else {
          // update time clicked until;
          button_opt5.timesOff[button_opt5.timesOff.length - 1] = button_opt5.clock.getTime();
        }
        if (!button_opt5.wasClicked) {
          // end routine when button_opt5 is clicked
          continueRoutine = false;
          
        }
        // if button_opt5 is still clicked next frame, it is not a new click
        button_opt5.wasClicked = true;
      } else {
        // if button_opt5 is clicked next frame, it is a new click
        button_opt5.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_opt5 hasn't started / has finished
      button_opt5.clock.reset();
      // if button_opt5 is clicked next frame, it is a new click
      button_opt5.wasClicked = false;
    }
    
    // *text_opt_1* updates
    if (t >= 0.0 && text_opt_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_opt_1.tStart = t;  // (not accounting for frame time here)
      text_opt_1.frameNStart = frameN;  // exact frame index
      
      text_opt_1.setAutoDraw(true);
    }
    
    
    // *text_opt_2* updates
    if (t >= 0.0 && text_opt_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_opt_2.tStart = t;  // (not accounting for frame time here)
      text_opt_2.frameNStart = frameN;  // exact frame index
      
      text_opt_2.setAutoDraw(true);
    }
    
    
    // *text_opt_3* updates
    if (t >= 0.0 && text_opt_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_opt_3.tStart = t;  // (not accounting for frame time here)
      text_opt_3.frameNStart = frameN;  // exact frame index
      
      text_opt_3.setAutoDraw(true);
    }
    
    
    // *text_opt_4* updates
    if (t >= 0.0 && text_opt_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_opt_4.tStart = t;  // (not accounting for frame time here)
      text_opt_4.frameNStart = frameN;  // exact frame index
      
      text_opt_4.setAutoDraw(true);
    }
    
    
    // *text_opt_5* updates
    if (t >= 0.0 && text_opt_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_opt_5.tStart = t;  // (not accounting for frame time here)
      text_opt_5.frameNStart = frameN;  // exact frame index
      
      text_opt_5.setAutoDraw(true);
    }
    
    
    // *polygon_question* updates
    if (t >= 0.0 && polygon_question.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_question.tStart = t;  // (not accounting for frame time here)
      polygon_question.frameNStart = frameN;  // exact frame index
      
      polygon_question.setAutoDraw(true);
    }
    
    
    // *text_question* updates
    if (t >= 0.0 && text_question.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_question.tStart = t;  // (not accounting for frame time here)
      text_question.frameNStart = frameN;  // exact frame index
      
      text_question.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of AUDITComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function AUDITRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'AUDIT' ---
    for (const thisComponent of AUDITComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('AUDIT.stopped', globalClock.getTime());
    psychoJS.experiment.addData('button_opt1.numClicks', button_opt1.numClicks);
    psychoJS.experiment.addData('button_opt1.timesOn', button_opt1.timesOn);
    psychoJS.experiment.addData('button_opt1.timesOff', button_opt1.timesOff);
    psychoJS.experiment.addData('button_opt2.numClicks', button_opt2.numClicks);
    psychoJS.experiment.addData('button_opt2.timesOn', button_opt2.timesOn);
    psychoJS.experiment.addData('button_opt2.timesOff', button_opt2.timesOff);
    psychoJS.experiment.addData('button_opt3.numClicks', button_opt3.numClicks);
    psychoJS.experiment.addData('button_opt3.timesOn', button_opt3.timesOn);
    psychoJS.experiment.addData('button_opt3.timesOff', button_opt3.timesOff);
    psychoJS.experiment.addData('button_opt4.numClicks', button_opt4.numClicks);
    psychoJS.experiment.addData('button_opt4.timesOn', button_opt4.timesOn);
    psychoJS.experiment.addData('button_opt4.timesOff', button_opt4.timesOff);
    psychoJS.experiment.addData('button_opt5.numClicks', button_opt5.numClicks);
    psychoJS.experiment.addData('button_opt5.timesOn', button_opt5.timesOn);
    psychoJS.experiment.addData('button_opt5.timesOff', button_opt5.timesOff);
    // the Routine "AUDIT" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var TAS_20_InstructionsMaxDurationReached;
var TAS_20_InstructionsMaxDuration;
var TAS_20_InstructionsComponents;
function TAS_20_InstructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'TAS_20_Instructions' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    TAS_20_InstructionsClock.reset();
    routineTimer.reset();
    TAS_20_InstructionsMaxDurationReached = false;
    // update component parameters for each repeat
    // reset button_instructions_2 to account for continued clicks & clear times on/off
    button_instructions_2.reset()
    psychoJS.experiment.addData('TAS_20_Instructions.started', globalClock.getTime());
    TAS_20_InstructionsMaxDuration = null
    // keep track of which components have finished
    TAS_20_InstructionsComponents = [];
    TAS_20_InstructionsComponents.push(image_2);
    TAS_20_InstructionsComponents.push(text_title_2);
    TAS_20_InstructionsComponents.push(text_instructions_2);
    TAS_20_InstructionsComponents.push(button_instructions_2);
    
    for (const thisComponent of TAS_20_InstructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function TAS_20_InstructionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'TAS_20_Instructions' ---
    // get current time
    t = TAS_20_InstructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_2* updates
    if (t >= 0.0 && image_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_2.tStart = t;  // (not accounting for frame time here)
      image_2.frameNStart = frameN;  // exact frame index
      
      image_2.setAutoDraw(true);
    }
    
    
    // *text_title_2* updates
    if (t >= 0.0 && text_title_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_title_2.tStart = t;  // (not accounting for frame time here)
      text_title_2.frameNStart = frameN;  // exact frame index
      
      text_title_2.setAutoDraw(true);
    }
    
    
    // *text_instructions_2* updates
    if (t >= 0.0 && text_instructions_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_instructions_2.tStart = t;  // (not accounting for frame time here)
      text_instructions_2.frameNStart = frameN;  // exact frame index
      
      text_instructions_2.setAutoDraw(true);
    }
    
    
    // *button_instructions_2* updates
    if (t >= 0 && button_instructions_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_instructions_2.tStart = t;  // (not accounting for frame time here)
      button_instructions_2.frameNStart = frameN;  // exact frame index
      
      button_instructions_2.setAutoDraw(true);
    }
    
    if (button_instructions_2.status === PsychoJS.Status.STARTED) {
      // check whether button_instructions_2 has been pressed
      if (button_instructions_2.isClicked) {
        if (!button_instructions_2.wasClicked) {
          // store time of first click
          button_instructions_2.timesOn.push(button_instructions_2.clock.getTime());
          // store time clicked until
          button_instructions_2.timesOff.push(button_instructions_2.clock.getTime());
        } else {
          // update time clicked until;
          button_instructions_2.timesOff[button_instructions_2.timesOff.length - 1] = button_instructions_2.clock.getTime();
        }
        if (!button_instructions_2.wasClicked) {
          // end routine when button_instructions_2 is clicked
          continueRoutine = false;
          
        }
        // if button_instructions_2 is still clicked next frame, it is not a new click
        button_instructions_2.wasClicked = true;
      } else {
        // if button_instructions_2 is clicked next frame, it is a new click
        button_instructions_2.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_instructions_2 hasn't started / has finished
      button_instructions_2.clock.reset();
      // if button_instructions_2 is clicked next frame, it is a new click
      button_instructions_2.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of TAS_20_InstructionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function TAS_20_InstructionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'TAS_20_Instructions' ---
    for (const thisComponent of TAS_20_InstructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('TAS_20_Instructions.stopped', globalClock.getTime());
    psychoJS.experiment.addData('button_instructions_2.numClicks', button_instructions_2.numClicks);
    psychoJS.experiment.addData('button_instructions_2.timesOn', button_instructions_2.timesOn);
    psychoJS.experiment.addData('button_instructions_2.timesOff', button_instructions_2.timesOff);
    // the Routine "TAS_20_Instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var TAS_20MaxDurationReached;
var TAS_20MaxDuration;
var TAS_20Components;
function TAS_20RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'TAS_20' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    TAS_20Clock.reset();
    routineTimer.reset();
    TAS_20MaxDurationReached = false;
    // update component parameters for each repeat
    // reset button_opt1_2 to account for continued clicks & clear times on/off
    button_opt1_2.reset()
    // reset button_opt2_2 to account for continued clicks & clear times on/off
    button_opt2_2.reset()
    // reset button_opt3_2 to account for continued clicks & clear times on/off
    button_opt3_2.reset()
    // reset button_opt4_2 to account for continued clicks & clear times on/off
    button_opt4_2.reset()
    // reset button_opt5_2 to account for continued clicks & clear times on/off
    button_opt5_2.reset()
    text_opt_1_2.setText(Opt_1);
    text_opt_2_2.setText(Opt_2);
    text_opt_3_2.setText(Opt_3);
    text_opt_4_2.setText(Opt_4);
    text_opt_5_2.setText(Opt_5);
    text_question_2.setText(Question);
    psychoJS.experiment.addData('TAS_20.started', globalClock.getTime());
    TAS_20MaxDuration = null
    // keep track of which components have finished
    TAS_20Components = [];
    TAS_20Components.push(button_opt1_2);
    TAS_20Components.push(button_opt2_2);
    TAS_20Components.push(button_opt3_2);
    TAS_20Components.push(button_opt4_2);
    TAS_20Components.push(button_opt5_2);
    TAS_20Components.push(text_opt_1_2);
    TAS_20Components.push(text_opt_2_2);
    TAS_20Components.push(text_opt_3_2);
    TAS_20Components.push(text_opt_4_2);
    TAS_20Components.push(text_opt_5_2);
    TAS_20Components.push(polygon_question_2);
    TAS_20Components.push(text_question_2);
    
    for (const thisComponent of TAS_20Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function TAS_20RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'TAS_20' ---
    // get current time
    t = TAS_20Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *button_opt1_2* updates
    if (t >= 0 && button_opt1_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_opt1_2.tStart = t;  // (not accounting for frame time here)
      button_opt1_2.frameNStart = frameN;  // exact frame index
      
      button_opt1_2.setAutoDraw(true);
    }
    
    if (button_opt1_2.status === PsychoJS.Status.STARTED) {
      // check whether button_opt1_2 has been pressed
      if (button_opt1_2.isClicked) {
        if (!button_opt1_2.wasClicked) {
          // store time of first click
          button_opt1_2.timesOn.push(button_opt1_2.clock.getTime());
          // store time clicked until
          button_opt1_2.timesOff.push(button_opt1_2.clock.getTime());
        } else {
          // update time clicked until;
          button_opt1_2.timesOff[button_opt1_2.timesOff.length - 1] = button_opt1_2.clock.getTime();
        }
        if (!button_opt1_2.wasClicked) {
          // end routine when button_opt1_2 is clicked
          continueRoutine = false;
          
        }
        // if button_opt1_2 is still clicked next frame, it is not a new click
        button_opt1_2.wasClicked = true;
      } else {
        // if button_opt1_2 is clicked next frame, it is a new click
        button_opt1_2.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_opt1_2 hasn't started / has finished
      button_opt1_2.clock.reset();
      // if button_opt1_2 is clicked next frame, it is a new click
      button_opt1_2.wasClicked = false;
    }
    
    // *button_opt2_2* updates
    if (t >= 0 && button_opt2_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_opt2_2.tStart = t;  // (not accounting for frame time here)
      button_opt2_2.frameNStart = frameN;  // exact frame index
      
      button_opt2_2.setAutoDraw(true);
    }
    
    if (button_opt2_2.status === PsychoJS.Status.STARTED) {
      // check whether button_opt2_2 has been pressed
      if (button_opt2_2.isClicked) {
        if (!button_opt2_2.wasClicked) {
          // store time of first click
          button_opt2_2.timesOn.push(button_opt2_2.clock.getTime());
          // store time clicked until
          button_opt2_2.timesOff.push(button_opt2_2.clock.getTime());
        } else {
          // update time clicked until;
          button_opt2_2.timesOff[button_opt2_2.timesOff.length - 1] = button_opt2_2.clock.getTime();
        }
        if (!button_opt2_2.wasClicked) {
          // end routine when button_opt2_2 is clicked
          continueRoutine = false;
          
        }
        // if button_opt2_2 is still clicked next frame, it is not a new click
        button_opt2_2.wasClicked = true;
      } else {
        // if button_opt2_2 is clicked next frame, it is a new click
        button_opt2_2.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_opt2_2 hasn't started / has finished
      button_opt2_2.clock.reset();
      // if button_opt2_2 is clicked next frame, it is a new click
      button_opt2_2.wasClicked = false;
    }
    
    // *button_opt3_2* updates
    if (t >= 0 && button_opt3_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_opt3_2.tStart = t;  // (not accounting for frame time here)
      button_opt3_2.frameNStart = frameN;  // exact frame index
      
      button_opt3_2.setAutoDraw(true);
    }
    
    if (button_opt3_2.status === PsychoJS.Status.STARTED) {
      // check whether button_opt3_2 has been pressed
      if (button_opt3_2.isClicked) {
        if (!button_opt3_2.wasClicked) {
          // store time of first click
          button_opt3_2.timesOn.push(button_opt3_2.clock.getTime());
          // store time clicked until
          button_opt3_2.timesOff.push(button_opt3_2.clock.getTime());
        } else {
          // update time clicked until;
          button_opt3_2.timesOff[button_opt3_2.timesOff.length - 1] = button_opt3_2.clock.getTime();
        }
        if (!button_opt3_2.wasClicked) {
          // end routine when button_opt3_2 is clicked
          continueRoutine = false;
          
        }
        // if button_opt3_2 is still clicked next frame, it is not a new click
        button_opt3_2.wasClicked = true;
      } else {
        // if button_opt3_2 is clicked next frame, it is a new click
        button_opt3_2.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_opt3_2 hasn't started / has finished
      button_opt3_2.clock.reset();
      // if button_opt3_2 is clicked next frame, it is a new click
      button_opt3_2.wasClicked = false;
    }
    
    // *button_opt4_2* updates
    if (t >= 0 && button_opt4_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_opt4_2.tStart = t;  // (not accounting for frame time here)
      button_opt4_2.frameNStart = frameN;  // exact frame index
      
      button_opt4_2.setAutoDraw(true);
    }
    
    if (button_opt4_2.status === PsychoJS.Status.STARTED) {
      // check whether button_opt4_2 has been pressed
      if (button_opt4_2.isClicked) {
        if (!button_opt4_2.wasClicked) {
          // store time of first click
          button_opt4_2.timesOn.push(button_opt4_2.clock.getTime());
          // store time clicked until
          button_opt4_2.timesOff.push(button_opt4_2.clock.getTime());
        } else {
          // update time clicked until;
          button_opt4_2.timesOff[button_opt4_2.timesOff.length - 1] = button_opt4_2.clock.getTime();
        }
        if (!button_opt4_2.wasClicked) {
          // end routine when button_opt4_2 is clicked
          continueRoutine = false;
          
        }
        // if button_opt4_2 is still clicked next frame, it is not a new click
        button_opt4_2.wasClicked = true;
      } else {
        // if button_opt4_2 is clicked next frame, it is a new click
        button_opt4_2.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_opt4_2 hasn't started / has finished
      button_opt4_2.clock.reset();
      // if button_opt4_2 is clicked next frame, it is a new click
      button_opt4_2.wasClicked = false;
    }
    
    // *button_opt5_2* updates
    if (t >= 0 && button_opt5_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_opt5_2.tStart = t;  // (not accounting for frame time here)
      button_opt5_2.frameNStart = frameN;  // exact frame index
      
      button_opt5_2.setAutoDraw(true);
    }
    
    if (button_opt5_2.status === PsychoJS.Status.STARTED) {
      // check whether button_opt5_2 has been pressed
      if (button_opt5_2.isClicked) {
        if (!button_opt5_2.wasClicked) {
          // store time of first click
          button_opt5_2.timesOn.push(button_opt5_2.clock.getTime());
          // store time clicked until
          button_opt5_2.timesOff.push(button_opt5_2.clock.getTime());
        } else {
          // update time clicked until;
          button_opt5_2.timesOff[button_opt5_2.timesOff.length - 1] = button_opt5_2.clock.getTime();
        }
        if (!button_opt5_2.wasClicked) {
          // end routine when button_opt5_2 is clicked
          continueRoutine = false;
          
        }
        // if button_opt5_2 is still clicked next frame, it is not a new click
        button_opt5_2.wasClicked = true;
      } else {
        // if button_opt5_2 is clicked next frame, it is a new click
        button_opt5_2.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_opt5_2 hasn't started / has finished
      button_opt5_2.clock.reset();
      // if button_opt5_2 is clicked next frame, it is a new click
      button_opt5_2.wasClicked = false;
    }
    
    // *text_opt_1_2* updates
    if (t >= 0.0 && text_opt_1_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_opt_1_2.tStart = t;  // (not accounting for frame time here)
      text_opt_1_2.frameNStart = frameN;  // exact frame index
      
      text_opt_1_2.setAutoDraw(true);
    }
    
    
    // *text_opt_2_2* updates
    if (t >= 0.0 && text_opt_2_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_opt_2_2.tStart = t;  // (not accounting for frame time here)
      text_opt_2_2.frameNStart = frameN;  // exact frame index
      
      text_opt_2_2.setAutoDraw(true);
    }
    
    
    // *text_opt_3_2* updates
    if (t >= 0.0 && text_opt_3_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_opt_3_2.tStart = t;  // (not accounting for frame time here)
      text_opt_3_2.frameNStart = frameN;  // exact frame index
      
      text_opt_3_2.setAutoDraw(true);
    }
    
    
    // *text_opt_4_2* updates
    if (t >= 0.0 && text_opt_4_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_opt_4_2.tStart = t;  // (not accounting for frame time here)
      text_opt_4_2.frameNStart = frameN;  // exact frame index
      
      text_opt_4_2.setAutoDraw(true);
    }
    
    
    // *text_opt_5_2* updates
    if (t >= 0.0 && text_opt_5_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_opt_5_2.tStart = t;  // (not accounting for frame time here)
      text_opt_5_2.frameNStart = frameN;  // exact frame index
      
      text_opt_5_2.setAutoDraw(true);
    }
    
    
    // *polygon_question_2* updates
    if (t >= 0.0 && polygon_question_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_question_2.tStart = t;  // (not accounting for frame time here)
      polygon_question_2.frameNStart = frameN;  // exact frame index
      
      polygon_question_2.setAutoDraw(true);
    }
    
    
    // *text_question_2* updates
    if (t >= 0.0 && text_question_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_question_2.tStart = t;  // (not accounting for frame time here)
      text_question_2.frameNStart = frameN;  // exact frame index
      
      text_question_2.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of TAS_20Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function TAS_20RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'TAS_20' ---
    for (const thisComponent of TAS_20Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('TAS_20.stopped', globalClock.getTime());
    psychoJS.experiment.addData('button_opt1_2.numClicks', button_opt1_2.numClicks);
    psychoJS.experiment.addData('button_opt1_2.timesOn', button_opt1_2.timesOn);
    psychoJS.experiment.addData('button_opt1_2.timesOff', button_opt1_2.timesOff);
    psychoJS.experiment.addData('button_opt2_2.numClicks', button_opt2_2.numClicks);
    psychoJS.experiment.addData('button_opt2_2.timesOn', button_opt2_2.timesOn);
    psychoJS.experiment.addData('button_opt2_2.timesOff', button_opt2_2.timesOff);
    psychoJS.experiment.addData('button_opt3_2.numClicks', button_opt3_2.numClicks);
    psychoJS.experiment.addData('button_opt3_2.timesOn', button_opt3_2.timesOn);
    psychoJS.experiment.addData('button_opt3_2.timesOff', button_opt3_2.timesOff);
    psychoJS.experiment.addData('button_opt4_2.numClicks', button_opt4_2.numClicks);
    psychoJS.experiment.addData('button_opt4_2.timesOn', button_opt4_2.timesOn);
    psychoJS.experiment.addData('button_opt4_2.timesOff', button_opt4_2.timesOff);
    psychoJS.experiment.addData('button_opt5_2.numClicks', button_opt5_2.numClicks);
    psychoJS.experiment.addData('button_opt5_2.timesOn', button_opt5_2.timesOn);
    psychoJS.experiment.addData('button_opt5_2.timesOff', button_opt5_2.timesOff);
    // the Routine "TAS_20" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var BPQ_SF_InstructionsMaxDurationReached;
var BPQ_SF_InstructionsMaxDuration;
var BPQ_SF_InstructionsComponents;
function BPQ_SF_InstructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'BPQ_SF_Instructions' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    BPQ_SF_InstructionsClock.reset();
    routineTimer.reset();
    BPQ_SF_InstructionsMaxDurationReached = false;
    // update component parameters for each repeat
    // reset button_instructions_3 to account for continued clicks & clear times on/off
    button_instructions_3.reset()
    psychoJS.experiment.addData('BPQ_SF_Instructions.started', globalClock.getTime());
    BPQ_SF_InstructionsMaxDuration = null
    // keep track of which components have finished
    BPQ_SF_InstructionsComponents = [];
    BPQ_SF_InstructionsComponents.push(image_3);
    BPQ_SF_InstructionsComponents.push(text_title_3);
    BPQ_SF_InstructionsComponents.push(text_instructions_3);
    BPQ_SF_InstructionsComponents.push(button_instructions_3);
    
    for (const thisComponent of BPQ_SF_InstructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function BPQ_SF_InstructionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'BPQ_SF_Instructions' ---
    // get current time
    t = BPQ_SF_InstructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_3* updates
    if (t >= 0.0 && image_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_3.tStart = t;  // (not accounting for frame time here)
      image_3.frameNStart = frameN;  // exact frame index
      
      image_3.setAutoDraw(true);
    }
    
    
    // *text_title_3* updates
    if (t >= 0.0 && text_title_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_title_3.tStart = t;  // (not accounting for frame time here)
      text_title_3.frameNStart = frameN;  // exact frame index
      
      text_title_3.setAutoDraw(true);
    }
    
    
    // *text_instructions_3* updates
    if (t >= 0.0 && text_instructions_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_instructions_3.tStart = t;  // (not accounting for frame time here)
      text_instructions_3.frameNStart = frameN;  // exact frame index
      
      text_instructions_3.setAutoDraw(true);
    }
    
    
    // *button_instructions_3* updates
    if (t >= 0 && button_instructions_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_instructions_3.tStart = t;  // (not accounting for frame time here)
      button_instructions_3.frameNStart = frameN;  // exact frame index
      
      button_instructions_3.setAutoDraw(true);
    }
    
    if (button_instructions_3.status === PsychoJS.Status.STARTED) {
      // check whether button_instructions_3 has been pressed
      if (button_instructions_3.isClicked) {
        if (!button_instructions_3.wasClicked) {
          // store time of first click
          button_instructions_3.timesOn.push(button_instructions_3.clock.getTime());
          // store time clicked until
          button_instructions_3.timesOff.push(button_instructions_3.clock.getTime());
        } else {
          // update time clicked until;
          button_instructions_3.timesOff[button_instructions_3.timesOff.length - 1] = button_instructions_3.clock.getTime();
        }
        if (!button_instructions_3.wasClicked) {
          // end routine when button_instructions_3 is clicked
          continueRoutine = false;
          
        }
        // if button_instructions_3 is still clicked next frame, it is not a new click
        button_instructions_3.wasClicked = true;
      } else {
        // if button_instructions_3 is clicked next frame, it is a new click
        button_instructions_3.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_instructions_3 hasn't started / has finished
      button_instructions_3.clock.reset();
      // if button_instructions_3 is clicked next frame, it is a new click
      button_instructions_3.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of BPQ_SF_InstructionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function BPQ_SF_InstructionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'BPQ_SF_Instructions' ---
    for (const thisComponent of BPQ_SF_InstructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('BPQ_SF_Instructions.stopped', globalClock.getTime());
    psychoJS.experiment.addData('button_instructions_3.numClicks', button_instructions_3.numClicks);
    psychoJS.experiment.addData('button_instructions_3.timesOn', button_instructions_3.timesOn);
    psychoJS.experiment.addData('button_instructions_3.timesOff', button_instructions_3.timesOff);
    // the Routine "BPQ_SF_Instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var BPQ_SFMaxDurationReached;
var BPQ_SFMaxDuration;
var BPQ_SFComponents;
function BPQ_SFRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'BPQ_SF' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    BPQ_SFClock.reset();
    routineTimer.reset();
    BPQ_SFMaxDurationReached = false;
    // update component parameters for each repeat
    // reset button_opt1_3 to account for continued clicks & clear times on/off
    button_opt1_3.reset()
    // reset button_opt2_3 to account for continued clicks & clear times on/off
    button_opt2_3.reset()
    // reset button_opt3_3 to account for continued clicks & clear times on/off
    button_opt3_3.reset()
    // reset button_opt4_3 to account for continued clicks & clear times on/off
    button_opt4_3.reset()
    // reset button_opt5_3 to account for continued clicks & clear times on/off
    button_opt5_3.reset()
    text_opt_1_3.setText(Opt_1);
    text_opt_2_3.setText(Opt_2);
    text_opt_3_3.setText(Opt_3);
    text_opt_4_3.setText(Opt_4);
    text_opt_5_3.setText(Opt_5);
    text_question_3.setText(Question);
    psychoJS.experiment.addData('BPQ_SF.started', globalClock.getTime());
    BPQ_SFMaxDuration = null
    // keep track of which components have finished
    BPQ_SFComponents = [];
    BPQ_SFComponents.push(button_opt1_3);
    BPQ_SFComponents.push(button_opt2_3);
    BPQ_SFComponents.push(button_opt3_3);
    BPQ_SFComponents.push(button_opt4_3);
    BPQ_SFComponents.push(button_opt5_3);
    BPQ_SFComponents.push(text_opt_1_3);
    BPQ_SFComponents.push(text_opt_2_3);
    BPQ_SFComponents.push(text_opt_3_3);
    BPQ_SFComponents.push(text_opt_4_3);
    BPQ_SFComponents.push(text_opt_5_3);
    BPQ_SFComponents.push(polygon_question_3);
    BPQ_SFComponents.push(text_question_3);
    
    for (const thisComponent of BPQ_SFComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function BPQ_SFRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'BPQ_SF' ---
    // get current time
    t = BPQ_SFClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *button_opt1_3* updates
    if (t >= 0 && button_opt1_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_opt1_3.tStart = t;  // (not accounting for frame time here)
      button_opt1_3.frameNStart = frameN;  // exact frame index
      
      button_opt1_3.setAutoDraw(true);
    }
    
    if (button_opt1_3.status === PsychoJS.Status.STARTED) {
      // check whether button_opt1_3 has been pressed
      if (button_opt1_3.isClicked) {
        if (!button_opt1_3.wasClicked) {
          // store time of first click
          button_opt1_3.timesOn.push(button_opt1_3.clock.getTime());
          // store time clicked until
          button_opt1_3.timesOff.push(button_opt1_3.clock.getTime());
        } else {
          // update time clicked until;
          button_opt1_3.timesOff[button_opt1_3.timesOff.length - 1] = button_opt1_3.clock.getTime();
        }
        if (!button_opt1_3.wasClicked) {
          // end routine when button_opt1_3 is clicked
          continueRoutine = false;
          
        }
        // if button_opt1_3 is still clicked next frame, it is not a new click
        button_opt1_3.wasClicked = true;
      } else {
        // if button_opt1_3 is clicked next frame, it is a new click
        button_opt1_3.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_opt1_3 hasn't started / has finished
      button_opt1_3.clock.reset();
      // if button_opt1_3 is clicked next frame, it is a new click
      button_opt1_3.wasClicked = false;
    }
    
    // *button_opt2_3* updates
    if (t >= 0 && button_opt2_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_opt2_3.tStart = t;  // (not accounting for frame time here)
      button_opt2_3.frameNStart = frameN;  // exact frame index
      
      button_opt2_3.setAutoDraw(true);
    }
    
    if (button_opt2_3.status === PsychoJS.Status.STARTED) {
      // check whether button_opt2_3 has been pressed
      if (button_opt2_3.isClicked) {
        if (!button_opt2_3.wasClicked) {
          // store time of first click
          button_opt2_3.timesOn.push(button_opt2_3.clock.getTime());
          // store time clicked until
          button_opt2_3.timesOff.push(button_opt2_3.clock.getTime());
        } else {
          // update time clicked until;
          button_opt2_3.timesOff[button_opt2_3.timesOff.length - 1] = button_opt2_3.clock.getTime();
        }
        if (!button_opt2_3.wasClicked) {
          // end routine when button_opt2_3 is clicked
          continueRoutine = false;
          
        }
        // if button_opt2_3 is still clicked next frame, it is not a new click
        button_opt2_3.wasClicked = true;
      } else {
        // if button_opt2_3 is clicked next frame, it is a new click
        button_opt2_3.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_opt2_3 hasn't started / has finished
      button_opt2_3.clock.reset();
      // if button_opt2_3 is clicked next frame, it is a new click
      button_opt2_3.wasClicked = false;
    }
    
    // *button_opt3_3* updates
    if (t >= 0 && button_opt3_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_opt3_3.tStart = t;  // (not accounting for frame time here)
      button_opt3_3.frameNStart = frameN;  // exact frame index
      
      button_opt3_3.setAutoDraw(true);
    }
    
    if (button_opt3_3.status === PsychoJS.Status.STARTED) {
      // check whether button_opt3_3 has been pressed
      if (button_opt3_3.isClicked) {
        if (!button_opt3_3.wasClicked) {
          // store time of first click
          button_opt3_3.timesOn.push(button_opt3_3.clock.getTime());
          // store time clicked until
          button_opt3_3.timesOff.push(button_opt3_3.clock.getTime());
        } else {
          // update time clicked until;
          button_opt3_3.timesOff[button_opt3_3.timesOff.length - 1] = button_opt3_3.clock.getTime();
        }
        if (!button_opt3_3.wasClicked) {
          // end routine when button_opt3_3 is clicked
          continueRoutine = false;
          
        }
        // if button_opt3_3 is still clicked next frame, it is not a new click
        button_opt3_3.wasClicked = true;
      } else {
        // if button_opt3_3 is clicked next frame, it is a new click
        button_opt3_3.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_opt3_3 hasn't started / has finished
      button_opt3_3.clock.reset();
      // if button_opt3_3 is clicked next frame, it is a new click
      button_opt3_3.wasClicked = false;
    }
    
    // *button_opt4_3* updates
    if (t >= 0 && button_opt4_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_opt4_3.tStart = t;  // (not accounting for frame time here)
      button_opt4_3.frameNStart = frameN;  // exact frame index
      
      button_opt4_3.setAutoDraw(true);
    }
    
    if (button_opt4_3.status === PsychoJS.Status.STARTED) {
      // check whether button_opt4_3 has been pressed
      if (button_opt4_3.isClicked) {
        if (!button_opt4_3.wasClicked) {
          // store time of first click
          button_opt4_3.timesOn.push(button_opt4_3.clock.getTime());
          // store time clicked until
          button_opt4_3.timesOff.push(button_opt4_3.clock.getTime());
        } else {
          // update time clicked until;
          button_opt4_3.timesOff[button_opt4_3.timesOff.length - 1] = button_opt4_3.clock.getTime();
        }
        if (!button_opt4_3.wasClicked) {
          // end routine when button_opt4_3 is clicked
          continueRoutine = false;
          
        }
        // if button_opt4_3 is still clicked next frame, it is not a new click
        button_opt4_3.wasClicked = true;
      } else {
        // if button_opt4_3 is clicked next frame, it is a new click
        button_opt4_3.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_opt4_3 hasn't started / has finished
      button_opt4_3.clock.reset();
      // if button_opt4_3 is clicked next frame, it is a new click
      button_opt4_3.wasClicked = false;
    }
    
    // *button_opt5_3* updates
    if (t >= 0 && button_opt5_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_opt5_3.tStart = t;  // (not accounting for frame time here)
      button_opt5_3.frameNStart = frameN;  // exact frame index
      
      button_opt5_3.setAutoDraw(true);
    }
    
    if (button_opt5_3.status === PsychoJS.Status.STARTED) {
      // check whether button_opt5_3 has been pressed
      if (button_opt5_3.isClicked) {
        if (!button_opt5_3.wasClicked) {
          // store time of first click
          button_opt5_3.timesOn.push(button_opt5_3.clock.getTime());
          // store time clicked until
          button_opt5_3.timesOff.push(button_opt5_3.clock.getTime());
        } else {
          // update time clicked until;
          button_opt5_3.timesOff[button_opt5_3.timesOff.length - 1] = button_opt5_3.clock.getTime();
        }
        if (!button_opt5_3.wasClicked) {
          // end routine when button_opt5_3 is clicked
          continueRoutine = false;
          
        }
        // if button_opt5_3 is still clicked next frame, it is not a new click
        button_opt5_3.wasClicked = true;
      } else {
        // if button_opt5_3 is clicked next frame, it is a new click
        button_opt5_3.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_opt5_3 hasn't started / has finished
      button_opt5_3.clock.reset();
      // if button_opt5_3 is clicked next frame, it is a new click
      button_opt5_3.wasClicked = false;
    }
    
    // *text_opt_1_3* updates
    if (t >= 0.0 && text_opt_1_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_opt_1_3.tStart = t;  // (not accounting for frame time here)
      text_opt_1_3.frameNStart = frameN;  // exact frame index
      
      text_opt_1_3.setAutoDraw(true);
    }
    
    
    // *text_opt_2_3* updates
    if (t >= 0.0 && text_opt_2_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_opt_2_3.tStart = t;  // (not accounting for frame time here)
      text_opt_2_3.frameNStart = frameN;  // exact frame index
      
      text_opt_2_3.setAutoDraw(true);
    }
    
    
    // *text_opt_3_3* updates
    if (t >= 0.0 && text_opt_3_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_opt_3_3.tStart = t;  // (not accounting for frame time here)
      text_opt_3_3.frameNStart = frameN;  // exact frame index
      
      text_opt_3_3.setAutoDraw(true);
    }
    
    
    // *text_opt_4_3* updates
    if (t >= 0.0 && text_opt_4_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_opt_4_3.tStart = t;  // (not accounting for frame time here)
      text_opt_4_3.frameNStart = frameN;  // exact frame index
      
      text_opt_4_3.setAutoDraw(true);
    }
    
    
    // *text_opt_5_3* updates
    if (t >= 0.0 && text_opt_5_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_opt_5_3.tStart = t;  // (not accounting for frame time here)
      text_opt_5_3.frameNStart = frameN;  // exact frame index
      
      text_opt_5_3.setAutoDraw(true);
    }
    
    
    // *polygon_question_3* updates
    if (t >= 0.0 && polygon_question_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_question_3.tStart = t;  // (not accounting for frame time here)
      polygon_question_3.frameNStart = frameN;  // exact frame index
      
      polygon_question_3.setAutoDraw(true);
    }
    
    
    // *text_question_3* updates
    if (t >= 0.0 && text_question_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_question_3.tStart = t;  // (not accounting for frame time here)
      text_question_3.frameNStart = frameN;  // exact frame index
      
      text_question_3.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of BPQ_SFComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function BPQ_SFRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'BPQ_SF' ---
    for (const thisComponent of BPQ_SFComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('BPQ_SF.stopped', globalClock.getTime());
    psychoJS.experiment.addData('button_opt1_3.numClicks', button_opt1_3.numClicks);
    psychoJS.experiment.addData('button_opt1_3.timesOn', button_opt1_3.timesOn);
    psychoJS.experiment.addData('button_opt1_3.timesOff', button_opt1_3.timesOff);
    psychoJS.experiment.addData('button_opt2_3.numClicks', button_opt2_3.numClicks);
    psychoJS.experiment.addData('button_opt2_3.timesOn', button_opt2_3.timesOn);
    psychoJS.experiment.addData('button_opt2_3.timesOff', button_opt2_3.timesOff);
    psychoJS.experiment.addData('button_opt3_3.numClicks', button_opt3_3.numClicks);
    psychoJS.experiment.addData('button_opt3_3.timesOn', button_opt3_3.timesOn);
    psychoJS.experiment.addData('button_opt3_3.timesOff', button_opt3_3.timesOff);
    psychoJS.experiment.addData('button_opt4_3.numClicks', button_opt4_3.numClicks);
    psychoJS.experiment.addData('button_opt4_3.timesOn', button_opt4_3.timesOn);
    psychoJS.experiment.addData('button_opt4_3.timesOff', button_opt4_3.timesOff);
    psychoJS.experiment.addData('button_opt5_3.numClicks', button_opt5_3.numClicks);
    psychoJS.experiment.addData('button_opt5_3.timesOn', button_opt5_3.timesOn);
    psychoJS.experiment.addData('button_opt5_3.timesOff', button_opt5_3.timesOff);
    // the Routine "BPQ_SF" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var PACS_InstructionsMaxDurationReached;
var PACS_InstructionsMaxDuration;
var PACS_InstructionsComponents;
function PACS_InstructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'PACS_Instructions' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    PACS_InstructionsClock.reset();
    routineTimer.reset();
    PACS_InstructionsMaxDurationReached = false;
    // update component parameters for each repeat
    // reset button_instructions_4 to account for continued clicks & clear times on/off
    button_instructions_4.reset()
    psychoJS.experiment.addData('PACS_Instructions.started', globalClock.getTime());
    PACS_InstructionsMaxDuration = null
    // keep track of which components have finished
    PACS_InstructionsComponents = [];
    PACS_InstructionsComponents.push(image_4);
    PACS_InstructionsComponents.push(text_title_4);
    PACS_InstructionsComponents.push(text_instructions_4);
    PACS_InstructionsComponents.push(button_instructions_4);
    
    for (const thisComponent of PACS_InstructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function PACS_InstructionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'PACS_Instructions' ---
    // get current time
    t = PACS_InstructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_4* updates
    if (t >= 0.0 && image_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_4.tStart = t;  // (not accounting for frame time here)
      image_4.frameNStart = frameN;  // exact frame index
      
      image_4.setAutoDraw(true);
    }
    
    
    // *text_title_4* updates
    if (t >= 0.0 && text_title_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_title_4.tStart = t;  // (not accounting for frame time here)
      text_title_4.frameNStart = frameN;  // exact frame index
      
      text_title_4.setAutoDraw(true);
    }
    
    
    // *text_instructions_4* updates
    if (t >= 0.0 && text_instructions_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_instructions_4.tStart = t;  // (not accounting for frame time here)
      text_instructions_4.frameNStart = frameN;  // exact frame index
      
      text_instructions_4.setAutoDraw(true);
    }
    
    
    // *button_instructions_4* updates
    if (t >= 0 && button_instructions_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_instructions_4.tStart = t;  // (not accounting for frame time here)
      button_instructions_4.frameNStart = frameN;  // exact frame index
      
      button_instructions_4.setAutoDraw(true);
    }
    
    if (button_instructions_4.status === PsychoJS.Status.STARTED) {
      // check whether button_instructions_4 has been pressed
      if (button_instructions_4.isClicked) {
        if (!button_instructions_4.wasClicked) {
          // store time of first click
          button_instructions_4.timesOn.push(button_instructions_4.clock.getTime());
          // store time clicked until
          button_instructions_4.timesOff.push(button_instructions_4.clock.getTime());
        } else {
          // update time clicked until;
          button_instructions_4.timesOff[button_instructions_4.timesOff.length - 1] = button_instructions_4.clock.getTime();
        }
        if (!button_instructions_4.wasClicked) {
          // end routine when button_instructions_4 is clicked
          continueRoutine = false;
          
        }
        // if button_instructions_4 is still clicked next frame, it is not a new click
        button_instructions_4.wasClicked = true;
      } else {
        // if button_instructions_4 is clicked next frame, it is a new click
        button_instructions_4.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_instructions_4 hasn't started / has finished
      button_instructions_4.clock.reset();
      // if button_instructions_4 is clicked next frame, it is a new click
      button_instructions_4.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of PACS_InstructionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function PACS_InstructionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'PACS_Instructions' ---
    for (const thisComponent of PACS_InstructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('PACS_Instructions.stopped', globalClock.getTime());
    psychoJS.experiment.addData('button_instructions_4.numClicks', button_instructions_4.numClicks);
    psychoJS.experiment.addData('button_instructions_4.timesOn', button_instructions_4.timesOn);
    psychoJS.experiment.addData('button_instructions_4.timesOff', button_instructions_4.timesOff);
    // the Routine "PACS_Instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var PACSMaxDurationReached;
var PACSMaxDuration;
var PACSComponents;
function PACSRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'PACS' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    PACSClock.reset();
    routineTimer.reset();
    PACSMaxDurationReached = false;
    // update component parameters for each repeat
    // reset button_opt1_4 to account for continued clicks & clear times on/off
    button_opt1_4.reset()
    // reset button_opt2_4 to account for continued clicks & clear times on/off
    button_opt2_4.reset()
    // reset button_opt3_4 to account for continued clicks & clear times on/off
    button_opt3_4.reset()
    // reset button_opt4_4 to account for continued clicks & clear times on/off
    button_opt4_4.reset()
    // reset button_opt5_4 to account for continued clicks & clear times on/off
    button_opt5_4.reset()
    // reset button_opt6_4 to account for continued clicks & clear times on/off
    button_opt6_4.reset()
    // reset button_opt7_4 to account for continued clicks & clear times on/off
    button_opt7_4.reset()
    text_opt_1_4.setText(Opt_1);
    text_opt_2_4.setText(Opt_2);
    text_opt_3_4.setText(Opt_3);
    text_opt_4_4.setText(Opt_4);
    text_opt_5_4.setText(Opt_5);
    text_opt_6_4.setText(Opt_6);
    text_opt_7_4.setText(Opt_7);
    text_question_4.setText(Question);
    psychoJS.experiment.addData('PACS.started', globalClock.getTime());
    PACSMaxDuration = null
    // keep track of which components have finished
    PACSComponents = [];
    PACSComponents.push(button_opt1_4);
    PACSComponents.push(button_opt2_4);
    PACSComponents.push(button_opt3_4);
    PACSComponents.push(button_opt4_4);
    PACSComponents.push(button_opt5_4);
    PACSComponents.push(button_opt6_4);
    PACSComponents.push(button_opt7_4);
    PACSComponents.push(text_opt_1_4);
    PACSComponents.push(text_opt_2_4);
    PACSComponents.push(text_opt_3_4);
    PACSComponents.push(text_opt_4_4);
    PACSComponents.push(text_opt_5_4);
    PACSComponents.push(text_opt_6_4);
    PACSComponents.push(text_opt_7_4);
    PACSComponents.push(polygon_question_4);
    PACSComponents.push(text_question_4);
    
    for (const thisComponent of PACSComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function PACSRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'PACS' ---
    // get current time
    t = PACSClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *button_opt1_4* updates
    if (t >= 0 && button_opt1_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_opt1_4.tStart = t;  // (not accounting for frame time here)
      button_opt1_4.frameNStart = frameN;  // exact frame index
      
      button_opt1_4.setAutoDraw(true);
    }
    
    if (button_opt1_4.status === PsychoJS.Status.STARTED) {
      // check whether button_opt1_4 has been pressed
      if (button_opt1_4.isClicked) {
        if (!button_opt1_4.wasClicked) {
          // store time of first click
          button_opt1_4.timesOn.push(button_opt1_4.clock.getTime());
          // store time clicked until
          button_opt1_4.timesOff.push(button_opt1_4.clock.getTime());
        } else {
          // update time clicked until;
          button_opt1_4.timesOff[button_opt1_4.timesOff.length - 1] = button_opt1_4.clock.getTime();
        }
        if (!button_opt1_4.wasClicked) {
          // end routine when button_opt1_4 is clicked
          continueRoutine = false;
          
        }
        // if button_opt1_4 is still clicked next frame, it is not a new click
        button_opt1_4.wasClicked = true;
      } else {
        // if button_opt1_4 is clicked next frame, it is a new click
        button_opt1_4.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_opt1_4 hasn't started / has finished
      button_opt1_4.clock.reset();
      // if button_opt1_4 is clicked next frame, it is a new click
      button_opt1_4.wasClicked = false;
    }
    
    // *button_opt2_4* updates
    if (t >= 0 && button_opt2_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_opt2_4.tStart = t;  // (not accounting for frame time here)
      button_opt2_4.frameNStart = frameN;  // exact frame index
      
      button_opt2_4.setAutoDraw(true);
    }
    
    if (button_opt2_4.status === PsychoJS.Status.STARTED) {
      // check whether button_opt2_4 has been pressed
      if (button_opt2_4.isClicked) {
        if (!button_opt2_4.wasClicked) {
          // store time of first click
          button_opt2_4.timesOn.push(button_opt2_4.clock.getTime());
          // store time clicked until
          button_opt2_4.timesOff.push(button_opt2_4.clock.getTime());
        } else {
          // update time clicked until;
          button_opt2_4.timesOff[button_opt2_4.timesOff.length - 1] = button_opt2_4.clock.getTime();
        }
        if (!button_opt2_4.wasClicked) {
          // end routine when button_opt2_4 is clicked
          continueRoutine = false;
          
        }
        // if button_opt2_4 is still clicked next frame, it is not a new click
        button_opt2_4.wasClicked = true;
      } else {
        // if button_opt2_4 is clicked next frame, it is a new click
        button_opt2_4.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_opt2_4 hasn't started / has finished
      button_opt2_4.clock.reset();
      // if button_opt2_4 is clicked next frame, it is a new click
      button_opt2_4.wasClicked = false;
    }
    
    // *button_opt3_4* updates
    if (t >= 0 && button_opt3_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_opt3_4.tStart = t;  // (not accounting for frame time here)
      button_opt3_4.frameNStart = frameN;  // exact frame index
      
      button_opt3_4.setAutoDraw(true);
    }
    
    if (button_opt3_4.status === PsychoJS.Status.STARTED) {
      // check whether button_opt3_4 has been pressed
      if (button_opt3_4.isClicked) {
        if (!button_opt3_4.wasClicked) {
          // store time of first click
          button_opt3_4.timesOn.push(button_opt3_4.clock.getTime());
          // store time clicked until
          button_opt3_4.timesOff.push(button_opt3_4.clock.getTime());
        } else {
          // update time clicked until;
          button_opt3_4.timesOff[button_opt3_4.timesOff.length - 1] = button_opt3_4.clock.getTime();
        }
        if (!button_opt3_4.wasClicked) {
          // end routine when button_opt3_4 is clicked
          continueRoutine = false;
          
        }
        // if button_opt3_4 is still clicked next frame, it is not a new click
        button_opt3_4.wasClicked = true;
      } else {
        // if button_opt3_4 is clicked next frame, it is a new click
        button_opt3_4.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_opt3_4 hasn't started / has finished
      button_opt3_4.clock.reset();
      // if button_opt3_4 is clicked next frame, it is a new click
      button_opt3_4.wasClicked = false;
    }
    
    // *button_opt4_4* updates
    if (t >= 0 && button_opt4_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_opt4_4.tStart = t;  // (not accounting for frame time here)
      button_opt4_4.frameNStart = frameN;  // exact frame index
      
      button_opt4_4.setAutoDraw(true);
    }
    
    if (button_opt4_4.status === PsychoJS.Status.STARTED) {
      // check whether button_opt4_4 has been pressed
      if (button_opt4_4.isClicked) {
        if (!button_opt4_4.wasClicked) {
          // store time of first click
          button_opt4_4.timesOn.push(button_opt4_4.clock.getTime());
          // store time clicked until
          button_opt4_4.timesOff.push(button_opt4_4.clock.getTime());
        } else {
          // update time clicked until;
          button_opt4_4.timesOff[button_opt4_4.timesOff.length - 1] = button_opt4_4.clock.getTime();
        }
        if (!button_opt4_4.wasClicked) {
          // end routine when button_opt4_4 is clicked
          continueRoutine = false;
          
        }
        // if button_opt4_4 is still clicked next frame, it is not a new click
        button_opt4_4.wasClicked = true;
      } else {
        // if button_opt4_4 is clicked next frame, it is a new click
        button_opt4_4.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_opt4_4 hasn't started / has finished
      button_opt4_4.clock.reset();
      // if button_opt4_4 is clicked next frame, it is a new click
      button_opt4_4.wasClicked = false;
    }
    
    // *button_opt5_4* updates
    if (t >= 0 && button_opt5_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_opt5_4.tStart = t;  // (not accounting for frame time here)
      button_opt5_4.frameNStart = frameN;  // exact frame index
      
      button_opt5_4.setAutoDraw(true);
    }
    
    if (button_opt5_4.status === PsychoJS.Status.STARTED) {
      // check whether button_opt5_4 has been pressed
      if (button_opt5_4.isClicked) {
        if (!button_opt5_4.wasClicked) {
          // store time of first click
          button_opt5_4.timesOn.push(button_opt5_4.clock.getTime());
          // store time clicked until
          button_opt5_4.timesOff.push(button_opt5_4.clock.getTime());
        } else {
          // update time clicked until;
          button_opt5_4.timesOff[button_opt5_4.timesOff.length - 1] = button_opt5_4.clock.getTime();
        }
        if (!button_opt5_4.wasClicked) {
          // end routine when button_opt5_4 is clicked
          continueRoutine = false;
          
        }
        // if button_opt5_4 is still clicked next frame, it is not a new click
        button_opt5_4.wasClicked = true;
      } else {
        // if button_opt5_4 is clicked next frame, it is a new click
        button_opt5_4.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_opt5_4 hasn't started / has finished
      button_opt5_4.clock.reset();
      // if button_opt5_4 is clicked next frame, it is a new click
      button_opt5_4.wasClicked = false;
    }
    
    // *button_opt6_4* updates
    if (t >= 0 && button_opt6_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_opt6_4.tStart = t;  // (not accounting for frame time here)
      button_opt6_4.frameNStart = frameN;  // exact frame index
      
      button_opt6_4.setAutoDraw(true);
    }
    
    if (button_opt6_4.status === PsychoJS.Status.STARTED) {
      // check whether button_opt6_4 has been pressed
      if (button_opt6_4.isClicked) {
        if (!button_opt6_4.wasClicked) {
          // store time of first click
          button_opt6_4.timesOn.push(button_opt6_4.clock.getTime());
          // store time clicked until
          button_opt6_4.timesOff.push(button_opt6_4.clock.getTime());
        } else {
          // update time clicked until;
          button_opt6_4.timesOff[button_opt6_4.timesOff.length - 1] = button_opt6_4.clock.getTime();
        }
        if (!button_opt6_4.wasClicked) {
          // end routine when button_opt6_4 is clicked
          continueRoutine = false;
          
        }
        // if button_opt6_4 is still clicked next frame, it is not a new click
        button_opt6_4.wasClicked = true;
      } else {
        // if button_opt6_4 is clicked next frame, it is a new click
        button_opt6_4.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_opt6_4 hasn't started / has finished
      button_opt6_4.clock.reset();
      // if button_opt6_4 is clicked next frame, it is a new click
      button_opt6_4.wasClicked = false;
    }
    
    // *button_opt7_4* updates
    if (t >= 0 && button_opt7_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_opt7_4.tStart = t;  // (not accounting for frame time here)
      button_opt7_4.frameNStart = frameN;  // exact frame index
      
      button_opt7_4.setAutoDraw(true);
    }
    
    if (button_opt7_4.status === PsychoJS.Status.STARTED) {
      // check whether button_opt7_4 has been pressed
      if (button_opt7_4.isClicked) {
        if (!button_opt7_4.wasClicked) {
          // store time of first click
          button_opt7_4.timesOn.push(button_opt7_4.clock.getTime());
          // store time clicked until
          button_opt7_4.timesOff.push(button_opt7_4.clock.getTime());
        } else {
          // update time clicked until;
          button_opt7_4.timesOff[button_opt7_4.timesOff.length - 1] = button_opt7_4.clock.getTime();
        }
        if (!button_opt7_4.wasClicked) {
          // end routine when button_opt7_4 is clicked
          continueRoutine = false;
          
        }
        // if button_opt7_4 is still clicked next frame, it is not a new click
        button_opt7_4.wasClicked = true;
      } else {
        // if button_opt7_4 is clicked next frame, it is a new click
        button_opt7_4.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_opt7_4 hasn't started / has finished
      button_opt7_4.clock.reset();
      // if button_opt7_4 is clicked next frame, it is a new click
      button_opt7_4.wasClicked = false;
    }
    
    // *text_opt_1_4* updates
    if (t >= 0.0 && text_opt_1_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_opt_1_4.tStart = t;  // (not accounting for frame time here)
      text_opt_1_4.frameNStart = frameN;  // exact frame index
      
      text_opt_1_4.setAutoDraw(true);
    }
    
    
    // *text_opt_2_4* updates
    if (t >= 0.0 && text_opt_2_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_opt_2_4.tStart = t;  // (not accounting for frame time here)
      text_opt_2_4.frameNStart = frameN;  // exact frame index
      
      text_opt_2_4.setAutoDraw(true);
    }
    
    
    // *text_opt_3_4* updates
    if (t >= 0.0 && text_opt_3_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_opt_3_4.tStart = t;  // (not accounting for frame time here)
      text_opt_3_4.frameNStart = frameN;  // exact frame index
      
      text_opt_3_4.setAutoDraw(true);
    }
    
    
    // *text_opt_4_4* updates
    if (t >= 0.0 && text_opt_4_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_opt_4_4.tStart = t;  // (not accounting for frame time here)
      text_opt_4_4.frameNStart = frameN;  // exact frame index
      
      text_opt_4_4.setAutoDraw(true);
    }
    
    
    // *text_opt_5_4* updates
    if (t >= 0.0 && text_opt_5_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_opt_5_4.tStart = t;  // (not accounting for frame time here)
      text_opt_5_4.frameNStart = frameN;  // exact frame index
      
      text_opt_5_4.setAutoDraw(true);
    }
    
    
    // *text_opt_6_4* updates
    if (t >= 0.0 && text_opt_6_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_opt_6_4.tStart = t;  // (not accounting for frame time here)
      text_opt_6_4.frameNStart = frameN;  // exact frame index
      
      text_opt_6_4.setAutoDraw(true);
    }
    
    
    // *text_opt_7_4* updates
    if (t >= 0.0 && text_opt_7_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_opt_7_4.tStart = t;  // (not accounting for frame time here)
      text_opt_7_4.frameNStart = frameN;  // exact frame index
      
      text_opt_7_4.setAutoDraw(true);
    }
    
    
    // *polygon_question_4* updates
    if (t >= 0.0 && polygon_question_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_question_4.tStart = t;  // (not accounting for frame time here)
      polygon_question_4.frameNStart = frameN;  // exact frame index
      
      polygon_question_4.setAutoDraw(true);
    }
    
    
    // *text_question_4* updates
    if (t >= 0.0 && text_question_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_question_4.tStart = t;  // (not accounting for frame time here)
      text_question_4.frameNStart = frameN;  // exact frame index
      
      text_question_4.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of PACSComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function PACSRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'PACS' ---
    for (const thisComponent of PACSComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('PACS.stopped', globalClock.getTime());
    psychoJS.experiment.addData('button_opt1_4.numClicks', button_opt1_4.numClicks);
    psychoJS.experiment.addData('button_opt1_4.timesOn', button_opt1_4.timesOn);
    psychoJS.experiment.addData('button_opt1_4.timesOff', button_opt1_4.timesOff);
    psychoJS.experiment.addData('button_opt2_4.numClicks', button_opt2_4.numClicks);
    psychoJS.experiment.addData('button_opt2_4.timesOn', button_opt2_4.timesOn);
    psychoJS.experiment.addData('button_opt2_4.timesOff', button_opt2_4.timesOff);
    psychoJS.experiment.addData('button_opt3_4.numClicks', button_opt3_4.numClicks);
    psychoJS.experiment.addData('button_opt3_4.timesOn', button_opt3_4.timesOn);
    psychoJS.experiment.addData('button_opt3_4.timesOff', button_opt3_4.timesOff);
    psychoJS.experiment.addData('button_opt4_4.numClicks', button_opt4_4.numClicks);
    psychoJS.experiment.addData('button_opt4_4.timesOn', button_opt4_4.timesOn);
    psychoJS.experiment.addData('button_opt4_4.timesOff', button_opt4_4.timesOff);
    psychoJS.experiment.addData('button_opt5_4.numClicks', button_opt5_4.numClicks);
    psychoJS.experiment.addData('button_opt5_4.timesOn', button_opt5_4.timesOn);
    psychoJS.experiment.addData('button_opt5_4.timesOff', button_opt5_4.timesOff);
    psychoJS.experiment.addData('button_opt6_4.numClicks', button_opt6_4.numClicks);
    psychoJS.experiment.addData('button_opt6_4.timesOn', button_opt6_4.timesOn);
    psychoJS.experiment.addData('button_opt6_4.timesOff', button_opt6_4.timesOff);
    psychoJS.experiment.addData('button_opt7_4.numClicks', button_opt7_4.numClicks);
    psychoJS.experiment.addData('button_opt7_4.timesOn', button_opt7_4.timesOn);
    psychoJS.experiment.addData('button_opt7_4.timesOff', button_opt7_4.timesOff);
    // the Routine "PACS" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var IGT_InstructionsMaxDurationReached;
var IGT_InstructionsMaxDuration;
var IGT_InstructionsComponents;
function IGT_InstructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'IGT_Instructions' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    IGT_InstructionsClock.reset();
    routineTimer.reset();
    IGT_InstructionsMaxDurationReached = false;
    // update component parameters for each repeat
    // reset button_instructions_5 to account for continued clicks & clear times on/off
    button_instructions_5.reset()
    psychoJS.experiment.addData('IGT_Instructions.started', globalClock.getTime());
    IGT_InstructionsMaxDuration = null
    // keep track of which components have finished
    IGT_InstructionsComponents = [];
    IGT_InstructionsComponents.push(image_5);
    IGT_InstructionsComponents.push(text_title_5);
    IGT_InstructionsComponents.push(text_instructions_5);
    IGT_InstructionsComponents.push(button_instructions_5);
    
    for (const thisComponent of IGT_InstructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function IGT_InstructionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'IGT_Instructions' ---
    // get current time
    t = IGT_InstructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_5* updates
    if (t >= 0.0 && image_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_5.tStart = t;  // (not accounting for frame time here)
      image_5.frameNStart = frameN;  // exact frame index
      
      image_5.setAutoDraw(true);
    }
    
    
    // *text_title_5* updates
    if (t >= 0.0 && text_title_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_title_5.tStart = t;  // (not accounting for frame time here)
      text_title_5.frameNStart = frameN;  // exact frame index
      
      text_title_5.setAutoDraw(true);
    }
    
    
    // *text_instructions_5* updates
    if (t >= 0.0 && text_instructions_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_instructions_5.tStart = t;  // (not accounting for frame time here)
      text_instructions_5.frameNStart = frameN;  // exact frame index
      
      text_instructions_5.setAutoDraw(true);
    }
    
    
    // *button_instructions_5* updates
    if (t >= 0 && button_instructions_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_instructions_5.tStart = t;  // (not accounting for frame time here)
      button_instructions_5.frameNStart = frameN;  // exact frame index
      
      button_instructions_5.setAutoDraw(true);
    }
    
    if (button_instructions_5.status === PsychoJS.Status.STARTED) {
      // check whether button_instructions_5 has been pressed
      if (button_instructions_5.isClicked) {
        if (!button_instructions_5.wasClicked) {
          // store time of first click
          button_instructions_5.timesOn.push(button_instructions_5.clock.getTime());
          // store time clicked until
          button_instructions_5.timesOff.push(button_instructions_5.clock.getTime());
        } else {
          // update time clicked until;
          button_instructions_5.timesOff[button_instructions_5.timesOff.length - 1] = button_instructions_5.clock.getTime();
        }
        if (!button_instructions_5.wasClicked) {
          // end routine when button_instructions_5 is clicked
          continueRoutine = false;
          
        }
        // if button_instructions_5 is still clicked next frame, it is not a new click
        button_instructions_5.wasClicked = true;
      } else {
        // if button_instructions_5 is clicked next frame, it is a new click
        button_instructions_5.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_instructions_5 hasn't started / has finished
      button_instructions_5.clock.reset();
      // if button_instructions_5 is clicked next frame, it is a new click
      button_instructions_5.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of IGT_InstructionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function IGT_InstructionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'IGT_Instructions' ---
    for (const thisComponent of IGT_InstructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('IGT_Instructions.stopped', globalClock.getTime());
    psychoJS.experiment.addData('button_instructions_5.numClicks', button_instructions_5.numClicks);
    psychoJS.experiment.addData('button_instructions_5.timesOn', button_instructions_5.timesOn);
    psychoJS.experiment.addData('button_instructions_5.timesOff', button_instructions_5.timesOff);
    // the Routine "IGT_Instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var ChoiceMaxDurationReached;
var gotValidClick;
var ChoiceMaxDuration;
var ChoiceComponents;
function ChoiceRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Choice' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    ChoiceClock.reset();
    routineTimer.reset();
    ChoiceMaxDurationReached = false;
    // update component parameters for each repeat
    // Begin Routine
    
    // Limpiar texto de feedback
    fbText = '';
    fbColor = 'white';
    deckB.setSize([0.18, 0.28]);
    // setup some python lists for storing info about the mouse
    // current position of the mouse:
    mouse.x = [];
    mouse.y = [];
    mouse.leftButton = [];
    mouse.midButton = [];
    mouse.rightButton = [];
    mouse.time = [];
    mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    textBalance.setText(`Saldo actual: $${balance}`);
    psychoJS.experiment.addData('Choice.started', globalClock.getTime());
    ChoiceMaxDuration = null
    // keep track of which components have finished
    ChoiceComponents = [];
    ChoiceComponents.push(deckA);
    ChoiceComponents.push(deckB);
    ChoiceComponents.push(deckC);
    ChoiceComponents.push(deckD);
    ChoiceComponents.push(mouse);
    ChoiceComponents.push(textA);
    ChoiceComponents.push(textB);
    ChoiceComponents.push(textC);
    ChoiceComponents.push(textD);
    ChoiceComponents.push(textSelection);
    ChoiceComponents.push(textBalance);
    
    for (const thisComponent of ChoiceComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var prevButtonState;
var _mouseButtons;
var _mouseXYs;
function ChoiceRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Choice' ---
    // get current time
    t = ChoiceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *deckA* updates
    if (t >= 0.0 && deckA.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      deckA.tStart = t;  // (not accounting for frame time here)
      deckA.frameNStart = frameN;  // exact frame index
      
      deckA.setAutoDraw(true);
    }
    
    
    // *deckB* updates
    if (t >= 0.0 && deckB.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      deckB.tStart = t;  // (not accounting for frame time here)
      deckB.frameNStart = frameN;  // exact frame index
      
      deckB.setAutoDraw(true);
    }
    
    
    // *deckC* updates
    if (t >= 0.0 && deckC.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      deckC.tStart = t;  // (not accounting for frame time here)
      deckC.frameNStart = frameN;  // exact frame index
      
      deckC.setAutoDraw(true);
    }
    
    
    // *deckD* updates
    if (t >= 0.0 && deckD.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      deckD.tStart = t;  // (not accounting for frame time here)
      deckD.frameNStart = frameN;  // exact frame index
      
      deckD.setAutoDraw(true);
    }
    
    // *mouse* updates
    if (t >= 0.0 && mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse.tStart = t;  // (not accounting for frame time here)
      mouse.frameNStart = frameN;  // exact frame index
      
      mouse.status = PsychoJS.Status.STARTED;
      mouse.mouseClock.reset();
      prevButtonState = mouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouse.clickableObjects = eval([deckA, deckB, deckC, deckD])
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouse.clickableObjects)) {
              mouse.clickableObjects = [mouse.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouse.clickableObjects) {
              if (obj.contains(mouse)) {
                  gotValidClick = true;
                  mouse.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              mouse.clicked_name.push(null);
          }
          _mouseXYs = mouse.getPos();
          mouse.x.push(_mouseXYs[0]);
          mouse.y.push(_mouseXYs[1]);
          mouse.leftButton.push(_mouseButtons[0]);
          mouse.midButton.push(_mouseButtons[1]);
          mouse.rightButton.push(_mouseButtons[2]);
          mouse.time.push(mouse.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *textA* updates
    if (t >= 0.0 && textA.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textA.tStart = t;  // (not accounting for frame time here)
      textA.frameNStart = frameN;  // exact frame index
      
      textA.setAutoDraw(true);
    }
    
    
    // *textB* updates
    if (t >= 0.0 && textB.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textB.tStart = t;  // (not accounting for frame time here)
      textB.frameNStart = frameN;  // exact frame index
      
      textB.setAutoDraw(true);
    }
    
    
    // *textC* updates
    if (t >= 0.0 && textC.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textC.tStart = t;  // (not accounting for frame time here)
      textC.frameNStart = frameN;  // exact frame index
      
      textC.setAutoDraw(true);
    }
    
    
    // *textD* updates
    if (t >= 0.0 && textD.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textD.tStart = t;  // (not accounting for frame time here)
      textD.frameNStart = frameN;  // exact frame index
      
      textD.setAutoDraw(true);
    }
    
    
    // *textSelection* updates
    if (t >= 0.0 && textSelection.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textSelection.tStart = t;  // (not accounting for frame time here)
      textSelection.frameNStart = frameN;  // exact frame index
      
      textSelection.setAutoDraw(true);
    }
    
    
    // *textBalance* updates
    if (t >= 0.0 && textBalance.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textBalance.tStart = t;  // (not accounting for frame time here)
      textBalance.frameNStart = frameN;  // exact frame index
      
      textBalance.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ChoiceComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var choice_name;
var rt;
var reward;
var loss;
var outcome;
function ChoiceRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Choice' ---
    for (const thisComponent of ChoiceComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Choice.stopped', globalClock.getTime());
    // End Routine
    
    // 1) Determinar elección
    let choice_name = 'NA';
    // Verificamos que mouse.clicked_name no sea null y tenga elementos
    if (mouse.clicked_name && mouse.clicked_name.length > 0) {
        choice_name = mouse.clicked_name[mouse.clicked_name.length - 1]; // 'deckA'/'deckB'/...
    }
    let choice = deck_label_from_name[choice_name] || 'NA'; // 'A'/'B'/'C'/'D'
    
    // 2) RT (si está disponible)
    let rt = null;
    if (mouse.time && mouse.time.length > 0) {
        rt = parseFloat(mouse.time[0]);
    }
    
    // 3) Calcular outcome
    let reward = 0;
    let loss = 0;
    let outcome = 0;
    if (choice in deck_counts) {
        deck_counts[choice] += 1;
        let idx = (deck_counts[choice] - 1) % loss_pattern[choice].length;
        reward = parseInt(reward_by_deck[choice]);
        loss = parseInt(loss_pattern[choice][idx]); // ya es negativo o 0
        outcome = reward + loss;
    }
    
    // 4) Actualizar balance
    balance += outcome;
    
    // 5) Preparar feedback textual y colores 
    gain_text = (reward > 0) ? `Ganaste $${reward}` : "";
    loss_text = (loss < 0) ? `Perdiste $${Math.abs(loss)}` : "";
    gain_color = 'green';
    loss_color = 'red';
    gain_opacity = (reward > 0) ? 1.0 : 0.0;
    loss_opacity = (loss < 0) ? 1.0 : 0.0;
    
    // 6) Guardar datos
    psychoJS.experiment.addData('choice', choice); // A/B/C/D
    psychoJS.experiment.addData('choice_name', choice_name);
    psychoJS.experiment.addData('trialN', trials.thisN + 1); 
    psychoJS.experiment.addData('rt', rt);
    psychoJS.experiment.addData('reward', reward);
    psychoJS.experiment.addData('loss', loss);
    psychoJS.experiment.addData('outcome', outcome);
    psychoJS.experiment.addData('balance', balance);
    psychoJS.experiment.addData('A_count', deck_counts['A']);
    psychoJS.experiment.addData('B_count', deck_counts['B']);
    psychoJS.experiment.addData('C_count', deck_counts['C']);
    psychoJS.experiment.addData('D_count', deck_counts['D']);
    psychoJS.experiment.addData('gain_text', gain_text);
    psychoJS.experiment.addData('loss_text', loss_text);
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse.x', mouse.x);
    psychoJS.experiment.addData('mouse.y', mouse.y);
    psychoJS.experiment.addData('mouse.leftButton', mouse.leftButton);
    psychoJS.experiment.addData('mouse.midButton', mouse.midButton);
    psychoJS.experiment.addData('mouse.rightButton', mouse.rightButton);
    psychoJS.experiment.addData('mouse.time', mouse.time);
    psychoJS.experiment.addData('mouse.clicked_name', mouse.clicked_name);
    
    // the Routine "Choice" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var FeedbackMaxDurationReached;
var FeedbackMaxDuration;
var FeedbackComponents;
function FeedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Feedback' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    FeedbackClock.reset(routineTimer.getTime());
    routineTimer.add(1.000000);
    FeedbackMaxDurationReached = false;
    // update component parameters for each repeat
    gainFB.setColor(new util.Color(gain_color));
    gainFB.setOpacity(gain_opacity);
    gainFB.setText(gain_text);
    lossFB.setColor(new util.Color(loss_color));
    lossFB.setOpacity(loss_opacity);
    lossFB.setText(loss_text);
    psychoJS.experiment.addData('Feedback.started', globalClock.getTime());
    FeedbackMaxDuration = null
    // keep track of which components have finished
    FeedbackComponents = [];
    FeedbackComponents.push(gainFB);
    FeedbackComponents.push(lossFB);
    
    for (const thisComponent of FeedbackComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function FeedbackRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Feedback' ---
    // get current time
    t = FeedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *gainFB* updates
    if (t >= 0.0 && gainFB.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      gainFB.tStart = t;  // (not accounting for frame time here)
      gainFB.frameNStart = frameN;  // exact frame index
      
      gainFB.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (gainFB.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      gainFB.setAutoDraw(false);
    }
    
    
    // *lossFB* updates
    if (t >= 0.0 && lossFB.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      lossFB.tStart = t;  // (not accounting for frame time here)
      lossFB.frameNStart = frameN;  // exact frame index
      
      lossFB.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (lossFB.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      lossFB.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of FeedbackComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function FeedbackRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Feedback' ---
    for (const thisComponent of FeedbackComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Feedback.stopped', globalClock.getTime());
    if (FeedbackMaxDurationReached) {
        FeedbackClock.add(FeedbackMaxDuration);
    } else {
        FeedbackClock.add(1.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var finalMessageMaxDurationReached;
var finalMessageMaxDuration;
var finalMessageComponents;
function finalMessageRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'finalMessage' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    finalMessageClock.reset();
    routineTimer.reset();
    finalMessageMaxDurationReached = false;
    // update component parameters for each repeat
    // reset button_end to account for continued clicks & clear times on/off
    button_end.reset()
    psychoJS.experiment.addData('finalMessage.started', globalClock.getTime());
    finalMessageMaxDuration = null
    // keep track of which components have finished
    finalMessageComponents = [];
    finalMessageComponents.push(textExit);
    finalMessageComponents.push(button_end);
    
    for (const thisComponent of finalMessageComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function finalMessageRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'finalMessage' ---
    // get current time
    t = finalMessageClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textExit* updates
    if (t >= 0.0 && textExit.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textExit.tStart = t;  // (not accounting for frame time here)
      textExit.frameNStart = frameN;  // exact frame index
      
      textExit.setAutoDraw(true);
    }
    
    
    // *button_end* updates
    if (t >= 0 && button_end.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_end.tStart = t;  // (not accounting for frame time here)
      button_end.frameNStart = frameN;  // exact frame index
      
      button_end.setAutoDraw(true);
    }
    
    if (button_end.status === PsychoJS.Status.STARTED) {
      // check whether button_end has been pressed
      if (button_end.isClicked) {
        if (!button_end.wasClicked) {
          // store time of first click
          button_end.timesOn.push(button_end.clock.getTime());
          // store time clicked until
          button_end.timesOff.push(button_end.clock.getTime());
        } else {
          // update time clicked until;
          button_end.timesOff[button_end.timesOff.length - 1] = button_end.clock.getTime();
        }
        if (!button_end.wasClicked) {
          // end routine when button_end is clicked
          continueRoutine = false;
          
        }
        // if button_end is still clicked next frame, it is not a new click
        button_end.wasClicked = true;
      } else {
        // if button_end is clicked next frame, it is a new click
        button_end.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_end hasn't started / has finished
      button_end.clock.reset();
      // if button_end is clicked next frame, it is a new click
      button_end.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of finalMessageComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function finalMessageRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'finalMessage' ---
    for (const thisComponent of finalMessageComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('finalMessage.stopped', globalClock.getTime());
    psychoJS.experiment.addData('button_end.numClicks', button_end.numClicks);
    psychoJS.experiment.addData('button_end.timesOn', button_end.timesOn);
    psychoJS.experiment.addData('button_end.timesOff', button_end.timesOff);
    // the Routine "finalMessage" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}

// ----------------------------------------------------
// GLV: DataPruebas (Replace quitPsychoJS)
//async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
//  if (psychoJS.experiment.isEntryEmpty()) {
//    psychoJS.experiment.nextEntry();
//  }
//  psychoJS.window.close();
//  psychoJS.quit({message: message, isCompleted: isCompleted});
  
//  return Scheduler.Event.QUIT;
//}

async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }

  // 1. Deactivate local download
  psychoJS._saveResults = 0;

  // 2. Prepare JSON
  let dataObj = psychoJS._experiment._trialsData;
  let jsonData = JSON.stringify(dataObj, null, 2); 
  console.log(jsonData);

  // 3. Finalize function
  async function finalizeExperiment() {
    if (!run_id) {
        console.error("Error: run-id is missing. Experiment cannot proceed.");
        alert("Error: run-id is missing. Please restart the experiment.");
        return;
    }

    let recordDataUrl = `https://datapruebas.org/dj/api/v1/record_data/${run_id}/`;
    let endRunUrl = `https://datapruebas.org/dj/api/v1/end_run/${run_id}/`;
    console.log("csrftoken:", getCookie("csrftoken")) // LUEGO SACAR ESTO!!!!!!!!!!!!!
    console.log("recordDataUrl:", recordDataUrl)
    console.log("endRunUrl:", endRunUrl)
    
    try {
        // A. Send data
        let recordResponse = await fetch(recordDataUrl, {
            method: 'POST',
            mode: 'same-origin',
            credentials: "include",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "X-CSRFToken": getCookie("csrftoken"),
            },
            body: JSON.stringify({ "data": jsonData })
        });

        if (!recordResponse.ok) {
            throw new Error(`Failed to record data. Status: ${recordResponse.status}`);
        }
        console.log("Data recorded successfully.");

        // B. Log out
        let endResponse = await fetch(endRunUrl, {
            method: 'POST',
            mode: 'same-origin',
            credentials: "include",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "X-CSRFToken": getCookie("csrftoken"),
            },
            body: JSON.stringify({ "score": 0 }) 
        });

        if (!endResponse.ok) {
            throw new Error(`Failed to end experiment. Status: ${endResponse.status}`);
        }
        console.log("Experiment successfully ended.");

        // C. Redirect
        document.body.innerHTML = '<p>Enviando datos, espere por favor ...</p>';
        setTimeout(() => window.location.href = redirect_url, 5000);

    } catch (error) {
        console.error("Error during experiment finalization:", error);
        alert("Ocurrió un error guardando los datos. Por favor, verifica tu conexión e inténtalo nuevamente.");
    }
  }

  finalizeExperiment();

  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
// GLV: DataPruebas (End)
// ----------------------------------------------------
