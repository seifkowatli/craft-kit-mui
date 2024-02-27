import { GenericEntry } from './partials';

export const entityViewRenderer = (entityKey, entity) =>
  entity.map((entry, index) => (
    <GenericEntry
      key={`${entityKey}-${entry.name}-${index}`}
      {...entry}
      entryKey={`${entityKey}.${entry.name}`}
    />
  ));
