import * as React from "react";

export type UseQueryResult<T extends any, TRequest extends any> = {
  data: T | undefined;
  error: unknown | undefined;
  status: "idle" | "loading" | "error" | "success";
  mutateAsync: (request: TRequest) => Promise<T | null | undefined>;
};

export type QueryKey = string | readonly string[] | readonly [string, ...any[]];
export type QueryFunction<T extends any, TRequest extends any> = (
  request: TRequest
) => Promise<T> | T;
export type QueryFunctionContext<TQueryKey extends QueryKey> = {
  queryKey: TQueryKey;
  pageParam: unknown;
};

export const useQuery: <
  T extends any,
  TQueryKey extends QueryKey,
  TRequest extends any
>(
  queryKey: TQueryKey,
  queryFn: QueryFunction<T, TRequest>,
  options?: QueryOptions<T, TQueryKey>
) => UseQueryResult<T, TRequest> = <
  T extends any,
  TQueryKey extends QueryKey,
  TRequest extends any
>(
  queryKey: TQueryKey,
  queryFn: QueryFunction<T, TRequest>
) => {
  const [data, setData] = React.useState<T | undefined>(undefined);
  const [status, setStatus] =
    React.useState<UseQueryResult<T, TRequest>["status"]>("idle");

  const mutateAsync = React.useCallback(
    async (request: TRequest) => {
      setStatus("loading");
      const data = await queryFn(request);
      setData(data);
      setStatus("success");
      return data;
    },
    [queryKey]
  );

  const result: UseQueryResult<T, TRequest> = React.useMemo(
    () => ({
      data,
      error: null,
      status,
      mutateAsync,
    }),
    [data, status, mutateAsync]
  );

  return result;
};

export type QueryOptions<T extends any, _TQueryKey extends QueryKey> = {
  enabled?: boolean;
  initialData?: T;
  initialStale?: boolean;
  keepPreviousData?: boolean;
  onError?: (err: unknown) => void;
  onSuccess?: (data: T) => void;
  staleTime?: number;
  suspense?: boolean;
  useErrorBoundary?: boolean;
};
