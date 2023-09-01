import * as React from "react";
import { SvgWrapper } from "./body/components/SvgWrapper";
import { Path } from "react-native-svg";
import { bodyFront } from "./body/assets/bodyFront";
import { useCallback, useState } from "react";
import differenceWith from "ramda/src/differenceWith";
import { PRIMARY_COLOR } from "../theme";
import {Box, Button, ButtonText, GluestackUIProvider, Heading} from "@gluestack-ui/themed";

export type Slug =
  | "abs"
//done
  | "adductors"
  | "left adductor"
  | "right adductors"
//done
  | "ankles"
  | "left ankle"
  | "right ankle"
//done
  | "biceps"
  | "left bicep"
  | "right bicep"
//done
  | "calves"
  | "left calve"
  | "right calve"
//done
  | "chest"
  | "left chest"
  | "right chest"
//done
  | "deltoids"
  | "left deltoids"
  | "right deltoids"
//done
  | "feet"
  | "left foot"
  | "right foot"
//done
  | "forearm"
  | "left forearm"
  | "right forearm"

  | "gluteal"

  | "hamstring"
//done
  | "hands"
  | "left hand"
  | "right hand"

  | "hair"
  | "head"
//done
  | "knees"
  | "left knee"
  | "right knee"

  | "lower-back"

  | "neck"
//done
  | "obliques"
  | "left oblique"
  | "right oblique"
//done
  | "quadriceps"
  | "left quadriceps"
  | "right quadriceps"
//done
  | "tibialis"
  | "left tibialis"
  | "right tibialis"
//done
  | "trapezius"
  | "left trapezius"
  | "right trapezius"
//done
  | "triceps"
  | "left triceps"
  | "right triceps"

  | "upper-back";

export interface BodyPart {
  intensity?: number;
  color: string;
  slug: Slug;
  pathArray?: string[];
}

type Props = {
  colors: ReadonlyArray<string>;
  data: ReadonlyArray<BodyPart>;
  scale: number;
  onBodyPartPress: (b: BodyPart) => void;
};

const comparison = (a: BodyPart, b: BodyPart) => a.slug === b.slug;

const BodySketch = ({ colors, data, scale, onBodyPartPress }: Props) => {
  const mergedBodyParts = useCallback(
    (dataSource: ReadonlyArray<BodyPart>) => {
      const innerData = data
        .map((d) => {
          return dataSource.find((t) => t.slug === d.slug);
        })
        .filter(Boolean);

      const coloredBodyParts = innerData.map((d) => {
        const bodyPart = data.find((e) => e.slug === d?.slug);
        let colorIntensity = 1;
        if (bodyPart?.intensity) colorIntensity = bodyPart.intensity;
        return { ...d, color: colors[colorIntensity - 1] };
      });

      const formattedBodyParts = differenceWith(comparison, dataSource, data);

      return [...formattedBodyParts, ...coloredBodyParts];
    },
    [data, colors],
  );

  const getColorToFill = (bodyPart: BodyPart) => {
    let color;
    if (bodyPart.intensity) color = colors[bodyPart.intensity];
    else color = bodyPart.color;
    return color;
  };

  const renderBodySvg = () => {
    return (
      <SvgWrapper scale={scale}>
        {mergedBodyParts(bodyFront).map((bodyPart: BodyPart) => {
          if (bodyPart.pathArray) {
            return bodyPart.pathArray.map((path: string) => {
              return (
                <Path
                  key={path}
                  onPress={() => onBodyPartPress?.(bodyPart)}
                  id={bodyPart.slug}
                  fill={getColorToFill(bodyPart)}
                  d={path}
                />
              );
            });
          }
        })}
      </SvgWrapper>
    );
  };

  return renderBodySvg();
};

BodySketch.defaultProps = {
  scale: 1,
  colors: ["#0984e3", PRIMARY_COLOR],
  // zoomOnPress: false,
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

export default function Body({slug}: {slug?: Slug}) {
    console.log("344444444444444444444444444444", slug);
  const [bodyPartSelected, setBodyPartSelected] = useState(slug ? { slug, intensity: 2 } : null);
  return (
    <GluestackUIProvider>
      <Box w="100%" bg="$blue100">
        <Heading py="$2">Body {bodyPartSelected ? ` -- ${bodyPartSelected.slug}` : ""}</Heading>
      </Box>
      <Box justifyContent="center" alignItems="center" flex={1}>
        <BodySketch
          data={[...(bodyPartSelected ? [bodyPartSelected] : [])]}
          onBodyPartPress={(e) =>
            setBodyPartSelected({ slug: e.slug, intensity: 2 })
          }
          scale={1.5}
        />
      </Box>
    <Box justifyContent="center" alignItems="center" py="$4">
        <Button
            bg={PRIMARY_COLOR}
            w="60%"
            size="md"
            variant="solid"
            action="primary"
            isDisabled={!bodyPartSelected}
            isFocusVisible={false}
            onPress={() => {console.log("11111111111111")}}
        >
            <ButtonText> OK </ButtonText>
        </Button>
        </Box>
    </GluestackUIProvider>
  );
}
