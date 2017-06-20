
* **Step 3**

Now we need to bind the user data to li element in list.
As in Product-Oriented every element can has output property so every html element can has input property in addition you could make connectio between two elements so one element's output becme another element input. you achieve that mission by the folowing code.
```html
<li input-from="input"></li>
```
Above code says: when the input element generate new output the li element will recieve that data as input.
the fact that the li hold data in input property worth nothing if the element not declare what to do when he recieve new input.
Look at the folowing code

```html
<li input-from="input" logic="this.textContent=this.inputfield"></li>  
```
Now the li declare in logic attribute that the main of this element logic is to write on that eleemnt the just value that we just get in input field.
before we continue announce summary:
In Product-Oriented every element can has input property output property and logic function what makes every html element as web component to achive certain mission

Look at gif animation demonstrate this step:
<a href="http://makeagif.com/gif/-_DXwGi" title=""><img src="http://i.makeagif.com/media/6-20-2017/_DXwGi.gif" alt=""></a><div style="font-size:11px;">

* **Last Step**

Hold on take a look at this code
```html
<ul>
  <template input-from="input" logic="this.output=this.inputfield;
                  this.parentElement.appendChild(this.content.cloneNode(true));">
            <li input-from="template" logic="this.textContent=this.inputfield"></li>
   </template> 
</ul>
```
The above code says in words: when output ready from input element then template element recieve that dataa as input and do two things. one set his synchrun his output to the arrived input and creates li child and append it to the parent.
the li says that it recieve input from template and use that value as text content...

look at gif animation:

<a href="http://makeagif.com/gif/-OwuYIk" title=""><img src="http://i.makeagif.com/media/6-20-2017/OwuYIk.gif" alt=""></a><div style="font-size:11px;">

