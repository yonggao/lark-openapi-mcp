/**
 * Commonly used tools in MCP
 */

import { ToolName } from './tools';

export enum PresetName {
  /**
   * Default preset including IM, Bitable, Doc and Contact tools
   */
  LIGHT = 'preset.light',
  /**
   * Default preset including IM, Bitable, Doc and Contact tools
   */
  DEFAULT = 'preset.default',
  /**
   * IM related tools for chat and message operations
   */
  IM_DEFAULT = 'preset.im.default',
  /**
   * Base preset for base operations
   */
  BASE_DEFAULT = 'preset.base.default',
  /**
   * Base tools with batch operations
   */
  BASE_BATCH = 'preset.base.batch',
  /**
   * Document related tools for content and permission operations
   */
  DOC_DEFAULT = 'preset.doc.default',
  /**
   * Task management related tools
   */
  TASK_DEFAULT = 'preset.task.default',
  /**
   * Calendar event management tools
   */
  CALENDAR_DEFAULT = 'preset.calendar.default',
}

export const presetLightToolNames: ToolName[] = [
  'im.v1.message.list',
  'im.v1.message.create',
  'im.v1.chat.search',
  'contact.v3.user.batchGetId',
  'docx.v1.document.rawContent',
  'docx.builtin.import',
  'docx.builtin.search',
  'wiki.v2.space.getNode',
  'bitable.v1.appTableRecord.search',
  'bitable.v1.appTableRecord.batchCreate',
];

export const presetContactToolNames: ToolName[] = ['contact.v3.user.batchGetId'];

export const presetImToolNames: ToolName[] = [
  'im.v1.chat.create',
  'im.v1.chat.list',
  'im.v1.chatMembers.get',
  'im.v1.message.create',
  'im.v1.message.list',
];

export const presetBaseCommonToolNames: ToolName[] = [
  'bitable.v1.app.create',
  'bitable.v1.appTable.create',
  'bitable.v1.appTable.list',
  'bitable.v1.appTableField.list',
  'bitable.v1.appTableRecord.search',
];

export const presetBaseToolNames: ToolName[] = [
  ...presetBaseCommonToolNames,
  'bitable.v1.appTableRecord.create',
  'bitable.v1.appTableRecord.update',
];

export const presetBaseRecordBatchToolNames: ToolName[] = [
  ...presetBaseCommonToolNames,
  'bitable.v1.appTableRecord.batchCreate',
  'bitable.v1.appTableRecord.batchUpdate',
];

export const presetDocToolNames: ToolName[] = [
  'docx.v1.document.rawContent',
  'docx.builtin.import',
  'docx.builtin.search',
  'drive.v1.permissionMember.create',
  'wiki.v2.space.getNode',
  'wiki.v1.node.search',
];

export const presetTaskToolNames: ToolName[] = [
  // Task CRUD
  'task.v2.task.create',
  'task.v2.task.get',
  'task.v2.task.list',
  'task.v2.task.patch',
  'task.v2.task.delete',
  // Task members and reminders
  'task.v2.task.addMembers',
  'task.v2.task.removeMembers',
  'task.v2.task.addReminders',
  'task.v2.task.removeReminders',
  // Tasklist management
  'task.v2.tasklist.create',
  'task.v2.tasklist.get',
  'task.v2.tasklist.list',
  'task.v2.tasklist.patch',
  'task.v2.tasklist.tasks',
  // Subtasks
  'task.v2.taskSubtask.create',
  'task.v2.taskSubtask.list',
  // Comments
  'task.v2.comment.create',
  'task.v2.comment.list',
];

export const presetCalendarToolNames: ToolName[] = [
  // Calendar management
  'calendar.v4.calendar.primary',
  'calendar.v4.calendar.get',
  'calendar.v4.calendar.list',
  'calendar.v4.calendar.search',
  // Calendar events CRUD
  'calendar.v4.calendarEvent.create',
  'calendar.v4.calendarEvent.get',
  'calendar.v4.calendarEvent.list',
  'calendar.v4.calendarEvent.patch',
  'calendar.v4.calendarEvent.delete',
  'calendar.v4.calendarEvent.search',
  // Event attendees
  'calendar.v4.calendarEventAttendee.create',
  'calendar.v4.calendarEventAttendee.list',
  // Free/busy
  'calendar.v4.freebusy.list',
];

export const defaultToolNames: ToolName[] = [
  ...presetImToolNames,
  ...presetBaseToolNames,
  ...presetDocToolNames,
  ...presetContactToolNames,
  ...presetTaskToolNames,
  ...presetCalendarToolNames,
];

export const presetTools: Record<PresetName, ToolName[]> = {
  [PresetName.LIGHT]: presetLightToolNames,
  [PresetName.DEFAULT]: defaultToolNames,
  [PresetName.IM_DEFAULT]: presetImToolNames,
  [PresetName.BASE_DEFAULT]: presetBaseToolNames,
  [PresetName.BASE_BATCH]: presetBaseRecordBatchToolNames,
  [PresetName.DOC_DEFAULT]: presetDocToolNames,
  [PresetName.TASK_DEFAULT]: presetTaskToolNames,
  [PresetName.CALENDAR_DEFAULT]: presetCalendarToolNames,
};
