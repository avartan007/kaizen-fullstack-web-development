# CSS Quick Reference Card

Print this out or bookmark it for quick CSS lookups!

---

## 🎨 Selectors

### Basic Selectors
```css
element          /* <p> */
.class           /* class="intro" */
#id              /* id="header" */
*                /* all elements */
```

### Combinators
```css
element > child       /* direct child only */
element descendant    /* nested any level */
sibling ~ element     /* general sibling */
element + element     /* adjacent sibling */
```

### Pseudo-Classes
```css
:hover        /* mouse over */
:active       /* being clicked */
:focus        /* has focus */
:first-child  /* first child */
:last-child   /* last child */
:nth-child(n) /* nth child (1-indexed) */
:odd          /* odd children */
:even         /* even children */
```

---

## 📦 Box Model

```
Margin (outer space)
    ↓
Border (outline)
    ↓
Padding (inner space)
    ↓
Content
```

### Properties
```css
margin: 10px;              /* all sides */
margin: 10px 20px;         /* top/bottom left/right */
margin: 10px 20px 30px 40px; /* top right bottom left */

padding: 10px;             /* same as margin */

border: 2px solid black;   /* width style color */
border-radius: 50%;        /* rounded corners */

width: 100px;
height: 100px;
```

### Box-Sizing
```css
box-sizing: content-box;   /* default */
box-sizing: border-box;    /* includes padding & border */
```

---

## 📐 Display Types

### Block
```css
display: block;            /* full width */
```
- Full width available
- Respects all margins/padding
- Examples: div, p, h1, section

### Inline
```css
display: inline;           /* only needed width */
```
- Only takes needed space
- Ignores top/bottom margins
- Examples: span, a, strong

### Inline-Block
```css
display: inline-block;     /* hybrid */
```
- Takes only needed width
- Respects all margins/padding

### Flexbox
```css
display: flex;
```

### Grid
```css
display: grid;
```

### None
```css
display: none;             /* hidden, no space */
```

---

## 🎯 Positioning

```css
position: static;       /* default, normal flow */
position: relative;     /* relative to normal position */
position: absolute;     /* relative to positioned parent */
position: fixed;        /* relative to viewport */
position: sticky;       /* hybrid of relative & fixed */

top: 10px;
right: 10px;
bottom: 10px;
left: 10px;

z-index: 1;            /* stacking order (requires position) */
```

---

## 🎨 Colors & Backgrounds

```css
/* Text color */
color: red;
color: #FF0000;
color: rgb(255, 0, 0);
color: rgba(255, 0, 0, 0.5);

/* Background */
background-color: blue;
background-image: url('image.jpg');
background-size: cover;
background-position: center;
background-repeat: no-repeat;

/* Shorthand */
background: blue url('img.jpg') no-repeat center/cover;
```

---

## 📏 Sizing

```css
width: 200px;
width: 50%;
width: 50vw;           /* viewport width */

height: 200px;
height: 50%;
height: 50vh;          /* viewport height */

min-width: 100px;
max-width: 500px;
min-height: 100px;
max-height: 500px;

aspect-ratio: 16 / 9;  /* maintains aspect ratio */
```

---

## 🔤 Typography

```css
font-family: Arial, sans-serif;
font-size: 16px;
font-weight: bold;
font-weight: 700;
font-style: italic;
line-height: 1.5;

text-align: left | center | right | justify;
text-decoration: underline;
text-transform: uppercase | lowercase | capitalize;

letter-spacing: 2px;    /* space between letters */
word-spacing: 5px;      /* space between words */
```

---

## 🎬 Transforms

```css
/* Translate (move) */
transform: translateX(50px);
transform: translateY(30px);
transform: translate(50px, 30px);

/* Rotate */
transform: rotate(45deg);
transform: rotateX(45deg);
transform: rotateY(45deg);

/* Scale (resize) */
transform: scale(2);
transform: scaleX(2);
transform: scaleY(0.5);

/* Skew (distort) */
transform: skew(20deg);
transform: skewX(20deg);
transform: skewY(10deg);

/* Combine */
transform: translate(50px) rotate(45deg) scale(1.2);
```

---

## ⚡ Transitions & Animations

### Transitions
```css
transition: all 0.3s ease;
transition: background-color 0.5s linear;

transition-property: background-color;
transition-duration: 0.5s;
transition-timing-function: ease;
transition-delay: 0.2s;

/* Timing functions */
ease
ease-in
ease-out
ease-in-out
linear
cubic-bezier(0.42, 0, 0.58, 1)
```

### Animations
```css
@keyframes slidein {
    from { left: 0; }
    to { left: 100%; }
}

.box {
    animation: slidein 2s ease infinite;
}

/* Properties */
animation-name: slidein;
animation-duration: 2s;
animation-timing-function: ease;
animation-delay: 0s;
animation-iteration-count: infinite;
animation-direction: normal | reverse | alternate;
```

---

## 📦 Flexbox Cheat Sheet

### Container
```css
display: flex;
flex-direction: row | column;
justify-content: flex-start | center | space-between;
align-items: stretch | center | flex-start;
flex-wrap: nowrap | wrap;
gap: 20px;
```

### Items
```css
flex: 1;              /* grow, shrink, basis */
flex-grow: 1;        /* grow ratio */
flex-shrink: 1;      /* shrink ratio */
flex-basis: auto;    /* default size */
align-self: center;  /* override container */
order: 1;            /* change order */
```

---

## 🔲 CSS Grid Cheat Sheet

### Container
```css
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-template-rows: 100px 1fr 100px;
grid-template-columns: repeat(3, 1fr);
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

grid-template-areas:
    "header header header"
    "sidebar main ads"
    "footer footer footer";

gap: 20px;
justify-items: center;
align-items: center;
```

### Items
```css
grid-column: 1 / 3;   /* start / end */
grid-row: 1 / 2;
grid-column: span 2;  /* span 2 columns */

grid-area: header;    /* named area */
```

---

## 🎨 Shadows

```css
/* Box shadow */
box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);

/* Syntax: offset-x offset-y blur spread color */
box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2);

/* Multiple shadows */
box-shadow:
    0 2px 5px rgba(0, 0, 0, 0.1),
    0 10px 20px rgba(0, 0, 0, 0.2);

/* Text shadow */
text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
```

---

## 📱 Media Queries

### Syntax
```css
@media (max-width: 768px) {
    /* mobile styles */
}

@media (min-width: 769px) and (max-width: 1024px) {
    /* tablet styles */
}

@media (min-width: 1025px) {
    /* desktop styles */
}
```

### Common Breakpoints
```css
/* Mobile first approach */
/* Mobile: 0-480px */
/* Tablet: 481px-768px */
/* Desktop: 769px+ */

/* Or: */
/* Mobile: 0-600px */
/* Tablet: 601px-1024px */
/* Desktop: 1025px+ */
```

---

## 🎯 Alignment Tricks

### Center Content (Flexbox)
```css
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
```

### Center Content (Grid)
```css
.container {
    display: grid;
    place-items: center;
    height: 100vh;
}
```

### Center Horizontally
```css
.container {
    text-align: center;
}

/* or */
.container {
    display: flex;
    justify-content: center;
}

/* or */
.element {
    margin: 0 auto;
    width: 200px;
}
```

### Space Elements Apart
```css
.container {
    display: flex;
    justify-content: space-between;
}
```

---

## ⚠️ Common Gotchas

### Specificity
```css
/* Lower specificity */
p { color: blue; }

/* Higher specificity - overrides above */
.paragraph { color: red; }

/* Even higher - overrides both */
#intro { color: green; }
```

### Inheritance
```css
/* Not all properties inherit! */
/* Text properties: color, font-size, font-weight */
/* Layout properties: width, height, margin (NO!) */
```

### Margin Collapse
```css
/* Vertical margins of adjacent block elements collapse */
p { margin-bottom: 20px; }
p { margin-top: 20px; }
/* Result: 20px gap, not 40px! */
```

### Z-index Requires Position
```css
/* ❌ Won't work */
div { z-index: 10; }

/* ✅ Works */
div {
    position: relative;
    z-index: 10;
}
```

---

## 🚀 Performance Tips

```css
/* ✅ Use transform (GPU accelerated) */
.box {
    transition: transform 0.3s;
}
.box:hover {
    transform: translateY(-5px);
}

/* ❌ Avoid position changes (triggers layout) */
.box {
    transition: top 0.3s;
}
.box:hover {
    top: -5px;
}
```

---

## 📋 Checklist

### Before Publishing
- [ ] CSS is organized and commented
- [ ] No unnecessary !important
- [ ] Images are optimized
- [ ] Colors have good contrast
- [ ] Mobile responsive
- [ ] Tested in major browsers
- [ ] No console errors
- [ ] Performance is good (Lighthouse)

---

## 🔗 Helpful Sites

- **MDN**: developer.mozilla.org
- **CSS Tricks**: css-tricks.com
- **Can I Use**: caniuse.com
- **Color Picker**: colorpicker.com
- **Font Pairing**: fontpair.co

---

**Print this page or bookmark it for quick CSS references!** 🖨️

Keep this handy while coding CSS. Copy-paste friendly code snippets make learning faster!

---

*Last Updated: January 2026*
