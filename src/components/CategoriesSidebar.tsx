import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroupContent,
} from '@/components/ui/sidebar';
import Link from 'next/link';
import { getCategories } from '@/lib/api/categories';

export default async function CategoriesSidebar() {
  const categories = await getCategories();

  return (
    <Sidebar className="h-[calc(100vh-88px)] top-[88px] border-r">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="mb-2.5">Categories</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {categories.map((category: string) => (
                <SidebarMenuItem key={category} className="capitalize">
                  <SidebarMenuButton asChild>
                    <Link href={`/products/${category}`}>{category.replace(/-/g, ' ')}</Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
