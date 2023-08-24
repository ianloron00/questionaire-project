# Questionaries Backend

This is the backend part of a personal project consisting of a questionaire.

It was quite easy to setup this environment. I just ran:
- npm init
- npm i --package-lock-only

... and then created my files.

Databases:

During development, I learned how to create MySQL databases throught .sql files via terminal.

For learning purposes, I installed a DB called 'Sakila' [https://dev.mysql.com/doc/sakila/en/sakila-installation.html]. Then, I extracted the files and ran:
- mysql -u root -p
- SOURCE <path to .sql files>/<file>.sql
... and to test:
- USE <database>
- SHOW FULL TABLES;
Reference: [https://community.revelo.com.br/realizando-un-crud-no-mysql-com-o-node-js/]