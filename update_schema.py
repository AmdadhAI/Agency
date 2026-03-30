import re

filepath = "sanity/schemas/project.ts"
with open(filepath, "r") as f:
    text = f.read()

# Replace specifically the image field ends.
alt_field_str = """options: { hotspot: true },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative Text',
                    description: 'Required for SEO and screen readers.',
                }
            ],"""

text = text.replace("options: { hotspot: true },", alt_field_str)

with open(filepath, "w") as f:
    f.write(text)

print("Updated project.ts")
