# Example: Adding a Stats Section

This example shows how to add a custom statistics section to the Home page using the dynamic sections system.

## Step 1: Section Component Already Created

The `StatsSection.jsx` component is already created in `src/sections/`.

## Step 2: Import the Section in Home.jsx

Add this import at the top of `src/pages/Home.jsx`:

```javascript
import StatsSection from "../sections/StatsSection";
```

## Step 3: Add Configuration

Add this to the `sections` object in `Home.jsx`:

```javascript
const sections = {
  // ... existing sections
  stats: {
    type: "stats",
    title: "Our Success in Numbers",
    subtitle: "Trusted by thousands of clients worldwide",
    stats: [
      {
        value: "1,000+",
        label: "Properties Sold",
        description: "Successfully closed deals",
        icon: "🏠",
      },
      {
        value: "500+",
        label: "Happy Clients",
        description: "Satisfied customers",
        icon: "😊",
      },
      {
        value: "15+",
        label: "Years Experience",
        description: "In real estate market",
        icon: "⭐",
      },
      {
        value: "98%",
        label: "Client Satisfaction",
        description: "Rating from reviews",
        icon: "💯",
      },
    ],
  },
};
```

## Step 4: Render the Section

Add this component to the return statement where you want it to appear:

```jsx
return (
  <div
    className={
      isDark
        ? "bg-gray-900 text-white transition-colors"
        : "bg-white text-black transition-colors"
    }
  >
    <Navbar user={user} />
    <ThemeDebug />
    <HeroSection data={sections.hero} isDark={isDark} />
    <WelcomeSection data={sections.welcome} isDark={isDark} />
    <StatsSection data={sections.stats} isDark={isDark} /> {/* NEW SECTION */}
    <FeaturesSection data={sections.features} isDark={isDark} />
    <PropertiesSection data={sections.properties} isDark={isDark} />
    <TestimonialsSection data={sections.testimonials} isDark={isDark} />
    <CTASection data={sections.cta} isDark={isDark} />
    <Footer />
  </div>
);
```

## Step 5: Add Translations (Optional)

If using i18n translations, update your locale files (`src/locales/en.json`, etc.):

```json
{
  "home1": {
    "stats": {
      "title": "Our Success in Numbers",
      "subtitle": "Trusted by thousands of clients worldwide",
      "propertiesSold": {
        "value": "1,000+",
        "label": "Properties Sold",
        "description": "Successfully closed deals"
      },
      "happyClients": {
        "value": "500+",
        "label": "Happy Clients",
        "description": "Satisfied customers"
      }
    }
  }
}
```

Then use in configuration:

```javascript
stats: {
  type: 'stats',
  title: t('home1.stats.title'),
  subtitle: t('home1.stats.subtitle'),
  stats: [
    {
      value: t('home1.stats.propertiesSold.value'),
      label: t('home1.stats.propertiesSold.label'),
      description: t('home1.stats.propertiesSold.description'),
      icon: '🏠'
    },
    // ... more stats
  ]
}
```

## That's It! 🎉

Your new section will now appear on the Home page with:

- ✅ Responsive design
- ✅ Dark/light theme support
- ✅ Scroll animations
- ✅ Hover effects
- ✅ Easy to customize

## Customization Tips

1. **Change colors**: Modify the `text-red-600` classes to your brand color
2. **Adjust layout**: Change `lg:grid-cols-4` to show different numbers of columns
3. **Add animations**: Use different animation types from ScrollAnimation
4. **Custom icons**: Replace emoji with React icons or SVGs
5. **Add interactions**: Include onClick handlers or links to each stat card

## Remove a Section

To remove any section, simply comment it out:

```jsx
{
  /* <StatsSection data={sections.stats} isDark={isDark} /> */
}
```

Or delete the line entirely.
