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


export async function putrequest(urlpost: string, data: any): Promise<any> {
  try {
    const responseput = await superagent
      .put(urlpost)
      .set('Content-Type', 'application/json')
      .send(data);
    return responseput;
  } catch (err: any) {
    return err;
  }
} 


export async function patchequest(urlpost: string, data: any): Promise<any> {
  try {
    const responsepatch = await superagent
      .patch(urlpost)
      .set('Content-Type', 'application/json')
      .send(data);
    return responsepatch;
  } catch (err: any) {
    return err;
  }
}

export async function deletequest(urlpost: string): Promise<any> {
  try {
    const responsedelete = await superagent.delete(urlpost);
    return responsedelete;
  } catch (err: any) {
    return err;
  }
}
