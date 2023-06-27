import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(
  firstName,
  lastName,
  fileName
) {
  const data = await Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]);

  const ret = [];

  for (const elt of data) {
    ret.push({
      status: elt.status,
      value:  elt.value || `Error: ${elt.reason.message}`,
    });
  }

  return ret;
}
