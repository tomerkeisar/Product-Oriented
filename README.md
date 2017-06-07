# Product Oriented

Product Oriented is a JavaScript library that make it easy to build html elements and web applications.

* **Cross Framework:** Product-Oriented vision is to enable everyone continue develope as he is used to...
* **Back to html java script and css:** by using us you could write nativ html java script and css.
* **Unit of work:** Every Html element can serve as unit of work to reach certain mission because every html tag has input property output property and logic function.
* **Connection between elements:** Product oriented allow to make connection between elements so one element's output became another element's input, and in addition one element's setting output trigger the dependant element to invoke logic function with the dependency's output as the dependat's input. that amaizing pattern enable to chain missions between another elements and make the elements and As a result the application composable.


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
To wish to  user the best you can write this code:
```html
 <input type="text" onkeyup="this.output=this.value" logic="" />
  
 <h2>Hello <span input-from="input" logic="this.textContent=this.inputfield"></span></h2>
```

 ## 2. To do list
To display text box enable user type to do and display it on unordred list write this code:
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

## 3.Show the time  
To display the time write this code
```html
 <div auto-logic="yes" 
     logic="var self= this;setInterval(function(){self.output=new Date().toLocaleTimeString()},1000)">
 </div> 
 <div input-from="div"
     style="font-size:26px;" logic="this.textContent='The time in Tel Aviv is: '+this.inputfield;">
 </div>
 ```
 
 ## 4. Tic Tac Teo Game 
 To show  Tic Tac Teo Game write this code
 ```html
  <div class="repeater1" auto-logic="true" logic="repeatThreeTimes.apply(this)"></div>
    <div class="repeater2" auto-logic="true" logic="repeatThreeTimes.apply(this)"></div>
    <script>
        function repeatThreeTimes() {
            for (var i = 0; i < 3; i++) {
                var self = this;
                setTimeout(function () {
                    self.output = null;
                });
            }
        }
    </script>
    <table>
        <template input-from=".repeater1"
                  logic="this.parentElement.appendChild(this.content.cloneNode(true))">
            <tr>
                <template input-from=".repeater2"
                          logic="this.parentElement.appendChild(this.content.cloneNode(true))">
                    <td>
                        <div class="kube" style="width:50px;
                                                 height:50px;
                                                 background-color:gray;
                                                 cursor:pointer;"
                             onclick="this.output=this">
                        </div>
                    </td>
                </template>
            </tr>
        </template>
    </table>
    <div class="marker" input-from=".kube"
         logic="markKube.apply(this)"></div>
    <script>
        function markKube() {
            if (!this.inputfield.textContent.trim()) {
                this.inputfield.textContent = this.outputfield ? this.outputfield : this.outputfield = 'X';
                this.output = this.outputfield == 'X' ? 'O' : 'X';
            }
        }
    </script>
    <div class="checker" input-from=".marker" logic="checkWinner.apply(this)"></div>
    <script>
        function checkWinner() {
            var variations = [[0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

            var self = this;
            var alldivs = document.querySelectorAll('.kube');
            for (var i = 0; i < variations.length; i++) {
                checkArrayEqaulity(alldivs[variations[i][0]],
                    alldivs[variations[i][1]],
                    alldivs[variations[i][2]]);
            }

            function checkArrayEqaulity(cell1, cell2, cell3) {
                var res = cell1.textContent.trim() &&
                    cell1.textContent.trim() === cell2.textContent &&
                    cell1.textContent === cell3.textContent;
                if (res) {
                    self.output = {
                        winner: cell1.textContent.trim(),
                        divs: alldivs
                    };
                }
            }
        }
    </script>
    <div input-from=".checker" logic="notifyWinnerAndReset.apply(this)"></div>
    <script>
        function notifyWinnerAndReset() {
            setTimeout(function () {
                alert('The winner is: ' + this.inputfield.winner);

                for (var i = 0; i < this.inputfield.divs.length; i++) {
                    this.inputfield.divs[i].textContent = '';
                }
            }.bind(this));
        }
    </script>
 
 
 ```

## Authors

* **Tomer Keisar** 


