import * as React from "react";
// eslint-disable-next-line
import SimpleStorageContract from "./contracts/SimpleStorage.json";
// eslint-disable-next-line
import getWeb3 from "./getWeb3";
import { Waku } from "js-waku";

import "./App.css";

function App() {
  const [waku, setWaku] = React.useState(undefined);
  const [wakuStatus, setWakuStatus] = React.useState("None");

  // Start Waku
  React.useEffect(() => {
    // If Waku is already assigned, the job is done
    if (!!waku) return;
    // If Waku status not None, it means we are already starting Waku
    if (wakuStatus !== "None") return;

    setWakuStatus("Starting");

    // Create Waku
    Waku.create({ bootstrap: { default: true } }).then((waku) => {
      // Once done, put it in the state
      setWaku(waku);
      // And update the status
      setWakuStatus("Started");
    });
  }, [waku, wakuStatus]);

  return (
    <div className="App">
      <header className="App-header">
        <p>Waku node's status: {wakuStatus}</p>
      </header>
    </div>
  );
}

export default App;
