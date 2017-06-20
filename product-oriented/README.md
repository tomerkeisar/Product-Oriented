## I felt in love - Start Learnint Product-Oriented
We will learn Product-Oriented Concept by our previus to do list mission.
## The Problem:
As we anncounced our mission is to create simple to do list that the user can enter to do item as string in input box, and our program will show all todos that the user has entered in unordered list.
## The solution:
* **Step 1** 

Start thinking of development process as job that need to be done by workers - form now sometimes i will give my html elments  the name workers.

The first worker we need is input element that allow the use typing and when the user finish typing by pressing eneter, we are just need this element generating for us final value.
One of the core of Product-Oriented's concept is "Unit of work" means that we allowed to use exist html element to do some complete mission.
Let's create our worker.
```html
<input type="text" logic="" onkeyup="this.output=this.value"/>
```
Output is Product-Oriented property. that Property will allow us in the future another elements to know what the final result of that input element. 
In the above onkeyup handler code we are just telling that when the user release keys, then the output property of this input element will be synchrunize with it's value.
Our Properties (In that case output) are clever in the way they reflect themselves as attribute of the element. what's mean you can open your developer toolbar and  watch in real time the affected property, (in our case Output) by appropriate attribute.

The logic attribute, in this case does nothing, except helping us to fall this element intp Product-Oriented selectors.

Following gif animation Demonstrate this step.

<a href="http://makeagif.com/gif/-VWAOvV" title=""><img src="http://i.makeagif.com/media/6-19-2017/VWAOvV.gif" alt=""></a><div style="font-size:11px;">

* **Step 2** 

We are about to only when the user press enter and in case it was on non empty input, just in this case to generate Output because just that situation means the input did its mission.
Let's modify our code:
```html
<input type="text" logic="" onkeyup="if(event.keyCode===13&&this.value){this.output=this.value}"/>
```

Above code did that only when the user press enter and the input hold some value just in this case we are generating output that will serve us in the future  comunication between another elements.

Following gif animation Demonstrate this step.

