import { add } from "./thing"

describe("add", () => {
    it("adds 2 numbers", () => {
        expect(add(3,1)).toBe(4)
    })
})