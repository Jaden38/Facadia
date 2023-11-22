import { retrieveSensorsData } from "./sensorsApi";
import { data } from '../../../data/mock-homepage-data'

describe("Unit Tests for retrieveSensorDatax", () => {
   it("In test environment, return mock data", () => {
      const mockData = [{ name: "mockSensor" }];
      jest.mock("../env/index.js", () => ({
         isInTestEnv: () => true,
      }));
      jest.mock("../../../data/mock-homepage-data.js", () => ({
         data: {
            facades: mockData,
         },
      }));
      expect(retrieveSensorsData()).toEqual(data.facades);
   });
});