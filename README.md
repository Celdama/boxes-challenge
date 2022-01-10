    /**
     * Challenge part 1:
     * 1. Initialize state with the default value of the
     *    array pulled in from boxes.js
     * 2. Map over that state array and display each one
     *    as an empty square (black border, transparent bg color)
     *    (Don't worry about using the "on" property yet)
     */



    // Challenge: use a ternary to determine the backgroundColor.
    // If darkMode is true, set it to dark
    // If darkMode is false, set it to light

/\*\*
_ Challenge part 2:
_ 1. Create a separate component called "Box" and
_ replace the `div` above with our <Box /> components
_ 2. Pass the Box component a prop called `on` with the
_ value of the same name from the `boxes` objects
_ 3. In the Box component, apply dynamic styles to determine
_ the backgroundColor of the box. If it's `on`, set the
_ backgroundColor to "#222222". If off, set it to "none"
\*/

/\*\*
_ Challenge: Create state controlling whether
_ this box is "on" or "off". Use the incoming
_ `props.on` to determine the initial state.
_
_ Create an event listener so when the box is clicked,
_ it toggles from "on" to "off". \*
_ Goal: clicking each box should toggle it on and off.
_/

/\*\*
_ Challenge: Create a toggle() function that logs
_ "clicked!" to the console \*
_ Pass that function down to each of the Box components
_ and set it up so when they get clicked it runs the function
\*/

/\*\*
_ Challenge: use setSquares to update the
_ correct square in the array. \*
_ Make sure not to directly modify state!
_
_ Hint: look back at the lesson on updating arrays
_ in state if you need a reminder on how to do this
\*/
