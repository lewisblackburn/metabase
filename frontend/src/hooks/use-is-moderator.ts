import { useUserRoles } from '@nhost/nextjs';

export function useIsModerator() {
    const roles = useUserRoles();
    return roles.includes('moderator');
}
