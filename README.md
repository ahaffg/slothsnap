# Sloth Snap!
![Sloths](/assets/images/readMeImages/readMeSlothCards.jpg)
# Project Aim
Sloth Snap is a memory game designed to challenge the player to reach a perfect game of 6 pairs. The user interface is bright and friendly and directly engaes my son's spesial interest- Sloths!. The game
The game has three screens: Start, Game, End.
Target audience: My son (6 years) initially, dow the line potentially other younger children or neurodivergent people who would like a way to exersize their short term memry muscles.
This project is the second of four projects that needs to be completed in order to receive a diploma in Software Development from The Code Institute.
Required technologies are HTML5, CSS3 and JavaScript.
A live version of the project can be found here - ???
# Table of Content
+ [UX](#ux "UX")
  + [User Demographic](#user-demographic "User Demographic")
  + [User Stories](#user-stories "User Stories")
    + [New Players](#new-players "New Players")
    + [Returning Players](#returning-players "Returning Players")
  + [Player Goals](#player-goals "Player")
  + [Project Requirements](#project-requirements "Project Requirements")
  + [Design](#design "Design")
    + [Design Discovery Phase](#design-discovery-phase "Design Discovery Phase")
    + [Colours](#colours "Colours")
    + [Typography](#typography "Typography")
    + [Images](#images "Images")
+ [Features](#features "Features")
  + [Existing Features](#existing-features "Existing Features")
    + [Start Screen](#start-screen "Start Screen")
    + [Game Screen](#game-screen "Game Screen")
    + [End Screen](#end-screen "End Screen")
  + [Features Left to Implement](#features-left-to-implement "Features Left to Implement")
+ [Technologies used](#technologies-used "Technologies used")
+ [Testing](#testing "Testing")
  + [Validator Testing](#validator-testing "Validator Testing")
  + [Unfixed Bugs](#unfixed-bugs "Unfixed Bugs")
+ [Development and Deployment](#development-and-deployment "Development and Deployment")
+ [Content](#content "Content")
+ [Media](#media "Media")
+ [Credits](#credits "Credits")
## UX
### User Demographic

### User Stories

#### New players

#### Returning players

### Player goals

### Project Requirements
 - To build an interactive front-end site that responds to user actions. The user should engage actively by altering data and how the site displays. The development process needs to be well documented through a version controls system such as GitHub and contain HTML5, CSS3 and JavaScript.
### Design

#### Design Discovery Phase
 - wireframes -
 -start/game/end -
#### Colours
The colour palette was created using coolers.
#### Typography
The primary font used for titles is: [Mochiy Pop One](https://fonts.google.com/specimen/Mochiy+Pop+One?query=Mochi)
![Title Font](/assets/images/readMeImages/readmeMochiyPopOne.png) I feel this is an easy to read but fun font, and wil hopefully attract the players attention. The body font will then be [Short Stack](https://fonts.google.com/specimen/Short+Stack?query=short+stack) which is very clear and easy to read (espectally for instructions etc) and works well with the Mochiy Pop One tile font.
![Body Font](/assets/images/readMeImages/readmeShortStackFont.png)
#### Images

## Features 
Sloth Snap consists of three game screens:
 - Start Screen
 - Game Screen
 - End Screen
Sloth Snap is a linear game and when the player presses start the game board is created and shuffled. The player ends up at the end screen at either a ”Win” or a ”Loss”.
### Existing Features
#### Start Screen
The Start Screen consists of a header and a paragraph that contains the games main title and the rules. Other elements are:
 - Text that tells player to enter name, this is optional
 - Input field for player name (optional)
 - Start button that takes the player to the main board and shuffles the deck.
![Start Screen](/assets/images/readme-images/start-screen.png)
#### Game Screen
The game screen 
 - At start 12 cards with symbols are shuffled and distributed across the board. The game starts the moment the game screen is visible to the player.
![Game Screen](/assets/images/readme-images/game-screen.png)
#### End Screen
Sloth Snap is a linear game and all players end up at the end screen win. Messages differ depending on win or loss. If a player does not enter a player name the standard player name of the game appears. The end screen displays:
 - Header that tells the player if they won or lost.
 - Paragraph telling the player how many pairs they were able to match.
 - Paragraph telling the player how many tries it took to find the pairs.
 - Paragraph with two different messages depending on win/lose.
 - Play again button that generates a new game board and shuffles the cards.
 - Quit button that takes the player to the start screen
![About us Section part 1](/assets/images/readme-images/end-screen.png)
### Features Left to Implement
- Future version of this game will contain database with high scores.
- Two more game modes, one harder and one easier.
[Back to top](#quickmem)
## Technologies used
- [HTML](https://en.wikipedia.org/wiki/HTML)
- [CSS](https://en.wikipedia.org/wiki/CSS)
- [JavaScript](https://en.wikipedia.org/wiki/javascript)
## Testing 

### Validator Testing 

### Unfixed Bugs

## Development and Deployment
The development environment used for this project was GitPod. To track the development stage and handle version control regular commits and pushes to GitHub has been conducted. The GitPod environment was created using a template provided by Code Institute.
The live version of the project is deployed at GitHub pages.
The procedure for deployment followed the "Creating your site" steps provided in [GitHub Docs.](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)
1. Log into GitHub.
2. Locate the GitHub Repository that shall be deployed live.
3. At the top of the repository, select Settings from the menu items.
4. Scroll down the Settings page to the ”GitHub Pages" section and click on the ”Check it out here!”
5. At the ”Source” section choose ”main” as Branch and root as folder and click ”Save”
6. The website will deploy and the pages refreshes to provide the live link to the project.
The live link can be found here - https://pelikantapeten.github.io/p2-quickmem/
## Content 
- All text content in this game has been produced by the author.
- Icons [Font Awesome](https://fontawesome.com/)
## Media
Google Fonts
## Credits 
### For code inspiration, design inputs, help and advice.
I have consulted numerous websites, individuals and slack channels to get support for the code. No code block is directly copied but some generates from information I gathered from other developers and sites:
 - [Mdn web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) for information about Arrays and also identifying bugs.
 - [DevelopedByEd](https://developedbyed.com/) that taught me in his vides on how to generate a board of cards and display it as a CSS grid.
 - [W3 Schools](https://www.w3schools.com/jsref/met_element_addeventlistener.asp) for understanding Event Listeners. 
  - [Patternio](https://patternico.com/#t4jZ7NG8wcwht3SL) for providing an easy way for me to create a unique and dynamic background using my own images.
### Acknowledgment


`python3 -m http.server`