# Module 4: Transforms & Animations

## 📖 Overview
Add visual depth and interactivity to your web pages with CSS transforms and animations. Learn how to rotate, scale, skew, and animate elements without JavaScript.

## 🎯 Learning Outcomes
- Understand 2D and 3D transforms
- Use transition properties for smooth animations
- Create transform animations that respond to user interaction
- Add visual effects with box-shadow
- Apply background images and gradients

## 📚 Concepts Covered

### 1. CSS Transforms

CSS transforms allow you to modify the appearance and position of elements in 2D and 3D space.

#### Transform Functions

##### Translate (Move)
Moves an element from its normal position.
```css
transform: translateX(50px);     /* Move right 50px */
transform: translateY(30px);     /* Move down 30px */
transform: translate(50px, 30px); /* Move right and down */

/* Use percentages relative to element size */
transform: translate(50%, 50%);
```

##### Rotate (Turn)
Rotates an element around its center point.
```css
transform: rotate(45deg);         /* Rotate 45 degrees clockwise */
transform: rotate(-45deg);        /* Rotate counter-clockwise */
transform: rotateX(45deg);        /* 3D rotation around X-axis */
transform: rotateY(45deg);        /* 3D rotation around Y-axis */
transform: rotateZ(45deg);        /* Same as rotate */
```

##### Scale (Resize)
Changes the size of an element.
```css
transform: scale(2);              /* 2x larger in both dimensions */
transform: scaleX(2);             /* 2x wider */
transform: scaleY(0.5);           /* Half height */
transform: scale(1.5, 0.8);       /* Scale X and Y differently */
```

##### Skew (Shear)
Distorts the shape of an element.
```css
transform: skew(20deg);           /* Skew along X-axis */
transform: skewX(20deg);          /* Skew horizontally */
transform: skewY(10deg);          /* Skew vertically */
transform: skew(20deg, 10deg);    /* Skew both axes */
```

##### Combining Transforms
```css
transform: translate(50px, 30px) rotate(45deg) scale(1.2);
```

### 2. CSS Transitions

Smooth animations between CSS property changes.

#### Transition Properties

```css
/* Shorthand */
transition: property duration timing-function delay;

/* Examples */
transition: all 0.3s ease-in-out;
transition: background-color 0.5s linear;
transition: transform 0.3s ease;

/* Individual properties */
transition-property: background-color;
transition-duration: 0.5s;
transition-timing-function: ease;
transition-delay: 0.2s;
```

#### Timing Functions
- `linear` - Constant speed
- `ease` - Slow start and end (default)
- `ease-in` - Slow start
- `ease-out` - Slow end
- `ease-in-out` - Slow start and end
- `cubic-bezier()` - Custom timing

### 3. Hover States
Trigger animations with `:hover` pseudo-class.

```css
.box {
    background-color: blue;
    transition: all 0.3s ease;
}

.box:hover {
    background-color: red;
    transform: scale(1.1);
}
```

### 4. Box-Shadow
Add depth with shadows around elements.

```css
/* Shorthand */
box-shadow: offset-x offset-y blur-radius spread-radius color;

/* Examples */
box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);

/* Multiple shadows */
box-shadow: 
    5px 5px 10px rgba(0, 0, 0, 0.2),
    10px 10px 20px rgba(0, 0, 0, 0.1);
```

### 5. Background Images & Gradients

#### Background Images
```css
.box {
    background-image: url('image.jpg');
    background-size: cover;        /* Cover entire element */
    background-position: center;   /* Center the image */
    background-repeat: no-repeat;  /* Don't repeat */
}
```

#### Gradients
```css
/* Linear gradient */
background: linear-gradient(90deg, #ff0000, #0000ff);

/* Radial gradient */
background: radial-gradient(circle, #ff0000, #0000ff);

/* Multiple color stops */
background: linear-gradient(
    45deg,
    #ff0000 0%,
    #ffff00 50%,
    #0000ff 100%
);
```

## 🎯 Assignment: Interactive Animated Boxes

### Files
- `ass4.html` - HTML with 5 interactive boxes
- `ass4.css` - Detailed CSS with transform and animation examples

### Demonstrations

#### Box 1: Transition on Hover
Smooth color and size change when hovering.
```css
#box1:hover {
    background-color: green;
    transform: scale(1.1);
}
```

#### Box 2: Translate & Rotate Transform
Complex transform combining movement and rotation.
```css
#box2:hover {
    transform: translate(50px, 30px) rotate(45deg);
}
```

#### Box 3: Skew Transform
Distorts the box shape on hover.
```css
#box3:hover {
    transform: skew(20deg, 10deg);
}
```

#### Box 4: Box-Shadow Effect
Adds depth with shadow effects.
```css
#box4:hover {
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.5);
}
```

#### Box 5: Background Image
Demonstrates background image properties.
```css
#myPic {
    background-image: url('image.jpg');
    background-size: cover;
    background-position: center;
}
```

## 💡 Practical Exercises

### Exercise 1: Button Effects
Create a button that:
- Changes color on hover
- Scales up slightly
- Has a smooth transition (0.3s)

```css
.button {
    background-color: blue;
    transition: all 0.3s ease;
}

.button:hover {
    background-color: darkblue;
    transform: scale(1.05);
}
```

### Exercise 2: Card Lift Effect
Create a card that appears to lift when hovered:
```css
.card {
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
}
```

### Exercise 3: Rotation Animation
Rotate an element continuously:
```css
@keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

.spinner {
    animation: spin 2s linear infinite;
}
```

### Exercise 4: Gradient Background
Create an animated gradient:
```css
.gradient-box {
    background: linear-gradient(90deg, #ff0000, #0000ff);
    background-size: 200% 200%;
    animation: gradientShift 3s ease infinite;
}

@keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}
```

## 📝 Performance Tips

1. **Use transform over position changes**: Transforms don't trigger layout recalculations
2. **Will-change property**: Hint to the browser for optimization
```css
.animated {
    will-change: transform;
}
```

3. **Keep it smooth**: Use `ease` or `ease-in-out` for natural motion
4. **Avoid animating**: width, height, background-position (use transform instead)

## 🎨 Real-World Applications

- **Buttons**: Scale and color changes on hover
- **Cards**: Lift effect and shadow enhancement
- **Images**: Zoom on hover, fade effects
- **Loaders**: Spinning animations
- **Navigation**: Smooth transitions between states
- **Galleries**: Image hover effects

## ⚠️ Common Mistakes

```css
/* ❌ Wrong - animating position */
.box {
    left: 0;
    transition: left 0.3s;
}
.box:hover {
    left: 50px;  /* Creates jank - browser recalculates layout */
}

/* ✅ Correct - using transform */
.box {
    transition: transform 0.3s;
}
.box:hover {
    transform: translateX(50px);  /* Smooth and performant */
}
```

## 📚 Browser Compatibility

- **Transforms**: Supported in all modern browsers
- **Transitions**: Supported in all modern browsers
- **3D Transforms**: Supported in all modern browsers (may need prefixes for older browsers)

## 🔧 Vendor Prefixes (Legacy)

For older browser support:
```css
transform: rotate(45deg);
-webkit-transform: rotate(45deg);  /* Safari, Chrome */
-moz-transform: rotate(45deg);     /* Firefox */
-ms-transform: rotate(45deg);      /* IE */
```

---

**Difficulty Level**: Intermediate  
**Time to Complete**: 1.5-2 hours  
**Prerequisites**: Modules 1-3 completion  
**Topics**: Transforms, Transitions, Animations, Box-Shadow, Backgrounds
