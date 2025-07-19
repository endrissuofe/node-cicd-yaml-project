import { expect } from 'chai';
import supertest from 'supertest';
import app from './index.mjs';

describe('CI/CD YAML Demo Tests', function() {
  describe('Unit Tests', function() {
    it('should return true for a simple check', function() {
      const simpleCheck = () => true;
      expect(simpleCheck()).to.be.true;
    });
  });

  describe('Integration Tests - Express App', function() {
    it('should return 200 and correct response body for GET /', async function() {
      const response = await supertest(app)
        .get('/')
        .expect(200)
        .expect('Content-Type', /html/);
      expect(response.text).to.include('<h1>Welcome to My CI/CD YAML Demo</h1>');
    });
  });
});