import { Role } from "../generated/client";

declare global {
  namespace Express {
    export interface Request {
      user?: {
        id: number;
        name: string;
        email: string;
        role: Role;
      };
    }
  }
}
