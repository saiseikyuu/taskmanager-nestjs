// Define TaskStatus enum here if not exported by @prisma/client
export enum TaskStatus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}

export class UpdateTaskDto {
  title?: string;
  description?: string;
  status?: TaskStatus;
}
