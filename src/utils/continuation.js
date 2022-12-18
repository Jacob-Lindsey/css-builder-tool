import EventEmitter3 from "eventemitter3";

export default class Continuation extends EventEmitter3 {
    constructor(status, promise) {
        super();
        this.next = promise;
        this.status = status;
        this.aborted = false;
    }
    static all(ary) {
        return Promise.all(ary).then(results => Promise.all(results.map(result => result instanceof Continuation ? result.toPromise() : result)));
    }
    static map(promise, fn) {
        return promise.then(result => {
            if(result instanceof Continuation) {
                const continuation = new Continuation(fn(result.status), Continuation.map(result.next, fn));
                continuation.on("abort", () => {
                    result.abort();
                });
                return continuation;
            }
            return fn(result);
        });
    }
    toPromise(...args) {
        const promise = new Promise((resolve, reject) => {
            this.next.then(result => {
                resolve(result instanceof Continuation ? result.toPromise() : result);
            }, error => {
                reject(error);
            });
        });
        if(args.length > 0) return promise.then(...args);
        return promise;
    }
    abort() {
        this.emit("abort");
        this.aborted = true;
    }
}