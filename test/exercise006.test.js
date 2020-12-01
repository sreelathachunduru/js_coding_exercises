const {
    sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
    createMatrix,
    areWeCovered
    } = require("../challenges/exercise006");
  
    describe("sumMultiples", () => {
      test("returns the sum of numbers which are a multiple of 3 or 5", () => {
        expect(sumMultiples([3, 15])).toBe(18);
        expect(sumMultiples([26,9, 10, 5])).toBe(24);
        expect(sumMultiples([])).toBe(0);
      });
    
    });
  
    describe("isValidDNA", () => {
      test("returns True if the string may contain characters C, G, T or A only", () => {
        expect(isValidDNA("CGTAG")).toBe(true);
        expect(isValidDNA("CTAGT")).toBe(true);
      });
  
      test("returns False if the string does not contain characters C, G, T or A only", () => {
        expect(isValidDNA("DGRA")).toBe(false);
        expect(isValidDNA("CATB")).toBe(false);
      });
    });
  
    describe("getComplementaryDNA", () => {
      test("returns a string of the complementary base pairs", () => {
        expect(getComplementaryDNA("ACTG")).toBe("TGAC");
        expect(getComplementaryDNA("TGAC")).toBe("ACTG");
      });
    });
  
    describe("isItPrime", () => {
      test("returns True if is primer number", () => {
        expect(isItPrime(7)).toBe(true);
        expect(isItPrime(11)).toBe(true);
      });
  
      test("returns False if is not a primer number", () => {
        expect(isItPrime(6)).toBe(false);
        expect(isItPrime(20)).toBe(false);
      });
    });
  
    describe("createMatrix", () => {
      test("returns a Matrix", () => {
        expect(createMatrix(9, "foo")).toEqual([["foo","foo","foo"],["foo","foo","foo"],["foo","foo","foo"]]);
  
      });
    });
  
    describe("areWeCovered", () => {
      test("returns true if have 3 staffs per day", () => {
        const staff = [
          {
            name: "Sally",
            rota: ["Monday", "Tuesday", "Friday"]
          },
          {
            name: "Patricia",
            rota: ["Monday", "Tuesday", "Friday"]
          },
          {
            name: "Karen",
            rota: ["Monday", "Tuesday", "Friday"]
          },
          {
            name: "Pedro",
            rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"]
          },
          {
            name: "Bell",
            rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"]
          },
          {
            name: "Jose",
            rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"]
          }
        ];
    
        expect(areWeCovered(staff, "Monday")).toBe(true);
      })
    });