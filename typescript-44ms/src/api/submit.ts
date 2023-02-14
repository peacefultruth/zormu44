import { useService } from "./use-service";

export const submit = (submission: true) => {
  const { useSubmit } = useService();
  const submitter = useSubmit();
  return submitter.submit(submission);
};

submit.NO_SUBMIT_FOUND_INVALID_FORM_REASON_KEY = Symbol.for(
  "React44ms/FORM_SUBMIT_INVALID_NO_SUBMIT_KEY"
);
