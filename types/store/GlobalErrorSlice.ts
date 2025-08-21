export type ErrorType = "noInternet" | "def";

export interface GlobalErrorSliceType {
  currentError: {
    header: string;
    des: string;
    type: ErrorType;
  } | null;
}
