import * as t44ms from "typescript-44ms";

export interface ServiceController {
  work_required_here: (ref: t44ms.Api.ref) => void;
  public_form_state_ready: (ref: t44ms.Api.ref) => void;
  public_form_fulfillment_ready: (ref: t44ms.Api.ref) => void;
}
