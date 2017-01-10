

(function ($) {
    $.fn.MakeTable = function (tableValues) {
        return this.each(function () {
            var tableHtmlString = '<div><table class="table table-condensed table-bordered table-hover table-responsive text-center">'
                + '<thead><tr class="bg-primary">';
        for(var key in tableValues[0]){

                tableHtmlString += '<th class="text-center">' + key+ '</th>';
            }
            tableHtmlString += ' </tr></thead><tbody>';     
    for(var i =0;i<tableValues.length;i++){
      tableHtmlString+="<tr class='bg-succes'>";
    for(var key in tableValues[i]){

      console.log(tableValues[i][key]);
    tableHtmlString += ' <td class="text-center">'+tableValues[i][key]+'</td>';
    }
     tableHtmlString += '</tr>';
    }
            tableHtmlString += ' </tbody></table></div>';
            return $(this).append(tableHtmlString)
        });
    };
} (jQuery));


//var headings = ["Roll Number","Name","Marks"];
// var TValues = ["1", "Akanksha Seth", "99", "2", "Abhishek Maurya", "87", "3", "Aditya Kumar", "87", "4", "Abhinav Singh", "100", "5", "Birendra Yadav", "90"];
var TValues=[{id:"1",name:"Akanksha Seth",marks:"99"},{id:"2",name:"Abhishek Maurya",marks:"87"},{id:"3",name:"Aditya Kumar",marks:"84"},{id:"4",name:"Abhinav Singh",marks:"100"},{id:"5",name:"Birendra Singh",marks:"90"}];

 $('#DisplayDiv').MakeTable(TValues);


(function ($) {
    $.fn.MakeTable = function (tableValues) {
        return this.each(function () {
            var tableHtmlString = '<div><table class="table table-condensed table-bordered table-hover table-responsive text-center">'
                + '<thead><tr class="bg-primary">';
        for(var key in tableValues[0]){

                tableHtmlString += '<th class="text-center">' + key+ '</th>';
            }
            tableHtmlString += ' </tr></thead><tbody>';     
    for(var i =0;i<tableValues.length;i++){
      tableHtmlString+="<tr class='bg-succes'>";
    for(var key in tableValues[i]){

      console.log(tableValues[i][key]);
    tableHtmlString += ' <td class="text-center">'+tableValues[i][key]+'</td>';
    }
     tableHtmlString += '</tr>';
    }
            tableHtmlString += ' </tbody></table></div>';
            return $(this).append(tableHtmlString)
        });
    };
} (jQuery));


//var headings = ["Roll Number","Name","Marks"];
// var TValues = ["1", "Akanksha Seth", "99", "2", "Abhishek Maurya", "87", "3", "Aditya Kumar", "87", "4", "Abhinav Singh", "100", "5", "Birendra Yadav", "90"];
var TValues=[{id:"1",name:"Akanksha Seth",marks:"99"},{id:"2",name:"Abhishek Maurya",marks:"87"},{id:"3",name:"Aditya Kumar",marks:"84"},{id:"4",name:"Abhinav Singh",marks:"100"},{id:"5",name:"Birendra Singh",marks:"90"}];

 $('#DisplayDiv').MakeTable(TValues);
