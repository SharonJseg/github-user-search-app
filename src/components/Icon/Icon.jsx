// import Location from './Location';
import Company from './Company';
import Location from './Location';
import Moon from './Moon';
import Sun from './Sun';
import Search from './Search';
import Twitter from './Twitter';
import Website from './Website';

const Icon = (props) => {
  switch (props.name.toLowerCase()) {
    case 'company':
      return <Company {...props} />;
    case 'location':
      return <Location {...props} />;
    case 'moon':
      return <Moon {...props} />;
    case 'sun':
      return <Sun {...props} />;
    case 'search':
      return <Search {...props} />;
    case 'twitter':
      return <Twitter {...props} />;
    case 'website':
      return <Website {...props} />;
    default:
      return <div />;
  }
};

export default Icon;
