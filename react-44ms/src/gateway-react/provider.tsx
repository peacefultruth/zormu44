import * as React from "react";

import { Client } from "./client";
import { ProviderContext } from "./provider-context";
import { ProviderContextConsumer } from "./provider-context-consumer";

export interface ProviderProps {
  children: React.ReactNode;
  client: Client;
}
export const Provider: React.FunctionComponent<ProviderProps> = (props) => {
  const client = React.useRef(props.client);
  const reactEventPipelineGateway = React.useRef<HTMLInputElement>(null);
  const reactEventQueue = React.useRef<CallableFunction[]>([]);

  const pushAnEventIntoReact: ProviderContextConsumer["pushAnEventIntoReact"] =
    React.useCallback((callback) => {
      reactEventQueue.current = [...reactEventQueue.current, ...[callback]];
      reactEventPipelineGateway.current?.click();
    }, []);

  const handleReactEventPipelineGatewayTrigger: React.MouseEventHandler<HTMLInputElement> =
    React.useCallback((event) => {
      event.preventDefault();
      event.stopPropagation();
      reactEventQueue.current.forEach((callback) => {
        callback();
      });
      reactEventQueue.current = [];
    }, []);

  const value: ProviderContextConsumer = React.useMemo(
    () => ({
      client: client.current,
      pushAnEventIntoReact,
    }),
    [pushAnEventIntoReact]
  );
  return (
    <ProviderContext.Provider value={value}>
      {props.children || []}

      <React.Fragment>
        <input
          ref={reactEventPipelineGateway}
          type="hidden"
          className="react-and-react-44ms-needs-me-anakin--also-im-imasenator"
          style={{ display: "none !important" }}
          onClick={handleReactEventPipelineGatewayTrigger}
        />
      </React.Fragment>
    </ProviderContext.Provider>
  );
};
