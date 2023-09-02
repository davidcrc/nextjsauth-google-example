## Setup auth google

```bash
npm i next-auth
```

- create route.ts, then setup the file:

```bash
touch src/app/api/auth/[...nextauth]/route.ts
```

- create a env.local and add

```env
GOOGLE_CLIENT_ID=''
GOOGLE_CLIENT_SECRET=''
```

- go to :
  https://console.cloud.google.com/apis/credentials

- create project there and create an API

- Pantalla de consentimiento de OAuth - Externos - then setup

- On Credentials - Crear ID de cliente de OAuth - Web application

- Orígenes autorizados de JavaScript : add http://localhost:3000

- URI de redireccionamiento autorizados:

```
For production: https://{YOUR_DOMAIN}/api/auth/callback/google
For development: http://localhost:3000/api/auth/callback/google
```

## Add NextUI

```bash
npm i @nextui-org/react framer-motion
```
