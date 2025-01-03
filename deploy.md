7:20:00 PM: Build command from Netlify app                                
7:20:00 PM: ────────────────────────────────────────────────────────────────
7:20:00 PM: ​
7:20:00 PM: $ npm run build
7:20:00 PM: > chat-assistant@0.1.0 build
7:20:00 PM: > next build
7:20:01 PM: ⚠ No build cache found. Please configure build caching for faster rebuilds. Read more: https://nextjs.org/docs/messages/no-cache
7:20:01 PM:    ▲ Next.js 15.1.3
7:20:01 PM:    Creating an optimized production build ...
7:20:07 PM:  ✓ Compiled successfully
7:20:07 PM:    Linting and checking validity of types ...
7:20:09 PM: Failed to compile.
7:20:09 PM: 
7:20:09 PM: ./app/page.tsx:11:7
7:20:09 PM: Type error: 'window.voiceflow' is possibly 'undefined'.
7:20:09 PM:    9 |     script.type = 'text/javascript';
7:20:09 PM:   10 |     script.onload = () => {
7:20:09 PM: > 11 |       window.voiceflow.chat.load({
7:20:09 PM:      |       ^
7:20:09 PM:   12 |         verify: { projectID: '67780033ae2ed1739d0b87bb' },
7:20:09 PM:   13 |         url: 'https://general-runtime.voiceflow.com',
7:20:09 PM:   14 |         versionID: 'production'
7:20:09 PM: Static worker exited with code: 1 and signal: null
7:20:09 PM: ​
7:20:09 PM: "build.command" failed                                        
7:20:09 PM: ────────────────────────────────────────────────────────────────
7:20:09 PM: ​
7:20:09 PM:   Error message
7:20:09 PM:   Command failed with exit code 1: npm run build (https://ntl.fyi/exit-code-1)
7:20:09 PM: ​
7:20:09 PM:   Error location
7:20:09 PM:   In Build command from Netlify app:
7:20:09 PM:   npm run build
7:20:09 PM: ​
7:20:09 PM:   Resolved config
7:20:09 PM:   build:
7:20:09 PM:     command: npm run build
7:20:09 PM:     commandOrigin: ui
7:20:09 PM:     publish: /opt/build/repo/.next
7:20:09 PM:     publishOrigin: ui
7:20:09 PM:   plugins:
7:20:09 PM:     - inputs: {}
7:20:09 PM:       origin: ui
7:20:09 PM:       package: '@netlify/plugin-nextjs'
7:20:10 PM: Failed during stage 'building site': Build script returned non-zero exit code: 2 (https://ntl.fyi/exit-code-2)
7:20:10 PM: Build failed due to a user error: Build script returned non-zero exit code: 2
7:20:10 PM: Failing build: Failed to build site
7:20:10 PM: Finished processing build request in 38.971s