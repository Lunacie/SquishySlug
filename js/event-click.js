
var CLICK_EVENT_DEBUG = false;
let clickClass = null;


function hasParentClass(element, className) {
  let classes = /(floor)|(npc)/;

  if (!element.classList) return null;
  if (!className) {
    for (let i = 0; i < element.classList.length; i++)
      if (classes.test(element.classList[i])) return element;
  }
  else if (className && element.classList.contains(className)) return element;
  else if (className) return null;
  return element.parentNode && hasParentClass(element.parentNode, className);
}

function setClickListeners(canvas) {

  const useEventType = (typeof window.PointerEvent === 'function') ?
                        'pointer' : 'mouse';
  const listeners = ['click','touchstart','touchend'/*,
                     'touchmove',`${useEventType}enter`,
                     `${useEventType}leave`, `${useEventType}move`*/];


  const pointerHandler = (event) => {
    event.preventDefault();
    let element = null;
    if (element = hasParentClass(event.target)) {
      if (hasParentClass(element, "floor"))
        return getClickEventFloor(element);
      if (hasParentClass(element, "npc"))
        return getClickEventNpc(element);
    }
  }

  listeners.map((etype) => {
      canvas.addEventListener(etype, pointerHandler);
    });

}


function getClickEventNpc(element) {
  var npc = map.fullMap.getCharacter(element.dataset.id);
  if (!npc)
    return null;
  events.click = npc.getDestinationTriggerInteraction();
}

function getClickEventFloor(element) {
  events.click = {
    x : element.dataset.x,
    y : element.dataset.y,
  };
}
