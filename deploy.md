
Skip to main content


M
Switch teams
Sites
Builds
Extensions
Domains
Members
Audit log
Security Scorecard
Billing
Team settings
Visual editor dashboard
Upgrade


Sites
lively-entremet-4901d8
Switch sites

News












































































Support
Site navigation
Site overview
Site configuration
Deploys
Logs
Metrics
Domain management
Forms
Blobs
Deploy detailsYour deploy failed due to an error
Deploy failed for lively-entremet-4901d8
A failure prevented us from deploying your site.
Why did it fail?
Today at 6:49 PMwithNext.js

Production: master@HEAD

Retry
Deploy settings
Delete deploy
Fancy a game?
This deploy is done, but hey, you can still play if you want to!

Play game
lively-entremet-4901d8 is a Next.js site.

Netlify auto-detected Next.js and will use the Next.js Runtime to build and deploy your site.

Read more about deploying with Next.js on Netlify

Deploy summary
Built using the Next.js Runtime

Netlify auto-detected Next.js and used the Next.js Runtime to build and deploy your site. Learn more about deploying with Next.js on Netlify

Deploy log
Why did it fail?




Maximize log
Initializing
Complete
Building
Failed
6:50:35 PM: Netlify Build                                                 
6:50:35 PM: ────────────────────────────────────────────────────────────────
6:50:35 PM: ​
6:50:35 PM: ❯ Version
6:50:35 PM:   @netlify/build 29.58.1
6:50:35 PM: ​
6:50:35 PM: ❯ Flags
6:50:35 PM:   accountId: 6744678f4016f01f96ef24aa
6:50:35 PM:   baseRelDir: true
6:50:35 PM:   buildId: 6778314a1ac7312b900a9d3a
6:50:35 PM:   deployId: 6778314a1ac7312b900a9d3c
6:50:35 PM: ​
6:50:35 PM: ❯ Current directory
6:50:35 PM:   /opt/build/repo
6:50:35 PM: ​
6:50:35 PM: ❯ Config file
6:50:35 PM:   No config file was defined: using default values.
6:50:35 PM: ​
6:50:35 PM: ❯ Context
6:50:35 PM:   production
6:50:36 PM: ​
6:50:36 PM: ❯ Using Next.js Runtime - v5.9.2
6:50:37 PM: No Next.js cache to restore
6:50:37 PM: ​
6:50:37 PM: Build command from Netlify app                                
6:50:37 PM: ────────────────────────────────────────────────────────────────
6:50:37 PM: ​
6:50:37 PM: $ npm run build
6:50:37 PM: > chat-assistant@0.1.0 build
6:50:37 PM: > next build
6:50:38 PM: ⚠ No build cache found. Please configure build caching for faster rebuilds. Read more: https://nextjs.org/docs/messages/no-cache
6:50:38 PM:    ▲ Next.js 15.1.3
6:50:38 PM:    Creating an optimized production build ...
6:50:45 PM:  ✓ Compiled successfully
6:50:45 PM:    Linting and checking validity of types ...
6:50:47 PM: Failed to compile.
6:50:47 PM: 
6:50:47 PM: ./app/page.tsx:11:14
6:50:47 PM: Type error: Property 'voiceflow' does not exist on type 'Window & typeof globalThis'.
6:50:47 PM:    9 |     script.type = 'text/javascript';
6:50:47 PM:   10 |     script.onload = () => {
6:50:47 PM: > 11 |       window.voiceflow.chat.load({
6:50:47 PM:      |              ^
6:50:47 PM:   12 |         verify: { projectID: '67780033ae2ed1739d0b87bb' },
6:50:47 PM:   13 |         url: 'https://general-runtime.voiceflow.com',
6:50:47 PM:   14 |         versionID: 'production'
6:50:47 PM: Static worker exited with code: 1 and signal: null
6:50:47 PM: ​
6:50:47 PM: "build.command" failed                                        
6:50:47 PM: ────────────────────────────────────────────────────────────────
6:50:47 PM: ​
6:50:47 PM:   Error message
6:50:47 PM:   Command failed with exit code 1: npm run build (https://ntl.fyi/exit-code-1)
6:50:47 PM: ​
6:50:47 PM:   Error location
6:50:47 PM:   In Build command from Netlify app:
6:50:47 PM:   npm run build
6:50:47 PM: ​
6:50:47 PM:   Resolved config
6:50:47 PM:   build:
6:50:47 PM:     command: npm run build
6:50:47 PM:     commandOrigin: ui
6:50:47 PM:     publish: /opt/build/repo/.next
6:50:47 PM:     publishOrigin: ui
6:50:47 PM:   plugins:
6:50:47 PM:     - inputs: {}
6:50:47 PM:       origin: ui
6:50:47 PM:       package: '@netlify/plugin-nextjs'
6:50:48 PM: Failed during stage 'building site': Build script returned non-zero exit code: 2 (https://ntl.fyi/exit-code-2)
6:50:48 PM: Build failed due to a user error: Build script returned non-zero exit code: 2
6:50:48 PM: Failing build: Failed to build site
6:50:48 PM: Finished processing build request in 47.707s
Deploying
Skipped
Cleanup
Skipped
Post-processing
Skipped
Docs
Pricing
Support
Blog
Changelog
Terms
© 2025 Netlify


