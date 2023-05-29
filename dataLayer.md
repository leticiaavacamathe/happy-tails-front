# HappyTails App

## Data layer

### Data

- Collection of Animals
  - Animal:
    - id: number
    - name: string
    - city: string
    - age: number
    - sex: number
    - weight: string
    - image: string
    - description: string

### Modifications

- addAnimal()
- removeAnimal()
- updateAnimal()
- loadAnimals()
- login user()
- logout user()
- filterAnimals()
- showFeedback()
- showSpinner()
- hideSpinner()
- openModal()
- closeModal()

## Custom Hooks

- useAnimals()
- useUser()
- useToken
- useLocalStorage()

## Components

### Store

#### State

- Collection of Animals

#### AnimalsReducer

- addAnimal()
- removeAnimal()
- updateAnimal()
- loadAnimals()
- loadAnimal()

### App

- Receives dispatch()
- check if there is a token in the localStorage. getToken()
- If a token exist navigate to HomePage
- Renders a Layout component

### Header

- Renders a nav bar component
- Show a logo

### NavBar

- shows logo
- shows homePage button and create navLink to homePAge
- shows add button and create navLink to cratePage
- shows logout button. call logoutActionOnClick() and removeToken() create navLink to loginPage

### AnimalsList

- Receives a collection of Animals
- Renders as many AnimalCard as Animals are in the collection
- If there is a token renders a button with delete icon.
- Create a deleteAction on click(), that calls deleteAnimal()
- Create a detailsAction on click() that navigate to detailPage

### AnimalDetail

- Receives a Animal data from props
- Receives a dispatch()
- Shows the Animals name inside a heading
- Shows a picture of the animal
- Shows the City of the Animal
- Shows the age of the animal
- shows the weight of the animal
- Shows the sex of the animal
- Shows a description of the animal
- Renders a Button with:
  - icon: "modify"
  - actionOnClick: handleClick

### Button

- Receives a text or icon
- Receives an action on click
- Shows a button with the received text or icon
- Calls the received action when the button is clicked

### LoginForm

- Shows a logo
- handleSubmit()
- Receives dispatch()
- Shows an input text for the username
- Shows an input text for the password
- Renders a Button component

  - text: "Log in"
  - actionOnClick: handleSubmit

  ### AnimalForm

- State:
  - Animal
- handleSubmit()
- Receives dispatch()
- Shows a title inside a heading
- Receives an optional Animal to update
- Shows an input text for the name of the Animal
- Shows an input text for the name of the City of the Animal
- Shows an input text for the Age of the Animal
- Shows an input text for the Sex of the Animal
- Shows an input text for the Weight of the Animal
- Shows an input text for the image of the Animal
- Shows an input text for the Description of the Animal
- Renders a Button component
  - text: "create" / "update"
  - actionOnClick: handleSubmit

### Filter component

- Render a button with text "cats" and render cards with type of animal cat
- Render a button with text "dogs" and render cards with type of animal dog
- Render a button with text "all" and render all cards available
