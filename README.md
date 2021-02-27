# js-event-capturing-and-bubbling

A simple tool for seeing what happens when you click on nested divs.

Click on the three options to change the output in the console.  When you clicked on the bottom div (blue) you will see the output will also show that the middle and top divs have been clicked.  This is because in reality, you clicked them as well as the bottom div is inside them.  This is known as bubbling.

* e.stopPropagation will stop the bubbling of events
* capture (an eventListener option) will start capturing events down from the outside in (the opposite of bubbling which is up)
* once (another eventListener option) will only allow he item to be clicked once before unbinding the eventListener
