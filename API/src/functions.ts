import superagent from 'superagent';


export async function getrequest(urlget: string): Promise<any> {
  try {
    const responseget = await superagent.get(urlget);
    return responseget;
  } catch (err: any) {
    return err;
  }
}