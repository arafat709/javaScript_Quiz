//1(Convert the following array into a string using `toString()`: ['apple', 'banana', 'cherry']")
let strArray = ['apple', 'banana', 'cherry'];
console.log(strArray.toString());

//2(Access the 3rd element of this array using `at()`: [10, 20, 30, 40, 50]")
let findEl =  [10, 20, 30, 40, 50];
console.log(findEl.at(2));

//3(Join all elements of the following array into a single string, separated by a hyphen (-): ['red', 'green', 'blue']",)
let joinArray = ['red', 'green', 'blue'];
console.log(joinArray.join("-"));

//4(Remove the last element from the following array : [1, 2, 3, 4, 5]", )
let deleteEl = [1, 2, 3, 4, 5];
console.log(deleteEl.pop());
// console.log(deleteEl.splice(4,1));

//5(Add a new element 'grape' to the end of this array: ['apple', 'banana']",)
// let addEl = ['apple', 'banana'];
// console.log(addEl.push('grape'));

let addEl = ['apple', 'banana'];
addEl.push('grape');
console.log(addEl);

//6(Remove the first element from the following array : ['car', 'bike', 'bus']",)
let removeEl = ['car', 'bike', 'bus'];
removeEl.shift();
console.log(removeEl);

//7(Add 'train' and 'plane' to the beginning of this array: ['boat', 'ship']")
let add2el = ['boat', 'ship'];
add2el.unshift("train","plane");
console.log(add2el);

//8(Use `delete` to remove the 2nd element from this array: ['dog', 'cat', 'bird']",)
let deleteItm = ['dog', 'cat', 'bird'];
delete deleteItm[1];
console.log(deleteItm);

//9(Merge these two arrays: [1, 2, 3] and [4, 5, 6]",)
let array1 = [1,2,3];
let array2 = [4,5,6];
console.log(array1.concat(array2));

//10(You have an array ["a", "b", "c", "d", "e", "f"], delete “c” and “d”)
let spliceArray = ["a", "b", "c", "d", "e", "f"];
console.log(spliceArray.splice(2,2));

//11(You have an array ["first", "second", "third", "fourth", "fifth","sixth","seventh","eighth","nineth" ]. Print the element at index 4.)
let Arrr =  ["first", "second", "third", "fourth", "fifth","sixth","seventh","eighth","nineth" ];
console.log(Arrr.at(4));

//12(let longString = "apple banana cherry date elderberry fig grape honeydew kiwi lemon mango nectarine orange papaya quince raspberry strawberry tangerine ugli vine watermelon yam zucchini apricot blackberry cantaloupe elderberry fennel grapefruit honeycrisp jackfruit kumquat lime melon nectar olive peach pear plum pomegranate rhubarb starfruit tomato vanilla"; 
// Find the index number of “fennel” from the variable longString.)
let longString = "apple banana cherry date elderberry fig grape honeydew kiwi lemon mango nectarine orange papaya quince raspberry strawberry tangerine ugli vine watermelon yam zucchini apricot blackberry cantaloupe elderberry fennel grapefruit honeycrisp jackfruit kumquat lime melon nectar olive peach pear plum pomegranate rhubarb starfruit tomato vanilla"; 
console.log(longString.indexOf("fennel"));

//13(You have an array ["apple", "banana", "cherry", "date", "fig"]. Remove the last two elements and print the updated array. [ you can use method multiple time you need ])
let fruits = ["apple", "banana", "cherry", "date", "fig"];
console.log(fruits.splice(3,2));

//14(You have an array ["dog","cat","fish","bird"].Convert this array into a comma-separated string)
let animal = ["dog","cat","fish","bird"];
console.log(animal.join(","));

//15(You have an array ["apple","Orange","banana","grape"].Create a string with each element separated by a hyphen("-"))
let hypn = ["apple","Orange","banana","grape"];
console.log(hypn.join("-"));

//16(You have an array["b","c","d"].Add the element "a","b" and "c" to the beginning of the array in a single call. print the updated array.)
let addABC = ["b","c","d"];
addABC.unshift("a","b","c");
console.log(addABC);

//17(You have an array[1,2,3,4,5].Use the delete operator to remove the element 4)
let delete4 = [1,2,3,4,5];
delete delete4[3];
console.log(delete4);

//18(You have two arrays [1, 2, 3] and [4, 5, 6]. Merge these arrays and then use slice() to get the first 4 elements of the resulting array.)
let mArray1 = [1, 2, 3];
let mArray2 = [4, 5, 6];
let mergingArrays = mArray1.concat(mArray2);
console.log(mergingArrays.splice(0,4));

//19(Given an array ["a", "b", "c", "d", "e"], Remove 2 elements starting from index 1 and insert "x" and "y" in their place. Print the updated array.)
let splArray = ["a", "b", "c", "d", "e"];
console.log(splArray.splice(1,2,"x","y"));
console.log(splArray);

//20(You have an array [10, 20, 30, 40, 50]. Use the slice() method to extract a subarray starting from index 1 and contain 3 elements.)
let tenToF = [10, 20, 30, 40, 50];
let subArray = tenToF.splice(1,3);
console.log(subArray);

//21(You have an array [1, 2, 3, 4, 5]. Convert this array into a string. Then use split() to convert it back into an array of strings. Print both the string and the resulting array.)
let newArray = [1, 2, 3, 4, 5];
let cString = newArray.toString();
console.log(cString);
let cArray = cString.split();
console.log(cArray);
//22(Given an array ["a", "b", "c", "d", "e", "f"], use the at() method to access and print the first and the last elements of the array.)
let atM = ["a", "b", "c", "d", "e", "f"];
console.log(atM.at(0));
console.log(atM.at(-1));

//23(Remove the 2nd element from this array: ['apple', 'banana', 'cherry', 'date']".)
let newArray2 = ['apple', 'banana', 'cherry', 'date'];
delete newArray2[1];
console.log(newArray2);

//24(Extract the first three elements from this array: [10, 20, 30, 40, 50]".)
let newArray3 = [10, 20, 30, 40, 50];
console.log(newArray3.slice(0,3));