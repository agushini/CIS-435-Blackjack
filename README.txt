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
1. Go to database.php
2. On line 4, where it says "$dsn = 'mysql:host=localhost:3306;dbname=blackjack';"
    -Change the localhost port number to the port number XAMPP has listed for MySQL.
        EX: My MySQL port number is 3306.