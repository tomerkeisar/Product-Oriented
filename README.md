# Product Oriented

Product Oriented is a JavaScript library that make it easy to build html elements and web applications.

* **Shortens your code incredibly**
* **Make your code and the developement process composable**
* **All relevance code in the same place** 
* **Element Binding instead of data binding**
* **Cross Framework - continue write as you did**
* **Back to native html java script and css** 
* **Unit of work - achive certain mission by element** 
* **No need chronological way to write solution**
* **And More**


## Getting Started
Clone or download this repository and then you need to get the file named
build.js located under product-oriented directory. and link to that file from end of the body like that:
```html
 <body>
 
    <script src="build.js">
 </body>
```
## Example - To do list 
Our mission is to create simple to do list that the user can enter to do item in input element, and the program will show all todos that the user entered in unordered list.
We will do that in Product-Oriented way. and you will see how short and simple the code is.
```html
<input type="text" placeholder="Add To Do" onkeyup="if (event.keyCode === 13 && this.value)
    { this.output = this.value; this.value = '' }" logic="" />
    <ul>
        <template input-from="input" logic="this.output=this.inputfield;
                  this.parentElement.appendChild(this.content.cloneNode(true));">
            <li input-from="template" logic="this.textContent=this.inputfield"></li>
        </template>
    </ul>
```
This code generate worked to do list app. and it also shows all the Product-Oriented Pros as follow:
* **Shortens your code incredibly** - above code the shortness code exist for that mission.
* **Make your code and the developement process composable** Adding some feature, for example counter that will show the sum of todos the user  has, will be very simple. you just need to find in the exist code element to give you the data you need. and create new element that get that data and make things. 
* **All relevance code in the same place** you no need to navigate between files because all relevance code (html, javascript, css) here.  
* **Element Binding instead of data binding** all the bindings in the above code are between elements. find input-from attribute and see which element recive data and from which element.
* **Cross Framework -  continue write as you did** you no need to check How to do something in Product-Oriented. just do things as you did before.
* **Back to native html java script and css**  
* **Unit of work - achive certain mission by element** look for example at the input element. it mission is to enable user enter data and in case user pressed enter just finish the mission. 
* **No need chronological way to write solution** you can start your code for example with the code of creating li. and just replace the input-from with another attribute and to run that element seperatly.


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

But we are about to only when the user pressed enter and in case it was on non empty input, just in that case to generate Output because just that situation means the input did its mission.
Let's modify our code:
```html
<input type="text" logic="" onkeyup="if(event.keyCode===13&&this.value){this.output=this.value}"/>
```

Above code did exactly that. From now only when the user press enter and the input hold some value just in that case we are generating output, as we said output that will serve us in the future  comunication between that element to another elements.

Following gif animation Demonstrate this step.
Important Remark: you could not see that i preesed enter in the end of data but trust me i pressed :)

<a href="http://makeagif.com/gif/-g4pSkD" title=""><img src="http://i.makeagif.com/media/6-20-2017/g4pSkD.gif" alt=""></a><div style="font-size:11px;">
We saw that we can write, debuge, run and check element in definitly isolation way, that amaizing...


 

## Author - Tomer Keisar 



