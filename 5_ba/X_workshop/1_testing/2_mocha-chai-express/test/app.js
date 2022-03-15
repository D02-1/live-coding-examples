// wir importieren chai und chai-http:
const chai = require('chai');
const chaiHttp = require('chai-http');

// wir importieren unsere server app:
const server = require('../src/index');

// zum testen verschiedener assertion dialekte nutzen wir heute should:
const should = chai.should();

// wir sagen chai, es soll chaiHttp als middleware/plugin nutzen:
chai.use(chaiHttp);

describe('App', () =>
{
    // wir sagen wir wollen die home route testen:
    describe('GET /', () =>
    {
        // wir sagen was wir wollen, und übergeben done, als methode um die anfrage zu beenden
        it('shows home route', (done) =>
        {
            // wir sagen chai, es soll den express server anfordern und starten:
            chai.request(server)
            // und die seite '/' per GET methode laden:
            .get('/')
            // am ende des requests fügen wir unsere response tests ein:
            .end((err, res) =>
            {
                // es sollte den status 200 zurückliefern:
                res.should.have.status(200);
                // der angezeigte text sollte gleich "Hello World!" sein:
                res.text.should.be.equal("Hello World!");

                // am ende der response geben wir die methode done(); an, um die anfrage zu beenden:
                done();
            });
        });
    });

    // wir wollen eine fehlerseite angezeigt bekommen:
    describe('GET /err', () =>
    {
        it('shows a 404 error message', (done) =>
        {
            chai.request(server)
            .get('/err')
            .end((err, res) =>
            {
                // es sollte den status 404: Not Found zurückliefern:
                res.should.have.status(404);

                done();
            });
        });
    });

    // wir sagen wir wollen die post route testen:
    describe('POST /user/:id', () =>
    {
        // wir sagen wir wollen, das die id zurückggeben wird
        it('should return user id', (done) =>
        {
            chai.request(server)
            .post('/user/testUser')
            .end((err, res) =>
            {
                // es sollte den status 200 zurückliefern:
                res.should.have.status(200);

                // die response sollte im format json sein:
                res.should.be.json;

                // der schlüssel id vom response body sollte dem wert 'testUser' entsprechen:
                res.body.id.should.equal('testUser');

                done();
            });
        });
    });

    // wir wollen noch eine post route testen:
    describe('POST /create', () =>
    {
        it('should return status 200', (done) =>
        {
            chai.request(server)
            .post('/create')
            .end((err, res) =>
            {
                // wir sagen, es sollte status 200 zurückliefern:
                res.should.have.status(200);

                done();
            });
        });

        it('should return a body object', (done) =>
        {
            chai.request(server)
            .post('/create')
            .end((err, res) =>
            {
                // wir sagen, body sollte ein objekt zurückliefern:
                res.body.should.a('object');

                done();
            });
        });

        it('should return success message', (done) =>
        {
            chai.request(server)
            .post('/create')
            .end((err, res) =>
            {
                // wir sagen body sollte die property success haben, und diese sollte gleich true sein:
                res.body.should.have.property('success').and.equal(true);

                done();
            });
        });

        it('should return username informations in body', (done) =>
        {
            chai.request(server)
            .post('/create')
            // wir geben an, das wir den content-type x-www-form-urlencoded nutzn wollen...
            .set('content-type', 'application/x-www-form-urlencoded')
            // und geben an das wir den body 'username' senden wollen:
            .send({ username: 'rick' })
            .end((err, res) =>
            {
                // wir sagen, die property username soll den wert rick haben, den wir im body übergeben haben:
                res.body.should.have.property('username').and.equal('rick');

                done();
            });
        });
    });
});

// mehr informationen zu API's mit mocha und chai gibt es hier: https://www.digitalocean.com/community/tutorials/test-a-node-restful-api-with-mocha-and-chai
