# mit einem hashtag am anfang einer zeile schrieben wir ein kommentar

# FROM = die unix version, auf der unser image basiert
# die erste kommandozeile des Dockerfile beinhaltet die unix version, die wir auswählen.
# hierbei handelt es sich um kleine abbilder von unix, sie haben standardmäßig nichts vorinstalliert, aber wir können eine version auswählen die zum beispiel nodejs 16 vorinstalliert hat:
FROM node:16

# als nächstes erstellen wir auf unserem neuen betriebssystem einen ordner, in dem wir unsere applikation ausführen wollen:

# WORKDIR = das arbeitsverzeichnis, wo wir unsere app anlegen:
# wir wollen den unix typischen ordner "usr", also den user nutzen, den den source ordner und app, für unsere beispiel app:
WORKDIR /app

# als nächstes kopieren wir unsere package.json und unsere package-lock.json von unserer festplatte in den ordner auf dem image

# COPY = wir kopieren dateien von der festplatte ins image
# wir nutzen package*.json, damit beide dateien kopiert werden.
COPY package*.json ./

# RUN = einen befehl ausführen
# wir führen befehle aus, um unsere applikation einzurichten
RUN npm install

# nach der installation kopieren wir unsere applikation in unser image
COPY . .

# ENV = environment variable anlegen
# in produktion befinden sich daten von der .env datei auf dem system, das selbe machen wir auch in docker, wir schreiben den befehl, gefolgt von dem schlüssel und dem wert:
ENV PORT 3000

# EXPOSE = einen port ausserhalb des images/containers verfügbar machen
# wenn das image in einem container läuft, können wir auf die applikation zugreifen, indem wir den port ansprechen, den wir innerhalb der applikation angegebn haben
EXPOSE 3000

# CMD = Ein Kommando ausführen
# wir führen am ende ein kommando aus um die app zu starten
CMD [ "node", "./src/index.js" ]
