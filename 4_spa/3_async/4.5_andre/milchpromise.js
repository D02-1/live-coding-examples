// Dies ist ein selbst geschriebener Promise
const sohnHoltMilch = new Promise((resolve, reject) => {
  // Mit einer chance von 50% kommt der Sohn mit Milch zurück
	if (Math.random() > 0.5) {
		const milch = "Vollmilch 3,5% Fett";
		resolve(milch);
	} else {
    // Er ist tollpatschig und fällt recht oft hin.
    // Dann wird das Versprechen Milch zu holen nicht eingelöst
		const grund = "Sohn ist hingefallen";
		reject(grund);
	}
});

// Hier seht ihr die Async Await-Schreibweise, um mit dem Ergebnis eines Promise zu arbeiten
// Für den Umgang mit Fehlern, wird ein try { ... } catch (e) { ... } Block benutzt
const MikeholtMilch = async () => {
	try {
		const milch = await sohnHoltMilch;
		console.log(milch);
	} catch (grund) {
		console.error(grund);
	} finally {
    console.log("sohn zurück vom Kaufmann");
  }
};

MikeholtMilch();


// Die Methoden-Schreibweisen würden so aussehen:
/* 
sohnHoltMilch.then( (milch) => {
  // Ergebnis liegt vor
} ).catch( (grund) => {
  // gab keine Milch
}).finally( () => {
  // auf jeden Fall ist der Promise fertig, egal ob erfolgreich oder nicht
}) 
*/