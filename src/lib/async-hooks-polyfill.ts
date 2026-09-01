// Browser polyfill for node:async_hooks
// This prevents the AsyncLocalStorage error in @tanstack/start-storage-context
if (typeof globalThis !== "undefined") {
  if (!globalThis.AsyncLocalStorage) {
    globalThis.AsyncLocalStorage = class AsyncLocalStoragePolyfill {
      static instances = new WeakMap();
      private store: any = null;

      getStore() {
        return this.store;
      }

      enterWith(value: any) {
        this.store = value;
      }

      run(store: any, callback: Function, ...args: any[]) {
        const oldStore = this.store;
        this.store = store;
        try {
          return callback(...args);
        } finally {
          this.store = oldStore;
        }
      }
    };
  }
}

export {};
