
describe('Calculate Score Function', function () {
    it('Deve retornar 0 quando não houver inputs selecionados', function () {
        spyOn(document, 'input').and.returnValue([]);
        const result = calculateScore();

        expect(result).toEqual(0);
    });
});