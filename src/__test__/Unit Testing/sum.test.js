import { sum } from "../../../sum";  

test("should be sum of two number", () => {
    const result = sum(5, 4)
    
    expect(result).toBe(9);

})