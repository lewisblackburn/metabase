/**
 * @deprecated Use hooks from '@/lib/providers/breadcrumbs-provider' instead:
 * - useBreadcrumbsValue() to get breadcrumbs
 * - useBreadcrumbs(labels) to set custom labels for UUIDs
 */
export { type Breadcrumb, useBreadcrumbs as default } from '@/lib/providers/breadcrumbs-provider'
