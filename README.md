### trv-venue-hotel-client


## 1) Project setup 
```
npm install
```

### 2) Project run
```
npm run serve
```
```
npm run server
```


Opens in a new browser window at localhost 8080, while server is running on 3000

## Completed features of MVP

* Landing page: presents hotels, allows user to go to the hotel detail.
Presents information about avaluable rooms and info about each hotel. 
Include contact us and navigate buttons.
* Navigation bar contains language select dropdown. Which might be finished with i18n or similar to provide multi-language feature to the website.
* Hotel detail page: allows user to select rooms and see a total of the booking. As well as delete rooms before checkout. 
  All selected rooms are stored at local storage.
  Checkout button leads to "My booking page" with an order id and summary.
* Confirmation page: "My booking page". 
  Present all items that user previously selected.
  Order number is provided. 
  Selected items stored in local storage.
* Admin page: Allows to remove hotels while communicating with vuex. (Where all of the data comes from, which in the future would be connected to the backend client such as Node or Express to fetch the data).
  Add hotel feature is working, but needs improvements.

## Work-in-progress features
* Vue-lidate for form
* Clean-up styles and separate views into more components
* Login feature currently is a dummy data that shows user name only
* Order id must be unique
* I've had troubles with adding a hotel at admin, that somehow is not allowing me to add hotel with an id from the input.
* I have erros on the console that has to be fixed, because we are not adding rooms when on admin page, and some eslint warnings that must be fixed with more time. 

## Author

* **Alena Nikolaeva** - *Junior front-end developer* - [Github](https://github.com/AlenaNik) - [LinkedIn](https://www.linkedin.com/in/alenanikolaeva/)
