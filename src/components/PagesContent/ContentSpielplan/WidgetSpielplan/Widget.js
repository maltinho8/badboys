import React from "react";
import {Helmet} from 'react-helmet';
import './Widget.css';


const WidgetSpielplan= () => {
    return (
      <>
        <div id="widget2"></div>
        <Helmet>
          <script type="text/javascript">
          new fussballdeWidgetAPI().showWidget('widget1', '02J2GCQPIG000000VUM1DNOPVS9NSHQP'); var a =
            document.querySelector("iframe"); a.setAttribute("scrolling",
            "yes");
          </script>
        </Helmet>
      </>
    );
};

export default WidgetSpielplan;