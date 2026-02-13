# Winter 2026 Design Competition - Technical Specification

---

## Component Inventory

### shadcn/ui Components (Built-in)
- `button` - CTA buttons throughout
- `card` - Material cards, resource cards
- `separator` - Section dividers
- `scroll-area` - Smooth scrolling areas

### Custom Components

| Component | Location | Purpose |
|-----------|----------|---------|
| Header | `src/sections/Header.tsx` | Fixed navigation header |
| Hero | `src/sections/Hero.tsx` | Full-screen hero section |
| Overview | `src/sections/Overview.tsx` | Competition challenge description |
| BasicMaterials | `src/sections/BasicMaterials.tsx` | Basic competition materials grid |
| TeamTimeMaterials | `src/sections/TeamTimeMaterials.tsx` | Advisory materials list |
| WorkshopMaterials | `src/sections/WorkshopMaterials.tsx` | Daily workshop materials |
| Prizes | `src/sections/Prizes.tsx` | Film festival prizes section |
| Resources | `src/sections/Resources.tsx` | Recommended resources grid |
| Footer | `src/sections/Footer.tsx` | Site footer |
| MaterialCard | `src/components/MaterialCard.tsx` | Reusable material link card |
| WorkshopCard | `src/components/WorkshopCard.tsx` | Workshop item card |
| ScrollReveal | `src/components/ScrollReveal.tsx` | Scroll-triggered animation wrapper |

### Custom Hooks

| Hook | Location | Purpose |
|------|----------|---------|
| useScrollReveal | `src/hooks/useScrollReveal.ts` | Intersection Observer for scroll animations |

---

## Animation Implementation Table

| Animation | Library | Implementation Approach | Complexity |
|-----------|---------|------------------------|------------|
| Page load fade-in | Framer Motion | AnimatePresence + initial/animate states | Low |
| Scroll reveal (fade up) | Framer Motion | useInView + motion.div with y/opacity | Medium |
| Card hover scale | CSS/Tailwind | hover:scale-102 transition-transform | Low |
| Button hover invert | CSS/Tailwind | hover:bg-white hover:text-black | Low |
| Link underline | CSS | ::after pseudo-element width animation | Low |
| Staggered card reveal | Framer Motion | staggerChildren in parent variants | Medium |

---

## Animation Library Choices

**Primary: Framer Motion**
- React-native integration
- Declarative API
- Built-in useInView hook
- AnimatePresence for mount/unmount
- Gesture support

**Secondary: CSS/Tailwind**
- Simple hover states
- Transitions
- Transform animations

---

## Project File Structure

```
/mnt/okcomputer/output/app/
├── public/
│   └── images/
│       ├── hero-filmmaker.jpg
│       ├── vintage-camera.jpg
│       └── cinema-reel.jpg
├── src/
│   ├── sections/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Overview.tsx
│   │   ├── BasicMaterials.tsx
│   │   ├── TeamTimeMaterials.tsx
│   │   ├── WorkshopMaterials.tsx
│   │   ├── Prizes.tsx
│   │   ├── Resources.tsx
│   │   └── Footer.tsx
│   ├── components/
│   │   ├── MaterialCard.tsx
│   │   ├── WorkshopCard.tsx
│   │   └── ScrollReveal.tsx
│   ├── hooks/
│   │   └── useScrollReveal.ts
│   ├── lib/
│   │   └── utils.ts
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   └── main.tsx
├── components/ui/        (shadcn components)
├── index.html
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

---

## Dependencies

```json
{
  "dependencies": {
    "framer-motion": "^11.x",
    "lucide-react": "^0.x",
    "@radix-ui/react-separator": "^1.x"
  }
}
```

---

## Implementation Notes

### Color Variables (Tailwind Config)
```javascript
colors: {
  background: '#000000',
  foreground: '#FFFFFF',
  card: '#FFFFFF',
  'card-foreground': '#000000',
  muted: '#F5F5F5',
  'muted-foreground': '#737373',
  border: 'rgba(255, 255, 255, 0.2)',
}
```

### Animation Timing
- Default duration: 600ms for reveals
- Hover duration: 300ms
- Easing: [0.4, 0, 0.2, 1] (ease-out)
- Stagger delay: 100ms

### Responsive Strategy
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Grid columns: 1 (mobile) → 2 (tablet) → 3 (desktop)

---
