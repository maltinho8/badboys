import React from "react";
import {Helmet} from 'react-helmet';
import './Widget.css';


const WidgetTabelle = () => {
    return (
        <>

      <div id="widget1"></div>
      <Helmet>
	<script type="text/javascript">
		new fussballdeWidgetAPI().showWidget('widget1', '02HRA6TRUS000000VUM1DNOEVTQI0E65');
    var iframe = document.getElementById("iframe");
    iframe.scrolling= "yes";
	</script>
  </Helmet>
      </>

    );
};

export default WidgetTabelle;