import { AccordionContent, AccordionItem, AccordionTrigger } from '@/registry/new-york-v4/ui/accordion';
import { Card } from '@/registry/new-york-v4/ui/card';

export type SidebarAccordionItemProps = {
    id: string;
    title: string;
    children: React.ReactNode;
};

export default function SidebarAccordionItem({ id, title, children }: SidebarAccordionItemProps) {
    return (
        <Card className='rounded-md p-0'>
            <AccordionItem value={id}>
                <AccordionTrigger className='cursor-pointer p-5 hover:no-underline'>{title}</AccordionTrigger>
                <AccordionContent className='border-t'>{children}</AccordionContent>
            </AccordionItem>
        </Card>
    );
}
