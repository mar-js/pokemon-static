import { waitFor } from '@testing-library/react';
import { GET_POKEMON } from './'

beforeEach(() => {
  global.fetch = jest.fn().mockImplementationOnce(() =>
    Promise.resolve({
      ok: true,
      status: 200,
      json: () => Promise.resolve({}),
    })
  );
});

describe('Get Pokemon', () => {
  it('Render', async  () => {
    await waitFor(() => expect(GET_POKEMON('pikachu')).toBeTruthy())
  })
})
