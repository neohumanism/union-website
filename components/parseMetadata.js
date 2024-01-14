function parseMetadata(content) {
  const match = content.match(/^---([\s\S]*?)---/);
  const metadata = match ? match[1] : '';
  const lines = metadata.split('\n').map((line) => line.trim());

  const result = {};
  lines.forEach((line) => {
    const firstColonIndex = line.indexOf(':');
    if (firstColonIndex !== -1) {
      const key = line.substring(0, firstColonIndex).trim();
      const value = line.substring(firstColonIndex + 1).trim();
      
      if (key && value) {
        result[key] = value;
      }
    }
  });

  return result;
}

export default parseMetadata;
