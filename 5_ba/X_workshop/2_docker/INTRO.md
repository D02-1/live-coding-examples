# Docker

## Was ist docker?

Docker ist ein beliebtes Open-Source-Tool, das eine portable und konsistente Laufzeitumgebung für Softwareanwendungen bietet. Docker verwendet Container als isolierte Umgebungen im Benutzerraum, die auf Betriebssystemebene ausgeführt werden und das Dateisystem sowie die Systemressourcen gemeinsam nutzen. Ein Vorteil ist, dass durch die Containerisierung so deutlich weniger Ressourcen verbraucht werden, als bei einem herkömmlichen Server oder einer virtuellen Maschine.

Die Kerneigenschaft von Docker besteht darin, dass Anwendungen gekapselt in sogenannten Docker-Containern verpackt sind. Sie sind so für jedes System einzusetzen, auf dem ein Linux-, Macintosh- oder Windows-Betriebssystem ausgeführt wird. Seit längerer Zeit gibt es auch andere Containersysteme. Docker wurde jedoch populär, weil es eine leichter zugängliche und umfassendere Schnittstelle für diese Technologie bietet. Zudem wurde eine öffentliche Softwarequelle mit Basis-Container-Images geschaffen. Benutzer können auf ihr aufbauen, wenn sie containerisierte Umgebungen zur Ausführung ihrer Anwendungen erstellen.

Mit Docker können Sie sicherstellen, dass die Funktionalität Ihrer Anwendungen in jeder Umgebung ausgeführt werden kann. Dieser Vorteil entsteht, weil alle Anwendungen und deren Abhängigkeiten in einem Docker-Ausführungscontainer zusammengeführt werden.

Das bedeutet auch, dass z.B. DevOps-Profis (Development und IT-Operations) verschiedenste Anwendungen mit Docker generieren. Dadurch stellen sie sicher, dass sie sich nicht gegenseitig stören. Es können Container erstellt werden, auf dem verschiedene Anwendungen installiert sind. Der Container kann dann der Qualitätssicherung übergeben werden. Diese muss anschließend nur den Container ausführen, um sämtliche Abläufe und Funktionen systemunabhängig zu testen. Daher spart die Verwendung von Docker-Tools Zeit. Im Gegensatz zur Verwendung von Virtuellen Maschinen (VMs) müssen Sie sich keine Gedanken darüber machen, welche Plattform Sie verwenden

Docker selbst erstellt sogenannte Container, das ist eine Standardsoftwareeinheit, die einen Code in all seinen Abhängigkeiten speichert. So wird die Anwendung schnell und zuverlässig auf verschiedensten Computerumgebungen lauffähig. Ein Docker-Container bildet ein leichtes eigenständiges ausführbares Softwarepaket ab, das alles enthält, was zum Ausführen einer Anwendungscodelaufzeit benötigt wird

Docker-Container sind besonders beliebt, weil sie gegenüber Virtuellen Maschinen (VMs) viele Vorteile bieten. VMs enthalten grundsätzlich vollständige Kopien eines mächtigen Betriebssystems, die Anwendung selbst, alle erforderlichen Binärdateien und Bibliotheken. Dies beansprucht in der Regel Dutzende von Gigabytes an Speicherkapazität. VMs können im Gegensatz zu Docker-Containern auch nur langsam booten. Docker-Container hingegen benötigen weniger Speicherplatz, da ihre Images normalerweise nur Dutzende von Megabytes groß sind. So können bei einem Einsatz von Docker mehr Anwendungen verarbeitet werden, was die Verwendung von VMs und Betriebssystemen reduziert. Auch ein Einsatz der Container auf Edge-Devices, z.B. auf kompakten Einplatinencomputern wie dem Raspberry Pi oder robusten und wartungsarmen Embedded PCs in der Industrie, ist problemlos möglich.

## Docker installieren

wir installieren docker indem wir bei ubuntu `snap install docker`, oder, bei problemen damit, auf der offiziellen seite schauen, wie es manuell installiert wird: https://docs.docker.com/engine/install/ubuntu/

um docker zu testen, können wir das image "Hello world" laden, wenn wir docker mit dem image starten, und dieses nicht existiert, wird es automatisch heruntergeladen, wir führen den befehl `sudo docker run hello-world` aus, und sehen die docker-willkommensnachricht.

wenn wir prüfen wollen, welche images wir installiert haben, können wir `sudo docker images`, dort sehen wir das docker-repository des images, das versions tag, die id auf dem system, das alter und die größe.

## Docker befehle

als test, was wir so alles mit einem docker-container machen können, holen wir uns das docker image busybox, busybox bietet einige unix befehle in einer sehr kleinen datei, so können wir hier einiges ausprobieren:

wir holen uns das image aus mit dem befehl "sudo docker pull busybox" aus dem docker-register und speichern es auf der festplatte:
`sudo docker pull busybox`

wenn wir jetzt `sudo docker images` eingeben, sehen wir das wir jetzt 2 images haben, busybox und hello-world.

mit dem befehl `sudo docker run busybox` starten wir das image in einem container.

wie wir sehen, sehen wir nichts! wenn wir docker run bei einem image ausführen, wird das image in einem container gestartet und alle befehle ausgeführt, die für das image angegeben wurden. Da wir bei busybox unix befehle direkt ausführen, hat docker das image im container geladen, die angegebenen befehle, also garnix, ausgeführt und den container wieder heruntergefahren.

versuchen wir es noch mal, mit einem unix befehl nach dem run kommando, wir geben ein `sudo docker run busybox echo "hallo docker!!!"`.
Jetzt sehen wir das wir eine ausgabe haben.

wollen wir sehen welche container docker angelegt hat, und wie ihr aktueller status ist, nutzen wir den befehl `sudo docker ps`, wie wir sehen sehen wir nichts, da die container die wir bisher ausgeführt haben sich nach der ausführung wieder heruntergefahren haben. wollen wir alle container sehen, auch heruntergefahrene nutzen wir den befehl `sudo docker ps -a`.

wir haben ja bisher gelernt das ein image in einem container eine eigene linux instanz hochfährt, was bedeutet wir können dort alles machen, was wir aus dem linux terminal kennen, anstelle also das image als container hochzufahren und nach dem ausführen von befehlen direkt wieder zu schließen, können wir auch direkt auf das container system zugreifen.

wenn wir das -it attribut an docker run anfügen, bekommen wir ein interaktives terminal, direkt auf dem container system:
`sudo docker run -it busybox sh`

wir können hier alles machen was wir kennen, mit ls sehen wir den inhalt des aktuellen pfades, dateien erstellen oder ordner können wir auch.

mit exit kommen wir wieder zurück auf unser eigenes system.

docker run hat noch einige mehr funktionen, die wir jetzt in diesem moment nicht alle durchgehen.

wir haben jetzt einige container gestartet, und beendet, wir wollen ein wenig aufräumen und container löschen. dies können wir mit dem befehl `sudo docker rm`

wir sehen uns vorher noch einmal die liste mit containern an, indem wir `sudo docker ps -a` eingeben.

um container zu löschen benötigen wir die container id, die wir nacheinander beim befehl docker rm angeben können, wir geben also einmal die ganzen container ids ein, in denen wir busybox gestartet haben. wenn wir alle container auf einmal löschen wollen, können wir das auch, mit dem befehl `sudo docker rm $(docker ps -a -q)` in dem wir uns einfach von docker ps alle container, und von denen nur die id ausgeben lassen.

in jedem falle bekommen wir die container ids zurück, die wir gelöscht haben.

wollen wir ein image als container ausführen und nach ausführung automatisch löschen, können wir dem docker run befehl auch einfach das attribut --rm anfügen.

## 

wenn wir eine web app mit docker run ausführen wollen, müssen wir die ports der applikation freigeben, läuft unsere app also auf port 3000, müssen wir sie freigeben, damit wir von localhost aus auf die seite innerhalb des containers zugreifen können, oder alle ports öffnen. 

Wir holen uns das typische frontend beispiel von docker, prakhars static-site, geben dem container einen namen und geben mit dem attribut -P geben wir an, das alle ports freigegeben werden.
`sudo docker run -P --name static-site prakhar1989/static-site`

da wir das --name attribut angegeben haben, können wir jetzt dockerweit auf den container zugreifen, indem wir static-site anstelle der id ansprechen.

um herauszufinden wo wir die seite erreichen können, öffnen wir ein neues terminal und geben `sudo docker port static-site` ein, und sehen wohin port 80 auf static-site gemapped ist. wir sehen die adresse 0.0.0.0:49154. Wir gehen auf localhost:49154 und sehen die seite.

##

um static-site zu beenden geben nutzen wir den befehl docker stop, wir geben `sudo docker stop static-site` ein und bekommen den namen zurück, was bedeutet das es geklappt hat.

wollen wir die applikation im hintergrund laufen zu lassen, ohne das wir alles live im terminal sehen können wir den docker run befehl -d, kurz für detached nutzen. Wir können ja mal docker starten, den port definieren und den container im hintergrund laufen lassen.

// wir nutzen das attribut -p (KLEINES p) um den port anzugeben, dabei ist der erste port, der den wir lokal nutzen, gefolgt von dem, den wir aus dem container mappen. wir nutzen -d um das ganze im hintergrund laufen zu lassen:
`sudo docker run -p 3000:80 -d --name static-site prakhar1989/static-site`

## docker hub

auf der webseite docker hub, dockers offiziellen reposity index, können wir eine menge interessanter images finden:
https://hub.docker.com/

lustig ist, es gibt zum beispiel windows 95 als image, https://hub.docker.com/r/toolboc/windows95, was wir allerdings leider auf linux nicht starten können.

wir räumen jetzt erst einmal auf und löschen mit dem befehl `docker image prune --all`alle nicht genutzten images.

## Ein docker image selber erstellen

um ein docker image selbst zu erstellen, vorzugsweise mit einer nodejs app, müssen wir garnicht viel tun.

- wir erstellen ein neues npm projekt und installieren express
- wir schreiben unsere start scripts in die package.json
- wir schreiben eine express applikation
- wir erstellen eine datei namens Dockerfile im root directory

Die datei Dockerfile ist die datei, die das docker image einstellt, wir geben dort an welches betriebssystem wir nutzen wollen, welche befehle wir am start ausführen und welche ports wir freigeben.

## .dockerignore
nachdem wir die Dockerfile datei angelegt haben, können wir eine .dockerignore datei anlegen, ähnlich wie die .gitignore sagt diese datei welche dateien wir NICHT auf das docker image scheiben wollen.

wir geben hier, wie in der .gitignore auch, node_modules an, weil wir das image klein halten wollen, und lieber beim anlegen des containers die module installieren, als sie mit runterladen zu müssen.

## Builden des docker images

wir haben jetzt alles bereit um das image zu builden, dafür nutzen wir den befehl docker build gefolgt von dem order wo wir das image finden, wir sind gerade in diesem ordner, also ist der pfad "."
mit dem attribut -t können wir der app noch ein tag, also einen namen geben, damit wir das image besser wiederfinden.
`sudo docker build . -t dci/node-test-app`

wir sehen jetzt das docker arbeitet, es holt sich die dependencies um das image auf basis von dem node 16 uimage zu builden und führt dann npm install aus.
es testet außerdem, ob das image gestartet werden kann und sagt uns dann, das es erfolgreich war.

wenn wir jetzt `sudo docker images` ausführen, sehen wir das neue image, und dessen meta informationen in unserer liste

nun da wir unser image erstellt haben, können wir es mit docker run starten, wir nutzen den befehl
`sudo docker run  -p 5000:3000 --name node-test-app dci/node-test-app`, wir geben also den port 5000 an, den wir auf den port 3000 im container mappen.

manchmal lässt sich das log nicht schließen, dann müssen wir ein neues bash öffnen und dort mit docker ps die id herausfinden, und mit docker stop dann stoppen, wenn wir die applikation im detached mode starten, haben wir dieses problem nicht

wir stoppen den container `sudo docker stop node-test-app` und starten ihn im detached mode.

`sudo docker run -d -p 5000:3000 --name node-test-app dci/node-test-app`

mit dem befehl `docker exec -it <container id> /bin/bash` könnten wir jetzt auch innerhalb des containers sehen, wie unser image von innen aussieht.

wollen wir alles löschen, den speicher freigeben den docker mit herumligenden images, containern und co wegnimmt, können wir das docker system zurücksetzen, dafür führen wir den befehl `sudo docker system prune` aus.

# docker compose

- wir nehmen unsere docker-app von eben, und kopieren sie komplett in einen neuen ordner, um alles zu testen.
- wir erstellen eine docker-compose.yml datei in unserem projekt
- damit wir überprüfen können, das wir mongodb und unser web projekt laufen lassen, müssen wir beides verbinden, also schreiben wir ein paar neue dateien, wir schreiben ein model, und ein paar routen, und installieren mongoose und den body-parser
- mit `sudo docker-compose build` können wir unser projekt builden
- mit `sudo docker-compose up` können wir unsere services gemeinsam starten, wenn wir jetzt änderungen in unserem code machen, sehen wir  das nodemon neu startet, das liegt daran, das wir ja angegeben haben, das wir auf dem volume /src/ arbeiten, ergo werden die dateien die ganze zeit abgeglichen.
- da docker-compose aktuell ur aktiv ist während wir es sehen, wäre es natürlich nicht so schön, wenn wir jetzt das terminal schließen
- mit `sudo docker-compose down` können wir die container herunterfahren.
- wir können docker-compose allerdings auch im hintergrund laufen lassen, indem wir 
sollten wir es im hintergrund laufen lassen wollen, können wir es mit -d im hintergrund laufen lassen und dann
- um zu sehen welche services gerade laufen nutzen wir `sudo docker-compose ps`
- mit `sudo docker-compose logs -f NAMEDESSERVICES` können wir die logs der verschiedenen container einsehen.
