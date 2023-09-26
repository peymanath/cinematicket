import { Http } from '../HttpConfig';
import { AdminGetProfileRequest, AdminGetProfileResponse } from '@/Types/Services';

const AdminGetProfile = async ({ id, headers = {} }: AdminGetProfileRequest) => {
  return await Http.get<AdminGetProfileResponse>(`/admin/profile/${id}`, {
    headers: { ...headers },
  });
};

export default AdminGetProfile;
