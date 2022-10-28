User can add a new element from the side drawer.
Each element can be categorized however they want.
Categories include:
    layout
    content
    forms
    helpers
    utilities

Elements will be stored as classes or objects.
Elements will have the following properties:
    category (string)
    className (string)
    cssProperties (object) {propertyName: propertyValue} - these will be used to build css files
        For some elements, any number of cssProperties can be added.
        For helper elements, 1 cssProperties instance can be added.
        Each one will be configurable via the tool in the
        main view. 

All data will output as a copyable text, as well as a saveable .css file.

-------------------------------------------------
APP LAYOUT
-------------------------------------------------

- HEADER
--- 

--- MAIN CONTAINER

------ SIDE DRAWER
--------- SIDE DRAWER HEADER (contains current framework name, editable and deletable)
--------- SECTION (layout)
------------ plus icon (adds a new element to the category)
--------- SECTION (content)
------------ plus icon (adds a new element to the category)
--------- SECTION (forms)
------------ plus icon (adds a new element to the category)
--------- SECTION (helpers)
------------ plus icon (adds a new element to the category)
--------- SECTION (utilities)
------------ plus icon (adds a new element to the category)

------ MAIN VIEW
--------- HEADER (contains selected element's category and element name, element name can be edited here by clicking an edit icon, as well as deleted)
--------- EDITOR PANEL
--------- PREVIEW PANEL