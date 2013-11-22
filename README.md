# Jquery Pagination!

This small Jquery plugin is used to create pagination for a collection of items. This particular plugin gives you the flexibility to use nearly whatever HTML markup and classes you like!

## Features
- HTML/class flexibility!

## Available Options:
```javascript
$('.itemsToPaginate').pagination({
	itemsPerPage: 5,
		// Amount of items per page
		// Accepted value type: Int
		// Default value: 5

	startPage : 1,
		// What page the paginated set should show initially
		// Accepted value type: Int
		// Default value: 1

	showNextPrev : true,
		// Show the Next/Previous buttons
		// Accepted value type: Boolean
		// Default value: true

	navigationPosition : 'before',
		// Set where the pagination controls appear, in relation to the paginated content
		// Available values: 'before', 'after', 'both'
		// Accepted value type: String
		// Default value: 'before'

	paginationClass : 'pagination',
		// Class to give pagination wrapper
		// Accepted value type: String
		// Default value: 'pagination'

	paginationItemClass : 'paginationItem',
		// Class to give each pagination item (inside wrapper)
		// Accepted value type: String
		// Default value: 'paginationItem'

	paginationItemActiveClass : 'active',
		// Class to give active pagination item
		// Accepted value type: String
		// Default value: 'active'

	nextClass : 'next',
		// Class to give Next button in pagination
		// Accepted value type: String
		// Default value: 'next'

	nextText : 'Next',
		// Text to give Next button in pagination
		// Accepted value type: String
		// Default value: 'Next'

	prevClass : 'prev',
		// Class to give Previous button in pagination
		// Accepted value type: String
		// Default value: 'prev'

	prevText : 'Prev',
		// Text to give Previous button in pagination
		// Accepted value type: String
		// Default value: 'Prev'

});
```
