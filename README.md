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



 

## Author - Tomer Keisar 



