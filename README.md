# Getting Started

First, install the dependencies for frontend:

```bash
npm install
# or
yarn
# or
pnpm install
```

Then, create virtual enviroment

```bash
python3 -m venv venv
```

Now, activate virtual enviroment

```bash
source venv/bin/activate
```

Then, install the dependencies:

```bash
pip install -r requirements.txt
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

> You only need to run the frontend development server; the backend will automatically run by itself. However, if you only want to run the backend, then follow the steps below.

```bash
uvicorn main:app --reload
```
