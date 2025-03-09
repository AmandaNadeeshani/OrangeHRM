describe('API suite', () => {
    const baseUrl = 'https://reqres.in/api';

    it('retrieves user details', () => {
        cy.request(`${baseUrl}/users?page=2`).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('data');
            expect(response.body.data).to.be.an('array');
        });
    });

    it('posts results', () => {
        cy.request({
            method: 'POST',
            url: `${baseUrl}/users`,
            body: {
                "name": "amanda Lawson",
                "job": "leader"
            }
        }).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body).to.have.property('name', 'amanda Lawson');
            expect(response.body).to.have.property('job', 'leader');
            cy.log(JSON.stringify(response.body));
        });
    });

    it('puts results- update', () => {
        cy.request({
            method: 'PUT',
            url: `${baseUrl}/users/2`,
            body: {
                "name": "amanda Na"
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('name', 'amanda Na');
            cy.log(JSON.stringify(response.body));
        });
    });

it('deletes results', () => {
    cy.request({
        method: 'DELETE',
        url: `${baseUrl}/users/2`
    }).then((response) => {
        expect(response.status).to.eq(204);
        cy.log(JSON.stringify(response.body));
    });
});

});
