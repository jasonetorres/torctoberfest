import { describe, expect, test } from "vitest";
import { capitalizeFirst, capitalizeWords, capitalizeAll } from "../utilities/formatters/string.js";

describe("String Capitalization Utilities", () => {
  describe("capitalizeFirst", () => {
    describe("Valid Inputs", () => {
      test("should capitalize first letter of lowercase string", () => {
        expect(capitalizeFirst("hello world")).toBe("Hello world");
      });

      test("should keep first letter capitalized if already uppercase", () => {
        expect(capitalizeFirst("Hello world")).toBe("Hello world");
      });

      test("should not change rest of string", () => {
        expect(capitalizeFirst("hELLO wORLD")).toBe("HELLO wORLD");
      });

      test("should handle single character", () => {
        expect(capitalizeFirst("h")).toBe("H");
        expect(capitalizeFirst("H")).toBe("H");
      });

      test("should handle empty string", () => {
        expect(capitalizeFirst("")).toBe("");
      });

      test("should handle string starting with number", () => {
        expect(capitalizeFirst("123abc")).toBe("123abc");
      });

      test("should handle string starting with special character", () => {
        expect(capitalizeFirst("!hello")).toBe("!hello");
        expect(capitalizeFirst("@world")).toBe("@world");
      });
    });

    describe("Whitespace Handling", () => {
      test("should handle string starting with whitespace", () => {
        expect(capitalizeFirst(" hello")).toBe(" hello");
      });

      test("should handle string with only whitespace", () => {
        expect(capitalizeFirst("   ")).toBe("   ");
      });
    });

    describe("Unicode and International Characters", () => {
      test("should handle accented characters", () => {
        expect(capitalizeFirst("école")).toBe("École");
        expect(capitalizeFirst("naïve")).toBe("Naïve");
      });

      test("should handle non-Latin scripts", () => {
        expect(capitalizeFirst("привет")).toBe("Привет");
        expect(capitalizeFirst("مرحبا")).toBe("مرحبا");
      });
    });

    describe("Input Validation", () => {
      test("should throw TypeError for null", () => {
        expect(() => capitalizeFirst(null)).toThrow(TypeError);
        expect(() => capitalizeFirst(null)).toThrow("Input must be a string");
      });

      test("should throw TypeError for undefined", () => {
        expect(() => capitalizeFirst(undefined)).toThrow(TypeError);
        expect(() => capitalizeFirst(undefined)).toThrow("Input must be a string");
      });

      test("should throw TypeError for number", () => {
        expect(() => capitalizeFirst(123)).toThrow(TypeError);
        expect(() => capitalizeFirst(123)).toThrow("Input must be a string");
      });

      test("should throw TypeError for object", () => {
        expect(() => capitalizeFirst({})).toThrow(TypeError);
        expect(() => capitalizeFirst([])).toThrow(TypeError);
      });

      test("should throw TypeError for boolean", () => {
        expect(() => capitalizeFirst(true)).toThrow(TypeError);
        expect(() => capitalizeFirst(false)).toThrow(TypeError);
      });
    });
  });

  describe("capitalizeWords", () => {
    describe("Valid Inputs", () => {
      test("should capitalize first letter of each word", () => {
        expect(capitalizeWords("hello world")).toBe("Hello World");
      });

      test("should handle already capitalized words", () => {
        expect(capitalizeWords("Hello World")).toBe("Hello World");
      });

      test("should handle mixed case", () => {
        expect(capitalizeWords("hELLO wORLD")).toBe("HELLO WORLD");
      });

      test("should handle single word", () => {
        expect(capitalizeWords("hello")).toBe("Hello");
      });

      test("should handle empty string", () => {
        expect(capitalizeWords("")).toBe("");
      });

      test("should preserve multiple spaces", () => {
        expect(capitalizeWords("hello   world")).toBe("Hello   World");
      });

      test("should handle leading and trailing spaces", () => {
        expect(capitalizeWords("  hello world  ")).toBe("  Hello World  ");
      });
    });

    describe("Special Characters and Numbers", () => {
      test("should handle words with hyphens", () => {
        expect(capitalizeWords("hello-world test")).toBe("Hello-world Test");
      });

      test("should handle words with apostrophes", () => {
        expect(capitalizeWords("don't stop")).toBe("Don't Stop");
      });

      test("should handle numbers", () => {
        expect(capitalizeWords("hello 123 world")).toBe("Hello 123 World");
      });

      test("should handle mixed alphanumeric", () => {
        expect(capitalizeWords("test123 abc456")).toBe("Test123 Abc456");
      });
    });

    describe("Different Whitespace Characters", () => {
      test("should handle tabs", () => {
        expect(capitalizeWords("hello\tworld")).toBe("Hello\tWorld");
      });

      test("should handle newlines", () => {
        expect(capitalizeWords("hello\nworld")).toBe("Hello\nWorld");
      });

      test("should handle multiple whitespace types", () => {
        expect(capitalizeWords("hello \t\n world")).toBe("Hello \t\n World");
      });
    });

    describe("Unicode and International Characters", () => {
      test("should handle accented characters", () => {
        expect(capitalizeWords("école française")).toBe("École Française");
      });

      test("should handle non-Latin scripts", () => {
        expect(capitalizeWords("привет мир")).toBe("Привет Мир");
      });
    });

    describe("Input Validation", () => {
      test("should throw TypeError for non-string inputs", () => {
        expect(() => capitalizeWords(null)).toThrow(TypeError);
        expect(() => capitalizeWords(undefined)).toThrow(TypeError);
        expect(() => capitalizeWords(123)).toThrow(TypeError);
        expect(() => capitalizeWords({})).toThrow(TypeError);
        expect(() => capitalizeWords([])).toThrow(TypeError);
        expect(() => capitalizeWords(true)).toThrow(TypeError);
      });
    });
  });

  describe("capitalizeAll", () => {
    describe("Valid Inputs", () => {
      test("should convert lowercase string to uppercase", () => {
        expect(capitalizeAll("hello world")).toBe("HELLO WORLD");
      });

      test("should keep uppercase string unchanged", () => {
        expect(capitalizeAll("HELLO WORLD")).toBe("HELLO WORLD");
      });

      test("should convert mixed case to uppercase", () => {
        expect(capitalizeAll("Hello World")).toBe("HELLO WORLD");
        expect(capitalizeAll("hELLo WoRLd")).toBe("HELLO WORLD");
      });

      test("should handle single character", () => {
        expect(capitalizeAll("h")).toBe("H");
        expect(capitalizeAll("H")).toBe("H");
      });

      test("should handle empty string", () => {
        expect(capitalizeAll("")).toBe("");
      });

      test("should preserve whitespace", () => {
        expect(capitalizeAll("hello   world")).toBe("HELLO   WORLD");
        expect(capitalizeAll("  hello world  ")).toBe("  HELLO WORLD  ");
      });
    });

    describe("Special Characters and Numbers", () => {
      test("should preserve numbers", () => {
        expect(capitalizeAll("hello 123 world")).toBe("HELLO 123 WORLD");
      });

      test("should preserve special characters", () => {
        expect(capitalizeAll("hello-world!")).toBe("HELLO-WORLD!");
        expect(capitalizeAll("test@example.com")).toBe("TEST@EXAMPLE.COM");
      });

      test("should handle mixed content", () => {
        expect(capitalizeAll("abc123!@#def")).toBe("ABC123!@#DEF");
      });
    });

    describe("Different Whitespace Characters", () => {
      test("should preserve tabs and newlines", () => {
        expect(capitalizeAll("hello\tworld")).toBe("HELLO\tWORLD");
        expect(capitalizeAll("hello\nworld")).toBe("HELLO\nWORLD");
      });
    });

    describe("Unicode and International Characters", () => {
      test("should handle accented characters", () => {
        expect(capitalizeAll("école française")).toBe("ÉCOLE FRANÇAISE");
      });

      test("should handle non-Latin scripts", () => {
        expect(capitalizeAll("привет мир")).toBe("ПРИВЕТ МИР");
      });
    });

    describe("Input Validation", () => {
      test("should throw TypeError for non-string inputs", () => {
        expect(() => capitalizeAll(null)).toThrow(TypeError);
        expect(() => capitalizeAll(undefined)).toThrow(TypeError);
        expect(() => capitalizeAll(123)).toThrow(TypeError);
        expect(() => capitalizeAll({})).toThrow(TypeError);
        expect(() => capitalizeAll([])).toThrow(TypeError);
        expect(() => capitalizeAll(true)).toThrow(TypeError);
      });
    });
  });

  describe("Function Consistency", () => {
    test("all functions should handle empty string consistently", () => {
      const emptyStr = "";
      expect(capitalizeFirst(emptyStr)).toBe("");
      expect(capitalizeWords(emptyStr)).toBe("");
      expect(capitalizeAll(emptyStr)).toBe("");
    });

    test("all functions should throw TypeError for non-string inputs", () => {
      const invalidInputs = [null, undefined, 123, {}, [], true, false];
      
      invalidInputs.forEach(input => {
        expect(() => capitalizeFirst(input)).toThrow(TypeError);
        expect(() => capitalizeWords(input)).toThrow(TypeError);
        expect(() => capitalizeAll(input)).toThrow(TypeError);
      });
    });
  });

  describe("Real-world Examples", () => {
    test("should handle common use cases", () => {
      // Names
      expect(capitalizeWords("john doe")).toBe("John Doe");
      expect(capitalizeFirst("john doe")).toBe("John doe");
      
      // Titles
      expect(capitalizeWords("the quick brown fox")).toBe("The Quick Brown Fox");
      expect(capitalizeAll("the quick brown fox")).toBe("THE QUICK BROWN FOX");
      
      // Mixed content
      expect(capitalizeWords("user@example.com has 123 messages")).toBe("User@example.com Has 123 Messages");
    });
  });
});