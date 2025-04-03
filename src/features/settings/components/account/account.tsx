import { SidebarItem } from '@/components/shared/sidebar-dialog';

interface AccountProps {
    item: SidebarItem;
}

export default function Account({ item }: AccountProps) {
    return <div>{item.name}</div>;
}
