/* Jquery Pagination */
(function($){
    $.pagination = {
        defaultOptions : {
            itemsPerPage : 5,
            startPage : 1,
            showNextPrev : true,
            navigationPosition : 'before',
            paginationClass : 'pagination',
            paginationItemClass : 'paginationItem',
            paginationItemActiveClass : 'active',
            nextClass : 'next',
            nextText : 'Next',
            prevClass : 'prev',
            prevText : 'Prev',
        }
    }

    $.fn.extend({
        pagination : function(newOptions){
            var options = $.extend({}, $.pagination.defaultOptions, newOptions),
                itemsToPaginate = $(this),
                itemsToPaginateContainer = itemsToPaginate.eq(0).parent(),
                paginationWrapper = "<div class='" + options.paginationClass + "'></div>",
                paginationControls = '',
                pagination,
                numberOfPages,

            showPage = function(page){
                var itemRangeEnd = page * options.itemsPerPage
                    itemRangeStart = itemRangeEnd - options.itemsPerPage;

                $( '.' + options.paginationItemClass, pagination).removeClass(options.paginationItemActiveClass);
                pagination.each(function(){
                    $(this).find('.' + options.paginationItemClass).eq(page-1).addClass(options.paginationItemActiveClass);
                });

                itemsToPaginate.hide().slice(itemRangeStart, itemRangeEnd).show();
            },

            createPagination = (function(){
                // Add pagination element to DOM
                switch(options.navigationPosition.toLowerCase()){
                    case 'both':
                        itemsToPaginateContainer.before(paginationWrapper);
                        itemsToPaginateContainer.after(paginationWrapper);
                        break;

                    case 'after':
                        itemsToPaginateContainer.after(paginationWrapper);
                        break;

                    default:
                        itemsToPaginateContainer.before(paginationWrapper);
                        break;
                }

                // Selecting pagination element
                pagination = itemsToPaginateContainer.siblings('.' + options.paginationClass);

                // Count how many pages to make
                numberOfPages = Math.ceil( itemsToPaginate.length / options.itemsPerPage );

                // Insert controls into pagination element
                if(options.showNextPrev) paginationControls += "<a href='#' class='" + options.prevClass + "'>" + options.prevText + "</a>";
                for (var i = 1; i <= numberOfPages; i++) {
                    paginationControls += "<a href='#page" + i + "' class='" + options.paginationItemClass + "'>" + i + "</a>";
                }
                if(options.showNextPrev) paginationControls += "<a href='#' class='" + options.nextClass + "'>" + options.nextText + "</a>";
                (numberOfPages !== 1) ? pagination.html(paginationControls) : pagination.remove() ;
            }()),

            bindUIEvents = (function(){
                pagination.find('.' + options.paginationItemClass + ':not(.' + options.nextClass + '):not(.' + options.prevClass + ')').on('click', function(e){
                    e.preventDefault();
                    showPage( pagination.find( $(this) ).index() );
                });

                pagination.find('.' + options.prevClass).on('click', function(e){
                    e.preventDefault();
                    var prevPageIdx = pagination.find('.' + options.paginationItemActiveClass).index() - 1;
                    if(prevPageIdx < 1)
                        showPage(numberOfPages);
                    else
                        showPage(prevPageIdx);
                });

                pagination.find('.' + options.nextClass).on('click', function(e){
                    e.preventDefault();
                    var nextPageIdx = pagination.find('.' + options.paginationItemActiveClass).index() + 1;
                    if(nextPageIdx > numberOfPages)
                        showPage(1);
                    else
                        showPage(nextPageIdx);
                });
            }()),

            init = (function(jqueryCollection){
                showPage(options.startPage);
                return jqueryCollection;
            })(this);

        }
    });
})(jQuery);