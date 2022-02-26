import classNames from "classnames";
import { createContext, useContext, useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
import { NavLink, NavLinkProps } from "react-router-dom";
import { arrow, homeIcon } from "./icons";

const Context = createContext<string>(null!);

const BreadcrumbsProvider: React.FC = ({ children }) => {
  const id = useId();
  return <Context.Provider value={id}>{children}</Context.Provider>;
};

const Breadcrumbs: React.FC = ({ children }) => {
  const navId = useContext(Context);
  return (
    <nav id={navId} className="flex items-center space-x-3.5">
      <NavLink
        end
        className={({ isActive }) =>
          classNames({
            "text-sky-700": isActive,
            "text-slate-600": !isActive,
          })
        }
        to="/"
      >
        {homeIcon}
      </NavLink>
      {children}
    </nav>
  );
};

const BreadcrumbItem: React.FC<NavLinkProps> = ({ children, ...props }) => {
  const parentId = useContext(Context);
  const [nav, setNav] = useState<HTMLElement | null>(null);
  useEffect(() => {
    setNav(document.getElementById(parentId));
  }, [parentId]);

  return !nav
    ? null
    : createPortal(
        <>
          {arrow}
          <NavLink
            {...props}
            end
            className={({ isActive }) =>
              classNames("inline-flex items-center", {
                "text-slate-600": !isActive,
                "font-bold text-sky-600": isActive,
              })
            }
          >
            <span>{children}</span>
          </NavLink>
        </>,
        nav
      );
};

export { BreadcrumbItem, BreadcrumbsProvider, Breadcrumbs };
