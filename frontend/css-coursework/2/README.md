# Module 2: Advanced CSS Selectors

## 📖 Overview
Deep dive into CSS selectors, specificity, and pseudo-classes. Learn how to target HTML elements with precision.

## 🎯 Learning Outcomes
- Master different types of CSS selectors
- Understand CSS specificity and selector priority
- Use pseudo-classes for interactive effects
- Apply pseudo-elements for advanced styling
- Practice with form elements and interactive components

## 📚 Concepts Covered

### 1. Selector Types

#### Element Selectors
```css
p { }     /* Targets all paragraphs */
div { }   /* Targets all divs */
h1 { }    /* Targets all h1 headings */
```

#### Class Selectors
```css
.paragraph { }      /* Targets elements with class="paragraph" */
.button { }         /* Targets elements with class="button" */
```

#### ID Selectors
```css
#mainTopic { }      /* Targets element with id="mainTopic" */
#footer { }         /* Targets element with id="footer" */
```

#### Universal Selector
```css
* { }    /* Targets all elements */
```

#### Group Selectors
```css
h1, h2, h3 { }     /* Targets all headings with same style */
```

#### Descendant Selector
```css
div button { }     /* Targets buttons inside divs */
```

### 2. Pseudo-Classes
Interactive states for elements:
- `:hover` - When mouse hovers over element
- `:active` - When element is being clicked
- `:nth-child()` - Selects nth child element
- `:first-child`, `:last-child` - First/last children

### 3. Specificity
Understanding CSS cascade and selector weight:
- **Lowest**: Element selectors
- **Medium**: Class selectors
- **Highest**: ID selectors
- **Inline styles**: Override all

## 🎯 Assignment: CSS Practice Form

### Files
- `assignment2.html` - HTML structure for practice form
- `ass2.css` - CSS styling with selector demonstrations
- `style2.css` - Additional styling variations

### Key Concepts Demonstrated
- ID selector styling for unique elements
- Class selectors for multiple similar elements
- Descendant selectors for nested elements
- Hover effects on interactive elements
- Form styling (inputs, buttons, labels)

### How to Use
1. Open `assignment2.html` in your browser
2. Inspect the HTML to see the element structure
3. Open `ass2.css` to see selector examples
4. Try hovering over elements to see pseudo-class effects
5. Modify selectors and properties to experiment

## 💡 Practice Exercises

### Exercise 1: Add Styling
- Style the email address with different colors
- Add a background color to the email section

### Exercise 2: Pseudo-Classes
- Add a `:hover` effect to the button
- Add `:active` state styling

### Exercise 3: Selector Specificity
- Create conflicting selectors to understand specificity
- Use !important sparingly to see priority override

### Exercise 4: Form Elements
- Style the checkbox to make it more visible
- Add focus states to form inputs

## 📝 Key Takeaways

1. **Selector Specificity**: ID > Class > Element
2. **Cascade**: Last rule wins when specificity is equal
3. **Pseudo-classes**: Add interactivity without JavaScript
4. **Descendant Selectors**: Target elements based on their parents
5. **Group Selectors**: Reduce code repetition

## 🔧 Common Patterns

```css
/* Hover effects */
.button:hover {
    background-color: darkblue;
    cursor: pointer;
}

/* Every other item */
li:nth-child(odd) {
    background-color: lightgray;
}

/* First and last items */
p:first-child { }
p:last-child { }
```

## ⚠️ Important Notes
- IDs should be used sparingly (only for unique elements)
- Classes are more flexible and reusable than IDs
- Avoid deep nesting of descendant selectors
- Keep specificity as low as possible for maintainability

---

**Difficulty Level**: Beginner to Intermediate  
**Time to Complete**: 1-1.5 hours  
**Prerequisites**: Module 1 completion  
**Topics**: Selectors, Specificity, Pseudo-classes, Forms
