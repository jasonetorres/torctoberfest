import { describe, expect, test } from "vitest";
import { isURLValid } from "../../utilities/validators/url.js";

describe("isURLValid", () => {
  describe("Input Edge Cases", () => {
    test("should return false for null", () => {
      expect(isURLValid(null)).toBe(false);
    });

    test("should return false for undefined", () => {
      expect(isURLValid(undefined)).toBe(false);
    });

    test("should return false for empty string", () => {
      expect(isURLValid("")).toBe(false);
    });

    test("should return false for whitespace-only string", () => {
      expect(isURLValid("   ")).toBe(false);
    });

    test("should return false for non-string inputs", () => {
      expect(isURLValid(123)).toBe(false);
      expect(isURLValid({})).toBe(false);
      expect(isURLValid([])).toBe(false);
    });
  });

  describe("Valid URLs", () => {
    test("should return true for HTTPS URL with www", () => {
      expect(isURLValid("https://www.google.com")).toBe(true);
    });

    test("should return true for HTTP URL without www", () => {
      expect(isURLValid("http://example.com")).toBe(true);
    });

    test("should return true for HTTPS URL without www", () => {
      expect(isURLValid("https://example.com")).toBe(true);
    });

    test("should return true for subdomain", () => {
      expect(isURLValid("https://api.example.com")).toBe(true);
    });

    test("should return true for country TLD", () => {
      expect(isURLValid("https://example.co.uk")).toBe(true);
    });

    test("should return true for localhost", () => {
      expect(isURLValid("https://localhost")).toBe(true);
    });

    test("should return true for localhost with port", () => {
      expect(isURLValid("http://localhost:3000")).toBe(true);
    });

    test("should return true for IP address", () => {
      expect(isURLValid("http://127.0.0.1")).toBe(true);
    });

    test("should return true for URL with path", () => {
      expect(isURLValid("https://example.com/path/to/page")).toBe(true);
    });

    test("should return true for URL with query params", () => {
      expect(isURLValid("https://example.com?param=value")).toBe(true);
    });
  });

  describe("Invalid Protocols", () => {
    test("should return false for FTP protocol", () => {
      expect(isURLValid("ftp://example.com")).toBe(false);
    });

    test("should return false for file protocol", () => {
      expect(isURLValid("file:///path/to/file")).toBe(false);
    });

    test("should return false for mailto protocol", () => {
      expect(isURLValid("mailto:test@example.com")).toBe(false);
    });

    test("should return false for missing protocol", () => {
      expect(isURLValid("www.example.com")).toBe(false);
    });
  });

  describe("Malformed URLs", () => {
    test("should return false for protocol only", () => {
      expect(isURLValid("https://")).toBe(false);
    });

    test("should return false for double dots in hostname", () => {
      expect(isURLValid("https://example..com")).toBe(false);
    });

    test("should return false for hostname starting with dot", () => {
      expect(isURLValid("https://.example.com")).toBe(false);
    });

    test("should return false for hostname ending with dot", () => {
      expect(isURLValid("https://example.com.")).toBe(false);
    });

    test("should return false for hostname without TLD", () => {
      expect(isURLValid("https://example")).toBe(false);
    });
  });

  describe("HTTPS Only Mode", () => {
    test("should return false for HTTP when httpsOnly=true", () => {
      expect(isURLValid("http://example.com", true)).toBe(false);
    });

    test("should return true for HTTPS when httpsOnly=true", () => {
      expect(isURLValid("https://example.com", true)).toBe(true);
    });

    test("should return true for HTTP when httpsOnly=false", () => {
      expect(isURLValid("http://example.com", false)).toBe(true);
    });
  });

  describe("Whitespace Handling", () => {
    test("should handle leading whitespace", () => {
      expect(isURLValid("  https://example.com")).toBe(true);
    });

    test("should handle trailing whitespace", () => {
      expect(isURLValid("https://example.com  ")).toBe(true);
    });

    test("should handle both leading and trailing whitespace", () => {
      expect(isURLValid("  https://example.com  ")).toBe(true);
    });
  });

  describe("Edge Case Hostnames", () => {
    test("should return true for single letter domain", () => {
      expect(isURLValid("https://a.com")).toBe(true);
    });

    test("should return true for hyphenated domain", () => {
      expect(isURLValid("https://my-site.com")).toBe(true);
    });

    test("should return true for long TLD", () => {
      expect(isURLValid("https://example.museum")).toBe(true);
    });
  });

  describe("Parameterized Tests", () => {
    test("should return false for malformed URL", () => {
      expect(isURLValid("not-a-url")).toBe(false);
    });
  });

  describe("URL Fragments/Anchors", () => {
    test("should return true for URL with hash fragment", () => {
      expect(isURLValid("https://example.com#section")).toBe(true);
    });

    test("should return true for URL with hash and path", () => {
      expect(isURLValid("https://example.com/page#anchor")).toBe(true);
    });

    test("should return true for URL with hash and query params", () => {
      expect(isURLValid("https://example.com?param=value#section")).toBe(true);
    });

    test("should return true for URL with complex hash", () => {
      expect(isURLValid("https://example.com#section-with-dashes")).toBe(true);
    });

    test("should return true for URL with encoded hash", () => {
      expect(isURLValid("https://example.com#section%20with%20spaces")).toBe(
        true
      );
    });

    test("should return true for URL with just hash", () => {
      expect(isURLValid("https://example.com#")).toBe(true);
    });

    test("should return false for truly malformed URLs", () => {
      expect(isURLValid("https://exam ple.com")).toBe(false);
      expect(isURLValid("https://example..com")).toBe(false);
      expect(isURLValid("https://.example.com")).toBe(false);
    });
  });

  describe("Protocol-relative URLs", () => {
    test("should return false for protocol-relative URL", () => {
      expect(isURLValid("//www.example.com")).toBe(false);
    });

    test("should return false for protocol-relative URL with path", () => {
      expect(isURLValid("//example.com/path")).toBe(false);
    });

    test("should return false for protocol-relative URL with query", () => {
      expect(isURLValid("//example.com?param=value")).toBe(false);
    });
  });
});
