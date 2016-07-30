# TableMaker

Get your tables designed automatically using this Jquery plugin. Note: Include Bootstrap 3.x and jquery

#Use Guide

U need to simply include this document and then just send the sample data while calling the MakeTable() function. It can be atached to any div and it supports chaining.

MakeTable takes 4 arguments:

1. Number of TableRows
2. Number of TableColumns
3. Array of Column headings
4. Array of table data

#Note :

Must include:

1. Bootstrap 3.x
2. jquery 3.x

You can use the following CDN
```html
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
//Here include this file tablemaker.js
//Include it only below the jquery inclusion.
```

#Example

Suppose i have the following div 
```html
<div id="DisplayDiv"> </div>
```

Now if i want to display my table into this div then i can use any of the selection method of jquery and just call this function with the following arguments.

In the code below the arguments are passed in the following order:
MakeTable(NumberOfRows, NumberOfColumns, string array of headings, string array of row wise values)

```javascript
//Number of rows are 5 and columns are 3
//Here we are taking 3 headings which we want to be displayed at the top of table
//We pass a var with array of the table values in a rowwise manner. Here it is Tvalues.

 var headings = ["Roll Number","Name","Marks"];
 var TValues = ["1", "Akanksha Seth", "99", "2", "Abhishek Maurya", "87", "3", "Aditya Kumar", "87", "4", "Abhinav Singh", "100", "5", "Birendra Yadav", "90"];
 
 $('#DisplayDiv').MakeTable(5, 3, headings, TValues);
```

This displays our table properly and in a well designed manner.


>Better and more customizable options will also be provided in future. You can also contribute to this project via this repository.
> - Abhishek Maurya (abhishek4023@gmail.com)

####Free to use




