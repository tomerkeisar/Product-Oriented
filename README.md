# Product Oriented

Product Oriented is a JavaScript library that help us to make it easy to build html elements.

* **Unit of work:** Every Html element can serve as unit of work because in Product Oriented every html tag has input property output property and logic function.
* **Connection between elements:** Product oriented allow to make connection between elements so one element output became another element input.

## Getting Started
Clone or download this repository and then you need to get the file named
build.js located under product-oriented directory  and link to that file from end of the body like that:
```html
 <body>
 
    <script src="build.js">
 </body>
```

## Examples
## 1. Greet user
For wish to greet uaser you can write this code
```html
 <input type="text" onkeyup="this.output=this.value" logic="" />
  
 <h2>Hello <span input-from="input" logic="this.textContent=this.inputfield"></span></h2>
```
this code synchrun user keys on input to span text

 ## 2. To do list

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
this code generate to do list

## 3. Show the time
```html
 <div auto-logic="yes" 
     logic="var self= this;setInterval(function(){self.output=new Date().toLocaleTimeString()},1000)">
 </div> 
 <div input-from="div"
     style="font-size:26px;" logic="this.textContent='The time in Tel Aviv is: '+this.inputfield;">
 </div>
 ```

## Authors

* **Tomer Keisar** 


