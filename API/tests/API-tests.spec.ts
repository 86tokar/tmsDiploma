import { getrequest } from '../src/functions';
import { expectedObjForGet, expectedObjForGet2 } from '../src/constants';

describe('get api requests', function () {
  it('get request1', async function () {
    const response = await getrequest(
      'https://jsonplaceholder.typicode.com/posts/1'
    );
    expect(response.status).toBe(200);
    expect(response.body).toEqual(expectedObjForGet);
  });

  it('get request2', async function () {
    const response = await getrequest(
      'https://jsonplaceholder.typicode.com/posts/1'
    );
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('userId');
    expect(response.body).toHaveProperty('id');
    expect(response.body).toHaveProperty('title');
    expect(response.body).toHaveProperty('body');
  });

  it('get request3', async function () {
    const response = await getrequest(
      'https://jsonplaceholder.typicode.com/posts'
    );
    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toBe(
      'application/json; charset=utf-8'
    );
  });

  it('get request4', async function () {
    const response = await getrequest(
      'https://jsonplaceholder.typicode.com/comments?postId=1&id=1'
    );
    expect(response.status).toBe(200);
    expect(response.body[0]).toEqual(expectedObjForGet2);
  });

  it('get request5', async function () {
    const response = await getrequest(
      'https://jsonplaceholder.typicode.com/posts/1/comments'
    );
    expect(response.status).toBe(200);
    expect(response.body.length).toBe(5);
  });
});
