export default function bs_list(haystack: number[], needle: number): boolean {
    let highIndex = haystack.length;
    let lowerIndex = 0;


    do {
        let midIndex = Math.floor(lowerIndex + (highIndex - lowerIndex)/2);
        let value = haystack[midIndex];
        if (value === needle){
            return true
        }else if (value > needle){
            highIndex = midIndex;
        }else {
            lowerIndex = midIndex + 1;
        }
    }while (lowerIndex < highIndex);
    return false;


}