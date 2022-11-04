import { useState, useEffect } from "react";

const Breadcrumbs = () => {
  const [pathname, setPathname] = useState([]);
  const [lastPathname, setLastpathname] = useState("");

  const initBreadcrumbs = () => {
    const newPathname = location.pathname
      ?.split("/")
      ?.filter((filter) => filter !== "");
    const newLastPathname = newPathname?.pop();

    setPathname(newPathname);
    setLastpathname(newLastPathname);
  };

  useEffect(() => {
    initBreadcrumbs();
  }, [location.pathname]);

  return (
    <h4 className="fw-bold mb-0">
      {pathname?.map((item, idx) => (
        <span key={idx} className="text-muted fw-light">
          {item} /{" "}
        </span>
      ))}
      {lastPathname}
    </h4>
  );
};

export default Breadcrumbs;
