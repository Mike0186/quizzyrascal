# Quizzy Rascal

![Quizzy Rascal logo](/wireframe-images/title.jpg)
![amiresponsive]()

This website was designed as a quick fun quiz game to pass some time and increase your knowledge in hte 4 main topics of "General Knowledge", "Movies", "History" and "Sports". The site is a minimal design and free of advertising and links to various other site that take away from it purpose.  
 
The is made up of two main pages that allow you to navigate through the quiz with little effort without the use of additional navigation tools to get back to the home page.

The site is responsive accross all devices and is presented well on all screen sizes. The picture above was taken from [amiresponsive](https://amiresponsive.co.uk/)

# UI/UX

- The colour scheme for the site has changed quite a bit from the original. I want to have use bright colors from the start and had given it a linear gradient style backfround. while testing the site it became overpowering so i decided to go with a background picture. 
- I was using hte text-shadowing to form a neon effect on my text. this broughte me to look for some insiration on background-images.
- The background picture on Quizzy Rascal was purchased from shutter stock and it formed the basis of the new color scheme, neon pin & blue. I feel the contrast of these colour against the dark background give a great vibrant pop to the site with out it getting too over powering while quizzing throught the various caterories.

## Existing Features

---

### Hidden Elements

- The site is minimal in design andonly consists of 2 pages the index.html and gameover.html. the site is designed to start the game and reveal the next element when the user clickes on their choice of category. 
- The questions submit and check on click rather than the user having to click a submit button. 
- This click also populated the next question to the user. The scores are calculated as you play on a counter above the question. 
  ![Hidden Elements Before Click](/wireframe-images/landingpage.JPG)
  ![Hidden Elements On Click](/wireframe-images/landingpageonclick.JPG)

### Game Over

-when the game is over the user is presented with a game over page and a note. This page will automatically reload to the landing page after 10 seconds so the user can try another quiz
![Game Over](/wireframe-images/gameover.JPG)


# Future Features

- I would like to include a leader bord of user scores. Whenthe user is finished any quiz it would prompt them to enter their username and email address. This would be stored in a table and presented on hte game over page. The user name would be published on the page with their score. If there score is beaten they would receve a notification by email stating "user: mike0186 has beaten your high score"

- Another feature would be to have a kids section for different age groups.Depending on the age group they quiz would be in the form of pictures and audio and easier readable question that are relative to the age group. 

- Finally .

# Testing

- This site has been tested on the follwoing browsers; Chrome, Firefox and Micrsoft Edge.

- Through the various test I can confirm theat the site is responsive and looks good on all screen sizes.

- Al the quiz categories have been tested and present no errrs.

- The text contrast on all titles and links are all readable against the backgrounds.

### Bugs

- "Undefined question" would not load due to a missing "," after the array or between categories. 
- Background image not uploading due to size. 
- Elements running off the screen due to padding and positioning. 
- Quiz not starting onclick due to incorrectly spelled id attribute.

### Validator Testing

- HTML: No errors were found when passing throught the W3C validator
- CSS: No errors were found when passing throught thejigsaw validator the link to the      result in here [Jigsaw](http://jigsaw.w3.org/css-validator/validator$link)
- Accessibillity: The sites accessibility was passed when tested via the devtools lighthouse functionality.

 ![lighthouse desktop test screen shot](/wireframe-images/lighthousedesktop.jpg)
 ![lighthouse mobile test screen shot](/wireframe-images/lighthousemobile.jpg)

# Deployment

- The site was deployed to the github pages.
  - In the github repository, nagigate to the settings tab.
  - from the source section drop-down menu select themaster branch
    -once the master branch hs been selected, the page provided the link to the website.

# Credits

- Kevin Powell video tutorails on responsive first design [kevin Powell](https://www.youtube.com/watch?v=zyNhxN6sToM&t=980s)
- love Maths Project score counter [CI Love Maths](https://github.com/Code-Institute-Solutions/love-maths-2.0-sourcecode/blob/master/04-multiplication-and-subtraction-questions/01-the-multiplication-game/index.html)

- Page redirect for thank you page [w3c](https://www.w3.org/TR/WCAG20-TECHS/H76.html)

- Red Stapler for Neon text shadow.
[Red Stapler](https://redstapler.co/realistic-css-neon-text-effect-tutorial/)

- Toggle between showing and hiding elements. [w3docs](https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp)

- Shutterstock for the background image [Shutterstock]()


## Content

The content questions and answers were generally taken from online searches. 

  ## Media
  

[Background Image](<https://www.shutterstock.com/image-vector/neon-quiz-sign-vector-design-template-1722883588>) This was sources on Shutterstock.


