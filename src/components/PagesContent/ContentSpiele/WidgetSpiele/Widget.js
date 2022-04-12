import React from "react";
import {Helmet} from 'react-helmet';
import './Widget.css';


const WidgetTabelle = () => {
    return (
        <>
     <div id="widget1"></div>
     <Helmet>
	<script type="text/javascript">
		new fussballdeWidgetAPI().showWidget('widget1', '02HRA8MP9K000000VUM1DNP5VVSHME5T');
	</script>
  </Helmet>
      </>

    );
};

export default WidgetTabelle;