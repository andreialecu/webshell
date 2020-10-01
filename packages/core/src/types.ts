import type {
  ComponentType,
  ForwardRefExoticComponent,
  RefAttributes,
  ElementRef,
  ComponentPropsWithoutRef,
  Ref
} from 'react';
import type {
  Feature,
  FeatureClass,
  ExtractFeatureFromClass,
  ExtractPropsFromFeature
} from './Feature';

// LOOKUP TYPES

/**
 * A lookup type to get the shell component from `WebView` and feature classes.
 *
 * @example
 *
 * ```ts
 * type MyShellComponent = ExtractWebshellFromFeatClass<
 *  typeof WebView,
 *  [typeof HandleElementCSSBoxFeature]
 * >;
 * ```
 *
 * @typeparam C - The type of the `WebView` component.
 * @typeparam F - The type for a collection of features classes.
 *
 * @public
 */
export type ExtractWebshellFromFeatClass<
  C extends ComponentType<any>,
  F extends FeatureClass<any, any, any>[]
> = WebshellComponent<C, ExtractFeatureFromClass<F[number]>[]>;

/**
 * A lookup type to extract Web Handler specs from {@link WebHandlerDefinition}.
 *
 * @public
 */
export type ExtractWebHandlerSpecFromDef<S> = S extends WebHandlerDefinition<
  infer P,
  infer I
>
  ? {
      [k in I]: WebHandlerDefinition<P, I>;
    }
  : never;

/**
 * A lookup type to extract props from {@link PropsSpecs}.
 *
 * @public
 */
export type ExtractPropsFromSpecs<S> = S extends PropsSpecs<infer N, any>
  ? S[N] extends never
    ? {}
    : Required<S[N]>['signature']
  : never;

/**
 * A lookup type to extract Web handler specs from {@link Feature}.
 *
 * @public
 */
export type ExtractWebHandlerSpecsFromFeature<F> = F extends Feature<
  any,
  any,
  infer P
>
  ? P
  : never;

// CONCRETE TYPES

/**
 * A shell component type derived from its features.
 *
 * @typeparam C - A type of the `WebView` component.
 * @typeparam F - A type for a collection of features to inject.
 *
 * @public
 */
export type WebshellComponent<
  C extends ComponentType<any>,
  F extends Feature<any, any, any>[]
> = ForwardRefExoticComponent<
  WebshellProps<ComponentPropsWithoutRef<C>, F> & RefAttributes<ElementRef<C>>
>;

/**
 * A minimal set of attributes to define a feature.
 *
 * @typeparam O - A type describing the shape of the JSON-serializable object that will be passed to the Web script.
 *
 * @public
 */
export type FeatureDefinition<O extends {}> = {
  /**
   * The string containing valid ECMAScript 5 to be run in the WebView.
   *
   * @remarks
   * The script must define a single function which only argument is of the
   * type {@link WebjsContext}.
   *
   * It is recommended that you use eslint to validate this script syntax, and
   * event better, unit-test the script. See our repository home page for more
   * information.
   */
  readonly script: string;
  /**
   * A unique identifier of the feature. The convention is to use a reverse
   * namespace domain ending with the feature name.
   *
   * @example
   * org.formidable-webview/webshell.link-press
   */
  readonly identifier: string;
  /**
   * These options will be shallow-merged with the options provided to the {@link FeatureClass}.
   */
  readonly defaultOptions: Required<O>;
};

/**
 * An object to define an API to send messages from shell to Web.
 *
 * @typeparam I - A type for the unique handler identifier to disambiguate between messages sent to Web handlers.
 * @typeparam P - A type describing the shape of payloads sent to Web handlers.
 *
 * @public
 */
export interface WebHandlerDefinition<P, I extends string> {
  handlerId: I;
  payload?: P;
  async: false;
}

/**
 * An object describing the structure of messages a feature Web script can handle.
 *
 * @typeparam I - A type for the unique handler identifier to disambiguate between messages sent to Web handlers.
 * @typeparam P - A type describing the shape of payloads sent to Web handlers.
 *
 * @public
 */
export type WebHandlersSpecs<P = {}, I extends string = string> = {
  [k in I]: WebHandlerDefinition<P, I>;
};

/**
 * An object to define an API to send messages from Web to shell.
 *
 * @typeparam N - A type to define the name of the prop.
 * @typeparam P - A type describing the shape of the prop.
 *
 * @public
 */
export type PropDefinition<N extends string, P> = {
  handlerId: string;
  type: 'handler' | 'inert';
  featureIdentifier: string;
  name: N;
  signature?: Partial<Record<N, P>>;
};

/**
 *
 * @typeparam N - A type to define the names of the props.
 * @typeparam P - A type describing the shapes of the props.
 *
 * @public
 */
export type PropsSpecs<N extends string, P> = {
  [k in N]: PropDefinition<k, P>;
};

/**
 * An object to send messages from the shell to the Web.
 *
 * @public
 */
export interface WebHandle {
  /**
   *
   * @param feat - The feature to which a message should be sent.
   * @param handlerId - The handler identifier used in the Web script to register a listener.
   * @param payload - The type of the message to sent.
   */
  postMessageToWeb<
    F extends Feature<any, any, any>,
    H extends keyof ExtractWebHandlerSpecsFromFeature<F>
  >(
    feat: F,
    handlerId: H,
    payload: Required<ExtractWebHandlerSpecsFromFeature<F>[H]>['payload']
  ): void;
}

/**
 * Props all shell components will support.
 *
 * @public
 */
export interface WebshellInvariantProps {
  /**
   * Triggered when a feature script throws.
   */
  onWebFeatureError?: (featureIdentifier: string, error: string) => void;
  /**
   * Report Web error messages from features in the console.
   *
   * @defaultvalue `__DEV__`
   */
  webshellDebug?: boolean;
  /**
   * Pass a reference to send messages to the Web environment.
   */
  webHandle?: Ref<WebHandle>;
}

/**
 * Props of the Webshell produced by {@link makeWebshell}.
 *
 * @typeparam W - The type for the Props of the `WebView` component.
 * @typeparam F - The type for a collection of features classes.
 *
 * @public
 */
export type WebshellProps<
  W extends MinimalWebViewProps,
  F extends Feature<any, any, any>[]
> = WebshellInvariantProps &
  W &
  (F[number] extends never ? {} : ExtractPropsFromFeature<F[number]>);

/**
 * A high-compatibility type expressing minimal requirements for the
 * WebView Component's props.
 *
 * @public
 */
export interface MinimalWebViewProps {
  readonly onMessage?: unknown;
  readonly onError?: unknown;
  readonly injectedJavaScript?: unknown;
  readonly javaScriptEnabled?: unknown;
  readonly source?: Record<string, any>;
  readonly style?: unknown;
  readonly onNavigationStateChange?: unknown;
  readonly scalesPageToFit?: unknown;
  readonly showsVerticalScrollIndicator?: unknown;
  readonly disableScrollViewPanResponder?: unknown;
}

// Web TYPES

/**
 * A collection of utilities to manipulate the DOM.
 *
 * @public
 */
export interface DOMUtils {
  /**
   * Get one element in the DOM from a request. See {@link DOMElementRequest}.
   *
   * @returns An {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement | HTMLElement} or `null`.
   */
  getDOMSelection(selector: DOMElementRequest): HTMLElement | null;
  /**
   * Get a collection of live elements in the DOM from a query request.
   *
   * @param selector - Which elements should be returned?
   * @returns A live {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection | HTMLCollection}.
   */
  getDOMSelectionAll(selector: DOMElementQueryRequest | string): any;
  /**
   * Get a collection of static elements in the DOM from a class or tag-name request.
   *
   * @param selector - Which elements should be returned?
   * @returns A static {@link https://developer.mozilla.org/en-US/docs/Web/API/NodeList | NodeList}.
   */
  getDOMSelectionAll(
    selector: DOMElementClassNameRequest | DOMElementTagNameRequest
  ): any;
  /**
   * @param style - The style to parse, e.g. `'18px'`
   *
   * @returns Numeric value in CSS pixels.
   */
  numericFromPxString(style: string): number;
}

/**
 * This type specifies the shape of the object passed to Web features scripts.
 *
 * @typeparam O - A type describing the shape of the JSON-serializable object given by the shell.
 *
 * @public
 */
export interface WebjsContext<O extends {}> {
  /**
   * The options to customize the script behavior.
   */
  readonly options: O;
  /**
   * Instruct the shell to call **the default handler** associated with
   * this feature, if any.
   *
   * @param payload - The value which will be passed to the handler.
   */
  postMessageToShell<P>(payload: P): void;
  /**
   * Instruct the shell to call the handler associated with this
   * feature and `eventId`, if any.
   *
   * @param handlerId - A unique string to disambiguate between different shell handlers.
   * You can omit this param if you are sending to `"default"` handler.
   * @param payload - The value which will be passed to the handler.
   */
  postMessageToShell<P>(handlerId: string, payload: P): void;
  /**
   * Register a handler on messages sent from the shell.
   *
   * @param handlerId - A unique string to disambiguate between different Web handlers.
   * @param payload - The value which will be passed to the handler.
   */
  onShellMessage<P>(handlerId: string, handler: (payload: P) => void): void;
  /**
   * Create a function which execute a callback in a try-catch block that will
   * grab errors en send them to the `Webshell` component.
   *
   * @param callback - The callback to try-catch.
   */
  makeCallbackSafe<T extends Function>(callback: T): T;
  /**
   * Safely post a warn message to the console. The message will be routed to
   * shell and printed in the React Native console during development.
   */
  warn(message: string): void;
  /**
   * Safely post an info message to the console. The message will be routed to
   * shell and printed in the React Native console during development.
   */
  info(message: string): void;

  /**
   * A collection of utilities to manipulate the DOM.
   */
  utils: DOMUtils;
}

/**
 * @public
 */
export interface DOMRectSize {
  width: number;
  height: number;
}

/**
 * See {@link https://developer.mozilla.org/en-US/docs/Web/API/DOMRect | DOMRect}.
 *
 * @public
 */
export interface DOMRect extends DOMRectSize {
  top: number;
  left: number;
  right: number;
  bottom: number;
}

/**
 * A request to select one element in the DOM.
 *
 * @remarks
 * A string will be interpreted as a “query” request.
 * See {@link https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector | Document.querySelector() } and {@link DOMElementQueryRequest}.
 *
 * @public
 */
export type DOMElementRequest =
  | DOMElementQueryRequest
  | DOMElementClassNameRequest
  | DOMElementIdRequest
  | DOMElementTagNameRequest
  | string;

/**
 * A request to select a collection of elements in the DOM.
 *
 * @remarks
 * A string will be interpreted as a “query” request.
 * See {@link https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll | Document.querySelectorAll() } and {@link DOMElementQueryRequest}.
 *
 * @public
 */
export type DOMCollectionRequest =
  | DOMElementQueryRequest
  | DOMElementClassNameRequest
  | DOMElementTagNameRequest
  | string;

/**
 * A request by query string.
 * See {@link https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll | Document.querySelectorAll() }
 * and {@link https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector | Document.querySelector() }
 *
 * @public
 */
export type DOMElementQueryRequest = {
  query: string;
};

/**
 * A request by id (case-insensitive);
 * See {@link https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById | Document.getElementById() }
 *
 * @public
 */
export type DOMElementIdRequest = {
  id: string;
};

/**
 * A request by one or many case-sensitive class names, separated by spaces.
 * See {@link https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName | Document.getElementsByClassName() }
 *
 * @public
 */
export type DOMElementClassNameRequest = {
  className: string;
};

/**
 * A query by tag name.
 * See {@link https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName | Document.getElementsByTagName() }
 *
 * @remarks
 * `'html'` will select `document.documentElement`.
 *
 * @public
 */
export type DOMElementTagNameRequest = {
  tagName: string;
};
