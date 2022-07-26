# Sloth Snap!
![Sloth Snap!](/assets/images/readMeImages/readmeDeviceMockup.png)
# Project Aim
I want to create a simple memory game to aid my son's short term memory ability. My son is neurodivergent and struggles with focusing and short term memory. Sloth Snap is a memory game designed to challenge the player to reach a perfect game of 6 pairs. The user interface is bright and friendly and directly engages one my son's special interests- Sloths!
 
This project is the second of four projects that needs to be completed in order to receive a diploma in Software Development from The Code Institute.
Required technologies are HTML5, CSS3 and JavaScript.
A live version of the project can be found here - https://ahaffg.github.io/slothsnap/
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
    + [Game Screen](#game-screen "Game Screen")
    + [Help Screen](#help-screen "Help Screen")
    + [End Screen](#end-screen "End Screen")
  + [Features Left to Implement](#features-left-to-implement "Features Left to Implement")
+ [Technologies used](#technologies-used "Technologies used")
+ [Testing](#testing "Testing")
  + [Validator Testing](#validator-testing "Validator Testing")
  + [Known Bugs](#known-bugs "Known Bugs")
+ [Development and Deployment](#development-and-deployment "Development and Deployment")
+ [Content](#content "Content")
+ [Media](#media "Media")
+ [Credits](#credits "Credits")
## UX
### User Demographic
The game is aimed at young children or children who recieve additional learning support. The game will allow a user to continue playing until they complete the game so that they are not disheartened if they do not complete the game within a certain time or within a certain ammount of moves.
### User Stories
Initially this game has been designed for my son (6 years) however, down the line, other younger children or neurodivergent people who would like a way to exersize and develop their short term memory muscles may benefit from the game too
#### New players
As a new user I want to:
-	Familiarise myself with the game and complete the game
#### Returning players
As a returning user I want to:
-	Complete the game in a decreasing amount of guesses.
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
![Game Wireframe](/assets/images/readMeImages/slothSnapWireFrameStartGame.jpg)

Above is my wireframe for the layout of the "Play!" screen. I want there to be as few functions as possible so that the game play is intuitive and that the player can focus on the game.

![Buttons](/assets/images/readMeImages/slothSnapWireFrameStartGame_buttons.jpg)

After viewing several similar projects, I realised that it would be useful to have a live counter that would show the player how many guesses they had made so far. I alao wanted the level selector buttons to be accesable but not distracting to the main game, so these have been placed at the bottom of the screen. The text in these level buttons are color co-ordinated e.g. easy = green, medium = yellow and hard = red so that non-literate users can still easily navigate the user interface. There is also a button that triggers a modal window that gives instructions on how to play the game.

In other projects that I've seen I've seen functions like timers being used. I've decided againsed implementing anything like this in my game as this could potentially frustrate a user and cause them to loose confidence early on.

![Help](/assets/images/readMeImages/wireFrameHelp.jpg)

In this modal, the instructions are written as well as given in a visual format so that users who are unable to read are able to easily understand the goals of the game. The modal is triggered by a button labeled "?" a symbol that is easily understood by non-literate users.

![Hooray](/assets/images/readMeImages/slothSnapWireFrameCongratulations.png)

This window appears once the user has completed the game by matching all the pairs. It shows how many guesses it took for them to complete the game and, if this is not the first time they have played the gme in that session, what their best score is for that level. This function re-sets every time the page is re-loaded.

In order for the game to work I will need to write functions that:
-	Have a template literal that uses the inputted username to personalise the game for the player.
-	Event listens for clicks.
-	Checks the values of the selected cards to test if they are a matching pair.
-	Keep the correctly selected pairs ‘facing upwards’
-	Or return incorrect selections to a ‘downward’ position.
-	An event listener that will trigger a congratulatory message (template literal) when the game has been successfully completed.
-	A function that will “shuffle” the cards each time a new game is started.

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

There will be six sloth card pairs for the easy level. I have drawn them to be similar in terms of color and style but they are quite different in appearance. In the future if I were designing harder levels I could draw cards that appear more similar so the player has to focus more on details to identify the pairs.

![Cards](/assets/images/readMeImages/readMeSlothCards.jpg)

There are a further 2 pairs added for the medium level (8 pairs total) and one more for the hard (9 pairs in total.)

![A Snuggle of Sloths](/assets/images/readMeImages/sloths_cards.png)

![False](/assets/images/false.png) ![Correct](/assets/images/correct.png)

The two images in the help window are designed to give pictoral instructions to non-literate users so they can easily figure out game play for themselves without additional help. This is importance for confidence building, encouraging independence and building IT skills.
## Features 
Sloth Snap consists of three screens:
 - Start Screen "Welcome!"
 - Game Screen "Play!"
 - End Screen "Hooray!"
Sloth Snap is a linear game and when the player presses start the game board is created and shuffled. The player ends up at the end screen at either a ”Win” or a ”Loss”.
#### Game Screen 
The game screen "Play!" 
 - At start 12 cards with symbols are shuffled and distributed across the board. The game starts the moment the game screen is visible to the player.
#### Help Screen
The Start Screen "Welcome!" consists of a header and a paragraph that contains the games main title and the rules. Other elements are:
 - Text that tells player to enter name, this is optional
 - Input field for player name (optional)
 - Start button that takes the player to the main board and shuffles the deck.
#### End Screen
The end screen "Hooray!" Sloth Snap is a linear game and all players end up at the end screen winning. The end screen 
 - Header that tells the player that they have won!
 - Paragraph telling the player how many pairs they were able to match.
 - A ticker function that gives a congratulatory message.
 - Play again button that generates a new game board and shuffles the cards.
### Features Left to Implement
- Bilingual option (my son is bilingual and there are too few games available in Welsh and English!)
- The option to change the color scheme specifically with options for color blind players, and options for muted or darker palettes for neurodivergent players with sensitivities to color.
- Havint the option of sound (that can be turned off for sound sensitive players) may add to the fun of the game and help with aiding memory.
## Technologies used
- [HTML](https://en.wikipedia.org/wiki/HTML)
- [CSS](https://en.wikipedia.org/wiki/CSS)
- [JavaScript](https://en.wikipedia.org/wiki/javascript)
## Testing 
I have tested the game on as many different devices as possible as well as asking my friend, father and husband to do so too. They all found that the game worked for them, and had no issues with the sizing or color scheme.

Most importantly, the game was finally tested by the young chap I designed the game for!

![Testing](/assets/images/readMeImages/readmeIoloTestStart.jpg)
(From left to right, top to bottom) Icing, Dil, Mel, Sloff, Moron, Iolo, Babi Sloth, Dave, Hottie, Molasses and Bob all enjoy a game of Sloth Snap!

![Play](/assets/images/readMeImages/readmeIoloTestPlay.jpg)
My son found the game easy to pick up and immediately after completing the first level wanted to try the harder levels. He loved that there were more sloths to 'collect'!

![Win](/assets/images/readMeImages/readmeIoloTestWin.jpg)
I think the one bit of feedback from my son that I should consider carefully for the future was that the wining message was a little anticlimactic, especially for non-readers. I noted that other students had used gifs as part of their congratulations message and in hindsight, this is not only a good idea for non readers, but also makes the game more attractive and plays into game theory, providing a visual reward as well as a numerical one.

Success!

N.B. As a result of the feedback from my son I decided to alter the congratulations screen so that it showed some of the sloth images instead of the text I originally had. I thought this would be more rewarding and act as a better incentive to complete the game, as well as being better for non literate users.

![congratulations](/assets/images/readMeImages/readmeTestingCongrats.png)

### Validator Testing 

[HTML](https://validator.w3.org/)
![HTML](assets/images/readMeImages/readmeW3Report.png)
No errors were found with the W3C validator.

[Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/)
![Lighthouse](assets/images/readMeImages/readmeLighthousePerformanceDetail.png)
I appreciate the site may take a little longer to load due to the use of image files as opposed to smaller files, but I feel the end result is worth it!

[CSS](https://jigsaw.w3.org/css-validator/)
![CSS](assets/images/readMeImages/readmeJigsawReport.png)
No errors were found with the CSS code through the W3 Jigsaw validator.

[JavaScript](https://jshint.com/)
[JSHint](assets/images/readMeImages/readmeJSHintReport.png)
No errors were found in the JavaScript code through the JS Hint validator.

### Known Bugs
Some testers have reported that there the screen shakes sometimes when the card flips. I believe this is related to the CSS animation code, but I haven't been able to replicate the issue myself so I am unable to fix this.

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
- All text content in this game has been produced by the author, Angharad Griffiths.
## Media
Google Fonts
## Credits 
### For code inspiration, design inputs, help and advice.
I have consulted numerous websites, individuals and slack channels to get support for the code. I have listed below from where I have adapted code to suit the needs of my gameS:
 - [Mdn web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) for information about Arrays and also identifying bugs.
 - [DevelopedByEd](https://developedbyed.com/) that taught me in his vides on how to generate a board of cards and display it as a CSS grid.
 - [W3 Schools](https://www.w3schools.com/jsref/met_element_addeventlistener.asp) for understanding Event Listeners. 
 - [Patternio](https://patternico.com/#t4jZ7NG8wcwht3SL) for providing an easy way for me to create a unique and dynamic background using my own images.
 - [Techsini](https://techsini.com/multi-mockup/) was used to create the devide mock-up image at the head of this document.
 - [Rob Appleby](https://github.com/robappleby1/Milestone-Project-2---stoke-city-memory-game-for-kids), [Samuel Dainton](https://github.com/Samuel-Dainton/portfolio-project-2), [Mats Simonsson](https://github.com/Pelikantapeten/p2-quickmem), [Fabio Faria](https://github.com/Daferia/ultimate_Quiz_P2), [Nicolas Cagna](https://github.com/nicolascagna96/quick-memory-game) for their fantastic milestone 2 projects, which provided me with inspiration nd helped me see what was possible and how I wanted my game to look.
 
### Acknowledgment
- My fantastic mentor [Martina Terlević](https://www.linkedin.com/in/martinaterlevic/) for always being so helpful and flexible, as well as all round awesome human!