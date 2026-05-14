import { ConflictException } from '@nestjs/common';

export async function ensureUniqueness<Type, Value>(
  finder: (value: Value) => Promise<Type | null>,
  value: Value,
  fieldName: string,
): Promise<void> {
  if (value === undefined || value === null) return;

  const entity = await finder(value);

  if (entity) {
    throw new ConflictException(`${fieldName} déjà utilisé`);
  }
}
