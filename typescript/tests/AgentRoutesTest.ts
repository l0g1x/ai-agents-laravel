import { expect } from 'chai';
import { describe, it } from 'mocha';
import request from 'supertest';
import app from '../src/index';

describe('Agent Routes', () => {
  it('should get all agents', async () => {
    const res = await request(app).get('/agents');
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an('array');
  });

  it('should get a single agent', async () => {
    const res = await request(app).get('/agents/1');
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an('object');
  });

  it('should create a new agent', async () => {
    const newAgent = {
      name: 'Test Agent',
      // other agent properties...
    };
    const res = await request(app).post('/agents').send(newAgent);
    expect(res.status).to.equal(201);
    expect(res.body).to.be.an('object');
    expect(res.body.name).to.equal(newAgent.name);
  });

  it('should update an agent', async () => {
    const updatedAgent = {
      name: 'Updated Test Agent',
      // other updated agent properties...
    };
    const res = await request(app).put('/agents/1').send(updatedAgent);
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an('object');
    expect(res.body.name).to.equal(updatedAgent.name);
  });

  it('should delete an agent', async () => {
    const res = await request(app).delete('/agents/1');
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an('object');
    expect(res.body.message).to.equal('Agent deleted successfully');
  });
});