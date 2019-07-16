# SquishySlug
A small js/canvas based 2d isometric game

Preview : https://squishySlug.com

The squishySlug portfolio is js browser based 2d isometric game. Talking with the NPCs and interacting with the various in-game objects allow for navigation within the UI.

It’s drawing svg assets on a canvas, and using css to animate  svg character body parts.

NPCs have simple AIs that allow them for basic autonomic actions and states, such as roaming, interacting...
Player movement can either be controlled usign arrow keys or WASD keys, or using the mouse (or mobile tap).
Clicking or tapping a destination runs a Djisktra algorithm which computes the quickest path to the destination and then sends the result to the player/NPC.

I using https://www.browserstack.com to help debug the many compatibility and UI issues a browser based project such as this one comes with.
