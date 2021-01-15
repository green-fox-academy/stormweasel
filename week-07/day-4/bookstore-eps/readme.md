a server.js mysql manipulációval szűri meg az adatbázist, és a többes filterezést megoldottam, ugyanaz az elem nem jelenik meg többször a mysql-nek hála

a server2.js pedig a kiszűrt detailed listát parse-olja, a többes filterezés megoldva,
ugyanazon elem többszöri megjelenése megoldva (unique függvény)

(többes filterezés itt úgy értendő, hogy bővíti a találatok számát az újabb paraméterek alapján (pl Science ÉS Nature kategóriájú könyvek IS)

mindkét változat template-et (ejs-ben) küld a frontendnek 

az xhr változat még nem működik
a form a többes filtereknek még nem készült el
szűkítő többes filterezés még nem készült el