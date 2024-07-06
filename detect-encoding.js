#!/usr/bin/env node

function detectEncoding(message) {
    const gsm = "@£$¥èéùìòÇ\nØø\rÅåΔ_ΦΓΛΩΠΨΣΘΞ\x1bÆæßÉ !\"#¤%&'()*+,-./0123456789:;<=>?"
    + "¡ABCDEFGHIJKLMNOPQRSTUVWXYZÄÖÑÜ`¿abcdefghijklmnopqrstuvwxyzäöñüà";
    // extension characters require 2 bytes
    const ext = "^{}\\[~]|€";

    let messageLength = 0;
    for (char of message) {
        if (gsm.indexOf(char) != -1) {
            messageLength++;
            continue;
        } else if (ext.indexOf(char) != -1) {
            messageLength += 2;
            continue;
        }

        messageLength = ucs2MessageLength(message);
        return ['UCS-2', messageLength];
    }

    return ['GSM-7', messageLength * 7];
}

function ucs2MessageLength(message) {
    // default JS string is UCS-2 encoded string
    // length returns the number of two-byte tuples
    return message.length * 16;  // convert to bites
}

module.exports = detectEncoding;
