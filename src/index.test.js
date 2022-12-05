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


  describe('Get Endpoint', () => {
    it('should resturn 200 for device/ice', async () => {
      const res = await request(app)
        .get('/word-pattern/device/ice')
      expect(res.statusCode).toEqual(200)
    })
  })

  describe('Get Endpoint', () => {
    it('should resturn 200 for ice/ice', async () => {
      const res = await request(app)
        .get('/word-pattern/device/ice')
      expect(res.statusCode).toEqual(200)
      expect((res) => {
        assert.equal(res.body, ice_ice, 'Expected a full match.');
      });
    })
  })

  describe('Get Endpoint', () => {
    it('should resturn 200 for ice/device', async () => {
      const res = await request(app)
        .get('/word-pattern/device/ice')
      expect(res.statusCode).toEqual(200)
      expect((res) => {
        assert.equal(res.body, device_ice, 'Expected a full match.');
      });
    })
  })

  describe('Get Endpoint', () => {
    it('should resturn 200 for intercities/ice', async () => {
      const res = await request(app)
        .get('/word-pattern/intercities/ice')
      expect(res.statusCode).toEqual(200)
      expect((res) => {
        assert.equal(res.body, device_ice, 'Expected a full match.');
      });
    })
  })

  describe('Get Endpoint', () => {
    it('should resturn 200 for ice/intercities', async () => {
      const res = await request(app)
        .get('/word-pattern/ice/intercities')
      expect(res.statusCode).toEqual(200)
      expect((res) => {
        assert.equal(res.body, device_ice, 'Expected a full match.');
      });
    })
  })

  describe('Get Endpoint', () => {
    it('should resturn 200 for device/ice', async () => {
      const res = await request(app)
        .get('/word-pattern/ice/device')
      expect(res.statusCode).toEqual(200)
      expect((res) => {
        assert.equal(res.body, device_ice, 'Expected a full match.');
      });
    })
  })

  