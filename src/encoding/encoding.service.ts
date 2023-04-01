import { Injectable } from '@nestjs/common';
import * as he from 'he';
import { EncodingEntry, ENCODING_TABLE } from './encoding.table';

@Injectable()
export class EncodingService {
  encodingTable: EncodingEntry[] = ENCODING_TABLE;

  /**
   * Encodes the given login credentials using latin-9 encoding.
   * @param input The username or password.
   * @returns The encoded result.
   */
  encodeLoginCredentials(input: string) {
    const result = this.encode(input);
    return result;
  }

  /**
   * Encodes a text (e.g. a post message or thread title) to latin-9 and html
   * so that it is understood by the forum.
   * @param input The input string.
   * @returns The encoded result.
   */
  encodeText(input: string) {
    let result = input;
    // Encode to latin-9
    result = this.encode(result);
    // Escape special characters to HTML
    result = this.escapeHtml(result);
    return result;
  }

  /**
   * Decodes a text (e.g. a post message or thread title) to utf-8.
   * @param input The encoded input string.
   * @returns The decoded result.
   */
  decodeText(input: string) {
    // Decode latin-9
    let result = this.decode(input);
    result = this.unescapeHtml(result);
    return result;
  }

  /**
   * Encodes all characters according to the encoding table.
   * @param input The input string
   * @returns The encoded result.
   */
  encode(input: string) {
    let result = input;
    for (const encodingEntry of this.encodingTable) {
      result = result.replaceAll(encodingEntry.decoded, encodingEntry.encoded);
    }
    return result;
  }

  /**
   * Decodes all characters according to the encoding table.
   * @param input The input string.
   * @returns The decoded result.
   */
  decode(input: string) {
    let result = input;
    for (const encodingEntry of this.encodingTable) {
      result = result.replaceAll(encodingEntry.encoded, encodingEntry.decoded);
    }
    return result;
  }

  /**
   * Escapes special characters (e.g. unicode emojis)
   * to their corresponding HTML codes.
   * @param input The input string.
   * @returns The output string.
   */
  escapeHtml(input: string) {
    const result = [...input]
      .map((char) => {
        const code = char.codePointAt(0);
        return code > 127 ? `%26%23${code}%3B` : char;
      })
      .join('');
    return result;
  }

  /**
   * Unescapes HTML codes to their corresponding utf-8 characters.
   * @param input The input string.
   * @returns The output string.
   */
  unescapeHtml(input: string) {
    const result = he.decode(input);
    return result;
  }
}
