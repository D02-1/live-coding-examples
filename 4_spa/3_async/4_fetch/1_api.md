Was sind API's?

Bevor wir uns mit fetch beschäftigen, reden wir erst einmal über API's, da die hauptaufgabe von fetch ist, daten aus apis zu lesen.

Api steht für "Application programming interface", in deutsch auch als "Anwendungsschnittstelle" oder kurz "Schnittstelle" bekannt, stellt die verbindung von daten zwischen verschiedenen programmen da. In der web entwicklung werden APIS benutzt um daten von externen oder internen quellen zu bekommen.

Meist werden diese daten in JSON an den entpunkt, also den pfad der api zurückgegeben, das wir mit JavaScript und anderen programmiersprachen auslesen können, woher die daten kommen, ist uns überlassen.

Es gibt verchiedene Arten von API's:
- Offene API's: auch bekannt als public API, sind API schnittstellen desssen daten jedem ohne einschränkung zur verfügung stehen
- Intere API's: auch bekannt als private-apis, private-apis sind schnittstellen, die intern benutzt werden, und meist innerhalbn eines unternehmens verwendet werden, um daten zwischen teams und produkten zu teilen.
- Partner API's: können nur mit speziellen rechten oder lizenzen benutzt werden und sind auch nicht öffentlich verfügbar
- Gemischte API's: Diese art schnittstelle vermischt verschiedene daten und service API's und führt diese zusammen.

API's kann man mit verschiedenenen aufrufmehtoden verwenden, die wir schon in formularen, in html kennengelernt haben:
- GET: Fragt existieren daten von einem server ab.
- POST: fügt einem server neue daten hinzu.
- PUT: ändert existierende informationen ab.
- DELETE: Löscht vorhandene informationen.

Oft sind api routen so geordnet das sie eine liste aller inhalte ausgeben, und eine weitere ebene hqaben um einzelne inhalte auszugeben:
Eine liste mit produkten: https://api.predic8.de/shop/products/
Ein produkt: https://api.predic8.de/shop/products/62

Oft muss man apis mit hilfe von schlüsseln oder anderen login-daten validieren, um sie benutzen zu dürfen, wir schauen uns ein paar beispiele ohne authentifizieren an: https://mixedanalytics.com/blog/list-actually-free-open-no-auth-needed-apis/

Hier noch eine liste mit einigen API's, gesichert wie auch ungesichert: https://github.com/public-apis/public-apis
