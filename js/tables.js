/*!
 * jQuery plugins for html tables.
 * v1.0.0, 2014-11-20
 *
 * Copyright (c) 2014 João Melo
 * http://jacbmelo.github.io
 *
 * Licensed under MIT
 * https://raw.githubusercontent.com/jacbmelo/jacbmelo.github.io/master/LICENSE.txt
 *
 * jQuery authoring guidelines
 * http://docs.jquery.com/Plugins/Authoring
 */
(function($) {
 
    $.fn.fixTableCols = function(options) {
 
 		// Default options
        var settings = $.extend({
            columns: -1
        }, options);

        this.filter("table").each(function(i, elem) {
			var $table = $(elem);
			var fixColumns = (settings.columns > 0) || 
				$table.find("th.fixed-column, th.fixed-col, td.fixed-column, td.fixed-col").length > 0;
			if (fixColumns) {

				// Clone original table
		        var $fixedTable = $table.clone().attr('id', $table.attr('id') + '-fixed').insertBefore($table).addClass('table-fixed-cols');
		        
		        // Keep only fixed columns
		        if (settings.columns > 0) {
		            $fixedTable.find('tr').each(function (i, elem) {
		                $(elem).find('th, td').each(function (i, elem) {
		                    if (i >= settings.columns) {
		                        $(elem).remove();    
		                    }
		                });
		            });
		        } else {
		            $fixedTable.find('tr').each(function (i, elem) {
		                $(elem).find('th,td').each(function (i, elem) {
		                    if (!$(elem).hasClass('fixed-col') && !$(elem).hasClass('fixed-column')) {
		                        $(elem).remove();    
		                    }
		                });
		            });
		        }

		        // Change id and name of elements inside original table
		        $fixedTable.find('*').each(function (i, elem) {
		            if ($(this).attr('id') !== undefined) {
		                $table.find("[id='" + $(this).attr("id") + "']").attr('id', $(this).attr('id') + '-hidden');
		            }
		            if ($(this).attr('name') !== undefined) {
		                $table.find("[name='" + $(this).attr("name") + "']").attr('name', $(this).attr('name') + '-hidden');
		            }
		        });
		        
		        // Set rows height of table with fixed cols
		        $fixedTable.find('tr').each(function (i, elem) {
		            $(this).height($table.find('tr:eq(' + i + ')').height());
		        });
		    }
        });
 
        return this;
    };
 
}(jQuery));
