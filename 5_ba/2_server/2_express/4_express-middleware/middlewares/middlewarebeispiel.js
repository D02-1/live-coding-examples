// Wenn wir spetifisch für EINE (ODER MEHRERE) routen eine middleware definieren wollen, können wir diese dafür als funktion schreiben...
exports.middlewareBeispiel = () =>
{
    // wir returnen das callback mit req, res und next
    return (req, res, next) =>
    {
        // Wir könnten zum beispiel unsere url, und methode als parameter übergeben:
        console.log("METHODE:", req.method);
        console.log("PFAD", req.url);

        // oder das datum des zugriffes:
        console.log("TIME:", Date.now());

        next();
    }
};
