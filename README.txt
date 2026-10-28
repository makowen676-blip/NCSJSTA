NSCJSTA WELFARE APP  (shared online version)
NJORO SUB COUNTY JUNIOR SCHOOL TEACHERS WELFARE

HOW IT WORKS
Three officials sign in with their own password. The register is stored in your Firebase project
(nscjsta-welfare-f528c) and updates live on every official's phone. Nobody else can read it.

  Chairperson  chair@nscjsta.app      Secretary  secretary@nscjsta.app      Treasurer  treasurer@nscjsta.app
  (in the app you just tap the role and type the password)

ONE-TIME SETUP (Chairperson)
1. Firebase console > Authentication: Email/Password enabled, and the 3 users added.
2. Firebase console > Firestore Database > Rules: paste the contents of firestore.rules, Publish.
3. Host this folder: app.netlify.com/drop - drag the unzipped folder in. You get a link.
4. Firebase > Authentication > Settings > Authorized domains > Add domain: your Netlify domain
   (e.g. yourname.netlify.app, without https://).
5. Open the link in Chrome, sign in as Chairperson, type the three names, then
   More > Import Excel register (columns Member No, Name, Phone; later columns become cases).
6. Chrome menu (3 dots) > Install app / Add to Home screen. Share the link with the Secretary and Treasurer.

Older phone-only version: use its Settings > Backup file, then in this app (setup screen or
Settings) choose Restore backup.

Needs internet the first time it opens; afterwards it also opens offline and syncs when back online.


UPDATE (v5): blue theme, Work Station column, Excel tools load only when needed, safer offline install.
To update the live site: Netlify > your site > Deploys > drag this unzipped folder onto the deploy box. Then close and reopen the app once.
