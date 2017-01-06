
(function ($) {
    $.fn.MakeTable = function (tableRow, tableColumn, tableColumnHeadings, tableValues) {
        return this.each(function () {
            var tableHtmlString = '<div><table class="table table-condensed table-bordered table-hover table-responsive text-center">'
                + '<thead><tr class="bg-primary">';
            for (var i = 0; i < tableColumn; i++) {
                tableHtmlString += '<th class="text-center">' + tableColumnHeadings[i] + '</th>';
            }
            tableHtmlString += ' </tr></thead><tbody>';
           

		 // for (var j = 0; j < tableRow; j++) {
   //              tableHtmlString += '<tr class="bg-success">';
   //              for (var k = 0; k < tableColumn; k++) {
   //                  tableHtmlString += ' <td class="text-center">' + tableValues[j * tableColumn + k] + '</td>';
   //              }
   //              tableHtmlString += '</tr>';
   //          }



	for(var i =0;i<tableRow;i++){
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


var headings = ["Roll Number","Name","Marks"];
// var TValues = ["1", "Akanksha Seth", "99", "2", "Abhishek Maurya", "87", "3", "Aditya Kumar", "87", "4", "Abhinav Singh", "100", "5", "Birendra Yadav", "90"];
var TValues=[{id:"1",name:"Akanksha Seth",marks:"99"},{id:"2",name:"Abhishek Maurya",marks:"87"},{id:"3",name:"Aditya Kumar",marks:"84"},{id:"4",name:"Abhinav Singh",marks:"100"},{id:"5",name:"Birendra Singh",marks:"90"}];

 $('#DisplayDiv').MakeTable(5, 3, headings, TValues);
