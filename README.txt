# CIS-435-Blackjack
Project 4 for CIS 435 web development

How to use the project with XAMPP
1. Download and install XAMPP
2. Copy and paste the entire project folder into "/xampp/htdocs".
3. Open XAMPP and run both the Apache and MySQL server.
4. Open up your web browser and type "localhost:<insert Port #/file path from htdocs to front-end folder/index.php"
    EX: http://localhost:1337/CIS%20435%20Project%204/CIS-435-Blackjack/front-end/index.php
        -My Apache port number is 1337
        -My file path to index.php is "CIS 435 Project 4/CIS-435-Blackjack/front-end/index.php"
5. From there, you should be able to view the index.php as an HTML web page.

To-Do In code:
-Fix the bust function (kinda but doesnt output and idk if it checks at the right time)
-betting (ask ammar maybe) //not working not adding
-turn switching (kinda)
+if shuffle deck is array is too small (recopy in the deck) DONE
-display the dealer and player values (is broken rn)
-only display the dealer values when the player has already pressed stand  (ask chris)
+change it so that all face cards are value of 10 instead of their place in the array DONE
+dealer hits until over 17
-Ace is only counted as 1 rn, should be 1 or 11
-Need a win function
-game reset

Maybe for chris:
-implement 5 card maximum
-make it so that the cards enter in order
-make it so that the dealers cards show when the player hits stand


Things to consider/accomplish:
-User interface mock up
-A UML diagram 


Notes to remember for the project:
-The dealer hits until a soft 17 (meaning an ace is counting as 11)
-Lets figure out if we want to make the deck shuffle (like when to shuffle)
-Do we want to add in split and double
-We have to add in minimum and maximum bets
-Add in bonus for if the player gets Blackjack from the first two cards
-We have to decide if the dealer will check for blackjack
-Were gonna say that the minumum number of cards required for a hand shoudld be 5, this is important when it comes to shuffling

How to play Blackjack:
-Number cards worth their number, face cards worth 10
-The player is just trying to beat the dealer, closest to 21 without going over wins.
-The player can stop hitting (asking for cards) at whatever point they want
-The dealer must hit until their total is 17 or higher
-The dealer only shows one of their cards face up
-The player gets blackjack if they get an Ace and a 10/face card in their first two cards

