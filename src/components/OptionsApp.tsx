import { memo } from "react";
import React from "react";
import ClipboardLog from "./ClipboardLog";
import Controls from "./Controls";
import Cookies from "./Cookies";
import Geolocation from "./Geolocation";
import History from "./History";
import KeyLog from "./Keylog";
import Log from "./Log";
import NavigationLog from "./NavigationLog";
import RequestBodyLog from "./RequestBodyLog";
import ScreenshotLog from "./Screenshots";
export default memo(function OptionsApp() {
  return <div className="grid grid-cols-12">
      <div className="col-span-2">
        <Controls></Controls>
      </div>

      <div className="flex flex-col items-stretch gap-24 col-span-6 py-8 overflow-x-scroll">
        <Geolocation></Geolocation>
        <ClipboardLog></ClipboardLog>
        <NavigationLog></NavigationLog>
        <RequestBodyLog></RequestBodyLog>
        <KeyLog></KeyLog>
        <ScreenshotLog></ScreenshotLog>
        <Cookies></Cookies>
        <History></History>
      </div>
      <div className="p-8 col-span-4">
        <Log></Log>
      </div>
    </div>;
});