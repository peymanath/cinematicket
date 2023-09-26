import UserProfile from '@/Services/User/UserProfile';
import { cookies } from 'next/headers';
import { Role } from '@/Enum/Role';
import jwtDecode from 'jwt-decode';
import { UserData } from '@/Types/Services';
import AdminGetProfile from '@/Services/Admin/AdminGetProfile';

export default async function checkRole(): Promise<Role> {
  const cookiesList = cookies();

  const cookie = cookiesList.get('authToken');

  if (cookiesList.has('authToken') && cookie) {
    const { id, permissions } = jwtDecode(cookie?.value) as UserData;

    try {
      let data: any | null = null;

      if (permissions.length === 0) {
        data = await UserProfile({
          Cookie: `${cookie?.name}=${cookie?.value};`,
        });
      } else {
        data = await AdminGetProfile({
          id,
          headers: {
            Cookie: `${cookie?.name}=${cookie?.value};`,
          },
        });
      }
      return data.data ? (permissions.length === 0 ? Role.USER : Role.ADMIN) : Role.GLOBAL;
    } catch (err: any) {
      console.log(err?.response.data);
      return Role.GLOBAL;
    }
  } else {
    return Role.GLOBAL;
  }
}
