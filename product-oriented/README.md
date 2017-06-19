## I felt in love - start learnint Product-Oriented
We will learn by our prev mission to do list.
Mission decription: Our mission is to create simple to do list that the user can enter to do item in input element, and the program will show all todos that the user entered in unordered list.
The solution:
* **Step 1**
We need create input that allow the use type in and when the user press enter we can get the vallue the user typed that is we do not want to do something with that value we just need getting the value.
One of core of Product-Oriented is the of unit of work that allow us to use exist html element to do some mission
we need to write our text box.
```html
<input type="text" logic="" onkeyup="this.output=this.value"/>
```
In PO every html  elements cat has output property. that Property will use to hold the value of that element and enable another element to know what happend to that element by this property. 
in above code we just telling that when the user typed and release key the output property will be synchrunize with the textbox value.
Product-Oriented Properties are clever in way they reflect themselves to the attribute whats meen you can open your developer toolbar and type on the text box and in live watch the output attributes changed
the logic attribute does nothing for now. but help us to fall intp PO selectors.



