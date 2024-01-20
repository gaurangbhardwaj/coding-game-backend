const challenges = [
  {
    id: 0,
    title: "Add two numbers",
    description: [
      "You are given two numbers, x and y",
      "You need to add them and return the sum.",
    ],
    notes: [
      "Try to come up with an algorithm that is less than or equal to O(1) time complexity",
      "Try to come up with an algorithm that is less than or equal to O(1) space complexity",
    ],
    examples: [
      {
        id: 0,
        input: "x=0 y=1",
        output: "1",
      },
      {
        id: 1,
        input: "x=1 y=2",
        output: "3",
      },
      {
        id: 2,
        input: "x=100 y=20",
        output: "120",
      },
    ],
    default_code: `function addTwoNumbers(x, y) {
  let result;
  // Write your code here
  return result;
}`,
    test_function: [
      "function test(result, expected) {",
      "return result === expected;",
      "}",
    ],
    testcase: [
      {
        id: 0,
        input: "const result1 = addTwoNumbers(0, 1);",
        output: "console.log(test(result1, 1));",
      },
      {
        id: 1,
        input: "const result2 = addTwoNumbers(1, 2);",
        output: "console.log(test(result2, 3));",
      },
      {
        id: 2,
        input: "const result3 = addTwoNumbers(100, 20);",
        output: "console.log(test(result3, 120));",
      },
    ],
  },
  {
    id: 1,
    title: "Check if number is even",
    description: [
      "You are given one number x",
      "You need to check whether its even or not",
    ],
    notes: [
      "Try to come up with an algorithm that is less than or equal to O(1) time complexity",
      "Try not to use any third varibale",
    ],
    examples: [
      {
        id: 0,
        input: "x=2",
        output: "true",
      },
      {
        id: 1,
        input: "x=1",
        output: "false",
      },
      {
        id: 2,
        input: "x=100",
        output: "true",
      },
    ],
    default_code: `function isEven(x) {
  let result;
  // Write your code here
  return result;
}`,
    test_function: [
      "function test(result, expected) {",
      "return result === expected;",
      "}",
    ],
    testcase: [
      {
        id: 0,
        input: "const result1 = isEven(2);",
        output: "console.log(test(result1, true));",
      },
      {
        id: 1,
        input: "const result2 = isEven(1);",
        output: "console.log(test(result2, false));",
      },
      {
        id: 2,
        input: "const result3 = isEven(100);",
        output: "console.log(test(result3, true));",
      },
    ],
  },
  {
    id: 2,
    title: "Get factorial of a number",
    description: [
      "You are given one number x",
      "You need to get factorial of a number",
    ],
    notes: [
      "Try to come up with an algorithm that is less than or equal to O(n) time complexity",
    ],
    examples: [
      {
        id: 0,
        input: "x=6",
        output: "720",
      },
      {
        id: 1,
        input: "x=2",
        output: "2",
      },
    ],
    default_code: `function factorial(x) {
  let result;
  // Write your code here
  return result;
}`,
    test_function: [
      "function test(result, expected) {",
      "return result === expected;",
      "}",
    ],
    testcase: [
      {
        id: 0,
        input: "const result1 = factorial(6);",
        output: "console.log(test(result1, 720));",
      },
      {
        id: 1,
        input: "const result2 = factorial(2);",
        output: "console.log(test(result2, 2));",
      },
    ],
  },
  {
    id: 3,
    title: "Check if number is positive",
    description: [
      "You are given one number x",
      "You need to check if number is positive",
    ],
    notes: [
      "Try to come up with an algorithm that is less than or equal to O(1) time complexity",
      "Try to come up with an algorithm that is less than or equal to O(1) space complexity",
    ],
    examples: [
      {
        id: 0,
        input: "x=1",
        output: "true",
      },
      {
        id: 1,
        input: "x=0",
        output: "false",
      },
      {
        id: 2,
        input: "x=-2",
        output: "false",
      },
    ],
    default_code: `function isPositive(x) {
  let result;
  // Write your code here
  return result;
}`,
    test_function: [
      "function test(result, expected) {",
      "return result === expected;",
      "}",
    ],
    testcase: [
      {
        id: 0,
        input: "const result1 = isPositive(1);",
        output: "console.log(test(result1, true));",
      },
      {
        id: 1,
        input: "const result2 = isPositive(0);",
        output: "console.log(test(result2, false));",
      },
      {
        id: 2,
        input: "const result3 = isPositive(-2);",
        output: "console.log(test(result3, false));",
      },
    ],
  },
  {
    id: 4,
    title: "Reverse a string",
    description: [
      "You are given one string x",
      "You need to reverse that string",
    ],
    notes: [
      "Try to come up with an algorithm that is less than or equal to O(n) time complexity",
      "Try to come up with an algorithm that is less than or equal to O(1) space complexity",
    ],
    examples: [
      {
        id: 0,
        input: "x='DOG'",
        output: "GOD",
      },
      {
        id: 1,
        input: "x='HELLO'",
        output: "OLLEH",
      },
    ],
    default_code: `function reverse(x) {
  let result;
  // Write your code here
  return result;
}`,
    test_function: [
      "function test(result, expected) {",
      "return result === expected;",
      "}",
    ],
    testcase: [
      {
        id: 0,
        input: "const result1 = reverse('DOG');",
        output: "console.log(test(result1, 'GOD'));",
      },
      {
        id: 1,
        input: "const result2 = reverse('HELLO');",
        output: "console.log(test(result2, 'OLLEH'));",
      },
    ],
  },
];

module.exports = challenges;
