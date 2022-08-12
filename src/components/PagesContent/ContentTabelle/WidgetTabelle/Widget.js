import React from "react";
import { Helmet } from "react-helmet";
import "./Widget.css";

const WidgetTabelle = () => {
  return (
    <>
      <div id="widget1"></div>
      <Helmet>
        <script type="text/javascript">
        new fussballdeWidgetAPI().showWidget('widget1', '02J2GCCAM8000000VUM1DNPCVU4MLK3F'); var a =
          document.querySelector("iframe"); a.setAttribute("scrolling", "yes");
        </script>
      </Helmet>
    </>
  );
};

export default WidgetTabelle;
