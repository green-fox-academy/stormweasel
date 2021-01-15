a server.js mysql manipulációval szűri meg az adatbázist, és a többes filterezést megoldottam, ugyanaz az elem nem jelenik meg többször a mysql-nek hála

a server2.js pedig a kiszűrt detailed listát parse-olja, a többes filterezés megoldva,
ugyanazon elem többszöri megjelenése megoldva (unique függvény)

(többes filterezés itt úgy értendő, hogy bővíti a találatok számát az újabb paraméterek alapján (pl Science ÉS Nature kategóriájú könyvek IS)

a filter-form elkészült


mindkét változat template-et (ejs-ben) küld a frontendnek, css és script.js hozzáadva a template-hez

szűkítő többes filterezés még nem készült el
az xhr változat még nem működik
