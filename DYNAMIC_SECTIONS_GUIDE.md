# Dynamic Sections Guide for Home Page

## Overview

The Home page has been refactored to use a dynamic, modular section system. This allows for easy customization, reusability, and maintainability of different page sections.

## Architecture

### Section Components

All section components are located in `src/sections/` directory:

1. **HeroSection.jsx** - Hero/banner section with video background
2. **WelcomeSection.jsx** - Welcome section with image and content
3. **FeaturesSection.jsx** - Interactive features/benefits section
4. **PropertiesSection.jsx** - Featured properties with filtering
5. **TestimonialsSection.jsx** - Customer testimonials grid
6. **CTASection.jsx** - Call-to-action section with background image

### Configuration Structure

Each section is configured through a data object in `Home.jsx`:

```javascript
const sections = {
  hero: { type: 'hero', video: '...', title: '...', ... },
  welcome: { type: 'welcome', title: '...', ... },
  features: { type: 'features', items: [...], ... },
  properties: { type: 'properties', items: [...], ... },
  testimonials: { type: 'testimonials', testimonials: [...], ... },
  cta: { type: 'cta', buttons: [...], ... }
}
```

## How to Use

### Adding a New Section

1. **Create a new section component** in `src/sections/`:

```jsx
export default function MyNewSection({ data, isDark }) {
  const { title, content } = data;
  return (
    <section className={isDark ? "bg-gray-800" : "bg-white"}>
      <h2>{title}</h2>
      <p>{content}</p>
    </section>
  );
}
```

2. **Import it in Home.jsx**:

```javascript
import MyNewSection from "../sections/MyNewSection";
```

3. **Add configuration**:

```javascript
const sections = {
  // ... existing sections
  myNew: {
    type: "myNew",
    title: "My Title",
    content: "My Content",
  },
};
```

4. **Render it**:

```jsx
<MyNewSection data={sections.myNew} isDark={isDark} />
```

### Modifying Existing Sections

#### Change Section Order

Simply reorder the section components in the return statement of `Home.jsx`:

```jsx
return (
  <div>
    <HeroSection data={sections.hero} isDark={isDark} />
    <TestimonialsSection data={sections.testimonials} isDark={isDark} /> {/* Moved up */}
    <WelcomeSection data={sections.welcome} isDark={isDark} />
    ...
  </div>
);
```

#### Update Section Content

Modify the configuration object:

```javascript
const sections = {
  hero: {
    type: "hero",
    video: "/NEW_VIDEO.mp4", // Changed video
    title: t("home1.hero.title"),
    subtitle: t("home1.hero.subtitle"),
    buttons: [
      {
        text: "New Button Text",
        href: "/new-link",
        className: "...",
      },
    ],
  },
};
```

#### Hide/Show Sections

Comment out or remove the section component:

```jsx
return (
  <div>
    <HeroSection data={sections.hero} isDark={isDark} />
    {/* <WelcomeSection data={sections.welcome} isDark={isDark} /> */} {/* Hidden */}
    <FeaturesSection data={sections.features} isDark={isDark} />
    ...
  </div>
);
```

### Section-Specific Configurations

#### HeroSection

```javascript
{
  type: 'hero',
  video: '/path/to/video.mp4',
  title: 'Hero Title',
  subtitle: 'Hero Subtitle',
  buttons: [
    { text: 'Button 1', href: '/link1', className: 'custom-class' },
    { text: 'Button 2', href: '/link2', className: 'custom-class' }
  ]
}
```

#### WelcomeSection

```javascript
{
  type: 'welcome',
  title: 'Welcome Title',
  subtitle: 'Welcome Subtitle',
  description: 'Welcome Description',
  buttonText: 'Learn More',
  buttonLink: '/services',
  image: '/path/to/image.jpg'
}
```

#### FeaturesSection

```javascript
{
  type: 'features',
  title: 'Features Title',
  subtitle: 'Features Subtitle',
  items: [
    {
      number: '01.',
      title: 'Feature 1',
      description: 'Feature 1 description'
    },
    {
      number: '02.',
      title: 'Feature 2',
      description: 'Feature 2 description'
    }
  ]
}
```

#### PropertiesSection

```javascript
{
  type: 'properties',
  title: 'Properties Title',
  subtitle: 'Properties Subtitle',
  contactText: 'Contact',
  detailsText: 'Details',
  categories: ['Category1', 'Category2'],
  categoryMap: {
    'Category1': 'Translated Category 1',
    'Category2': 'Translated Category 2'
  },
  items: [
    {
      id: 1,
      name: 'Property Name',
      description: 'Property Description',
      price: '$100,000',
      image: '/path/to/image.jpg',
      category: 'Category1',
      rating: 4.5
    }
  ]
}
```

#### TestimonialsSection

```javascript
{
  type: 'testimonials',
  title: 'Testimonials Title',
  subtitle: 'Testimonials Subtitle',
  testimonials: [
    {
      id: 1,
      name: 'Customer Name',
      role: 'Customer Role',
      content: 'Testimonial content',
      rating: 5,
      image: '/path/to/image.jpg'
    }
  ]
}
```

#### CTASection

```javascript
{
  type: 'cta',
  title: 'CTA Title',
  subtitle: 'CTA Subtitle',
  backgroundImage: '/path/to/bg-image.jpg',
  buttons: [
    { text: 'Primary CTA', href: '/link1', className: 'custom-class' },
    { text: 'Secondary CTA', href: '/link2', className: 'custom-class' }
  ]
}
```

## Benefits

1. **Modularity** - Each section is self-contained and reusable
2. **Maintainability** - Easy to update individual sections without affecting others
3. **Flexibility** - Sections can be reordered, hidden, or duplicated easily
4. **Scalability** - New sections can be added without touching existing code
5. **Type Safety** - Clear data structure for each section type
6. **Theme Support** - All sections respect the dark/light theme via `isDark` prop
7. **Translation Ready** - All content uses i18n translation keys

## Best Practices

1. **Keep sections independent** - Avoid dependencies between sections
2. **Use consistent naming** - Follow the established naming conventions
3. **Document new sections** - Add comments explaining complex logic
4. **Test responsiveness** - Ensure sections work on all screen sizes
5. **Optimize images** - Compress and optimize all images used in sections
6. **Use translations** - Always use `t()` function for text content
7. **Follow accessibility** - Include proper ARIA labels and semantic HTML

## Future Enhancements

- **Admin Panel**: Create a visual editor to modify section configurations
- **Section Library**: Build a library of pre-made sections
- **A/B Testing**: Implement section variants for testing
- **Analytics**: Add tracking to measure section performance
- **Animations**: Add more sophisticated scroll animations
- **Conditional Rendering**: Show/hide sections based on user preferences or roles
