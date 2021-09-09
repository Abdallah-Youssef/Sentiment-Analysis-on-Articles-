import 'babel-polyfill'
import { fetchData } from '../js/api'

const data = {
    "test" : 1
}

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(data),
  })
);

test("Calls the server", async () => {
    const testUrl = "testUrl"
    const res = await fetchData("localhost:8080/analyse", testUrl )

    expect(fetch).toHaveBeenCalledWith("localhost:8080/analyse", {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({url : testUrl})
    })
    expect(res).toBeDefined()
    expect(res.test).toEqual(data.test)
    expect(fetch).toHaveBeenCalledTimes(1)
})

test("handles error", async () => {
    const error = "Failed"
    fetch.mockImplementationOnce(() => Promise.reject(error))
    const res = await fetchData("localhost:8080/analyse", {url: ""} )
    expect(res).toEqual(error)

})