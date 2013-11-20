/* Jquery Pagination */
(function($){
    $.pagination = {
        defaultOptions : {
            items : 5,
            itemsToPaginate : '.itemsToPaginate',
            showNextPrev : 0,
            navigationPosition : 'before'
        }
    }

    $.fn.extend({
        pagination: function(newOptions){
            var options = $.extend($.sequentialAnimations.defaultOptions, newOptions),
            
            return this;
        }
    });
})(jQuery);
