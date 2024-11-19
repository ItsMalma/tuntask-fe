import { FunctionComponent, Ref, SVGAttributes } from "react";

export type IconProps = Omit<SVGAttributes<SVGSVGElement>, "children"> & {
  ref?: Ref<SVGSVGElement>;
};

export type Icon = FunctionComponent<IconProps>;
