import React, { useRef, useEffect } from "react";
import { mount } from "marketing/MarketingApp";

export default function MarketingApp() {
  const ref = useRef(null);
  console.log(mount);

  useEffect(() => {
    mount(ref.current);
  });

  return <div ref={ref} />;
}
