const API_URL = Cypress.env('API_URL');

describe('Reqres.in API', () => {
    context('POST', () => {
        it('cria um usuário', () => {
            cy.api({
                method: 'POST',
                url: `${API_URL}/api/users`,
                body: {
                    name: 'morpheus',
                    job: 'leader',
                },
                failOnStatusCode: false,
            }).should(({ status, body }) => {
                expect(status).to.equal(201)

                expect(body).to.have.property('name', 'morpheus')
                expect(body).to.have.property('job', 'leader')
            })
        })
    })

    context('GET', () => {
        it('busca um usuário individual', () => {
            cy.api({
                method: 'GET',
                url: `${API_URL}/api/users/2`,
                failOnStatusCode: false,
            }).should(({ status, body }) => {
                expect(status).to.equal(200)

                const { data } = body

                expect(data).to.have.property('id', 2)
                expect(data).to.have.property('first_name', 'Janet')
                expect(data).to.have.property('email', 'janet.weaver@reqres.in')
            })
        })

        it('busca uma lista de usuários', () => {
            cy.api({
                method: 'GET',
                url: `${API_URL}/api/users?page=2`,
                failOnStatusCode: false,
            }).should(({ status, body }) => {
                expect(status).to.equal(200)

                expect(body).to.have.property('page', 2)
                expect(body).to.have.property('data').with.lengthOf(6)
            })
        })
    })

    context('PATCH', () => {
        it('atualiza um usuário', () => {
            cy.api({
                method: 'PATCH',
                url: `${API_URL}/api/users/2`,
                body: {
                    name: 'morpheus',
                    job: 'zion resident',
                },
                failOnStatusCode: false,
            }).should(({ status, body }) => {
                expect(status).to.equal(200);
                expect(body).to.have.property('name', 'morpheus')
                expect(body).to.have.property('job', 'zion resident')

            })
        })
    })
})