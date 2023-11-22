import { isInTestEnv } from "./index";

describe("Unit Tests for isInTestEnv", () => {
    it("should return true if process.env.NODE_ENV is test", () => {
        process.env.NODE_ENV = "test";
        expect(isInTestEnv()).toBe(true)
    });
    it("should return false if process.env.NODE_ENV is not test", () => {
        process.env.NODE_ENV = "development";
        expect(isInTestEnv()).toBe(false)
    });
});