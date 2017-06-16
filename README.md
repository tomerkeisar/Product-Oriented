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
Above code show that we can use native html and java script to build some application. the above code is the most shorten I ever seen for this mission. this application in addition composable if we need to add in the future some feature.


 

## Authors

* **Tomer Keisar** 


