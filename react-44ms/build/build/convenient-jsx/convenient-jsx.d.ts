/// <reference types="react" />
import * as t44ms from "typescript-44ms";
declare global {
    namespace React {
        interface FormHTMLAttributes<T> extends React.HTMLAttributes<T> {
            React44ms_onSubmit?: t44ms.Api.form["onSubmit"];
        }
        interface InputHTMLAttributes<T> extends React.HTMLAttributes<T> {
            React44ms_onChange?: t44ms.Api.input["onChange"];
        }
        interface OutputHTMLAttributes<T> extends React.HTMLAttributes<T> {
            React44ms_value?: any;
        }
        interface FulfillHtmlAttributes<T> extends React.HTMLAttributes<T> {
            name: string;
            handler?: any;
        }
    }
    namespace JSX {
        interface IntrinsicElements {
            fulfill: React.DetailedHTMLProps<React.FulfillHtmlAttributes<HTMLOutputElement>, HTMLOutputElement>;
        }
    }
}
