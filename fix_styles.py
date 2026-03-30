import re

with open('src/components/ProvenGrowth.tsx', 'r') as f:
    text = f.read()

# Fix opening bracket
text = text.replace('style={backgroundColor:', 'style={{backgroundColor:')
text = text.replace('style={ borderColor:', 'style={{ borderColor:')
text = text.replace('style={ background:', 'style={{ background:')
text = text.replace('style={color:', 'style={{color:')

# Fix closing bracket for these specific patterns
text = re.sub(r'(backgroundColor: `\$\{displayProjects\[\d\]\.badgeColor\}[^`]+`)\}', r'\1}}', text)
text = re.sub(r'(boxShadow: `0 0 60px \$\{displayProjects\[\d\]\.badgeColor\}26`\s*)\}', r'\1}}', text)
text = re.sub(r'(background: `linear-gradient[^`]+`\s*)\}', r'\1}}', text)
text = re.sub(r'(textShadow: `0 0 10px \$\{displayProjects\[\d\]\.badgeColor\}66`\s*)\}', r'\1}}', text)
text = re.sub(r'(color: displayProjects\[\d\]\.badgeColor)\}', r'\1}}', text)

with open('src/components/ProvenGrowth.tsx', 'w') as f:
    f.write(text)
print("Fixed JSX style brackets.")
