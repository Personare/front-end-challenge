import { shuffleArrayElements } from '../../../components/utils';

describe('Utils', () => {
    describe('shuffleArrayElements', () => {
        it('Ao embaralhar os elementos, o array de retorno deve ter o mesmo tamanho.', () => {
            const array = [1, 2, 3, 4, 5];

            const result = shuffleArrayElements(array);
            expect(result.length).toBe(5);
        });

        it('Caso o array recebido seja vazio, deve retorná-lo vazio.', () => {
            const array = [];
            const result = shuffleArrayElements(array);

            expect(result).toStrictEqual([]);
        });
    });
});
