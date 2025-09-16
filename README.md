## Demo App

### Get the code

Clone this repo to your local environment. You'll need [Node.js](https://nodejs.org) installed.

### Add your Environment ID

To connect the app to your Dynamic account, you'll need to create a `.env` file with your `Environment ID`.
There is an example in this folder under the name `.env.example`.

You can find your `Environment ID` at the top of your [Dynamic Dashboard](https://app.dynamic.xyz/dashboard/overview).

Just paste it in place of `your-environment-id-here` in the example file, save as `.env`, and you'll be good to go!

### Install dependencies and run the app

```bash

npm install
npm run dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## The issues and how I addressed them

Jeff asked about a few different things:

- Chains supported by Dynamic
- User security options
- Account Abstraction
- Normal transactions - they should be easy
- Embedded wallets

Most of the things he asked about were demonstrable from the basic `create-dynamic-app` and the Developer Dashboard. I covered multiple wallets, multiple chains/networks, account security, and normal transactions just going back and forth between the two.

Account Abstraction was more complex, but I found a gasless demo in Dynamic's GitHub that provided a seamless way to add it. I borrowed the relevant code from there and, for good measure, deployed my own CAT token contract for it to connect to. With the minting button in place, I was then able to use a combination of the Developer Dashboard, ZeroDev's dashboard, and the app to describe Account Abstraction in action.
