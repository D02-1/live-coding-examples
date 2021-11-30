
const baueHaus= (grundflaeche, etagen ) => {
  if (etagen > 10) {
    throw "Haus zu hoch, umgefallen";
  }
  if (etagen <= 0) {
    throw "kein unterirdischer Bunker";
  }
  return { volumen: grundflaeche * etagen * 2.15, grundflaeche: grundflaeche, etagen: etagen};
}

try {
  console.log(baueHaus(100, 5));
} catch (fehler) {
  console.error(fehler);
}

function f() {
  try {
    console.log(0);
    throw 'bogus';
  } catch(e) {
    console.log(1);
    return true;    // this return statement is suspended
                    // until finally block has completed
    console.log(2); // not reachable
  } finally {
    console.log(3);
    return false;   // overwrites the previous "return"
    console.log(4); // not reachable
  }
  // "return false" is executed now
  console.log(5);   // not reachable
}
console.log(f()); // 0, 1, 3, false

try {
  
console.log(["André", "Mandy", "Barabarella"].sort("Hurra"));

} catch (fehler) {
  console.error(fehler.message);
}
