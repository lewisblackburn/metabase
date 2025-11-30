// import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
// import { Badge } from '@/components/ui/badge'
// import {
//     Audit_Logs,
//     AuditLogsDocument,
//     AuditLogsQuery,
//     AuditLogsQueryVariables,
// } from '@/generated/graphql'
// import type { AuditLogDifference } from '@/lib/helpers/audit-log-helpers'
// import { createNhostClient } from '@/lib/nhost/server'
//
// // TODO: Make this a table in hasura
// // TODO: How can we deal with links?
// enum ActivityField {
//     RATING = 'rating',
//     COMMENT = 'comment',
//     STATUS = 'status',
// }
//
// export default async function UserActivity() {
//     const nhost = await createNhostClient()
//     const session = nhost.getUserSession()
//     const userId = session?.user?.id
//
//     // TODO: Enable pagination for user activities
//     const userActivity = await nhost.graphql.request<AuditLogsQuery, AuditLogsQueryVariables>(
//         AuditLogsDocument,
//         {
//             where: {
//                 _and: [
//                     {
//                         user_id: { _eq: userId },
//                     },
//                     {
//                         type: {
//                             _eq: AuditLogTypes.ACTIVITY,
//                         },
//                     },
//                 ],
//             },
//             order_by: {
//                 created_at: 'desc',
//             },
//         },
//     )
//
//     return (
//         <div className="flex flex-col gap-2">
//             {userActivity.body.data?.audit_logs.map(auditLog => (
//                 <ActivityItem key={auditLog.id} auditLog={auditLog} />
//             ))}
//         </div>
//     )
// }
//
// const ActivityItem = ({ auditLog }: { auditLog: AuditLogsQuery['audit_logs'][number] }) => {
//     if (!auditLog.user || !auditLog.difference) return null
//     const differenceRecord = auditLog.difference as AuditLogDifference
//     const user = auditLog.user
//
//     return (
//         <>
//             {Object.entries(differenceRecord)
//                 .filter(([key]) => Object.values(ActivityField).includes(key as ActivityField))
//                 .map(([key, change]) => (
//                     <ActivityFieldItem
//                         key={key}
//                         field={key as ActivityField}
//                         meta={auditLog.meta}
//                         change={change}
//                         user={user}
//                     />
//                 ))}
//         </>
//     )
// }
//
// const ActivityFieldItem = ({
//     field,
//     meta,
//     change,
//     user,
// }: {
//     field: ActivityField
//     meta: Audit_Logs['meta']
//     change: AuditLogDifference[string]
//     user: NonNullable<AuditLogsQuery['audit_logs'][number]['user']>
// }) => {
//     switch (field) {
//         case ActivityField.RATING:
//             return <ActivityRatingItem meta={meta} change={change} user={user} />
//         case ActivityField.COMMENT:
//             return <ActivityCommentItem meta={meta} change={change} user={user} />
//         case ActivityField.STATUS:
//             return <ActivityStatusItem meta={meta} change={change} user={user} />
//         default:
//             return null
//     }
// }
//
// const ActivityUser = ({
//     user,
// }: {
//     user: NonNullable<AuditLogsQuery['audit_logs'][number]['user']>
// }) => {
//     if (!user) return null
//
//     return (
//         <div className="flex items-center gap-2">
//             <Avatar className="size-5">
//                 <AvatarImage src={user.avatarUrl} />
//                 <AvatarFallback>{user.displayName.charAt(0)}</AvatarFallback>
//             </Avatar>
//             <span className="font-medium">{user.displayName}</span>
//         </div>
//     )
// }
//
// const ActivityRatingItem = ({
//     meta,
//     change,
//     user,
// }: {
//     meta: Audit_Logs['meta']
//     change: AuditLogDifference[string]
//     user: NonNullable<AuditLogsQuery['audit_logs'][number]['user']>
// }) => {
//     return (
//         <div className="flex items-center gap-1">
//             <ActivityUser user={user} />
//             <span>rated</span>
//             <ActivityBadge>{meta.title}</ActivityBadge>
//             <span>{JSON.stringify(change.new)}</span>
//             {/* TODO: Create a stars component to render stars from number */}
//             <span>stars</span>
//         </div>
//     )
// }
//
// const ActivityCommentItem = ({
//     meta,
//     change,
//     user,
// }: {
//     meta: Audit_Logs['meta']
//     change: AuditLogDifference[string]
//     user: NonNullable<AuditLogsQuery['audit_logs'][number]['user']>
// }) => {
//     if (change.old == null) {
//         return (
//             <div className="flex items-center gap-1">
//                 <ActivityUser user={user} />
//                 <span>added a review for </span>
//                 <ActivityBadge>{meta.title}</ActivityBadge>
//             </div>
//         )
//     }
//
//     return (
//         <div className="flex items-center gap-1">
//             <ActivityUser user={user} />
//             <span>Updated a review for </span>
//             <ActivityBadge>{meta.title}</ActivityBadge>
//         </div>
//     )
// }
//
// const ActivityStatusItem = ({
//     meta,
//     change,
//     user,
// }: {
//     meta: Audit_Logs['meta']
//     change: AuditLogDifference[string]
//     user: NonNullable<AuditLogsQuery['audit_logs'][number]['user']>
// }) => {
//     if (change.old == null) {
//         return (
//             <div className="flex items-center gap-1">
//                 <ActivityUser user={user} />
//                 <span>added status {JSON.stringify(change.new)} to </span>
//                 <ActivityBadge>{meta.title}</ActivityBadge>
//             </div>
//         )
//     }
//
//     return (
//         <div className="flex items-center gap-1">
//             <ActivityUser user={user} />
//             <span>changed status of</span>
//             <ActivityBadge>{meta.title}</ActivityBadge>
//             <span>
//                 from {JSON.stringify(change.old)} to {JSON.stringify(change.new)}
//             </span>
//         </div>
//     )
// }
//
// const ActivityBadge = ({ children }: { children: React.ReactNode }) => {
//     return (
//         <Badge variant="secondary" className="rounded-xs">
//             {children}
//         </Badge>
//     )
// }
