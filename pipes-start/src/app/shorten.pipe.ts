import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

    /*transform(value: any) {
        if (value.length > 10) {
            return value.substr(0, 10) + '...';
        }
        return value;
    }*/

    transform(value: any, limit: number = 5 /*Default*/) {
        if (value.length > limit) {
            return value.substr(0, limit) + '...';
        }
        return value;
    }
}