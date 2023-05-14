import { TStatusCodes } from "../utils/statusCodes";

export type ServiceResponse = {
  status: TStatusCodes;
  response: {
    message: string | unknown;
    data?: any;
  };
};
