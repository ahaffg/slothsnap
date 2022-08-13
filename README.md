# Sloth Snap!
![Sloths](/assets/images/readMeImages/readMeSlothCards.jpg)
# Project Aim
I want to create a simple memory game to aid my son's short term memory ability. My son is neurodivergent and struggles with focusing and short term memory. Sloth Snap is a memory game designed to challenge the player to reach a perfect game of 6 pairs. The user interface is bright and friendly and directly engaes my son's special interest- Sloths!
 
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
The game is aimed at young children or children who recieve additional learning support. The game will allow a user to continue playing until they complete the game so that they are not disheartened if they do not complete the game within a certain time or within a certain ammount of moves.
### User Stories
Initially this game has been designed for my son (6 years) however, down the line, other younger children or neurodivergent people who would like a way to exersize and develop their short term memry muscles may benefit from the game too
#### New players
As a new user I want to:
-	Familiarise myself with the game and complete the game
#### Returning players
As a returning user I want to:
-	Complete the game in a decreasing amount of time
-	Try harder levels with more cards to remember.
As a regular user I want to:
-	Have a bilingual option to the game.
-	Have the option of levels not only increasing in difficulty because of the amount of different cards, but have those cards become more similar, therefore encouraging greater focus on details.
- Have the option to change the color scheme, this would be particularly helpful for color-blind  and neurodivergent users.
### Project Requirements
 - To build an interactive front-end site that responds to user actions. The user should engage actively by altering data and how the site displays. The development process needs to be well documented through a version controls system such as GitHub and contain HTML5, CSS3 and JavaScript.
### Design
The game has three sections: "Welcome!", "Play!" and "Hooray!".
#### Design Discovery Phase
![Start Game Wireframe](/assets/images/readMeImages/slothSnapWireFrameStartGame.jpg)
Above is my wireframe for the layout of the "Play!" screen. I want there to be as few functions as possible so that the game play is intuitive and that the player can focus on the game.
#### Colors
![Palette](/assets/images/readMeImages/readMepalette.jpg)

The colour palette was created using [Coolors](https://coolors.co/) I have chosen colors that I feel are friendly,exciting and would engage young users. The dark blue colour is used for any text on the site while the green forms a leafy/camoflage background effect. The reds, oranges and blues are used as background colors for the cards and to aid with users being able to match the pairs. In harder versions of the game, these background colors could be removed so as to give fewer clues.
#### Typography
The primary font used for titles is: [Mochiy Pop One](https://fonts.google.com/specimen/Mochiy+Pop+One?query=Mochi)
![Title Font](/assets/images/readMeImages/readmeMochiyPopOne.png) I feel this is an easy to read but fun font, and wil hopefully attract the players attention. The body font will then be [Short Stack](https://fonts.google.com/specimen/Short+Stack?query=short+stack) which is very clear and easy to read (espectally for instructions etc) and works well with the Mochiy Pop One tile font.
![Body Font](/assets/images/readMeImages/readmeShortStackFont.png)
#### Images
The background was generated by [Patternio](https://patternico.com/#t4jZ7NG8wcwht3SL) from my own images. I feel it is interesting and in-keeping with the aesthetic of the rest of the app, but not distracting.

![Background](/assets/images/readMeImages/readMeBkg.jpg)

There will be six sloth card pairs initially. I have drawn them to be similar in terms of color and style but they are quite different in appearance. In the future if I were designing harder levels I could draw cards that appear more similar so the player has to focus more on details to identify the pairs.

![Cards](/assets/images/readMeImages/readMeSlothCards.jpg)

## Features 
Sloth Snap consists of three game screens:
 - Start Screen "Welcome!"
 - Game Screen "Play!"
 - End Screen "Hooray!"
Sloth Snap is a linear game and when the player presses start the game board is created and shuffled. The player ends up at the end screen at either a ”Win” or a ”Loss”.
### Existing Features
#### Start Screen 
The Start Screen "Welcome!" consists of a header and a paragraph that contains the games main title and the rules. Other elements are:
 - Text that tells player to enter name, this is optional
 - Input field for player name (optional)
 - Start button that takes the player to the main board and shuffles the deck.
#### Game Screen
The game screen "Play!" 
 - At start 12 cards with symbols are shuffled and distributed across the board. The game starts the moment the game screen is visible to the player.

#### End Screen
The end screen "Hooray!" Sloth Snap is a linear game and all players end up at the end screen winning. The end screen 
 - Header that tells the player that they have won!
 - Paragraph telling the player how many pairs they were able to match.
 - Play again button that generates a new game board and shuffles the cards.
 - Quit button that takes the player to the start screen.
### Features Left to Implement
- Bilingual option (my son is bilingual and there are too few games available in Welsh and English!)
- At least two more game modes e.g. one harder and one easier.
- The option to change the color scheme specifically with options for color blind players, and options for muted or darker palettes for neurodivergent players with sensitivities to color.
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