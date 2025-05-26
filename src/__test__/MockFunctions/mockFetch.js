
export const mockFetch = (data) => {
  global.fetch = jest.fn(() => {
    return Promise.resolve({
      json: () => {
        return Promise.resolve(data)
      }
    })
  })
}