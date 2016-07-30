# TableMaker

Get your tables designed automatically using this Jquery plugin. Note: Include Bootstrap 3.x and jquery

#Use Guide

U need to simply include this document and then just send the sample data while calling the MakeTable() function. It can be atached to any div and it supports chaining.

MakeTable takes 4 arguments:
-Number of TableRows
-Number of TableColumns
-Array of Column headings
-Array of table data

#Note :

Must include:
-Bootstrap 3.x
-jquery 3.x

You can use the following CDN
```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
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
 var headings = ["Roll Number","Name","Marks"];
 var TValues = ["1", "Abhjit", "67", "2", "Abhinav", "56", "3", "Aditya", "87", "4", "Abhishek Maurya", "100", "5", "Abhi", "90"];
 
 $('#DisplayDiv').MakeTable(5, 3, headings, TValues);
```

This displays our table properly and in a well designed manner.

Better and more customizable options will also be provided in future. You can also contribute to this project via this repository.




