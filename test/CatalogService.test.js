const cds = require('@sap/cds')

const { GET, POST, expect, axios } = cds.test (__dirname+'/..')
axios.defaults.auth = { username: 'alice', password: '' }

describe('CatalogService OData APIs', () => {

  it('serves CatalogService.ListOfBooks', async () => {
    const { data } = await GET `/odata/v4/catalog/ListOfBooks ${{ params: { $select: 'ID,author' } }}`
    expect(data.value).to.containSubset([
      {"ID":"10476641-2c41-4dc7-b3b1-2132765a3f64","author":"author-10476641"},
    ])
  })

  it('executes submitOrder', async () => {
    const { data } = await POST `/odata/v4/catalog/submitOrder ${
      {"book":"12401665-23b8-4c6e-8df3-a24f533c3a72","quantity":71}
    }`
    // TODO finish this test
    // expect(data.value).to...
  })
})
