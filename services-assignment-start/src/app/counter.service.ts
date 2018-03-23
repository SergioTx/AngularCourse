import { EventEmitter } from "@angular/core";

export class CounterService {
    countUpdated = new EventEmitter();

    toInactiveCounter: number = 0;
    toActiveCounter: number = 0;

    toInactive() {
        this.toInactiveCounter++;
        this.countUpdated.emit(null);
    }

    toActive() {
        this.toActiveCounter++;
        this.countUpdated.emit(null);
    }
}