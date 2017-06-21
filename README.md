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
<a href="https://plnkr.co/edit/5tXdqK7DrFEwlO3BepIx?p=preview" target="_blank">Watch this example on plunker</a>

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
We will learn Product-Oriented Concepts by our previous to do list mission.
## The Problem:
As I said before our mission is to create simple to do list that the user can enter to do item as string into input box, and our program will show all todos that the user has entered in an unordered list.
## The solution:
* **Step 1** 

Start thinking of development process as job that need to be done by workers. (form now sometimes i will give my html elments  the name workers)

The first worker we need is input element, we need it to  enable the user typing and in case enter was pressed  generates new final value.
One of the core of Product-Oriented's concepts is the "Unit of work" what means that we allowed to use exist html element to do some complete mission.
Let's create our worker.
```html
<input type="text" logic="" onkeyup="this.output=this.value"/>
```
Output is Product-Oriented property. that Property will allow us in the future comunication between another elements to that input. 
In the above onkeyup handler code we are just telling that when the user release keys, then the output property of this input element will be synchrunize with it's value.
Product-Oriented Properties (In that case output) are clever in the way they reflect themselves as attribute of the element. what's mean you can open your developer toolbar and  watch in real time the affected property, (in our case output) by appropriate attribute.

The logic attribute, in this case does nothing, except helping us to fall this element intp Product-Oriented selectors.

Following gif animation demonstrate this step.

<a href="http://makeagif.com/gif/-VWAOvV" title=""><img src="http://i.makeagif.com/media/6-19-2017/VWAOvV.gif" alt=""></a><div style="font-size:11px;">

* **Step 2** 

But to be honest we are about to only when the user pressed enter and in case it was on non empty input just in that case to generate output because just that situation means the input have done its mission.
Let's modify our code:
```html
<input type="text" logic="" onkeyup="if(event.keyCode===13&&this.value){this.output=this.value}"/>
```

Above code did exactly what we need. from now only when the user press enter and the input hold some value just in that case we are generating output, as I said before, output is very important it will serve  in the future for  comunication between elements.

Following gif animation demonstrate this step.
Important Remark: you could not see that i preesed enter at the end but trust me i pressed :)

<a href="http://makeagif.com/gif/-g4pSkD" title=""><img src="http://i.makeagif.com/media/6-20-2017/g4pSkD.gif" alt=""></a><div style="font-size:11px;">
We saw that we can write, debuge, run and check element in definitly isolation way, that amaizing...


* **Step 3**

Now we need to move on and bind the user input to one li element in list.
As in Product-Oriented every element can has output property, every html element can has also input property, in addition you could make connectio between two elements so one element's output became another element input. you achieve that  by the following code.
```html
<li input-from="input"></li>
```
Above code says: when the input element generate new output then the li element will recieve that data as its input.
the fact that the li hold data in input property worth nothing if we not declare what to do when the li recieve new data as input.
Look at the folowing addedd code

```html
<li input-from="input" logic="this.textContent=this.inputfield"></li>  
```
Now we declare in logic attribute that the main logic of this element is to write on that element text content the value that we just get.
before we continue let say summary:
In Product-Oriented every element can has input property, output property, and  logic function what makes every html element work as web component to achive certain mission.

Following gif animation demonstrate this step.
<a href="http://makeagif.com/gif/-_DXwGi" title=""><img src="http://i.makeagif.com/media/6-20-2017/_DXwGi.gif" alt=""></a><div style="font-size:11px;">

* **Last Step**

Hold on we are about to finish, please take a look at this code
```html
<ul>
  <template input-from="input" logic="this.output=this.inputfield;
                  this.parentElement.appendChild(this.content.cloneNode(true));">
            <li input-from="template" logic="this.textContent=this.inputfield"></li>
   </template> 
</ul>
```
The above code says in simple words words:
every time output ready from input element then template element recieve that data as its input and do two things.
the first: set its output to be equal to its input. the second creates li element and append it to the parent element, the ul.
the li element says that it when recieve input from template it use that value as text content...

Following gif animation demonstrate this step.

<a href="http://makeagif.com/gif/-OwuYIk" title=""><img src="http://i.makeagif.com/media/6-20-2017/OwuYIk.gif" alt=""></a><div style="font-size:11px;">


 

## Author - Tomer Keisar 



