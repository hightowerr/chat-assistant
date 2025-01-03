7:29:52 PM: Failed during stage 'building site': Build script returned non-zero exit code: 2 (https://ntl.fyi/exit-code-2)
7:29:52 PM: Failed to compile.
7:29:52 PM: 
7:29:52 PM: ./app/page.tsx:62:44
7:29:52 PM: Type error: Property 'click' does not exist on type 'Element'.
7:29:52 PM:   60 |               onClick={() => {
7:29:52 PM:   61 |                 const chatButton = document.querySelector('.vf-chat-button');
7:29:52 PM: > 62 |                 if (chatButton) chatButton.click();
7:29:52 PM:      |                                            ^
7:29:52 PM:   63 |               }}
7:29:52 PM:   64 |             >
7:29:52 PM:   65 |               ↘️
7:29:52 PM: Static worker exited with code: 1 and signal: null
7:29:52 PM: ​
7:29:52 PM: "build.command" failed                                        
7:29:52 PM: ────────────────────────────────────────────────────────────────
7:29:52 PM: ​
7:29:52 PM:   Error message
7:29:52 PM:   Command failed with exit code 1: npm run build (https://ntl.fyi/exit-code-1)
7:29:52 PM: ​
7:29:52 PM:   Error location
7:29:52 PM:   In Build command from Netlify app:
7:29:52 PM:   npm run build
7:29:52 PM: ​
7:29:52 PM:   Resolved config
7:29:52 PM:   build:
7:29:52 PM:     command: npm run build
7:29:52 PM:     commandOrigin: ui
7:29:52 PM:     publish: /opt/build/repo/.next
7:29:52 PM:     publishOrigin: ui
7:29:52 PM:   plugins:
7:29:52 PM:     - inputs: {}
7:29:52 PM:       origin: ui
7:29:52 PM:       package: '@netlify/plugin-nextjs'
7:29:52 PM: Build failed due to a user error: Build script returned non-zero exit code: 2
7:29:52 PM: Failing build: Failed to build site
7:29:53 PM: Finished processing build request in 42.365s