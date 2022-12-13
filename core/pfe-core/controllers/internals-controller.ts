import type { ReactiveController, ReactiveControllerHost } from 'lit';

export class InternalsController implements ReactiveController, ARIAMixin {
  #internals: ElementInternals;

  declare role: string;

  declare ariaAtomic: ARIAMixin['ariaAtomic'];
  declare ariaAutoComplete: ARIAMixin['ariaAutoComplete'];
  declare ariaBusy: ARIAMixin['ariaBusy'];
  declare ariaChecked: ARIAMixin['ariaChecked'];
  declare ariaColSpan: ARIAMixin['ariaColSpan'];
  declare ariaColCount: ARIAMixin['ariaColCount'];
  declare ariaColIndex: ARIAMixin['ariaColIndex'];

  constructor(
    public host: ReactiveControllerHost & HTMLElement,
  ) {
    this.#internals = host.attachInternals();
    new Proxy(this, {
      get: (target: InternalsController, key) => {
        if (key in target.#internals) {
          return target.#internals[key as keyof ElementInternals];
        } else {
          return target[key as keyof InternalsController];
        }
      },
      set(target, key, value) {
        if (key in target.#internals) {
          // @ts-expect-error: the effort to type this up properly is not worth it ATM
          return target.#internals[key] = value;
        } else {
          // @ts-expect-error: the effort to type this up properly is not worth it ATM
          return target[key] = value;
        }
      }
    });
  }

  hostConnected?(): void

  submit() {
    this.#internals.form?.requestSubmit(this.host);
  }

  reset() {
    this.#internals.form?.reset();
  }
}
