import * as D from "io-ts/Decoder";

const makes = "makes";
const manufacturers = "manufacturers";

export const vehiclesUrlDecoder = D.union(
  D.literal(`/api/vehicles/${makes}`),
  D.literal(`/api/vehicles/${manufacturers}`)
);

export type VehiclesUrlDecoder = D.TypeOf<typeof vehiclesUrlDecoder>;
