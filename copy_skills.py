import shutil
import os

skills = [
    ("/Volumes/portable/Downloads/Agent skill vercel/skills/web-design-guidelines", "web-design-guidelines"),
    ("/Volumes/portable/Downloads/antigravity-awesome-skills-main/skills/web-design-guidelines", "web-design-guidelines-antigravity"),
    ("/Volumes/portable/Downloads/antigravity-awesome-skills-main/skills/top-web-vulnerabilities", "top-web-vulnerabilities"),
    ("/Volumes/portable/Downloads/antigravity-awesome-skills-main/skills/webapp-testing", "webapp-testing-antigravity"),
    ("/Volumes/portable/Downloads/skills-main by entropic/skills/frontend-design", "frontend-design"),
    ("/Volumes/portable/Downloads/skills-main by entropic/skills/webapp-testing", "webapp-testing-entropic")
]

dest_dir = "/Volumes/portable/Cursor code/test/Agency/nextjs/.agent/skills"
os.makedirs(dest_dir, exist_ok=True)

for src, name in skills:
    dest = os.path.join(dest_dir, name)
    try:
        if not os.path.exists(dest):
            shutil.copytree(src, dest)
            print(f"Copied {name}")
        else:
            print(f"Already exists {name}")
    except Exception as e:
        print(f"Error copying {name}: {e}")
