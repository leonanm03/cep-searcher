# cep-searcher
This is is Full Stack project for managing the price of the products from a shop

## How to run:
###### npm version used: 9.8.1
###### node version used: 18.18.2

#### step 01: Clone the repository to your computer
```
git clone git@github.com:leonanm03/cep-searcher.git
 ```
#### step 02: Enter in "cep-searcher" directory of the repository and install dependencies
```
cd cep-searcher
 ```
```
npm install
 ```
#### step 03: Copy ".env.example" file to a ".env" file
```
cp .env.example .env
 ```
Edit .env for matching with your setup, as default it comes like this:
```
POSTGRES_USERNAME=postgres-user           # your postgres user
POSTGRES_PASSWORD=postgres-password       # your postgres password
POSTGRES_HOST=localhost                   # your postgres address
POSTGRES_PORT=5432                        # your postgres port
POSTGRES_DATABASE=cep_searcher            # database name
VIA_CEP_URL=https://viacep.com.br/ws      # via cep api url

DATABASE_URL=postgresql://${POSTGRES_USERNAME}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_DATABASE}?schema=public                #database complete url
```
#### step 04: Create your database with tables
```
npm run dev:migration:deploy
 ```
#### step 05: Generate prisma models
```
npm run prisma:generate
 ```

#### step 07: Let api run
```
npm run dev
 ```
