export const projects = [];

class PortfolioPieces {
    constructor(
      projectType='web', 
      projectTitle='default Project', 
      projectDescription='None',
      projectDescriptionLong='None',
      projectWork=[], 
      projectLink='#',
      linkToProject=''
    
    ) 
      {
    this.projectId = idCount++;
      this.projectType = projectType;
      this.projectTitle = projectTitle;
      this.projectDescription = projectDescription;
      this.projectDescriptionLong = projectDescriptionLong;
      this.projectWork = projectWork;
      this.projectLink = projectLink;
      this.linkToProject = linkToProject;
      projects.push(this);
    }
  }

  let idCount = 0;


const baltasKadras = new PortfolioPieces(
  'web', 
  'Baltas Kadras',
  'Sexy commercial photography is best way to sell any product..',

    'Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC'+
    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque'+
    ' laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi'+
    ' architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas'+
    ' sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione '+
    'voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,'+
    ' consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore'+ 
    'et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum '+
    'exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?'+
    ' Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae'+
    ' consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"',

  ['1.Stuff I did.','2.Stuff I did not.', '3.sgdfhdhrgwagsgsh gshsh esh sh rh d agad se sg esg esgjs '],
  'baltas-kadras-webpage',
  'baltaskadras.lt'
);
const antresoles = new PortfolioPieces(
  'web', 
  'Antresoles.lt',
  'Construction work page redisign',

  'Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC'+
  'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque'+
  ' laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi'+
  ' architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas'+
  ' sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione '+
  'voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,'+
  ' consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore'+ 
  'et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum '+
  'exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?'+
  ' Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae'+
  ' consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"',

  ['1.Stuff I did.','2.Stuff I did not.', '3.sgdfhdhrgwagsgsh gshsh esh sh rh d agad se sg esg esgjs '],

  'antresoles-webpage',
  'antresoles.lt'
);
const armenia = new PortfolioPieces(
  'photography', 
  'Georgia - Armenia',
  'Documenting the journey through Georgia and Armenia',

  'Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC'+
  'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque'+
  ' laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi'+
  ' architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas'+
  ' sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione '+
  'voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,'+
  ' consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore'+ 
  'et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum '+
  'exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?'+
  ' Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae'+
  ' consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"',

  ['1.Stuff I did.','2.Stuff I did not.', '3.sgdfhdhrgwagsgsh gshsh esh sh rh d agad se sg esg esgjs '],

  'armenia-photo'
);
const arverro = new PortfolioPieces(
  'web', 
  'Arverro Blog',
  'Blog website and template mde for Wordpress',

  'Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC'+
  'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque'+
  ' laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi'+
  ' architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas'+
  ' sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione '+
  'voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,'+
  ' consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore'+ 
  'et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum '+
  'exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?'+
  ' Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae'+
  ' consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"',

  ['1.Stuff I did.','2.Stuff I did not.', '3.sgdfhdhrgwagsgsh gshsh esh sh rh d agad se sg esg esgjs '],

  'arverro-webpage',
  'arverro.com'
);
const fluffy = new PortfolioPieces(
  'weekend projects', 
  'Fluffyy',
  'Game brewed during 2016 GameJam in Kaunas',

  'Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC'+
  'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque'+
  ' laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi'+
  ' architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas'+
  ' sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione '+
  'voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,'+
  ' consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore'+ 
  'et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum '+
  'exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?'+
  ' Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae'+
  ' consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"',

  ['1.Stuff I did.','2.Stuff I did not.', '3.sgdfhdhrgwagsgsh gshsh esh sh rh d agad se sg esg esgjs '],

  'fluffy-game',
  'globalgamejam.org/2017/games/fluffy'
);


export default PortfolioPieces;