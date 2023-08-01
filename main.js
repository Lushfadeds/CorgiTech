const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLink = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLink.classList.toggle('active')
    }
)
// const toggleButton = document.getElementsByClassName('toggle-button')[0]: This line retrieves the HTML element with the class name "toggle-button" 
// and assigns it to the variable toggleButton. document.getElementsByClassName is a method that returns a collection (array-like object) of elements 
// with the specified class name. In this case, [0] is used to select the first element with the class name since the method returns a collection, and 
// we want to work with a single element.

// const navbarLink = document.getElementsByClassName('navbar-links')[0]: This line retrieves the HTML element with the class name "navbar-links" and 
//assigns it to the variable navbarLink. Similar to the previous line, it selects the first element with the class name "navbar-links" from the collection.

// toggleButton.addEventListener('click', () => { ... }): This line adds a click event listener to the toggleButton element. When the button is clicked, 
// the code inside the arrow function { ... } will be executed.

// navbarLink.classList.toggle('active'): Within the click event listener, this line toggles the presence of the CSS class "active" on the navbarLink 
// element. If the class is already present, it will be removed, and if it's not present, it will be added. The effect of this toggle depends on how the "active" 
// class is defined in the CSS. Typically, it is used to change the appearance or behavior of the navbar menu, such as showing or hiding it, changing colors, or 
// applying animations.