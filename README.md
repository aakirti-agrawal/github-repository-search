# github-repository-search
Search Repositories present on github where the results change dynamically on each key-stroke.

Github Search API makes it easy to implememt the searching of Repositories.

Ajax calls and javascript has been used for the backend API calls.
For the front-end, html 5.0 is used and Spectre is used to style the application.

A single page application is developed such that a user will type any keyword and a list of matching repositories will
get displayed in the order of most relevant repository first. The results in the list change dynamically as user changes
the query.

Dynamic output has been implemented using the createElement() method of javascript and by changing the innerHTML content.

Spectre contains alot of pre-defined classes that can be easily used to style the webpage. Alot of those have been directly
used in this module.

Generally, the API returns 30 results per-page per call. We can incresase it by specifying the per_page attribute and get 
other results using page_no attribute while calling the API. By default, 30 results from page 1 are returned. 
Since, this project is just to see how the API is called and results change dynamically, I haven't included alot of results 
as it takes time to process them and return. 

This project could be extended to search github repositories on the basis of many filters and the user can select from those 
filters, which ones to choose.
