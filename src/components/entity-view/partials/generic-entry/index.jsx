import LinkEntry from '../link-entry';
import TagsEntry from '../tags-entry';
import TextEntry from '../text-entry';

const GenericEntry = ({ type, ...rest }) => {
  switch (type) {
    case 'tags':
      return <TagsEntry {...rest} />;
    case 'link':
      return <LinkEntry {...rest} />;
    default:
      return <TextEntry {...rest} />;
  }
};

export default GenericEntry;
