6:58:22 PM: Netlify Build                                                 
6:58:22 PM: ────────────────────────────────────────────────────────────────
6:58:22 PM: ​
6:58:22 PM: ❯ Version
6:58:22 PM:   @netlify/build 29.58.1
6:58:22 PM: ​
6:58:22 PM: ❯ Flags
6:58:22 PM:   accountId: 6744678f4016f01f96ef24aa
6:58:22 PM:   baseRelDir: true
6:58:22 PM:   buildId: 677833124e3074435ae33183
6:58:22 PM:   deployId: 677833124e3074435ae33185
6:58:22 PM: ​
6:58:22 PM: ❯ Current directory
6:58:22 PM:   /opt/build/repo
6:58:22 PM: ​
6:58:22 PM: ❯ Config file
6:58:22 PM:   No config file was defined: using default values.
6:58:22 PM: ​
6:58:22 PM: ❯ Context
6:58:22 PM:   production
6:58:23 PM: ​
6:58:23 PM: ❯ Using Next.js Runtime - v5.9.2
6:58:24 PM: No Next.js cache to restore
6:58:24 PM: ​
6:58:24 PM: Build command from Netlify app                                
6:58:24 PM: ────────────────────────────────────────────────────────────────
6:58:24 PM: ​
6:58:24 PM: $ npm run build
6:58:24 PM: > chat-assistant@0.1.0 build
6:58:24 PM: > next build
6:58:24 PM: ⚠ No build cache found. Please configure build caching for faster rebuilds. Read more: https://nextjs.org/docs/messages/no-cache
6:58:25 PM:    ▲ Next.js 15.1.3
6:58:25 PM:    Creating an optimized production build ...
6:58:31 PM:  ✓ Compiled successfully
6:58:31 PM:    Linting and checking validity of types ...
6:58:34 PM: Failed during stage 'building site': Build script returned non-zero exit code: 2 (https://ntl.fyi/exit-code-2)
6:58:34 PM: Failed to compile.
6:58:34 PM: 
6:58:34 PM: ./app/page.tsx:11:7
6:58:34 PM: Type error: 'window.voiceflow' is possibly 'undefined'.
6:58:34 PM:    9 |     script.type = 'text/javascript';
6:58:34 PM:   10 |     script.onload = () => {
6:58:34 PM: > 11 |       window.voiceflow.chat.load({
6:58:34 PM:      |       ^
6:58:34 PM:   12 |         verify: { projectID: '67780033ae2ed1739d0b87bb' },
6:58:34 PM:   13 |         url: 'https://general-runtime.voiceflow.com',
6:58:34 PM:   14 |         versionID: 'production'
6:58:34 PM: Static worker exited with code: 1 and signal: null
6:58:34 PM: ​
6:58:34 PM: "build.command" failed                                        
6:58:34 PM: ────────────────────────────────────────────────────────────────
6:58:34 PM: ​
6:58:34 PM:   Error message
6:58:34 PM:   Command failed with exit code 1: npm run build (https://ntl.fyi/exit-code-1)
6:58:34 PM: ​
6:58:34 PM:   Error location
6:58:34 PM:   In Build command from Netlify app:
6:58:34 PM:   npm run build
6:58:34 PM: ​
6:58:34 PM:   Resolved config
6:58:34 PM:   build:
6:58:34 PM:     command: npm run build
6:58:34 PM:     commandOrigin: ui
6:58:34 PM:     publish: /opt/build/repo/.next
6:58:34 PM:     publishOrigin: ui
6:58:34 PM:   plugins:
6:58:34 PM:     - inputs: {}
6:58:34 PM:       origin: ui
6:58:34 PM:       package: '@netlify/plugin-nextjs'
6:58:34 PM: Build failed due to a user error: Build script returned non-zero exit code: 2
6:58:34 PM: Failing build: Failed to build site
6:58:34 PM: Finished processing build request in 43.129s