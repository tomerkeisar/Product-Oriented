## I felt in love - Start Learnint Product-Oriented
We will learn Product-Oriented Concept by our previus to do list mission.
## The Problem:
Ass we anncounced our mission is to create simple to do list that the user can enter to do item as string in input box, and our program will show all todos that the he has entered in unordered list.
## The solution:
* **Step 1**
Start thinking of development process as job that need to be done by workers.
The first worker e need is input element that we need that worker to allow the use type in the text box  and when the user finish typing by pressing eneter we are just need some reference to the final value.
One of the core of Product-Oriented's concept is  "Unit of work" meens that we allowed to use exist html element to do some mission
Let's create our worker.
```html
<input type="text" logic="" onkeyup="this.output=this.value"/>
```
In Product-Oriented every html  element cat has output property. that Property will allow our another elements to know what the final result  of certain element. 
In the above code we just telling that when the user release key, then the output property of the input element will be synchrunize with the textbox (itself) value.
Product-Oriented Properties are clever in way they reflect themselves as attribute of the element. what's mean you can open your developer toolbar and  show in real time the affected property (in our case Output).

the logic attribute, in this case does nothing, except help us to fall this element intp Product-Oriented selectors.

<a href="http://makeagif.com/gif/-VWAOvV" title=""><img src="http://i.makeagif.com/media/6-19-2017/VWAOvV.gif" alt=""></a><div style="font-size:11px;">
But we about to only when user press enter after he enter some data then that element makes it job lets update the code
```html
<input type="text" logic="" onkeyup="if(event.keyCode===13&&this.value){this.output=this.value}"/>
```



