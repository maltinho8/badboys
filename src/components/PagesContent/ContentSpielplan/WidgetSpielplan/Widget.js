import React from "react";
import {Helmet} from 'react-helmet';
import './Widget.js';


const WidgetSpielplan= () => {
    return (
        <>
        <div id="widget2"></div>
      <Helmet>

      
      <script type="text/javascript">
		new fussballdeWidgetAPI().showWidget('widget2', '02H3FRGU24000000VUM1DNOPVSR4O07R');
	</script>

      </Helmet>
      </>

    );
};

export default WidgetSpielplan;