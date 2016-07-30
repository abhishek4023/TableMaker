(function ($) {
    $.fn.MakeTable = function (tableRow, tableColumn, tableColumnHeadings, tableValues) {
        return this.each(function () {
            var tableHtmlString = '<div><table class="table table-condensed table-bordered table-hover table-responsive text-center">'
                + '<thead><tr class="bg-primary">';
            for (var i = 0; i < tableColumn; i++) {
                tableHtmlString += '<th class="text-center">' + tableColumnHeadings[i] + '</th>';
            }
            tableHtmlString += ' </tr></thead><tbody>';
            for (var j = 0; j < tableRow; j++) {
                tableHtmlString += '<tr class="bg-success">';
                for (var k = 0; k < tableColumn; k++) {
                    tableHtmlString += ' <td class="text-center">' + tableValues[j * tableColumn + k] + '</td>';
                }
                tableHtmlString += '</tr>';
            }
            tableHtmlString += ' </tbody></table></div>';
            return $(this).append(tableHtmlString)
        });
    };
} (jQuery));