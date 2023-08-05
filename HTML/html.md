<samp>

Follow MDN Docs:

Frontend:
HTML: layout of website: paragraph, sections, media
CSS: Styling of website: colors, background, animation
JS: Logic of website - functionality, behaviour

# HTML: Hyper text Markup Language - Define labeling of content header, footer, paragraph, audio, video

    We can define structure using HTML
    <!DOCTYPE html> -> Declaration for html5 code, Shows that code is written in HTML5

## Tags: written in <>, ex: <html>, <body> etc

    tag is markup entity - provide structure (header, footer, main), meaning/semantics (link, paragraph, list, table, form, image), formate (underline, bold, italic) your content
    opening tag <>, closing tag </>
    html is root element.

    Semantics - <h1>---<h6>, <p>, <a>, <ol>, <ul>, <dl>, <table>, <img>, <form>
    Diff between all h1 tags -> Diff in their meaning/semantic <h1> defines the most important heading. <h6> defines the least important heading.
    Structure - <html>, <head>, <body>, <header>, <main>, <aside>, <footer>, <article>, <section>, <nav>
    Formatting - <b>, <i>, <u>, <s>, <strong>, <em>, <sup>, <sub>, <pre>, <code>

     <header> - put site header and nav bar content,
     <main> - put all content except header and footer in main,
     <aside> - put side bar content,
     <footer> - put footer content,
     <article> - put independent content,
     <section> - put dependent or multiple content,
     <nav> - put nav links

    self closing tag: <br> - No need to close br tag

    Generally we will not use <b>, <i>, <u>, <s> tags, we will achieve through css. Because we need to provide some meaning or semantic to the content.
    use strong over b: The HTML <strong> element defines text with strong importance. The content inside is typically displayed in bold.
    use i over em: The HTML <em> element defines emphasized text. The content inside is typically displayed in italic.
    This will help in text to speech.

### attributes:

    id: ID name must only be used by one HTML element within the page, Uniquely identify elements,
    class: A Class name can be used by multiple HTML elements,
    style: Add inline styles,

## tag vs element:

    tag: opening tag <> and closing tag </> EX: <p>
    element: opening tag <> and closing tag </> and there is some content within the tag Ex: <p>Content</p>

# <html>

    Root element contains head and body

# <head> - Tags inside the head are not visible in web page

    contains metadata, seo data, title of web page, link style sheet
    <title> - Display web page title
    <link> - to add css file, to add favicon icon - icon should be under root directory
    <script> - to add js file
    SEO: Search Engine Optimization
    <meta> - used for SEO
        attribute charset="UTF-8" - To support multiple language support

# <body> - Tags inside the head are visible in web page

    Content of web page

## Comment: <!-- comment -->

## <div> - division tag

    A non semantic tag/ Not provide any meaning, but we can use it as a wrapper
    A generic container used for wrapping
    We can use it to wrap semantic elements

## Block element vs inline element

    block elements - took all space form left to right, starts on next line
    block elements - took only required space(according to content), starts on same line

## anchor tag <a>

    <a href="https://www.google.com">Link</a>

    <a href="mailto:test@gmail.com">Email</a>

    <a href="tel:999999999">Telephone</a>

## Details tag <details>

    The <details> HTML element creates a disclosure widget in which information is visible only when the widget is toggled into an "open" state. A summary or label must be provided using the <summary> element.
    The <summary> tag defines a visible heading for the <details> element. The heading can be clicked to view/hide the details.
    Note: The <summary> element should be the first child element of the <details> element.

## Table: <table>

    Arrangement of data in form of rows and columns
    A cell is a part of a table where a row and column intersect
    A cell is used for storing information or data

    <table></table> - create table
    <thead></thead> - semantic elements - stores heading columns
    <th></th> - create table heading
    <tbody></tbody> - semantic elements - stores actual content
    <tfoot></tfoot> - semantic elements - stores summarization
    <tr></tr> - create table row
    <td></td> - create table column

## Form: <form> - structure to collect user's data

### Form Elements - Different Tags

    <form> - Parent tag - To create HTML forms
    <label> - Text attached with any form filed ex: gender, email, date etc... , screen reader reads this info
         - label field "for" attribute must be same as input field "id" attribute - To link both the fields
    <input> - may forms - To take input from user ex: text, radio, email, checkbox etc... - default type "text"
        type attribute - define type of elements
        id attribute - Unique for all elements, also used for label "for" attribute
        name attribute - To access the element
        value attribute - value will stored/ visible in the element
        placeholder attribute - Text displayed on element for information
    <textarea> - multiline field - For taking long texts like comments, reviews etc..
    <select> + <option>  - drop down list - Used when there are many options available
    <button type="submit"> or <input type="submit"> - submit button - Submits the entered details after clicking this button
    <fieldset> - To group multiple elements
    <legend> - To add caption/title to fieldset

### Input Elements

    type="text" - Take text input from user (default)
    type="number" - Take number input from user (default)
    type="password" - take password input from user
    type="file" - take file input from user
    type="image" -  defines an image as a submit button
    type="tel" -  take telephone input from user
    type="email" - take email id input from user
    type="number" - takes number inputs from users
    type="date" - Takes date values from users
    type="radio" - Radio buttons with single option selected at one time
    type="checkbox" - checkboxes with multiple option selected at one time
    type="submit" - Button which will send/post submitted value back to server

## Media

    <img src="" loading="lazy"> - To display image files.
    <audio src="" controls> - To display audio control - need to add controls attribute to visible audio controls in browser
    <video src="" controls> - To display video control - need to add controls attribute to visible video controls in browser
    <iframe src="" controls> - To attach external website or web document or embed youtube video or map location

# Tips:

    body> - Tags inside the head are visible in web page

    <head> - Tags inside the head are not visible in web page
    contains metadata, seo data, title of web page, link style sheet
    <title> - Display web page title
    <link> - to add css file, to add favicon icon - icon should be under root directory
    <script> - to add js file
    SEO: Search Engine Optimization
    <meta> - used for SEO
        attribute charset="UTF-8" - To support multiple language support

    Every elements in html provides some semantic/meaning.
    <header> - put site header and nav bar content,
    <main> - put all content except header and footer in main,
    <aside> - put side bar content,
    <footer> - put footer content,
    <article> - put independent content,
    <section> - put dependent or multiple content,
    <nav> - put nav links

    Use emmet tool for productivity. It generates boilerplate and create multiple elements with shortcuts (in built in vs code)
    > -> nested element
    + -> sibling element
    *n -> multiple elements, n no of elements
    () -> group elements
    ()*n -> group and multiple elements, n no of elements
    {} -> add content
    # -> add id attribute
    . -> add class attribute

    Generally we will not use <b>, <i>, <u>, <s> tags, we will achieve through css. Because we need to provide some meaning or semantic to the content.

    <img src="" loading="lazy"> - lazy loading image.
    loading="lazy" -> Lazy loading is a strategy to identify resources as non-blocking (non-critical) and load these only when needed.

    <audio src="" controls> - To display audio control - need to add controls attribute to visible audio controls in browser

    <video src="" controls> - To display video control - need to add controls attribute to visible video controls in browser

    <iframe src="" controls> - To attach external website or web document or embed youtube video or map location

</samp>
