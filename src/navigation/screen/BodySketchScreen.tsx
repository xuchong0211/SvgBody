import React from "react";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import Body from "../../component/Body";

export default function BodySketchScreen() {
  return (
    <GluestackUIProvider>
      <Body />
    </GluestackUIProvider>
  );
}

