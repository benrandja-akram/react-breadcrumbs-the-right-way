import { Routes, Route, Outlet, NavLink, NavLinkProps } from "react-router-dom";
import clsx from "classnames";
import {
  Breadcrumbs,
  BreadcrumbsProvider,
  BreadcrumbItem,
} from "./breadcrumbs";

function App() {
  return (
    <div className="max-w-3xl pt-12 mx-auto">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutLayout />}>
            <Route index element={<AboutIndex />} />
            <Route path="education" element={<AboutEducation />} />
            <Route path="work-experience" element={<AboutWorkExperience />} />
          </Route>
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  const classes: NavLinkProps["className"] = ({ isActive }) =>
    clsx("text-lg ", {
      "text-sky-700 font-bold": isActive,
      "text-slate-600": !isActive,
    });

  return (
    <div>
      <nav className="mb-6 bg-sky-50 p-4 space-x-10 rounded-lg">
        <NavLink className={classes} to="/">
          Home
        </NavLink>
        <NavLink className={classes} to="/about">
          About
        </NavLink>
        <NavLink className={classes} to="/contact">
          Contact
        </NavLink>
      </nav>
      <BreadcrumbsProvider>
        <Breadcrumbs />
        <Outlet />
      </BreadcrumbsProvider>
    </div>
  );
}

function Home() {
  return <h1 className="font-bold text-2xl mt-12">Home page</h1>;
}

function AboutLayout() {
  return (
    <>
      <BreadcrumbItem to="/about">About</BreadcrumbItem>

      <Outlet />
    </>
  );
}
function AboutIndex() {
  return (
    <>
      <h1 className="font-bold text-2xl mt-12">About page</h1>
      <main>
        <ul className="pt-8 space-y-2 text-sky-800">
          <li>
            <NavLink to="/about/education" className={"hover:underline"}>
              Education
            </NavLink>
          </li>
          <li>
            <NavLink to="/about/work-experience" className={"hover:underline"}>
              Work Experience
            </NavLink>
          </li>
        </ul>
      </main>
    </>
  );
}
function AboutEducation() {
  return (
    <>
      <BreadcrumbItem to="/about/education">Education</BreadcrumbItem>
      <h1 className="font-bold text-2xl my-12">Education page</h1>
      <NavLink to=".." className={"font-bold text-sky-700 underline"}>
        Back to about page
      </NavLink>
    </>
  );
}
function AboutWorkExperience() {
  return (
    <>
      <BreadcrumbItem to="/about/work-experience">
        Work Experience
      </BreadcrumbItem>
      <h1 className="font-bold text-2xl my-12">Work Experience page</h1>
      <NavLink to=".." className={"font-bold text-sky-700 underline"}>
        Back to about page
      </NavLink>
    </>
  );
}

function Contact() {
  return (
    <>
      <BreadcrumbItem to="/contact">Contact</BreadcrumbItem>
      <h1 className="font-bold text-2xl mt-12">Contact page</h1>
    </>
  );
}

export default App;
