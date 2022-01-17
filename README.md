# Getting Started

`npm install`

`npm run start`

## Notes

1. I didn't get to unit testing for this application.

2. This application didn't implement env vars for github authentication. Based off of their docs I made the assumption that 60 requests per hour is plenty for whoever is reviewing this application.

3. A bug I noticed is that when the app is in a mobile sized view, when the dropdown pops out it causes the page to shift slightly. Also I was running into an aria label issue on the dropdown, and I didn't get around to digging into material ui to fix these.

4. I built this app using the REST API and planned to swap out the api function with graphql, but did not have time to dig into a lightweight graphql client, or build one myself. In the past I have used Apollo Client, but it comes with a lot more than a simple client and I would prefer not to use it with Redux.

5. I also didn't get around to adding error states.

6. I rushed adding in pagination last minute, and while it works I don't like my implementation very much. The fact that the search parameters state exists in 2 places is not ideal. I would have preferred to develop a better pattern to keep the leaf nodes unaware of Redux, while bringing the search parameters state to a higher level. I would not push this pattern to production.
