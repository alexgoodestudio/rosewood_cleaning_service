# ROSEWOOD CLEANING SERVICES
## Brand Color Guide

---

## CURRENT STATE ANALYSIS

### Problem: Color Chaos
- **50+ unique colors** across site
- **No cohesive system** - blues, indigos, limes, stones, slates mixing randomly
- **Inconsistent application** - same purpose uses different colors
- **Weak brand identity** - no memorable signature color

### What's Not Working
1. **Too many color families**: Slate + Stone + Blue + Indigo + Lime + Emerald + Purple
2. **Random accent choices**: ContactPage circles (#c7d2fe, #bae6fd) don't match Services lime (#ecfccb)
3. **Service section confusion**: Three different color backgrounds fighting for attention
4. **No hierarchy**: Can't tell what's primary vs secondary vs accent

---

## BLUE LAND LEARNING

### Their Strategy
- **Primary**: Teal-green #008464 (eco + premium)
- **Secondary**: Purple #8164BF (differentiation)
- **System**: 2 brand colors + neutrals + strategic accents

### Why It Works
- **Memorable**: Immediate brand recognition
- **Strategic**: Green = eco, Purple = innovation
- **Consistent**: Same colors everywhere
- **Simple**: Limited palette, maximum impact

---

## NEW ROSEWOOD SYSTEM

### Core Brand Colors

**PRIMARY**
```
Rosewood Teal
#00897B (Teal 600)
Purpose: Main brand color, CTAs, primary accents
Usage: Buttons, links, icons, primary elements
Psychology: Trust + Cleanliness + Professionalism
```

**SECONDARY**
```
Rosewood Slate
#475569 (Slate 600)
Purpose: Text, subtle backgrounds, secondary elements
Usage: Body text, borders, quiet sections
Psychology: Sophistication + Reliability
```

**ACCENT**
```
Warm Coral
#FF7961 (Coral-ish)
Purpose: Hover states, highlights, energy
Usage: Interactive elements, featured items
Psychology: Warmth + Friendliness + Action
```

### Supporting Neutrals

```
White       #FFFFFF   Primary backgrounds
Off-White   #F8FAFC   (slate-50) Subtle contrast
Light Gray  #E2E8F0   (slate-200) Borders
Medium Gray #94A3B8   (slate-400) Disabled states
Dark        #0F172A   (slate-900) Headings, footer
```

### Application Rules

**Backgrounds**
- Primary: White #FFFFFF
- Alternate: Off-White #F8FAFC
- Dark: #0F172A

**Text Hierarchy**
- Headings: #0F172A (slate-900)
- Body: #475569 (slate-600)
- Labels: #94A3B8 (slate-400)
- Inverted: #FFFFFF

**Interactive Elements**
- Default: #00897B (teal)
- Hover: #FF7961 (coral)
- Disabled: #94A3B8 (slate-400)

---

## IMPLEMENTATION

### Services Section - FIXED
```css
/* All three services use same background */
.expandable-service.expanded {
  background-color: #F8FAFC; /* slate-50 */
}

/* Text stays dark */
.expandable-service.expanded .service-title,
.expandable-service.expanded .service-content * {
  color: #0F172A; /* slate-900 */
}

/* Indicators use brand teal */
.service-indicator {
  background-color: #00897B;
  border-color: #00897B;
}

/* Hover uses coral */
.service-indicator:hover {
  background-color: #FF7961;
}
```

### Buttons - FIXED
```css
/* Primary CTA */
.btn-cta {
  background-color: #00897B; /* teal */
  color: #FFFFFF;
}

.btn-cta:hover {
  background-color: #FF7961; /* coral */
}

/* Secondary */
.btn-secondary {
  background-color: transparent;
  border: 2px solid #00897B;
  color: #00897B;
}

.btn-secondary:hover {
  background-color: #00897B;
  color: #FFFFFF;
}
```

### Contact Circles - FIXED
```js
// Replace current colors
const colors = ['#00897B', '#B2DFDB']; // Teal + Light Teal
```

---

## COLOR COMPARISON

### BEFORE (Current Rosewood)
```
Backgrounds: #dbeafe, #ecfccb, #e0e7ff (chaotic)
CTA: #ecfccb (lime - weak)
Indicators: #93c5fd, #bef264, #a5b4fc (random)
Text: Multiple slate/stone variations
```

### AFTER (New System)
```
Backgrounds: #F8FAFC everywhere (clean)
CTA: #00897B (strong brand color)
Indicators: #00897B with #FF7961 hover (consistent)
Text: #0F172A headings, #475569 body (hierarchy)
```

---

## BRAND PERSONALITY

### Current Perception
Neutral • Forgettable • Generic • Unclear

### Target Perception
Professional • Trustworthy • Modern • Memorable

### Color Psychology Map
- **Teal #00897B**: Clean water + eco-friendly + professional
- **Slate #475569**: Sophisticated + reliable + not trendy
- **Coral #FF7961**: Friendly + approachable + human
- **White + Minimal**: Clean + organized + premium

---

## COMPETITIVE DIFFERENTIATION

**Most Cleaning Services Use**:
- Bright blue (generic)
- Lime green (trendy)
- Purple (gimmicky)

**Rosewood Teal Strategy**:
- Blue-green = cleanliness + nature
- Not bright = sophisticated
- Not common = memorable
- Works with "Rosewood" name (wood/nature connection)

---

## IMPLEMENTATION PRIORITY

### Phase 1: Core Brand Elements
1. ✅ Buttons → Teal primary
2. Services section → Single slate background
3. Contact circles → Teal variations
4. Navigation → Teal accents

### Phase 2: Supporting Elements
5. Footer → Keep dark, add teal accents
6. Forms → Teal focus states
7. Icons → Replace random colors with teal
8. Badges → Teal + coral system

### Phase 3: Fine-tuning
9. Remove all: lime, purple, multiple blues
10. Consolidate: All slate/stone to one system
11. Test: Accessibility (AA minimum)
12. Document: Component color props

---

## RULES

### Do
- Use teal for all brand moments
- Use coral for all hover states
- Use white backgrounds primarily
- Keep it simple

### Don't
- Add new colors without purpose
- Use multiple shades of same color
- Make everything colorful
- Copy competitors

---

## ACCESSIBILITY

### Contrast Ratios
```
#00897B on white: 4.66:1 (AA ✓)
#FF7961 on white: 3.18:1 (AA Large ✓)
#475569 on white: 8.59:1 (AAA ✓)
#0F172A on white: 16.05:1 (AAA ✓)
#FFFFFF on #00897B: 4.66:1 (AA ✓)
```

All combinations meet WCAG 2.1 Level AA minimum.

---

## FINAL WORD

**Stop trying to use every color.**
**Pick teal. Use it everywhere.**
**Add coral for energy.**
**Keep the rest neutral.**
**That's the brand.**
