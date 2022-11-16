## Welcome To StuffMart!

Your one-stop shop for a simple, open-source, E-commerce application to satisfy the Stuff addiction your customer won't admit to having.

StuffMart is a full-service buy-and-sell application where StuffSellers can log in and post a listing for their Stuff. Then StuffBuyers can sign up as well to find all the great deals.

This is my Phase-5 Capstone project for Flatiron School for software engineering. This is a full-stack application with Ruby on Rails backend database running on Postgresql. The front end is made with React.

Users can shop with confidence because StuffMart is proud to use password hashing using the BCrypt gem. Customers can enjoy an interactive experience browsing Stuff to their heart's desire. Sellers rave about the simplicity of selling on StuffMart. It's as simple as upload, sell, ship, and GET PAID!

## Prerequisites

Before starting, make sure your computer has all the necessary tools to build
the application and that these tools match up with what you'll use in a
production environment. This will ensure that when it comes time to deploy your
project, you'll be able to do so more easily.

### Requirements

- Ruby 2.7.4
- NodeJS (v16), and npm
- Postgresql

### Install the Latest Ruby Version

Verify which version of Ruby you're running by entering this in the terminal:

```console
$ ruby -v
```

We recommend version 2.7.4. If you need to upgrade you can install it using rvm:

```console
$ rvm install 2.7.4 --default
```

You should also install the latest versions of `bundler` and `rails`:

```console
$ gem install bundler
$ gem install rails
```

### Install NodeJS

Verify you are running a recent version of Node with:

```console
$ node -v
```

If your Node version is not 16.x.x, install it and set it as the current and
default version with:

```console
$ nvm install 16
$ nvm use 16
$ nvm alias default 16
```

You can also update your npm version with:

```console
$ npm i -g npm
```

### Install Postgresql

Render requires that you use PostgreSQL for your database instead of SQLite.
PostgreSQL (or just Postgres for short) is an advanced database management
system with more features than SQLite. If you don't already have it installed,
you'll need to set it up.

#### PostgreSQL Installation for WSL

To install Postgres for WSL, run the following commands from your Ubuntu
terminal:

```console
$ sudo apt update
$ sudo apt install postgresql postgresql-contrib libpq-dev
```

Then confirm that Postgres was installed successfully:

```console
$ psql --version
```

Run this command to start the Postgres service:

```console
$ sudo service postgresql start
```

Finally, you'll also need to create a database user so that you are able to
connect to the database from Rails. First, check what your operating system
username is:

```console
$ whoami
```

If your username is "ian", for example, you'd need to create a Postgres user
with that same name. To do so, run this command to open the Postgres CLI:

```console
$ sudo -u postgres -i
```

From the Postgres CLI, run this command (replacing "ian" with your username):

```console
$ createuser -sr ian
```

Then enter `control + d` or type `logout` to exit.

[This guide][postgresql wsl] has more info on setting up Postgres on WSL if you
get stuck.

[postgresql wsl]:
  https://docs.microsoft.com/en-us/windows/wsl/tutorials/wsl-database#install-postgresql

#### Postgresql Installation for OSX

To install Postgres for OSX, you can use Homebrew:

```console
$ brew install postgresql
```

Once Postgres has been installed, run this command to start the Postgres
service:

```console
$ brew services start postgresql
```

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
