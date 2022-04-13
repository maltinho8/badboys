import React from "react";
import {Helmet} from 'react-helmet';
import './Widget.css';


const WidgetSpielplan= () => {
    return (
        <>
      <div id="widget2"></div>
      <Helmet>
	<script type="text/javascript">
		new fussballdeWidgetAPI().showWidget('widget2', '02HRA8A8Q0000000VUM1DNPIVTBOE0VE');
	</script>
  </Helmet>
      </>

    );
};

export default WidgetSpielplan;