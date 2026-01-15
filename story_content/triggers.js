function ExecuteScript(strId)
{
  switch (strId)
  {
      case "664KqKnsS26":
        Script1();
        break;
      case "5g2254SolNE":
        Script2();
        break;
      case "5nviZvRh3Tj":
        Script3();
        break;
      case "5xg3f9lPvNe":
        Script4();
        break;
      case "6dpyMRehZla":
        Script5();
        break;
      case "5ke4JudJ4Af":
        Script6();
        break;
      case "6p8CTZcJA2p":
        Script7();
        break;
      case "6QbxkSzgbSH":
        Script8();
        break;
      case "6qyk5OxrwZ0":
        Script9();
        break;
      case "6hFPkk3ptY8":
        Script10();
        break;
      case "5xrQb5Sk4ad":
        Script11();
        break;
      case "6XIARl9gZv8":
        Script12();
        break;
      case "5cDmHhxL5Fw":
        Script13();
        break;
      case "5bMKGWDzsGS":
        Script14();
        break;
      case "5WGcVh9AZOg":
        Script15();
        break;
      case "6A2pwPE6nwi":
        Script16();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script1 = function()
{
  const target = object('5qcVfvju1Wo');
const duration = 750;
const easing = 'ease-out';
const id = '6QPmCe2qgyh';
const shrinkAmount = 0.3;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 - shrinkAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script2 = function()
{
  const target = object('5qcVfvju1Wo');
const duration = 750;
const easing = 'ease-out';
const id = '6hHKsj9KFdI';
player.addForTriggers(
id,
target.animate(
[ {opacity: 1 }, 
{opacity: 0 }, 
{opacity: 1 }, 
{opacity: 0 }, 
{opacity: 1 } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  player.once(() => {
const target = object('6n2lP7BJpgv');
const duration = 750;
const easing = 'ease-out';
const id = '6j6Li9q5JMr';
const teeterAmount = 10;
const delay = 0;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script4 = function()
{
  player.once(() => {
const target = object('5sQQnEhEhuv');
const duration = 750;
const easing = 'ease-out';
const id = '6fU206RqP6H';
const teeterAmount = 10;
const delay = 0;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script5 = function()
{
  player.once(() => {
const target = object('5eP3OEUlJmu');
const duration = 750;
const easing = 'ease-out';
const id = '5VtW3eO1FYy';
const teeterAmount = 10;
const delay = 0;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script6 = function()
{
  player.once(() => {
const target = object('6lQaOmuidoH');
const duration = 750;
const easing = 'ease-out';
const id = '62i7KQZFIEX';
const teeterAmount = 10;
const delay = 0;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script7 = function()
{
  player.once(() => {
const target = object('6doMtYRd43g');
const duration = 750;
const easing = 'ease-out';
const id = '5lDlQ8y2Td4';
const teeterAmount = 10;
const delay = 0;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script8 = function()
{
  player.once(() => {
const target = object('6YjqQxOPnCg');
const duration = 750;
const easing = 'ease-out';
const id = '5Uooo0zE6E6';
const teeterAmount = 10;
const delay = 0;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script9 = function()
{
  player.once(() => {
const target = object('6cBvuP2qsCt');
const duration = 750;
const easing = 'ease-out';
const id = '5VDRKhGyN2b';
const teeterAmount = 10;
const delay = 0;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script10 = function()
{
  const target = object('6n2lP7BJpgv');
const duration = 750;
const easing = 'ease-out';
const id = '6j6Li9q5JMr';
const teeterAmount = 10;
player.addForTriggers(
id,
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script11 = function()
{
  const target = object('6lQaOmuidoH');
const duration = 750;
const easing = 'ease-out';
const id = '62i7KQZFIEX';
const teeterAmount = 10;
player.addForTriggers(
id,
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script12 = function()
{
  const target = object('6cBvuP2qsCt');
const duration = 750;
const easing = 'ease-out';
const id = '5VDRKhGyN2b';
const teeterAmount = 10;
player.addForTriggers(
id,
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script13 = function()
{
  const target = object('5eP3OEUlJmu');
const duration = 750;
const easing = 'ease-out';
const id = '5VtW3eO1FYy';
const teeterAmount = 10;
player.addForTriggers(
id,
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script14 = function()
{
  const target = object('6YjqQxOPnCg');
const duration = 750;
const easing = 'ease-out';
const id = '5Uooo0zE6E6';
const teeterAmount = 10;
player.addForTriggers(
id,
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script15 = function()
{
  const target = object('5sQQnEhEhuv');
const duration = 750;
const easing = 'ease-out';
const id = '6fU206RqP6H';
const teeterAmount = 10;
player.addForTriggers(
id,
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script16 = function()
{
  const target = object('6doMtYRd43g');
const duration = 750;
const easing = 'ease-out';
const id = '5lDlQ8y2Td4';
const teeterAmount = 10;
player.addForTriggers(
id,
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

};
