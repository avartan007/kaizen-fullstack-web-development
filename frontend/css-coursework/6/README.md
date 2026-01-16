# Module 6: CSS Grid & Advanced Layouts

## 📖 Overview
CSS Grid is a powerful 2D layout system that allows you to create complex responsive layouts with minimal code. This module covers grid fundamentals, responsive design, and advanced animations.

## 🎯 Learning Outcomes
- Master CSS Grid for 2D layouts
- Create responsive grid layouts with different column/row configurations
- Use media queries for responsive design
- Create complex grid structures with auto-placement
- Implement loading animations and spinners
- Understand when to use Grid vs Flexbox

## 📚 Concepts Covered

### 1. CSS Grid Basics

CSS Grid is a 2D layout system (unlike Flexbox which is 1D).

```css
.container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;  /* 3 equal columns */
    grid-template-rows: auto 1fr auto;   /* 3 rows with specific heights */
    gap: 20px;                           /* Space between items */
}
```

### 2. Grid Template Columns & Rows

Define the size and number of columns and rows.

```css
/* Fixed sizes */
grid-template-columns: 200px 300px 200px;

/* Fractional units (fr) */
grid-template-columns: 1fr 2fr 1fr;  /* Ratios: 1:2:1 */

/* Mix fixed and flexible */
grid-template-columns: 200px 1fr 200px;  /* Sidebar layout */

/* Repeat function */
grid-template-columns: repeat(3, 1fr);   /* Same as 1fr 1fr 1fr */

/* Auto-fit or auto-fill */
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
```

#### Fractional Units (fr)
The `fr` unit represents a fraction of available space:
- `1fr 1fr 1fr` = 3 equal columns
- `1fr 2fr 1fr` = First and third columns are 1x, middle is 2x
- `2fr 1fr 1fr` = First column is twice as wide as others

### 3. Grid Template Areas

Create named grid areas for semantic layout.

```css
.container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
        "header header header"
        "sidebar main ads"
        "footer footer footer";
    gap: 20px;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.ads { grid-area: ads; }
.footer { grid-area: footer; }
```

### 4. Gap Property

Sets spacing between grid items.

```css
.container {
    display: grid;
    gap: 20px;              /* Both row and column gap */
    row-gap: 20px;          /* Only row gap */
    column-gap: 30px;       /* Only column gap */
}
```

### 5. Grid Item Placement

Control where items are placed in the grid.

```css
.item {
    grid-column: 1 / 3;     /* Start at column 1, end at column 3 */
    grid-row: 1 / 2;        /* Start at row 1, end at row 2 */
    
    /* Or use span */
    grid-column: span 2;    /* Span 2 columns */
    grid-row: span 1;       /* Span 1 row */
}
```

### 6. Auto-Fit & Auto-Fill

Create responsive grids without media queries.

```css
/* auto-fit - collapses empty tracks */
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

/* auto-fill - keeps empty tracks */
grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));

/* Responsive without media queries! */
```

### 7. Align & Justify

Position items within their grid cells.

```css
.container {
    display: grid;
    justify-items: center;  /* Horizontal alignment */
    align-items: center;    /* Vertical alignment */
}

.item {
    justify-self: end;      /* Override for single item */
    align-self: start;
}
```

## 🎯 Demonstrations

### Files
- `ass6.html` - HTML with grid demonstrations
- `ass6.css` - CSS Grid and animation examples
- `html6.html`, `html6.css` - Alternative grid examples
- `html5.html`, `html5.css` - Flexbox examples

### Part 1: Responsive Website Layout (Commented)

A grid-based website layout demonstrating:
- Header spanning full width
- Sidebar navigation
- Main content area
- Advertisement area
- Footer spanning full width

```css
.container {
    display: grid;
    grid-template-columns: 200px 1fr 300px;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
        "header header header"
        "sidebar main ads"
        "footer footer footer";
    gap: 20px;
    min-height: 100vh;
}
```

### Part 2: Loading Spinner Animation

A popular loading animation using CSS animations and transforms.

```css
.loader {
    border: 8px solid rgba(0, 0, 0, 0.1);
    border-top: 8px solid #3498db;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
```

## 💡 Practical Examples

### Example 1: Simple 3-Column Grid

```css
.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    max-width: 1200px;
    margin: 0 auto;
}

.item {
    aspect-ratio: 1 / 1;  /* Square items */
    background: lightblue;
    display: flex;
    align-items: center;
    justify-content: center;
}
```

### Example 2: Sidebar + Main Layout

```css
.layout {
    display: grid;
    grid-template-columns: 250px 1fr;
    gap: 20px;
    min-height: 100vh;
}

.sidebar {
    background: #f0f0f0;
    padding: 20px;
}

.main {
    padding: 20px;
}
```

### Example 3: Responsive Without Media Queries

```css
.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
}

/* Automatically adjusts columns based on available space! */
```

### Example 4: Complex Grid Layout

```css
.dashboard {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
}

.card-small {
    grid-column: span 1;
}

.card-medium {
    grid-column: span 2;
}

.card-large {
    grid-column: span 4;
}
```

### Example 5: Photo Gallery

```css
.gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 10px;
}

.photo {
    aspect-ratio: 1 / 1;
    object-fit: cover;
    cursor: pointer;
    transition: transform 0.3s;
}

.photo:hover {
    transform: scale(1.05);
}
```

## 🔧 Common Grid Patterns

### Masonry Layout
```css
.masonry {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-auto-rows: 250px;
    gap: 20px;
}
```

### Full Width with Padding
```css
.container {
    display: grid;
    grid-template-columns:
        minmax(20px, 1fr)
        minmax(0, 1200px)
        minmax(20px, 1fr);
}

.content {
    grid-column: 2;
}
```

### Holy Grail Layout
```css
.layout {
    display: grid;
    grid-template-columns: 200px 1fr 200px;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
}
```

## 📱 Media Queries for Responsive Design

While CSS Grid is responsive, you still need media queries for mobile.

```css
/* Desktop (4 columns) */
.container {
    grid-template-columns: repeat(4, 1fr);
}

/* Tablet (2 columns) */
@media (max-width: 768px) {
    .container {
        grid-template-columns: repeat(2, 1fr);
    }
}

/* Mobile (1 column) */
@media (max-width: 480px) {
    .container {
        grid-template-columns: 1fr;
    }
}
```

### Mobile-First Approach
```css
/* Mobile first */
.container {
    grid-template-columns: 1fr;
}

/* Tablet */
@media (min-width: 768px) {
    .container {
        grid-template-columns: repeat(2, 1fr);
    }
}

/* Desktop */
@media (min-width: 1024px) {
    .container {
        grid-template-columns: repeat(4, 1fr);
    }
}
```

## 🎨 Animation Examples

### Fade In Animation
```css
@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

.item {
    animation: fadeIn 0.5s ease;
}
```

### Slide In Animation
```css
@keyframes slideInLeft {
    from {
        transform: translateX(-100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}

.item {
    animation: slideInLeft 0.5s ease;
}
```

### Bounce Animation
```css
@keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
}

.item {
    animation: bounce 0.5s ease infinite;
}
```

## 📊 Grid vs Flexbox Decision Tree

```
Need to arrange items in:

1D (row or column only)? 
├─ YES → Use Flexbox
└─ NO → Use CSS Grid (2D)

Need complex alignment?
├─ YES → CSS Grid
└─ NO → Flexbox is simpler

Need to span rows AND columns?
├─ YES → CSS Grid
└─ NO → Flexbox is sufficient
```

## 🔍 Browser DevTools Tips

1. **Toggle Grid Overlay**: Check "Grid" in DevTools
2. **See Grid Lines**: Shows numbered lines and areas
3. **Inspect Grid**: See template columns/rows configuration
4. **Test Responsiveness**: Simulate different screen sizes

## ⚠️ Common Mistakes

```css
/* ❌ Wrong - treating grid like table */
.grid {
    display: grid;
    grid-template-columns: 200px 200px 200px;
    width: 600px;  /* Forces fixed width, not responsive */
}

/* ✅ Correct - responsive grid */
.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
}
```

## 🚀 Advanced Features

### Grid Lines & Names
```css
.container {
    display: grid;
    grid-template-columns:
        [start] 200px [sidebar-end] 1fr [content-end] 200px [end];
}

.item {
    grid-column: sidebar-end / content-end;
}
```

### Dynamic Grid
```css
.container {
    display: grid;
    grid-auto-columns: 1fr;
    grid-auto-flow: column dense;  /* Fill gaps automatically */
}
```

## 📚 Practice Exercises

### Exercise 1: Product Grid
Create a responsive product grid that shows 4 items on desktop, 2 on tablet, 1 on mobile.

### Exercise 2: Dashboard
Build a dashboard layout with various sized widgets.

### Exercise 3: Magazine Layout
Create a complex multi-column magazine-style layout.

### Exercise 4: Loading States
Add loading spinners and skeleton screens.

### Exercise 5: Animated Gallery
Create a photo gallery with hover animations.

## 📖 Learning Resources

- **MDN Grid Guide**: Comprehensive grid documentation
- **CSS Tricks Grid**: Interactive grid learning
- **Grid by Example**: Rachel Andrew's grid examples
- **Can I Use**: Browser support checker

---

**Difficulty Level**: Intermediate to Advanced  
**Time to Complete**: 2-3 hours  
**Prerequisites**: Modules 1-5 completion  
**Topics**: CSS Grid, Media Queries, Responsive Design, Animations, Spinners
