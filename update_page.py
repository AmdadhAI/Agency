import sys

with open('src/app/page.tsx', 'r') as f:
    content = f.read()

# Insert import
content = 'import ProvenGrowth from "@/components/ProvenGrowth";\n\n' + content

# Replace lines 153 to 279
lines = content.split('\n')
start_index = -1
end_index = -1
for i, line in enumerate(lines):
    if "{/* ── PROVEN GROWTH IN HOSPITALITY (Case Studies) ── */}" in line:
        start_index = i
        break

for i in range(start_index, len(lines)):
    if "{/* ── HOW IT WORKS ── */}" in lines[i]:
        end_index = i - 1
        break

if start_index != -1 and end_index != -1:
    new_lines = lines[:start_index] + ['        {/* ── PROVEN GROWTH IN HOSPITALITY (Case Studies) ── */}', '        <ProvenGrowth />', ''] + lines[end_index:]
    with open('src/app/page.tsx', 'w') as f:
        f.write('\n'.join(new_lines))
    print("Successfully replaced.")
else:
    print("Could not find delimiters", start_index, end_index)
