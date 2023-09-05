import React, { useState } from "react";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import Body from "../../component/Body";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function BodySketchScreen({ navigation, route, options, back }) {
  const [side, setSide] = useState(options?.side || "front");

  React.useEffect(() => {
    // Use `setOptions` to update the button that we previously specified
    // Now the button includes an `onPress` handler to update the count
    navigation.setOptions({
      headerRight: (...args) => {
        return (
          <MaterialCommunityIcons
            name="cached"
            color="grey"
            size={32}
            onPress={() => {
              const nextSide = side == "front" ? "back" : "front";
              setSide(nextSide);
            }}
          />
        );
      },
    });
  }, [side]);
  return (
    <GluestackUIProvider>
      <Body
        slug={route?.params?.slug}
        onConfirm={(slug) => {
          navigation.navigate({
            name: "Upload",
            params: { slug },
            merge: true,
          });
        }}
      />
    </GluestackUIProvider>
  );
}
