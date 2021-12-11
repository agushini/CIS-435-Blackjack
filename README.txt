# CIS-435-Blackjack
Project 4 for CIS 435 web development

How to use the project with XAMPP
1. Download and install XAMPP
2. Copy and paste the entire project folder into ".../xampp/htdocs".
    EX: I have XAMPP on my G drive, so my project is in "G:/xampp/htdocs"
3. Open XAMPP and run both the Apache and MySQL server.
4. Open up your web browser and type "localhost:<insert Port # here>/<insert file path from htdocs to front-end folder here>/index.php"
    EX: http://localhost:1337/CIS%20435%20Project%204/CIS-435-Blackjack/front-end/index.php
        -My Apache port number is 1337
        -My file path to index.php is "CIS 435 Project 4/CIS-435-Blackjack/front-end/index.php"
NOTE: You will need to set up the phpMyAdmin which is detailed below.

How to set up phpMyAdmin and the database
1. Open a new tab and type "localhost:<insert Port # here>/phpmyadmin"
    EX: http://localhost:1337/phpmyadmin/
        -My Apache port number is 1337
2. Go to Databases
3. Database name: "blackjack" and click "Create"
4. Create a table with name "blackjack" with Number of columns = 3
5. Fill out the table with these values:
    Name = "username"     type = VARCHAR        Length/Values = 30      Default = None
    Name = "password"     type = VARCHAR        Length/Values = 30      Default = None
    Name = "wins"         type = INT            Length/values = 6       Default = NULL
6. On the left hand toolbar, click "New" at the top of the directory list.
7. On the top tab of New, click "User accounts".
8. Click "Add user account" under the User accounts overview
9. Fill out the Add user account form with this information:
    User name: JuicyJ (case sensitive)
    Host name: Select "localhost" from the drop-down menu. DO NOT DO ANYTHING ELSE LIKE ADD THE PORT NUMBER TO THIS FIELD.
    Password: ice (case sensitive)
    Global privileges: Check all
NOTE: YOu will need to configure the localhost ports in login.php and incrementWin.php which is detailed below.

How to configure the localhost ports for the php files.
1. Go to login.php
2. On line 8, where it says "$dsn = 'mysql:host=localhost:3306;dbname=blackjack';"
    -Change the localhost port number to the port number XAMPP has listed for MySQL.
        EX: My MySQL port number is 3306.
3. Go to incrementWin.php
4. Repeat step 2 on line 8 of incrementWin.php (Yes it's even on the same line number as login.php I'm just that cool).


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

