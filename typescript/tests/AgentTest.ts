import { Agent } from '../src/Agent';
import { expect } from 'chai';
import 'mocha';

describe('Agent', () => {
  let agent: Agent;

  beforeEach(() => {
    agent = new Agent();
  });

  it('should be able to create an instance', () => {
    expect(agent).to.be.instanceOf(Agent);
  });

  // Add more tests as per the methods and properties in the Agent class
});