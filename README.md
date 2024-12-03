# Countries / Persons Profile

 Create a profile for *5* people (historic or current) *or* countries. The user should be able to search for the country and see the results. Once completed, fellow classmates will review and rate your design and content.


# Instructions

 1. Research a location or person you are interested in.

  - *all information will be stored as an object in the array in the research.json file* under api folder
			
 1. Use the Web and/or Wikipedia for your research.


# Requirements

 - Take into account, how will the user know what countries you researched that are options.

 - Do not select a country your seating partner chose. *There are 195 counties in the world, not continents.*

 - Create a design that is creative and that is logical. You can make the layout to display the information. Make sure the information displayed is labeled. 

 ## JavaScript

  a. Load the research.json using fetch or XMLHttp
				
  b. Minimum 3 Functions

  c. The object should contain

  - *7 Key/Values* that contains (country)

    - name

    - population

    - capital

    - national animal

    	- language as an *array* (if more than one language)

    	- nation anthem (if present an audio link)

    	- images as an *object* that contains

    	  - country flag

    	  - contains a sub array of images *3 images* 
										
    	    - city
											
    	    - people 
											
    	    - leader (last one if none)
											
 *OR*
				
  - *7 Key/Values* that contains (person)
	
    - name
	
    - birth date
	
    - county/area born in
	
    - background/race as an *array* (if mixed)
	
    - parents as an *array* that contains
	
      - mother (if present)
	
      - father (if present)
					
    - education as an *array* (if more than one school)
	
    - images as an *object* that contains
	
      - person
	
      - contains a sub array of images *3 images* of
	
        - most popular works or awards
											
  ## HTML

  a. Design the page using any html5 tags

  ## CSS
		
  a. Use creative but consistent colors that makes sense.

		
# Challenge

  - improve the page creatively than using the template
		
  - create the template dynamically.

  - use a drop down menu

  - the drop down is dynamically populated with your countries name

  - use Object.keys() and Object.values in a function.
 
  - use a single function that passes a parameter to search for the object.
