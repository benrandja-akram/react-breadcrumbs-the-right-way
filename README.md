# Breadcrumbs the right way

## Instead of writing this 🥴🤢

```js
function App() {
  return (
    <Routes>
      <Route path="/about" element={<About />}/>
      <Route path="/contact" element={<Contact />}/>
      ...
    </Routes>
  );
}

// about.js
function About() {
  return (
    <main>
      <Breadcrumbs>
        <BreadCrumbItem to="/">🏠</BreadCrumbItem>
        <BreadCrumbItem to="/about">About</BreadCrumbItem>
      </Breadcrumbs>
      ...
    </main>
  );
}

// contact.js
function Contact() {
  return (
    <main>
      <Breadcrumbs>
        <BreadCrumbItem to="/">🏠</BreadCrumbItem>
        <BreadCrumbItem to="/contact">Contact</BreadCrumbItem>
      </Breadcrumbs>
      ...
  </main>
  );
}
...
```

## Write this using React portals 🤯🥳

```js
function App() {
  return (
    <BreadcrumbsProvider>
      <Breadcrumbs>
        <BreadCrumbItem to="/">🏠</BreadCrumbItem>
      </Breadcrumbs>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        ...
      </Routes>
    </BreadcrumbsProvider>
  );
}

// about.js
function About() {
  return (
    <main>
      <BreadCrumbItem to="/about">About</BreadCrumbItem>
      ...
    </main>
  );
}

// contact.js
function Contact() {
  return (
    <main>
      <BreadCrumbItem to="/contact">Contact</BreadCrumbItem>
      ...
    </main>
  );
}
...
```
