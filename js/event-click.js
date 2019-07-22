
var CLICK_EVENT_DEBUG = false;


function hasParentClass(element, classname) {
  if (!element.classList) return null;
  if (element.classList.contains(classname)) return element;
  return element.parentNode && hasParentClass(element.parentNode, classname);
}

function setClickListeners(canvas) {

  const useEventType = (typeof window.PointerEvent === 'function') ?
                        'pointer' : 'mouse';
  const listeners = ['click','touchstart','touchend'/*,
                     'touchmove',`${useEventType}enter`,
                     `${useEventType}leave`, `${useEventType}move`*/];


  const pointerHandler = (event) => {
    event.preventDefault();
    let element = hasParentClass(event.target, 'floor');
    if (element)
      getClickEventFloor(element);
  }

  listeners.map((etype) => {
      canvas.addEventListener(etype, pointerHandler);
    });

}


function getClickEventNpc(val) {
/*  var npc = fullMap.getCharacter((val - characterColorHex) / 2);
  if (!npc)
    return null;
  return npc.getDestinationTriggerInteraction();*/
}

function getClickEventFloor(element) {

  events.click = {
    x : element.dataset.x,
    y : element.dataset.y,
  };

/*
  if (CLICK_EVENT_DEBUG)
    console.log("EVENT val", val);
  var row = 0;
  var col = 0;
  if (CLICK_EVENT_DEBUG)
    console.log("EVENT map width",  map.width);
  var width = map.width;
  if (map._startX <= 0)
    width = map.width + map._startX;
  width = fullMap.width;
  if (CLICK_EVENT_DEBUG)
    console.log("EVENT revised map width",  width);
  for (var rest = val; rest - width  >= 0; rest -= (width))
    row += 1;
  if (CLICK_EVENT_DEBUG)
    console.log("EVENT rest",  rest);
  col = val % width;


  events.click = {
    x : col,
    y : row,
  };

  if (CLICK_EVENT_DEBUG) {
    console.log("EVENT offset",  map._startX,  map._startY);
    console.log("EVENT col/row", col, row);
    console.log("EVENT", events.click);
    console.log("EVENT ------------");
  }
  return events.click;*/
}
