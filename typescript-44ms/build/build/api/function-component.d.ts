/// <reference types="react" />
export type FunctionComponent<YourPropsType extends unknown = {}> = (props: Omit<YourPropsType, "ref"> & {
    ref: string;
}) => JSX.Element;
