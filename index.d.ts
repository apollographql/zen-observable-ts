export interface Subscription {
  closed: boolean;
  unsubscribe(): void;
}

interface SubscriptionObserver<T> {
  closed: boolean;
  next(value: T): void;
  error(errorValue: any): void;
  complete(): void;
}

export interface Observer<T> {
  start?(subscription: Subscription): any;
  next?(value: T): void;
  error?(errorValue: any): void;
  complete?(): void;
}

export type Subscriber<T> = (
  observer: SubscriptionObserver<T>,
) => void | (() => void) | Subscription;

interface ObservableLike<T> {
  subscribe?: Subscriber<T> | undefined;
  [Symbol.observable](): Observable<T> | ObservableLike<T>;
}

export declare class Observable<T> {
  constructor(subscriber: Subscriber<T>);

  subscribe(observer: Observer<T>): Subscription;
  subscribe(
    onNext: (value: T) => void,
    onError?: (error: any) => void,
    onComplete?: () => void,
  ): Subscription;

  [Symbol.observable](): Observable<T>;

  forEach(callback: (value: T) => void): Promise<void>;
  map<R>(callback: (value: T) => R): Observable<R>;
  filter<S extends T>(callback: (value: T) => value is S): Observable<S>;
  filter(callback: (value: T) => boolean): Observable<T>;
  reduce(callback: (previousValue: T, currentValue: T) => T, initialValue?: T): Observable<T>;
  reduce<R>(callback: (previousValue: R, currentValue: T) => R, initialValue?: R): Observable<R>;
  flatMap<R>(callback: (value: T) => ObservableLike<R>): Observable<R>;
  concat<R>(...observable: Array<Observable<R>>): Observable<R>;

  static from<R>(observable: Observable<R> | ObservableLike<R> | ArrayLike<R>): Observable<R>;
  static of<R>(...items: R[]): Observable<R>;
}
