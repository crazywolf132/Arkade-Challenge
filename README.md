# Arkade Challenge

Welcome to my attempt at the task.

## Frontend

The front end is done in `REACT.JS` and uses `axios` to make calls to `https://www.thecocktaildb.com/` to recieve information.
Due to the way the API is built, it does not simply have a `get ALL` kind of endpoint. Instead I loop through the alphabet to get
all the cocktails starting with those letters. As they have an endpoint to search by starting letter.

The search part of the frontend is achieved using the following `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchBox}`. Rather than replacing the previously loaded data (all the cocktails), every time the user searches for something... it instead uses a different variable inside the AppContext. The UI checks to see what the state is and wheather to load the original cocktails list or searched cocktails list.

> There is 1 known issue with the search bar. When you clear out the search bar... (pressing backspace), and then press it again once emptied... react will treat that as its not empty, and perform a search. I didn't see this a pressing issue at the time of submission so I left it.

### How to run

Using YARN

```bash
    yarn && yarn start
```

Using NPM

```bash
    npm i && npm start
```

## Backend

Unlike what the task asked for, I did not complete this in PHP. Instead i elected to work in `NODEJS` as the job description stated that this was used aswell. I went with NODE over PHP as it was already installed on my mac, but I also felt it better suited this task. Though im sure many languages could do this task.

The application uses the same API as the frontend.... but it uses the ingredients, then uses the cocktails you can make with that ingredient as variants of the product.

The backend has a class inside `Core.JS` that is used for everything (it is a singleton). There is an example inside of `server.js` on how it all works.

The server runs on port `8080` and there is a `GET` endpoint setup as `/products` to get all the products that are on the store.
`http://localhost:8080/products`

### How to run

Using YARN

```bash
    yarn && yarn dev
```

Using NPM

```bash
    npm i && npm dev
```

## Notes

The UI should be redesigned for better UX. It should use styled components instead of 1 sass file.

The backend should probably be redone and split up into multiple files for handling everything. Eg a file for the variants... a file for the collection of the data, a file for the assembly of the data, and a file for the connection to the store. This would be better practice.

> Thankyou for taking the time to look. If you need me to explain anything, feel free to let me know... but there is little comments around the place that will hopefully clear up my thinking.
