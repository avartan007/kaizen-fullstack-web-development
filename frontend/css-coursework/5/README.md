# Module 5: Flexbox Layout

## 📖 Overview
Flexbox (Flexible Box Layout) is a powerful CSS layout system that makes it easy to design flexible and efficient layouts. It's essential for modern responsive web design.

## 🎯 Learning Outcomes
- Understand flex containers and flex items
- Master justify-content, align-items, and align-content properties
- Use flex direction to control layout direction
- Create flexible item sizing with flex-grow, flex-shrink, flex-basis
- Build responsive layouts without media queries

## 📚 Concepts Covered

### 1. Flex Container Basics

To use flexbox, set the parent element to `display: flex`:

```css
.container {
    display: flex;
    /* Now all direct children become flex items */
}
```

### 2. Flex Direction

Controls the direction items are laid out in the flex container.

```css
.container {
    display: flex;
    flex-direction: row;           /* Default - left to right */
}
```

#### Options:
- **`row`** (default): Items flow left to right
- **`row-reverse`**: Items flow right to left
- **`column`**: Items flow top to bottom
- **`column-reverse`**: Items flow bottom to top

### 3. Main Axis & Cross Axis

- **Main Axis**: Primary direction items flow (determined by flex-direction)
- **Cross Axis**: Perpendicular to main axis

When `flex-direction: row`:
- Main Axis = Horizontal (left to right)
- Cross Axis = Vertical (top to bottom)

When `flex-direction: column`:
- Main Axis = Vertical (top to bottom)
- Cross Axis = Horizontal (left to right)

### 4. Justify-Content (Main Axis Alignment)

Aligns flex items along the main axis.

```css
.container {
    display: flex;
    justify-content: flex-start;   /* Default - items at start */
}
```

#### Options:
- **`flex-start`**: Items at the start of container
- **`flex-end`**: Items at the end of container
- **`center`**: Items centered
- **`space-between`**: Space distributed between items
- **`space-around`**: Space distributed around items
- **`space-evenly`**: Equal space between and around items

#### Visual Examples:

```
flex-start (Default):
|Item1 Item2 Item3           |

flex-end:
|           Item1 Item2 Item3|

center:
|        Item1 Item2 Item3   |

space-between:
|Item1        Item2        Item3|

space-around:
|  Item1      Item2      Item3  |

space-evenly:
|  Item1    Item2    Item3    |
```

### 5. Align-Items (Cross Axis Alignment)

Aligns flex items along the cross axis.

```css
.container {
    display: flex;
    align-items: stretch;      /* Default - stretch to fill */
}
```

#### Options:
- **`stretch`**: Items stretch to fill container (default)
- **`flex-start`**: Items at start of cross axis
- **`flex-end`**: Items at end of cross axis
- **`center`**: Items centered on cross axis
- **`baseline`**: Items aligned to text baseline

### 6. Align-Content (Multiple Lines)

When items wrap to multiple lines, aligns the lines.

```css
.container {
    display: flex;
    flex-wrap: wrap;
    align-content: center;
}
```

#### Options:
- `flex-start`, `flex-end`, `center`
- `space-between`, `space-around`, `space-evenly`
- `stretch` (default)

### 7. Flex-Wrap

Controls whether items wrap to multiple lines.

```css
.container {
    display: flex;
    flex-wrap: wrap;        /* Items wrap to next line */
}
```

#### Options:
- **`nowrap`** (default): All items on one line
- **`wrap`**: Items wrap to next line
- **`wrap-reverse`**: Items wrap upward/leftward

### 8. Flex Item Properties

#### Flex (Shorthand)
Controls how items grow and shrink.

```css
.item {
    flex: 1;  /* Shorthand for flex-grow flex-shrink flex-basis */
}
```

#### Flex-Grow
Determines how much space an item takes (if there's extra space).

```css
.item {
    flex-grow: 1;  /* Default: 0 (doesn't grow) */
}

/* If one item has flex-grow: 2, it gets twice the space */
```

#### Flex-Shrink
Determines how much an item shrinks if space is tight.

```css
.item {
    flex-shrink: 1;  /* Default: 1 */
}
```

#### Flex-Basis
Sets the default size of an item before space is distributed.

```css
.item {
    flex-basis: 200px;  /* Default: auto */
}
```

### 9. Align-Self

Overrides align-items for individual items.

```css
.special-item {
    align-self: flex-end;  /* Different alignment than container */
}
```

### 10. Gap (Spacing Between Items)

Adds consistent spacing between flex items.

```css
.container {
    display: flex;
    gap: 20px;  /* Space between items */
}
```

## 🎯 Demonstrations

### Files
- `ass5.html` - HTML with flexbox layout demonstrations
- `ass5.css` - Main flexbox styling

### Demo 1: 3x3 Grid Layout

A container with 9 boxes arranged in a 3x3 grid using flexbox.

```css
#container {
    display: flex;
    flex-wrap: wrap;           /* Allow wrapping */
    justify-content: space-around; /* Distribute space */
}

.box {
    flex: 0 0 calc(33.333% - 10px); /* 3 columns */
    margin: 5px;
}
```

### Demo 2: Navigation Bar

A horizontal navigation bar using flexbox.

```css
#navbar {
    display: flex;
    justify-content: space-between;  /* Spread items apart */
    align-items: center;             /* Vertical centering */
}

.option {
    padding: 10px 20px;
}
```

## 💡 Practical Examples

### Example 1: Centered Card
```css
.container {
    display: flex;
    justify-content: center;    /* Horizontal center */
    align-items: center;        /* Vertical center */
    height: 100vh;              /* Full viewport height */
}

.card {
    width: 400px;
    padding: 20px;
}
```

### Example 2: Two-Column Layout
```css
.layout {
    display: flex;
    gap: 20px;
}

.sidebar {
    flex: 0 0 250px;     /* Fixed width */
}

.content {
    flex: 1;             /* Takes remaining space */
}
```

### Example 3: Sticky Footer
```css
body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

main {
    flex: 1;             /* Pushes footer to bottom */
}

footer {
    flex: 0 0 auto;      /* Fixed height */
}
```

### Example 4: Space-Between Navigation
```css
nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    flex: 0 0 auto;      /* Don't grow/shrink */
}

.nav-items {
    display: flex;
    gap: 20px;
}

.search {
    margin-left: auto;   /* Pushes to right */
}
```

### Example 5: Equal Width Items
```css
.row {
    display: flex;
    gap: 10px;
}

.column {
    flex: 1;             /* All equal width */
}
```

## 🔧 Cheat Sheet

### Container Properties
```css
display: flex;
flex-direction: row | column;
justify-content: flex-start | center | space-between;
align-items: stretch | center | flex-start;
flex-wrap: nowrap | wrap;
gap: 20px;
align-content: flex-start | center | space-between;
```

### Item Properties
```css
flex: 1;
flex-grow: 1;
flex-shrink: 1;
flex-basis: auto;
align-self: center;
order: 1;
```

## 📝 Tips & Tricks

1. **Center anything**: 
```css
display: flex;
justify-content: center;
align-items: center;
```

2. **Equal columns**:
```css
.column { flex: 1; }
```

3. **Push item to right**:
```css
.push-right { margin-left: auto; }
```

4. **Responsive without media queries**:
```css
.container {
    display: flex;
    flex-wrap: wrap;
}
```

5. **Maintain aspect ratio**:
```css
.item {
    flex: 1 1 100%;
    aspect-ratio: 16 / 9;
}
```

## 🌐 Browser Support

Flexbox is supported in all modern browsers:
- Chrome 29+
- Firefox 22+
- Safari 6.1+
- Edge (all versions)
- IE 11 (with some limitations)

## 📚 Practice Exercises

### Exercise 1: Centered Button
Create a button centered both horizontally and vertically on the page.

### Exercise 2: Navigation Bar
Build a navigation bar with logo on left, menu items in center, and search on right.

### Exercise 3: Card Grid
Create a 3-column responsive grid of cards.

### Exercise 4: Two-Column Layout
Create a layout with fixed sidebar and flexible content area.

### Exercise 5: Feature Cards
Create a section with 4 feature cards, 2 per row on desktop, 1 on mobile.

## ⚠️ Common Mistakes

```css
/* ❌ Wrong - assuming width works like grid */
.item {
    flex: 1;
    width: 33.333%;  /* This doesn't work as expected */
}

/* ✅ Correct - use flex-basis */
.item {
    flex: 1 1 33.333%;
    /* Or just use flex: 1; if you want equal distribution */
}
```

## 🎓 When to Use Flexbox

- ✅ One-dimensional layouts (rows or columns)
- ✅ Navigation menus and toolbars
- ✅ Centering content
- ✅ Equal-width or equal-height items
- ✅ Simple responsive layouts

## 🚀 Next: CSS Grid

For more complex two-dimensional layouts, explore CSS Grid in Module 6!

---

**Difficulty Level**: Intermediate  
**Time to Complete**: 2-2.5 hours  
**Prerequisites**: Modules 1-4 completion  
**Topics**: Flexbox, Layout, Responsive Design, Alignment
