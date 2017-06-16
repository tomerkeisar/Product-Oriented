# Product Oriented

Product Oriented is a JavaScript library that make it easy to build html elements and web applications.

* **Shortens your code incredibly**
* **Make your developement process composable**
* **All relevance code in same place** 
* **Element Binding instead of data binding**
* **Cross Framework -  continue write as you did**
* **Back to native html java script and css** 
* **Unit of work - achive certain mission by element** 
* **No need chronological way to write solution**
* **And More**


## Getting Started
Clone or download this repository and then you need to get the file named
build.js located under product-oriented directory  and link to that file from end of the body like that:
```html
 <body>
 
    <script src="build.js">
 </body>
```
## Example
## To do list
Our mission to create simple to do list that the user can enter to do item in input, and program show all todos the user entered in list.
We will do that in Product-Oriented way and you will see how short and simple the code is.
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
This code generate worked to do list app and it show all Product-Oriented Pros as follow:
* **Shortens your code incredibly** The Shortener code Exist for this mission.
* **Make your developement process composable** Adding feature for example counter that sum currnet todos and display very simple you just need to find exist element to get input from and create new element that get that input and make things. 
* **All relevance code in same place** no need to navigate between files because all relevance code (html,javascript,css) here.  
* **Element Binding instead of data binding** attribute input-from says i element that recive my input from another element.
* **Cross Framework -  continue write as you did** No need to check Ho to do something in Product-Oriented just do things as you did before.
* **Back to native html java script and css**  
* **Unit of work - achive certain mission by element** look for example at the input element. his mission to enable user enter data and in case user press enter finish mission. 
* **No need chronological way to write solution** you can start your code for example with the code of li. and just replace the input-from with another attribute and to run that element seperatly.




 

## Author

#Tomer Keisar  


