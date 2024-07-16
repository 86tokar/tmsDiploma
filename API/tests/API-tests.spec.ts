import { getrequest, postrequest } from '../src/functions';
import { expectedObjForGet, expectedObjForGet2 } from '../src/constants';

describe('GET api requests', function () {
  it('GET request1', async function () {
    const response = await getrequest(
      'https://jsonplaceholder.typicode.com/posts/1'
    );
    expect(response.status).toBe(200);
    expect(response.body).toEqual(expectedObjForGet);
  });

  it('GET request2', async function () {
    const response = await getrequest(
      'https://jsonplaceholder.typicode.com/posts/1'
    );
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('userId');
    expect(response.body).toHaveProperty('id');
    expect(response.body).toHaveProperty('title');
    expect(response.body).toHaveProperty('body');
  });

  it('GET request3', async function () {
    const response = await getrequest(
      'https://jsonplaceholder.typicode.com/posts'
    );
    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toBe(
      'application/json; charset=utf-8'
    );
  });

  it('GET request4', async function () {
    const response = await getrequest(
      'https://jsonplaceholder.typicode.com/comments?postId=1&id=1'
    );
    expect(response.status).toBe(200);
    expect(response.body[0]).toEqual(expectedObjForGet2);
  });

  it('GET request5', async function () {
    const response = await getrequest(
      'https://jsonplaceholder.typicode.com/posts/1/comments'
    );
    expect(response.status).toBe(200);
    expect(response.body.length).toBe(5);
  });
});
//////////////////-------------- POST---------------///////////////////////////

describe('POST api requests', function () {

  it('POST request1', async function () {
    const postData = {
      userId: 10,
      id: 101,
      title: 'test title',
      body: 'test body',
    };
    const response = await postrequest(
      'https://jsonplaceholder.typicode.com/posts',
      postData
    );
    expect(response.status).toBe(201);
    expect(response.body).toEqual(postData);
  });

  it('POST request2', async function () {
    const postData = {
      userId: 1,
      id: 101,
      title: 'test title2',
      body: 'test body2',
    };
    const response = await postrequest(
      'https://jsonplaceholder.typicode.com/posts',
      postData
    );
    expect(response.status).toBe(201);
    expect(response.body.title).toEqual(postData.title);
  });

  it('POST request3', async function () {
    const postData = {};
    const response = await postrequest(
      'https://jsonplaceholder.typicode.com/posts',
      postData
    );
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
  });

  it('POST request4', async function () {
    const postData = {
      userId: 4,
      id: 0,
      title: 'test title4',
    };
    const response = await postrequest(
      'https://jsonplaceholder.typicode.com/posts',
      postData
    );
    expect(response.status).toBe(201);
    expect(response.body.title.length).toBe(11);
  });

  it('POST request5', async function () {
    const postData = {
      userId: 7,
      id: 101,
      title: 'test title5',
    };
    const response = await postrequest(
      'https://jsonplaceholder.typicode.com/posts',
      postData
    );
    expect(response.status).toBe(201);
    expect(response.headers['content-type']).toBe(
      'application/json; charset=utf-8'
    ); 
  });
});

//////////////////-------------- PUT ---------------///////////////////////////

describe('PUT api requests', function () {
  it('POST request1', async function () {
    const postData = {
      userId: 10,
      id: 101,
      title: 'test title',
      body: 'test body',
    };
    const response = await postrequest(
      'https://jsonplaceholder.typicode.com/posts',
      postData
    );
    expect(response.status).toBe(201);
    expect(response.body).toEqual(postData);
  });

  
});
