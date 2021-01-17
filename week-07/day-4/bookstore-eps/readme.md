a server.js mysql manipulációval szűri meg az adatbázist, és a szűkítő és többes filterezést is megoldottam, ugyanaz az elem nem jelenik meg többször a mysql-nek hála

a server2.js pedig a kiszűrt detailed listát parse-olja, a szűkítő és a többes filterezés megoldva, ugyanazon elem többszöri megjelenése megoldva (unique függvény)

(többes filterezés:  bővíti a találatok számát az újabb paraméterek alapján 
											(pl Science ÉS Nature kategóriájú könyvek IS);
szűkítő filterezés: a találatnak minden feltételnek meg kell felelni;)

mindkét változat template-et (ejs-ben) küld a frontendnek, css és script.js hozzáadva a template-hez
a filter-form elkészült, üres eredménynél üzenet hozzáadva detailed.html-hez, 
radio páros hozzáadva a filter-formhoz, a radiok beállítását megőrzi

az xhr változat még nem működik
