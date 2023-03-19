import React, { useEffect, useRef } from 'react';
function GeBlock() {
  const appletRef = useRef(null);
  useEffect(() => {
    const params = {
      appName: 'graphing',
      width: 1263,
      height: 551,
      showToolBar: true,
      showAlgebraInput: true,
      showMenuBar: true,
    };
    const applet = new GGBApplet(params, true);
    console.log(applet)
    applet.inject(appletRef.current);
    return () => {
      appletRef.current = null;
    }
  }, [appletRef.current]);
  return <div ref={appletRef} />
}
export default GeBlock;
