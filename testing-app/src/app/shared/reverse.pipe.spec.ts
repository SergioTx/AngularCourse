import { ReversePipe } from './reverse.pipe';

// ISOLATED TEST - not depending on Angular
describe('UserComponent', () => {

    it('Should create the app', () => {
        const reversePipe = new ReversePipe();
        expect(reversePipe.transform('hello')).toEqual('olleh');
    });
});
