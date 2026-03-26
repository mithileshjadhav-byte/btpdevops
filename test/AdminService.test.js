const cds = require('@sap/cds')

const { GET, POST, expect, axios } = cds.test (__dirname+'/..')
axios.defaults.auth = { username: 'alice', password: '' }

describe('AdminService OData APIs', () => {

  it('serves AdminService.Authors', async () => {
    const { data } = await GET `/odata/v4/admin/Authors ${{ params: { $select: 'ID,name' } }}`
    expect(data.value).to.containSubset([
      {"ID":"20081734-c6a7-423a-bb1f-393c00f0d494","name":"name-20081734"},
    ])
  })

})
