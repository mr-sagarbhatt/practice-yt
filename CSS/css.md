<samp>

[How does CSS cascade?](https://mgearon.com/css/how-does-css-cascade/)

[css tutorial](https://www.w3schools.com/css/default.asp)

[scss tutorial](https://www.w3schools.com/sass/default.php)

# CSS: Cascading Style Sheet - Styling of website

    file/ part of code where defined the configuration to style the web page
    property: value - bg-color: yellow

## Syntax:

    Selector : {
        property: value
    }

## Ways to add CSS:

    Inline - using style attribute in tag - ex: <p style="color: yellow;">
    Internal - using style tag in head tag - ex: <style>p{color: yellow;}</style>
    External - need to create css file and link to html file

## Selectors: using selector you can target any hml elements to apply css

    It can be HTML element name (p, h1, div), id (#any_id), class (.any_class), or group of all (using comma(,)) (p, #any_id, .any_class)
    apply to all elements with same name, id, class, or group

## Fonts and Colors:

[fonts](https://www.w3schools.com/css/css_font.asp)

[colors](https://www.w3schools.com/css/css_colors.asp)

[text color](https://www.w3schools.com/cssref/pr_text_color.php)

[backgroundColor](https://www.w3schools.com/css/css_background.asp)

    ways to add colors: name of color (red, yellow, blue), rgb or rgba, hex, hsl or hsla

# Box Model:

[borders](https://www.w3schools.com/css/css_border.asp)

    width: Specify width of element (Ex: width: 100px;)
    height: Specify height of element (Ex: height: 100px;)

    The width and height properties do not affect a <span> element because it is an inline element. An inline element does not start on a new line and only takes up as much space as required.

[Box Model](https://www.w3schools.com/css/css_boxmodel.asp)

    Browser render every content(Text, image, video, logo, graphics or anything) in rectangle box called box model
    Consider the box model before start design any layout
    4 parts(layer) of box model: content, padding, border, margin

    Remove margin and padding of all elements using universal selector(*) -- Best practice
    Ex: * {margin:0; padding:0}

[margin](https://www.w3schools.com/css/css_margin.asp)

[padding](https://www.w3schools.com/css/css_padding.asp)

[Box sizing](https://www.w3schools.com/css/css3_box-sizing.asp)

    The CSS box-sizing property allows us to include the padding and border in an element's total width and height.
    If you set box-sizing: border-box; on an element, padding and border are included in the width and height -- Best practice

# Some CSS Properties

[display](https://www.w3schools.com/css/css_display_visibility.asp)

    Provide different ways to render an element
    All elements have default display property which we can change using display property
    block: render on new line, take full length from left to right, allow to add custom width and height, allow to add margin and padding
    div, p, h1 -> block type elements
    inline: width available then render on same line else wrap to new line, width according to content, not allow to add custom width and height, allow to add padding, allow to add horizontal margin, not allow to add vertical margin
    a, span -> inline elements
    inline-block: Behaves like inline element but you can apply custom properties like width, height and margin

[position](https://www.w3schools.com/css/css_positioning.asp)

    Change element's position on screen
    static(default position): can not apply top, right, bottom, left, z-index properties
    apply top, right, bottom, left, z-index properties to other positions
    relative: position an element corresponding to current screen, apply top, right, bottom, left, preserve space of element
    absolute: to overlap an element, not preserve space of element, The element is positioned relative to its closest positioned ancestor (if any) or to the initial containing block.
    fixed: Fixed to current window,
    sticky: Fixed within parent element

[CSS Size units](https://www.w3schools.com/css/css_units.asp)

    CSS has several different units for expressing a length.
    Many CSS properties take "length" values, such as width, margin, padding, font-size, etc.
    px, %, vw, vh, rem, em
    % (consider parents length)
    relative units:
    em (take parent length),
    rem (take root element length),
    vh (consider viewport length), vw (consider viewport length)

[float vs clear - w3schools](https://www.w3schools.com/css/css_float.asp)
[float vs clear - css tricks](https://css-tricks.com/all-about-floats/)
[overflow](https://www.w3schools.com/css/css_overflow.asp) - The CSS overflow property controls what happens to content that is too big to fit into an area.

    The float property is used for positioning and formatting content.
    clear is used to clear float. for ex. clear: right -> no element will float on right of the element.
    The great collapse - If parent element don;t have any child other than float, then parent will collapsed. - to overcome this situation we can add overflow:auto to parent element.

[FlexBox - w3schools](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)
[FlexBox - mdn](https://www.w3schools.com/css/css3_flexbox.asp) - flexible box - 1-D layout method

    Powerful tool to create layout - allow to arrange elements row or column wise
    parent item - flex container - display: flex
        default flex direction is row. - flex-direction: row -> row, row-reverse, column, column-reverse
    child items - flex items
    horizontal axis - main axis - justify works on main axis
    vertical axis - cross axis - align works on cross axis

    flex-direction: row -> main axis - horizontal axis
    flex-direction: column -> main axis - vertical axis

    flex container properties:
    display: flex
    flex-direction
    flex-wrap
    fex-flow
    justify-content
    align-items
    align-content

    flex items properties:
    order
    flex-grow
    flex-shrink
    flex-basis
    flex
    align-self

# Media Query: Used for responsive design

[Media query](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries)

[Responsive Web Design](https://www.w3schools.com/css/css_rwd_intro.asp)

    Tool to define arrangement of elements or design for different screen size
    we can also add the orientation (orientation: landscape)
    min-width: apply after given width Ex: @media (min-width: 10240px)
    max-width: apply before given width Ex: @media (max-width: 769px)
    We can use combination of multiple condition using and operator. Ex: @media (min-width: 10240px) and (max-width: 769px)
    Always Design for Mobile First

# Shadow: Box shadow and Text shadow

    by default shadow color is black for both

[Box Shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow) : The box-shadow property attaches one or more shadows to an element.

    A box shadow is described by X and Y offsets relative to the element, blur and spread radius, and color
    Render shadow on element by applying different parameters like inset, x-axis, y-axis blur, spread, color
    Ex: box-shadow: 12px 12px 2px 1px teal;
    default inset is not specified, Changes the shadow from an outer shadow (outset) to an inner shadow, Ex: box-shadow: inset 5em 1em gold;
    we can also add multiple box shadow by adding comma Ex:box-shadow: 3px 3px red, -1em 0 .4em olive;

[Text Shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow) : The text-shadow property adds shadow to text.

    Same syntax as box shadow, except inset and spread parameter

# Animations : Create using @keyframes - (super entity of transition)

[Animations](https://www.w3schools.com/css/css3_animations.asp)

    When element gradually change from one style to another style is called animation
    Ex: a div has bg color yellow and on hover it changes to orange
    create animation: We can create animation using @keyframes, where we can define from(source styling) and to(destination styling)
    @keyframes example {
        from {background-color:red; left:0px; top:0px;}
        to  {background-color:yellow; left:200px; top:0px;}
    }
    We can also define percentage in place of from and to

    use animation: animation-name: example
    define duration of animation: animation-duration: 4s;
    define delay start of animation: animation-delay: 2s;
    define number of times an animation should run: animation-iteration-count: infinite;
    define direction of animation should be played forwards, backwards or in alternate cycles: animation-direction: reverse;
    specifies the speed curve of the animation: animation-timing-function: linear;
    The animation-fill-mode property specifies a style for the target element when the animation is not playing (before it starts, after it ends, or both): animation-fill-mode: forwards;
    shorthand notation for animation: animation: example 5s linear 2s infinite alternate;

# Transitions (child entity of animation)

[Transition](https://developer.mozilla.org/en-US/docs/Web/CSS/transition)

    When element gradually change from one state of style to another state of style is called transition
    Need to trigger it using css pseudo classes.
    CSS transitions are generally best for simple from-to movements, while CSS animations are for more complex series of movements.
    We can say animation is set of transitions.
    transition: Can only run once and Require a trigger to run (like mouse hover)
    animation: Can loop infinitely using animation-iteration-count property, Can be triggered but can also run automatically
    shorthand notation: transition: property name | duration | easing function | delay

# Transforms:

[Transform](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)

    The transform property applies a 2D or 3D transformation to an element. This property allows you to rotate, scale, move, skew, etc., elements.

    Rotate element: transform: rotate(45deg)
    Change size of element: transform: scale(2)
    Tilt element: transform: skew(45deg)
    Move element: transform: translate(500px), transform: translate(500px, -500px) - 2 params for x axis and y axis

# Tips:

    Avoid using inline css, it's not a good practice
    Use custom variable to store colors or any repeatitive value, just define it in a :root selector so that we can access it from everywhere in dom
    Create variable: Ex: --primary-color: brown;
    Use variable: Ex: var(--primary-color);

## fonts

    However, there are no 100% completely web safe fonts. There is always a chance that a font is not found or is not installed properly.
    Therefore, it is very important to always use fallback fonts.
    Below are some commonly used font fallbacks, organized by the 5 generic font families: Serif, Sans-serif, Monospace, Cursive, Fantasy

## Box Model

    The width and height properties do not affect a <span> element because it is an inline element. An inline element does not start on a new line and only takes up as much space as required.
    Browser render every content(Text, image, video, logo, graphics or anything) in rectangle box called box model
    Consider the box model before start design any layout

## Priority

    !import has highest priority
    inline -> over internal and external
    first come first serve -> internal and external css

# Media Query: Used for responsive design

    Always Design for Mobile First

# Shadow: Box shadow and Text shadow

    by default shadow color is black for both

# Animations and Transitions

    When element gradually change from one state of style to another state of style is called animation or transition
    Transition needs to trigger using css pseudo classes.
    CSS transitions are generally best for simple from-to movements, while CSS animations are for more complex series of movements.
    We can say animation is set of transitions.
    transition: Can only run once and Require a trigger to run (like mouse hover)
    animation: Can loop infinitely using animation-iteration-count property, Can be triggered but can also run automatically
    shorthand notation: transition: property name | duration | easing function | delay

</samp>

physical vs logical pixels
ppi vs dpi
