// 242. Valid Anagram
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false

// Constraints:
// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.

function sortString(s: string): string {
  let arr = s.split("");
  let sorted_arr = arr.sort();
  let sorted_str = sorted_arr.join("");

  return sorted_str;
}

function isAnagram(s: string, t: string): boolean {
  let sorted_first_value = sortString(s);
  let sorted_second_value = sortString(t);

  if (sorted_first_value === sorted_second_value) {
    return true;
  }

  return false;
}
