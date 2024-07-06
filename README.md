# CODE100 Twilio challenge

This is the solution for the [CODE100 Twilio challenge](https://puzzles.code100.dev/puzzles/twilio-vip).

The task was to determine the encoding of the message and the length of the message in bits.

My solution iterates through all the characters of the message to see if all of them belong to the [GSM-7 Basic Character Set or Basic Character Set Extension](https://en.wikipedia.org/wiki/GSM_03.38#GSM_7-bit_default_alphabet_and_extension_table_of_3GPP_TS_23.038_/_GSM_03.38). Each character in the Basic Character Set is counted for 7 bits, while each character in the Basic Character Set Extension is counted for 14 bits (this is because each character in the Basic Character Set Extension requires an Escape character before it). 

If it appears so, while iterating through the string, that the character does not belong to the GSM-7 alphabet, then it fallbacks to UCS-2 encoding. The default JS string is a UCS-2 encoded string. So using the `length` on the string returns the number of two-byte tuples. In other words, it returns the number of Unicode codepoints. To get the number in bits, we need to multiply the length of the message by 16.

My solution takes `O(n)` to run where `n` is the length of the message in bytes.
