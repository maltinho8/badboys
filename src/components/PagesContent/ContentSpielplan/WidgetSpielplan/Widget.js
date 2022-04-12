import React from "react";
import {Helmet} from 'react-helmet';
import './Widget.js';


const WidgetSpielplan= () => {
    return (
        <>
      <div id="widget1"></div>
      <Helmet>
	<script type="text/javascript">
		new fussballdeWidgetAPI().showWidget('widget1', '02HRA8A8Q0000000VUM1DNPIVTBOE0VE');
	</script>
  </Helmet>
      </>

    );
};

export default WidgetSpielplan;