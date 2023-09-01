import * as React from "react";
import Svg, { G, Path } from "react-native-svg";

type SvgWrapperProps = {
  children: React.ReactNode;
  scale: number;
};

export const SvgWrapper: React.FC<SvgWrapperProps> = ({ children, scale }) => {
  const viewBox = "0 0 724 1448";

  return (
    <Svg viewBox={viewBox} height={400 * scale} width={200 * scale}>
      <G strokeWidth={2} fill="none" strokeLinecap="butt">
        <Path
          stroke="#dfdfdf"
          vectorEffect="non-scaling-stroke"
          d="M 309.48 168.91 Q 305.84 164.32 303.32 169.76 C 298.49 180.21 308.31 200.03 314.51 208.74 C 316.34 211.31 318.01 208.95 318.58 207.26 A 0.67 0.66 57.6 0 1 319.87 207.55 C 319.06 215.09 318.68 227.40 324.34 232.47 C 327.22 235.05 326.97 235.88 326.92 239.51 Q 326.68 255.16 323.97 266.82 Q 323.85 267.35 323.48 267.73 Q 308.61 282.73 290.26 293.23 C 278.34 300.05 267.53 299.26 253.00 298.03 Q 237.49 296.72 224.74 305.21 C 208.71 315.86 190.95 335.73 189.24 355.50 Q 186.95 381.81 190.53 412.66 C 190.79 414.92 190.69 417.49 191.02 419.92 Q 191.09 420.43 190.88 420.90 C 187.89 427.65 183.99 434.89 181.93 441.29 C 177.25 455.76 176.31 470.23 176.20 486.02 Q 176.20 486.51 175.90 486.90 C 159.84 507.69 147.56 529.29 141.49 554.95 Q 140.10 560.80 138.16 574.66 Q 131.28 623.74 118.11 671.52 C 115.99 679.21 112.98 690.29 104.08 693.63 Q 90.70 698.65 79.29 707.27 C 73.17 711.89 69.48 719.95 66.12 726.62 C 62.44 733.91 47.57 737.30 49.20 746.00 C 49.75 748.96 51.89 750.13 54.75 750.02 Q 67.27 749.50 74.18 740.00 C 76.03 737.45 77.93 736.62 80.54 735.24 Q 81.02 734.98 81.24 735.48 Q 84.59 743.00 80.47 750.73 Q 71.41 767.75 62.21 784.70 Q 60.53 787.81 59.49 791.20 C 57.52 797.69 65.78 800.84 69.45 795.20 C 76.80 783.92 82.72 773.30 92.55 762.52 Q 93.00 762.04 92.84 762.67 Q 87.89 783.24 79.07 802.44 C 77.36 806.17 75.64 812.30 79.19 815.18 C 89.50 823.53 107.08 773.44 109.24 767.88 A 0.37 0.36 -30.3 0 1 109.94 768.06 C 108.51 777.44 106.43 787.14 105.28 796.13 C 104.34 803.43 103.67 808.49 104.41 814.32 C 105.40 822.00 112.74 817.15 114.09 812.77 C 118.56 798.32 120.41 781.74 125.18 766.21 A 0.55 0.55 0.0 0 1 125.93 765.87 C 131.64 768.40 126.65 796.54 133.38 803.49 A 1.35 1.35 0.0 0 0 134.16 803.90 C 138.40 804.59 139.71 797.34 140.15 793.73 Q 141.74 780.80 142.58 767.76 Q 142.86 763.46 144.07 759.34 Q 150.39 737.64 154.77 715.46 Q 156.15 708.50 155.48 697.76 Q 154.48 681.63 161.99 665.46 Q 180.58 625.46 201.25 586.52 C 213.64 563.18 218.66 541.14 220.65 514.18 C 221.24 506.18 223.22 502.59 228.42 495.84 C 237.76 483.72 242.73 464.92 246.12 450.19 Q 246.24 449.64 246.75 449.42 L 250.30 447.82 A 0.49 0.49 0.0 0 1 250.99 448.23 Q 252.78 470.14 257.44 487.01 C 259.04 492.80 264.20 498.21 265.32 505.20 C 265.91 508.82 266.99 512.44 267.11 516.00 Q 267.57 529.33 266.95 540.50 C 265.58 565.32 263.85 592.20 259.98 619.13 C 258.39 630.19 253.14 640.55 250.52 651.43 Q 245.19 673.62 242.32 696.24 C 239.63 717.56 236.59 740.02 236.04 757.75 Q 234.98 791.48 237.98 842.55 Q 239.43 867.18 244.64 891.26 Q 247.76 905.70 255.88 917.90 Q 256.15 918.31 256.08 918.79 C 254.89 926.25 257.03 933.47 255.60 940.95 Q 252.28 958.32 251.77 975.98 C 251.55 983.43 252.85 991.28 253.67 998.93 Q 253.99 1001.95 253.29 1005.00 C 239.19 1067.03 246.93 1130.64 261.77 1190.07 C 266.01 1207.06 266.47 1222.37 264.71 1240.03 C 263.85 1248.62 262.10 1260.41 264.24 1268.75 C 266.05 1275.80 267.54 1287.46 261.78 1293.28 C 256.71 1298.39 242.40 1310.55 240.72 1316.98 C 239.19 1322.86 235.04 1332.26 242.29 1333.71 Q 242.69 1333.79 243.08 1333.66 L 244.23 1333.29 Q 245.05 1333.02 244.81 1333.85 C 242.95 1340.16 249.20 1340.52 253.77 1340.86 C 256.46 1341.06 257.37 1343.60 259.30 1344.71 Q 263.13 1346.91 267.14 1344.43 Q 267.59 1344.15 267.92 1344.56 Q 271.17 1348.61 276.21 1349.09 C 278.90 1349.35 281.27 1347.36 283.62 1346.09 Q 284.10 1345.82 284.44 1346.26 Q 288.33 1351.29 294.72 1351.38 C 295.77 1351.39 297.65 1351.62 298.54 1350.79 Q 301.20 1348.30 306.57 1341.58 C 312.04 1334.74 311.14 1328.85 310.29 1320.16 C 309.43 1311.33 311.17 1303.41 313.76 1295.20 C 315.84 1288.56 313.35 1280.06 314.07 1273.15 C 314.57 1268.39 315.80 1263.68 315.01 1259.02 C 314.06 1253.42 311.98 1247.60 311.31 1242.66 Q 309.57 1229.80 309.57 1219.75 Q 309.57 1192.29 313.54 1161.94 C 315.34 1148.21 319.24 1136.08 324.12 1123.46 Q 325.66 1119.48 326.10 1115.72 C 330.14 1081.34 326.20 1048.44 320.65 1013.26 C 319.84 1008.17 319.39 1002.54 321.72 997.72 C 328.03 984.68 329.28 969.38 329.07 954.15 C 329.01 949.50 327.95 944.55 327.58 939.63 C 327.13 933.64 329.28 925.78 330.82 919.80 C 334.72 904.69 337.76 888.96 341.43 874.30 Q 348.95 844.25 355.42 813.95 C 358.50 799.49 357.70 784.78 357.75 768.06 Q 357.78 756.80 356.36 748.81 Q 356.26 748.24 356.77 748.50 L 363.71 751.99 A 1.07 1.07 0.0 0 0 364.67 751.99 L 371.53 748.56 Q 372.07 748.29 371.98 748.89 C 369.47 765.94 370.28 783.04 371.30 800.17 Q 371.86 809.54 372.73 813.51 C 378.37 839.12 384.90 864.49 390.59 890.08 Q 394.83 909.20 399.51 928.22 C 400.58 932.58 401.13 937.66 400.58 941.57 C 398.11 958.92 398.53 982.22 407.11 998.54 C 408.41 1001.01 408.74 1005.35 408.31 1008.09 C 402.82 1043.75 398.07 1079.22 402.19 1115.33 Q 402.65 1119.34 404.21 1123.44 C 410.53 1140.06 413.55 1150.61 415.25 1164.75 C 418.31 1190.26 420.52 1218.43 416.79 1244.33 C 415.56 1252.86 411.78 1258.57 413.63 1267.80 Q 415.33 1276.21 414.16 1284.74 C 413.11 1292.39 415.65 1298.68 417.31 1305.89 C 419.02 1313.32 418.11 1320.99 417.47 1328.50 C 416.71 1337.55 423.74 1344.86 430.17 1350.90 A 1.48 1.46 -18.7 0 0 430.95 1351.28 Q 439.25 1352.41 444.03 1346.06 Q 444.40 1345.57 444.87 1345.96 Q 453.39 1352.89 460.49 1344.48 Q 460.81 1344.11 461.23 1344.37 C 469.09 1349.37 469.89 1340.80 474.98 1340.71 C 479.52 1340.64 485.21 1340.09 483.54 1333.77 Q 483.38 1333.17 483.97 1333.35 C 488.25 1334.67 490.66 1331.94 490.06 1327.75 C 489.09 1321.04 487.50 1314.41 483.44 1310.30 Q 474.77 1301.53 466.05 1292.83 C 461.19 1287.98 462.25 1276.40 463.74 1270.47 C 466.27 1260.35 464.49 1248.06 463.03 1236.25 C 461.04 1220.05 463.22 1204.28 467.41 1187.04 C 481.60 1128.60 488.89 1065.20 475.23 1006.07 C 473.92 1000.37 475.00 995.00 475.76 989.36 C 477.88 973.68 475.72 958.50 473.08 942.76 C 471.70 934.55 473.60 926.56 472.20 918.79 Q 472.11 918.30 472.39 917.89 C 483.07 902.63 486.53 880.99 488.49 863.25 C 492.12 830.38 492.47 797.34 492.26 764.31 C 492.11 741.56 488.80 719.07 486.12 696.53 C 484.30 681.19 480.76 664.32 477.47 649.99 C 474.89 638.73 469.69 628.87 468.04 617.25 C 465.37 598.45 464.19 580.92 462.40 556.31 Q 460.86 535.06 461.01 522.74 Q 461.13 512.05 463.22 504.00 C 464.54 498.90 468.30 493.91 469.91 489.46 C 474.50 476.74 476.10 461.71 477.56 448.28 Q 477.62 447.74 478.13 447.94 L 481.73 449.35 A 0.77 0.77 0.0 0 1 482.19 449.89 Q 486.03 466.84 492.52 482.96 C 494.16 487.04 496.63 491.75 500.12 495.79 C 505.75 502.32 507.17 507.95 508.00 517.24 C 509.72 536.47 512.15 552.06 518.89 569.24 Q 521.60 576.16 527.50 587.28 Q 543.57 617.60 558.56 648.47 C 566.04 663.89 571.90 675.54 572.85 690.59 Q 572.98 692.57 572.55 700.88 Q 572.12 709.31 573.99 718.25 Q 577.87 736.78 582.37 752.38 C 585.15 761.98 586.32 769.32 586.71 778.53 C 586.92 783.46 587.58 803.53 593.41 804.06 C 599.41 804.61 599.71 774.61 600.39 768.08 A 1.12 1.12 0.0 0 1 600.80 767.33 Q 601.30 766.93 601.62 766.30 A 1.39 1.00 59.0 0 1 603.70 767.19 C 607.27 782.50 609.43 797.55 614.25 812.25 C 615.52 816.12 618.33 820.08 622.81 817.38 A 1.18 1.17 -8.4 0 0 623.35 816.66 Q 624.98 810.32 624.13 803.72 Q 621.83 785.89 618.23 768.64 A 0.53 0.53 0.0 0 1 619.24 768.34 C 622.72 777.06 636.06 814.20 645.24 816.03 C 650.64 817.10 652.13 811.12 650.95 807.31 C 648.59 799.74 644.42 791.59 642.09 784.69 Q 638.29 773.46 635.22 761.98 A 0.15 0.14 -73.3 0 1 635.47 761.84 Q 640.35 767.61 644.90 773.66 C 649.45 779.70 653.60 787.18 658.03 793.93 Q 660.09 797.07 661.70 797.82 C 665.53 799.62 670.61 795.77 669.00 791.28 C 666.63 784.66 661.63 776.66 659.33 772.19 Q 654.22 762.29 648.82 752.53 C 645.43 746.40 644.71 741.93 646.89 735.59 Q 647.08 735.05 647.60 735.27 C 650.55 736.50 652.37 737.45 654.44 740.27 Q 661.27 749.61 673.53 749.92 C 681.25 750.12 680.47 740.89 676.20 738.28 C 671.33 735.31 664.61 731.14 661.97 725.94 C 657.98 718.11 654.62 711.26 649.21 707.28 Q 637.40 698.62 623.76 693.40 C 619.45 691.75 615.12 686.26 613.76 682.47 Q 608.42 667.65 602.70 641.81 Q 594.90 606.62 590.85 578.90 Q 588.46 562.58 587.74 559.15 C 582.02 531.75 569.74 509.81 552.98 487.61 C 551.81 486.06 551.91 485.12 551.97 483.26 Q 552.48 466.57 548.70 449.61 C 546.27 438.71 541.82 430.32 537.44 420.82 Q 537.22 420.36 537.28 419.85 C 539.40 398.94 540.83 377.68 539.05 356.70 C 537.31 336.13 521.34 317.28 504.86 306.23 C 494.75 299.45 485.77 296.97 473.93 298.16 Q 464.41 299.12 453.63 298.41 C 438.05 297.39 418.32 280.58 407.40 270.35 C 405.82 268.87 404.57 267.56 404.10 265.32 Q 401.24 251.68 401.26 237.76 Q 401.26 233.73 404.68 232.04 Q 405.14 231.82 405.39 231.38 C 409.76 223.86 408.77 215.16 408.75 206.85 A 0.38 0.38 0.0 0 1 409.48 206.69 C 410.36 208.62 412.01 211.62 414.22 208.45 C 421.05 198.67 427.45 183.93 425.97 172.00 C 425.49 168.15 422.83 165.91 418.91 167.68"
        />
      </G>
      {children}
    </Svg>
  );
};
