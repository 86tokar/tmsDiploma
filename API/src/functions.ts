import superagent from 'superagent';

export async function getrequest(urlget: string): Promise<any> {
  try {
    const responseget = await superagent.get(urlget);
    return responseget;
  } catch (err: any) {
    return err;
  }
}

export async function postrequest(urlpost: string, data: any): Promise<any> {
  try {
    const responsepost = await superagent
      .post(urlpost)
      .set('Content-Type', 'application/json')
      .send(data);
    return responsepost;
  } catch (err: any) {
    return err;
  }
}
