import { retrieveSensorsData } from "./sensorsApi";
import { data } from '../../../data/mock-homepage-data'

describe("Unit Tests for retrieveSensorData", () => {
   it("In test environment, return mock data", () => {
      jest.mock("../env/index.js", () => ({
         isInTestEnv: () => true,
      }));
      expect(retrieveSensorsData()).toBe(data.facades);
   });
});