# Product Oriented

Product Oriented is a JavaScript library that make it easy to build html elements and web applications.

* **Shortens you code Incredibly**
* **Make you developement composable**
* **All relevance code in same place** 
* **Element Binding instead data binding**
* **Cross Framework - Write as you did**
* **Back to native html java script and css** 
* **Unit of work achive mission by element** 
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
```
## To do list
Our mission to create simple to do list that user can enter to do item in input and show all todos in list
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
```that is all.


 

## Authors

* **Tomer Keisar** 


