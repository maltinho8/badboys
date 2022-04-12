import React from "react";
import {Helmet} from 'react-helmet';
import './Widget.css';


const WidgetTabelle = () => {
    return (
        <>
      <div id="widget3"></div>
      <Helmet>
	    <script type="text/javascript">
		          new fussballdeWidgetAPI().showWidget('widget3', '02HJSALFS4000000VUM1DNPGVVPNNEUJ');
	    </script>
      </Helmet>
      </>

    );
};

export default WidgetTabelle;