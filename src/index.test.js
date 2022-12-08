describe('Sample Test', () => {
    it('should test that true === true', () => {
      expect(true).toBe(true)
    })
  })


import request from "supertest";
import app from "./index";

var ice_ice = {
  "word": "ice",
  "root": "ice",
  "overlaping_charaters": [
      "i",
      "c",
      "e"
  ],
  "overlap_number": 3,
  "is_partial": false
}

var device_ice = {
  "word": "device",
  "root": "ice",
  "overlaping_charaters": [
      "i",
      "c",
      "e"
  ],
  "overlap_number": 3,
  "is_partial": false
}

var ice_device = {
  "word": "ice",
  "root": "device",
  "overlaping_charaters": [
      "i",
      "c",
      "e"
  ],
  "overlap_number": 3,
  "is_partial": false
}

var ice_intercities = {
  "word": "intercities",
  "root": "ice",
  "overlaping_charaters": [
      "i",
      "c",
      "e"
  ],
  "overlap_number": 3,
  "is_partial": false
}

var intercities_ice = {
  "word": "ice",
  "root": "intercities",
  "overlaping_charaters": [
      "i",
      "c",
      "e"
  ],
  "overlap_number": 3,
  "is_partial": false
}

var rhinoceros_orange = {
  "word": "rhinoceros",
  "root": "orange",
  "overlaping_charaters": [
      "r",
      "n",
      "e"
  ],
  "overlap_number": 3,
  "is_partial": true
}

var orange_rhinoceros = {
  "word": "orange",
  "root": "rhinoceros",
  "overlaping_charaters": [
      "r",
      "n",
      "e"
  ],
  "overlap_number": 3,
  "is_partial": true
}

var client_ice = {
  "word": "client",
  "root": "ice",
  "overlaping_charaters": [
      "i",
      "e"
  ],
  "overlap_number": 2,
  "is_partial": true
}

var ice_client = {
  "word": "ice",
  "root": "client",
  "overlaping_charaters": [
      "c",
      "e"
  ],
  "overlap_number": 2,
  "is_partial": true
}



  describe('Get Endpoint', () => {
    it('should resturn 200 for device/ice', async () => {
      const res = await request(app)
        .get('/word-pattern/device/ice')
      expect(res.statusCode).toEqual(200)
      expect((res) => {
        assert.equal(res.body, device_ice, 'Expected a full match.');
      });
    })
  })

  describe('Get Endpoint', () => {
    it('should resturn 200 for ice/device', async () => {
      const res = await request(app)
        .get('/word-pattern/ice/device')
      expect(res.statusCode).toEqual(200)
      expect((res) => {
        assert.equal(res.body, ice_device, 'Expected a full match.');
      });
    })
  })


  describe('Get Endpoint', () => {
    it('should resturn 200 for ice/ice', async () => {
      const res = await request(app)
        .get('/word-pattern/ice/ice')
      expect(res.statusCode).toEqual(200)
      expect((res) => {
        assert.equal(res.body, ice_ice, 'Expected a full match.');
      });
    })
  })

  describe('Get Endpoint', () => {
    it('should resturn 200 for ice/device', async () => {
      const res = await request(app)
        .get('/word-pattern/ice/device')
      expect(res.statusCode).toEqual(200)
      expect((res) => {
        assert.equal(res.body, ice_device, 'Expected a full match.');
      });
    })
  })

  describe('Get Endpoint', () => {
    it('should resturn 200 for intercities/ice', async () => {
      const res = await request(app)
        .get('/word-pattern/intercities/ice')
      expect(res.statusCode).toEqual(200)
      expect((res) => {
        assert.equal(res.body, intercities_ice, 'Expected a full match.');
      });
    })
  })

  describe('Get Endpoint', () => {
    it('should resturn 200 for ice/intercities', async () => {
      const res = await request(app)
        .get('/word-pattern/ice/intercities')
      expect(res.statusCode).toEqual(200)
      expect((res) => {
        assert.equal(res.body, ice_intercities, 'Expected a full match.');
      });
    })
  })

  describe('Get Endpoint', () => {
    it('should resturn 200 for rhinoceros/orange', async () => {
      const res = await request(app)
        .get('/word-pattern/rhinoceros/orange')
      expect(res.statusCode).toEqual(200)
      expect((res) => {
        assert.equal(res.body, rhinoceros_orange, 'Expected a full match.');
      });
    })
  })

  describe('Get Endpoint', () => {
    it('should resturn 200 for orange/rhinoceros', async () => {
      const res = await request(app)
        .get('/word-pattern/orange/rhinoceros')
      expect(res.statusCode).toEqual(200)
      expect((res) => {
        assert.equal(res.body, orange_rhinoceros, 'Expected a full match.');
      });
    })
  })

  describe('Get Endpoint', () => {
    it('should resturn 200 for client/ice', async () => {
      const res = await request(app)
        .get('/word-pattern/client/ice')
      expect(res.statusCode).toEqual(200)
      expect((res) => {
        assert.equal(res.body, client_ice, 'Expected a full match.');
      });
    })
  })

  describe('Get Endpoint', () => {
    it('should resturn 200 for ice/client', async () => {
      const res = await request(app)
        .get('/word-pattern/ice/client')
      expect(res.statusCode).toEqual(200)
      expect((res) => {
        assert.equal(res.body, ice_client, 'Expected a full match.');
      });
    })
  })

  