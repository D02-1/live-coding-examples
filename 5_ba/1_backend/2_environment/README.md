Um für ein Projekt spezifische umgebungsvariablen anzulegen, erstellen wir eine datei namens ".env", diese wird NIEMALS (!!!) mit gepusht und sollte in der .gitignore  landen, um jemandem, der das projekt runterläd zu sagen, welche daten in die ".env" datei gehören, legen wir eine datei namens ".env.template" an, in der wir nur die schlüssel hinterlegen. Um die daten aus der .env datei auszulesen, benötigen wir das module "dotenv". 

Was genau umgebungsvariablen machen, baben wir kürzlich bei vercel gelernt, mit CI=false.

In einzelschritten, machen  wir folgendes, um selbst definierte umgebungsvariablen zu nutzen:

1. (optional, wenn neues projekt) Wir initialiserwen ein npm projekt mit "npm init -y", damit uns npm keine fragen stellt und alle daten automatisch einfügt.
2. Wir erstellen eine .gitignore datei, und schreiben dort node_modules und .env rein.
3. Wir installieren das modul dotenv. (Dieses modul sorgt dafür, das wir in nodejs .env dateien lesen können).
4. Wir erstellen eine datei namnes .env und schreiben dort die informationen rein, die wir auslesen wollen.
5. Wir imporiteren dotenv mit dem zusatz .config();
6. Jetzt können wir auf unsere umgebungsvariablen zugreifen.
7. Im normalfall erstellen wir noch eine datei ".env.template", die wir mit dem projekt liefern. Die nur die KEYS, aber nicht die werte beinhaltet. So eine datei wird normalerweise vor dem hochfahren eines projektes in .env umbenannt und mit den gewünschten daten befüllt. Erstellt wird sie normalerweise indem wir die .env datei kopieren, umbenennen und die werte löschen.