import { memo } from "react";
import React, { useEffect, useState } from "react";
import { StorageKey } from "../consts";
import { IKeyLogEntry } from "../interfaces";
import { watch } from "../utils/shared-utils";
export default memo(function KeyLog() {
  const [logEntries, setLogEntries] = useState<IKeyLogEntry[]>([]);
  useEffect(() => {
    watch(StorageKey.KEY_LOG, ({
      newValue = []
    }) => {
      setLogEntries(newValue);
    });
  }, []);
  return <>
      <div>
        <h1 id="keylog" className="border-b border-gray-500 font-semibold text-gray-700 text-2xl">
          Key Log
        </h1>
        <hr />
        <div className="grid grid-cols-2 gap-2" style={{
        gridTemplateColumns: "auto 1fr"
      }}>
          {logEntries.map(x => <React.Fragment key={x.uuid}>
              <div>[{x.timestamp}]</div>
              <div>{x.buffer}</div>
              <div></div>
              <div className="text-gray-300">{x.url}</div>
            </React.Fragment>)}
        </div>
      </div>
    </>;
});