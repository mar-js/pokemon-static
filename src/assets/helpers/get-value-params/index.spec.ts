import { GET_VALUE_PARAMS } from './'

beforeEach(() => {
  global.fetch = jest.fn().mockImplementationOnce(() =>
    Promise.resolve({
      ok: true,
      status: 200,
      json: () => Promise.resolve({}),
    })
  );
});

describe('Get Value Params', () => {
  it('Render', () => {
    expect(GET_VALUE_PARAMS('pikachu')).toBeTruthy()
  })
})
