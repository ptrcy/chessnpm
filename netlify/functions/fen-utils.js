/**
 * FEN Manipulation Utilities (Backend Copy)
 */

/**
 * Rotates a FEN string 180 degrees.
 * This effectively flips the board:
 * - Rank 8 becomes Rank 1
 * - Rank 1 becomes Rank 8
 * - The pieces in each rank are reversed (a-h becomes h-a)
 * 
 * @param {string} fen - The FEN string to rotate
 * @returns {string} - The rotated FEN string
 */
export function rotateFen(fen) {
    if (!fen) return fen;

    const parts = fen.split(' ');
    const rows = parts[0].split('/');

    const reversedRows = rows.map(row => {
        // Expand numbers to 1s: "3p4" -> "111p1111"
        let expanded = row.replace(/\d/g, d => '1'.repeat(parseInt(d)));
        // Reverse the string
        let reversed = expanded.split('').reverse().join('');
        // Collapse 1s back to numbers: "111p1111" -> "3p4"
        return reversed.replace(/1+/g, m => m.length);
    }).reverse(); // Reverse the order of rows

    // Reconstruct FEN
    parts[0] = reversedRows.join('/');

    return parts.join(' ');
}
