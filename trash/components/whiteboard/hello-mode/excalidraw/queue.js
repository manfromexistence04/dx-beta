import { promiseTry, resolvablePromise } from "./utils";
export class Queue {
    jobs = [];
    running = false;
    tick() {
        if (this.running) {
            return;
        }
        const job = this.jobs.shift();
        if (job) {
            this.running = true;
            job.promise.resolve(promiseTry(job.jobFactory, ...job.args).finally(() => {
                this.running = false;
                this.tick();
            }));
        }
        else {
            this.running = false;
        }
    }
    push(jobFactory, ...args) {
        const promise = resolvablePromise();
        this.jobs.push({ jobFactory, promise, args });
        this.tick();
        return promise;
    }
}
