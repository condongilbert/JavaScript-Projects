const height = 4;

for (let i = 0; i < height; i++) {
    let line = '';    // Append spaces to the line
    for (let j = 0; j < height - i - 1; j++) {
        line += ' ';
    }    // Append hashes to the line
    for (let j = 0; j < i + 1; j++) {
        line += '#';
    }    // Print the constructed line
    console.log(line);
}